import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const check = readFileSync('bin/check', 'utf8');
const guards = readFileSync('bin/repo-guards', 'utf8');
const parity = guards.match(/^# These commands[^\n]*\n([\s\S]+?)^# steps <array name>/m)?.[1];
if (!parity) {
  throw new Error('Could not locate the full-tier parity guard');
}

const zizmorImage =
  'ghcr.io/zizmorcore/zizmor:1.33.1@sha256:ecd3ffe6158de1322e05a044ed43749bee12b1dccb7e1a7859bc6ac4b2a1c516';

function runParity(source: string): string {
  const dir = mkdtempSync(join(tmpdir(), 'cybercore-parity-'));
  try {
    mkdirSync(join(dir, 'bin'));
    writeFileSync(join(dir, 'bin/check'), source);
    return execFileSync(
      'bash',
      [
        '-c',
        `set -uo pipefail
uncommented() { grep -vE '^[[:space:]]*#' "$1"; }
fail() { printf 'FAIL: %s\\n%s\\n' "$1" "$2"; }
${parity}`,
      ],
      { cwd: dir, encoding: 'utf8' }
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

describe('full gate parity', () => {
  it('accepts the actual commands, including the quoted Docker mounts', () => {
    expect(runParity(check)).toBe('');
  });

  for (const name of ['actionlint', 'zizmor', 'audit', 'visual']) {
    it(`rejects ${name} when removed or moved outside the full tier`, () => {
      const line = check
        .split('\n')
        .find((entry) => entry.trimStart().startsWith(`run_step ${name} `));
      if (!line) {
        throw new Error(`Could not locate the ${name} command in bin/check`);
      }
      const missing = `bin/check full tier is missing a required CI gate: ${name}`;
      const removed = check.replace(line, '');
      expect(runParity(removed)).toContain(missing);
      expect(runParity(check.replace(line, `    # ${line.trim()}`))).toContain(missing);
      expect(runParity(removed.replace('  fast)\n', `  fast)\n${line}\n`))).toContain(missing);
    });
  }
});

// Isolate check's dispatch and failure handling from Node setup, installs and the Docker daemon.
function runCheck(failure = '') {
  const dir = mkdtempSync(join(tmpdir(), 'cybercore check-'));
  try {
    mkdirSync(join(dir, 'bin'));
    const write = (name: string, body: string) => {
      writeFileSync(join(dir, 'bin', name), `#!/bin/bash\n${body}\n`, { mode: 0o755 });
    };
    writeFileSync(join(dir, 'bin/check'), check);
    const helpers = `ROOT=$PWD
use_node() { :; }
require_deps() { :; }
env_missing() { printf '%s\\n' "$1" >&2; exit 75; }
step() { :; }
ok() { :; }`;
    const docker = `if [ "$1" = info ]; then exit 0; fi
printf 'docker argument: <%s>\\n' "$@"
case "$*" in
  *ghcr.io/zizmorcore/zizmor:*) [ "$FAILURE" != zizmor ] || exit 14 ;;
esac`;
    const npm = `printf 'npm command: %s\\n' "$*"
[ "$*" != 'run --silent build' ] || [ "$FAILURE" != build ]`;
    write('_dx.sh', helpers);
    write('dirname', 'printf "%s\\n" "${1%/*}"');
    write('id', 'case "$1" in -u) echo 1001 ;; -g) echo 1002 ;; *) exit 2 ;; esac');
    write('repo-guards', 'exit 0');
    write('docs-check', 'exit 0');
    write('docker', docker);
    write('npm', npm);
    const result = spawnSync('/bin/bash', ['bin/check'], {
      cwd: dir,
      encoding: 'utf8',
      env: { PATH: join(dir, 'bin'), FAILURE: failure },
    });
    if (result.error) {
      throw result.error;
    }
    return { ...result, dir: realpathSync(dir) };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

describe('full gate dispatch without host pipx', () => {
  it('runs the pinned zizmor command and visual after build', () => {
    const { dir, status, stdout, stderr } = runCheck();
    expect(status, stderr).toBe(0);
    const args = [
      'run',
      '--rm',
      '--user',
      '1001:1002',
      '-e',
      'HOME=/tmp',
      '-v',
      `${dir}:/repo:ro`,
      '-w',
      '/repo',
      zizmorImage,
      '--format=github',
      '.github/workflows',
    ];
    expect(stdout).toContain(args.map((arg) => `docker argument: <${arg}>`).join('\n'));
    expect(stdout).toMatch(
      /npm command: run --silent build\n[\s\S]*npm command: run --silent test:visual/
    );
  });

  it('fails on zizmor findings and still runs audit and visual', () => {
    const { status, stdout, stderr } = runCheck('zizmor');
    expect(status, stderr).toBe(1);
    expect(stdout).toContain('zizmor (exit 14)');
    expect(stdout).toContain('npm command: audit --audit-level=low');
    expect(stdout).toContain('npm command: run --silent test:visual');
  });

  it('does not run visual after a failed build', () => {
    const { status, stdout, stderr } = runCheck('build');
    expect(status, stderr).toBe(1);
    expect(stdout).toContain('visual: not run because the build failed');
    expect(stdout).not.toContain('npm command: run --silent test:visual');
  });
});
