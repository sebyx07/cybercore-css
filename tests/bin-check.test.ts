import { spawnSync } from 'node:child_process';
import {
  chmodSync,
  copyFileSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

const dirs: string[] = [];

afterEach(() => {
  for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true });
});

function runGate(mode: string[] = [], failure = '', pipx = false, docker = true) {
  const root = realpathSync(mkdtempSync(join(tmpdir(), 'cyber-check+[fixture]-')));
  dirs.push(root);
  const tools = join(root, 'tools');
  mkdirSync(tools);
  mkdirSync(join(root, 'bin'));
  mkdirSync(join(root, 'node_modules'));
  copyFileSync('bin/check', join(root, 'bin/check'));
  copyFileSync('bin/_dx.sh', join(root, 'bin/_dx.sh'));
  writeFileSync(join(root, '.nvmrc'), '24\n');
  writeFileSync(join(root, 'node_modules/.package-lock.json'), '');
  const log = join(root, 'calls');
  for (const command of ['dirname', 'tr', 'grep', 'sed', 'id']) {
    symlinkSync(`/usr/bin/${command}`, join(tools, command));
  }
  const stub = (path: string, body: string) => {
    writeFileSync(path, `#!/bin/bash\n${body}\n`);
    chmodSync(path, 0o755);
  };
  stub(join(tools, 'node'), 'echo 24.0.0');
  const record =
    'echo "$(basename "$0") $*" >> "$LOG"\ncase "$*" in *"$FAIL"*) [ -z "$FAIL" ] || exit 42;; esac\nexit 0';
  symlinkSync('/usr/bin/basename', join(tools, 'basename'));
  for (const command of ['npm', 'npx', ...(docker ? ['docker'] : []), ...(pipx ? ['pipx'] : [])]) {
    stub(join(tools, command), record);
  }
  for (const command of ['repo-guards', 'docs-check']) stub(join(root, 'bin', command), record);
  writeFileSync(join(root, 'sample.md'), 'sample');
  const result = spawnSync('/bin/bash', [join(root, 'bin/check'), ...mode], {
    cwd: root,
    encoding: 'utf8',
    env: { PATH: tools, HOME: root, LOG: log, FAIL: failure },
  });
  return { result, root, calls: existsSync(log) ? readFileSync(log, 'utf8') : '' };
}

describe('bin/check gate', () => {
  it('runs every full gate with Docker zizmor when pipx is absent', () => {
    const { result, root, calls } = runGate();
    const escapedRoot = root.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    expect(result.status, result.stderr).toBe(0);
    expect(calls.split('\n')).toEqual([
      'docker info',
      'repo-guards ',
      ...[
        'lint',
        'format:check',
        'typecheck',
        'test',
        'validate:icons',
        'build',
        'check:size',
        'check:package',
      ].map((script) => `npm run --silent ${script}`),
      'docs-check ',
      expect.stringMatching(
        new RegExp(
          `^docker run --rm -v ${escapedRoot}:/repo:ro -w /repo rhysd/actionlint:1\\.7\\.12@sha256:[a-f0-9]{64} -color$`
        )
      ),
      expect.stringMatching(
        new RegExp(
          `^docker run --rm --user [0-9]+:[0-9]+ -e HOME=/tmp -v ${escapedRoot}:/repo:ro -w /repo ghcr\\.io/zizmorcore/zizmor:1\\.33\\.1@sha256:[a-f0-9]{64} --format=github \\.github/workflows$`
        )
      ),
      'npm audit --audit-level=low',
      'npm run --silent test:visual',
      '',
    ]);
  });

  it('uses the CI pipx invocation when available', () => {
    const { result, calls } = runGate([], '', true);
    expect(result.status).toBe(0);
    expect(calls).toContain('pipx run zizmor==1.33.1 --format=github .github/workflows');
    expect(calls).not.toContain('ghcr.io/zizmorcore/zizmor');
  });

  it.each([
    'rhysd/actionlint',
    'ghcr.io/zizmorcore/zizmor',
    'audit --audit-level=low',
    'test:visual',
  ])('propagates a failed %s check', (failure) => {
    const { result } = runGate([], failure);
    expect(result.status).toBe(1);
    expect(result.stdout).toContain('FAILED');
    expect(result.stdout).toContain(failure);
  });

  it('reports an unavailable Docker daemon before running any checks', () => {
    const { result, calls } = runGate([], 'info');
    expect(result.status).toBe(75);
    expect(result.stderr).toContain('docker');
    expect(calls).toBe('docker info\n');
  });

  it('keeps fast and files tiers scoped', () => {
    const fast = runGate(['fast'], '', false, false);
    expect(fast.result.status).toBe(0);
    expect(fast.calls).toBe('repo-guards \nnpm run --silent lint:css\nnpm run --silent test\n');
    const files = runGate(['files', 'sample.md'], '', false, false);
    expect(files.result.status).toBe(0);
    expect(files.calls).toBe(
      'npx --no-install prettier --check --ignore-unknown sample.md\nnpx --no-install vitest related --run --passWithNoTests sample.md\n'
    );
  });
});
