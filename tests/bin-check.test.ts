import { spawnSync } from 'node:child_process';
import {
  chmodSync,
  copyFileSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
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

function runGate(mode: string[] = [], failure = '', pipx = false) {
  const root = mkdtempSync(join(tmpdir(), 'cyber-check-'));
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
  for (const command of ['dirname', 'tr', 'grep', 'sed']) {
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
  for (const command of ['npm', 'npx', 'docker', ...(pipx ? ['pipx'] : [])]) {
    stub(join(tools, command), record);
  }
  for (const command of ['repo-guards', 'docs-check']) stub(join(root, 'bin', command), record);
  writeFileSync(join(root, 'sample.md'), 'sample');
  const result = spawnSync('/bin/bash', [join(root, 'bin/check'), ...mode], {
    cwd: root,
    encoding: 'utf8',
    env: { PATH: tools, HOME: root, LOG: log, FAIL: failure },
  });
  return { result, calls: readFileSync(log, 'utf8') };
}

describe('bin/check gate', () => {
  it('runs every full gate with Docker zizmor when pipx is absent', () => {
    const { result, calls } = runGate();
    expect(result.status, result.stderr).toBe(0);
    for (const script of [
      'lint',
      'format:check',
      'typecheck',
      'test',
      'validate:icons',
      'build',
      'check:size',
      'check:package',
    ]) {
      expect(calls).toContain(`npm run --silent ${script}\n`);
    }
    expect(calls).toContain('repo-guards ');
    expect(calls).toContain('docs-check ');
    expect(calls).toContain('rhysd/actionlint:1.7.12 -color');
    expect(calls).toContain('ghcr.io/zizmorcore/zizmor:1.33.1 --format=github .github/workflows');
    expect(calls).toContain('npm audit --audit-level=low');
    expect(calls).toContain('npm run --silent test:visual');
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

  it('keeps fast and files tiers scoped', () => {
    const fast = runGate(['fast']);
    expect(fast.result.status).toBe(0);
    expect(fast.calls).toContain('npm run --silent lint:css');
    expect(fast.calls).toContain('npm run --silent test');
    expect(fast.calls).not.toContain('docker ');
    expect(fast.calls).not.toContain('audit');
    const files = runGate(['files', 'sample.md']);
    expect(files.result.status).toBe(0);
    expect(files.calls).toContain('npx --no-install prettier --check --ignore-unknown sample.md');
    expect(files.calls).toContain(
      'npx --no-install vitest related --run --passWithNoTests sample.md'
    );
    expect(files.calls).not.toContain('docker ');
    expect(files.calls).not.toContain('npm ');
  });
});
