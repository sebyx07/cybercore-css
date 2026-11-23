// Proves the npm package works as a user installs it. Run after `npm run build:css`.
//
//   npm run check:package
//
// 1. `npm pack`, then checks the tarball: every required file and every `exports` target is
//    in it, and nothing outside the published allowlist (demo, tests, configs) leaked in.
// 2. Installs the tarball into an empty temporary project and uses it from there:
//    `@use "pkg:cybercore-css"` through Sass, the CSS entry points through Node resolution,
//    and `cybercore-css/icons` as a bundler would load it (TypeScript source, via tsx).
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import * as sass from 'sass';

interface PackResult {
  filename: string;
  size: number;
  unpackedSize: number;
  entryCount: number;
  files: { path: string }[];
}

const ROOT = resolve(import.meta.dirname, '..');
const REQUIRED = [
  'package.json',
  'README.md',
  'LICENSE',
  'dist/cybercore.css',
  'dist/cybercore.min.css',
  'src/scss/cybercore.scss',
  'src/cybercore.d.ts',
  'src/icons/index.ts',
];
const ALLOWED = [
  /^package\.json$/,
  /^README\.md$/,
  /^LICENSE$/,
  /^dist\//,
  /^src\/scss\//,
  /^src\/icons\//,
  /^src\/cybercore\.d\.ts$/,
];
const FORBIDDEN = [/\.test\.tsx?$/, /\.spec\.tsx?$/, /(^|\/)node_modules\//, /(^|\/)\.DS_Store$/];

const errors: string[] = [];
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function run(command: string, args: string[], cwd: string): string {
  return execFileSync(command, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

if (!existsSync(join(ROOT, 'dist/cybercore.min.css'))) {
  console.error('✗ dist/ is not built. Build it first: npm run build:css');
  process.exit(1);
}

const work = mkdtempSync(join(tmpdir(), 'cybercore-package-'));
try {
  // 1. The tarball.
  const [pack] = JSON.parse(
    run(npm, ['pack', '--json', '--ignore-scripts', '--pack-destination', work], ROOT)
  ) as PackResult[];
  if (!pack) {
    throw new Error('npm pack printed no result');
  }
  const files = new Set(pack.files.map((f) => f.path));
  console.log(
    `${pack.filename}: ${pack.entryCount} files, ${(pack.size / 1024).toFixed(1)} KB packed, ` +
      `${(pack.unpackedSize / 1024).toFixed(1)} KB unpacked`
  );

  for (const path of REQUIRED) {
    if (!files.has(path)) {
      errors.push(`missing from the tarball: ${path} (package.json "files", or the build)`);
    }
  }
  for (const path of files) {
    if (!ALLOWED.some((re) => re.test(path)) || FORBIDDEN.some((re) => re.test(path))) {
      errors.push(`should not be published: ${path} (tighten package.json "files" or .npmignore)`);
    }
  }

  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as {
    name: string;
    exports: Record<string, string | Record<string, string>>;
  };
  for (const [subpath, target] of Object.entries(pkg.exports)) {
    for (const file of typeof target === 'string' ? [target] : Object.values(target)) {
      if (!file.includes('*') && !files.has(file.replace(/^\.\//, ''))) {
        errors.push(`exports["${subpath}"] points at ${file}, which is not in the tarball`);
      }
    }
  }

  // 2. A consumer project.
  const app = join(work, 'app');
  mkdirSync(app);
  writeFileSync(
    join(app, 'package.json'),
    JSON.stringify({ name: 'consumer', private: true, type: 'module' })
  );
  run(
    npm,
    ['install', '--no-audit', '--no-fund', '--ignore-scripts', join(work, pack.filename)],
    app
  );

  const scss = sass.compileString('@use "pkg:cybercore-css";', {
    importers: [new sass.NodePackageImporter(app)],
    url: pathToFileURL(join(app, 'index.scss')),
    style: 'compressed',
  });
  if (scss.css.length < 1000) {
    errors.push(`@use "pkg:cybercore-css" compiled to only ${scss.css.length} bytes`);
  } else {
    console.log(`✓ @use "pkg:cybercore-css" compiles (${(scss.css.length / 1024).toFixed(1)} KB)`);
  }

  const require = createRequire(join(app, 'index.js'));
  for (const specifier of [pkg.name, `${pkg.name}/dist/cybercore.min.css`]) {
    try {
      console.log(
        `✓ ${specifier} resolves to ${require.resolve(specifier).replace(app + '/', '')}`
      );
    } catch (error) {
      errors.push(`${specifier} does not resolve: ${(error as Error).message}`);
    }
  }

  const tsx = import.meta.resolve('tsx/esm');
  const probe =
    "const icons = await import('cybercore-css/icons'); " +
    "const n = icons.getAllIconNames().length; if (!n) throw new Error('no icons'); " +
    "console.log('✓ cybercore-css/icons loads (' + n + ' icons)');";
  try {
    process.stdout.write(
      run(process.execPath, ['--import', tsx, '--input-type=module', '-e', probe], app)
    );
  } catch (error) {
    errors.push(
      `cybercore-css/icons does not load: ${(error as { stderr?: string }).stderr ?? String(error)}`
    );
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (errors.length > 0) {
  console.error(`\n✗ package check failed:\n${errors.map((e) => `  - ${e}`).join('\n')}`);
  process.exit(1);
}
console.log('package check: ok');
