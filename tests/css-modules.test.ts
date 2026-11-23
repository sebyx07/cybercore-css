// The module manifest (src/scss/abstracts/_manifest.scss) against the files on disk, the default
// bundle entry (src/scss/cybercore.scss) and the Sass compiler. A partial nothing loads ships
// nothing, silently: these tests are what catch it.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import * as sass from 'sass';
import { beforeAll, describe, expect, it } from 'vitest';

const SCSS = join(__dirname, '../src/scss');
const GROUPS = ['core', 'themes', 'components', 'effects', 'utilities'] as const;
const LISTS = ['core', 'themes', 'base', 'components', 'effects', 'utilities'] as const;
const LAYERS = 'reset, base, theme, components, utilities';

interface Compiled {
  css: string;
  warnings: string[];
}

/** Compiles with a logger that records every warning and deprecation instead of printing it. */
function compile(source: { path: string } | { string: string }): Compiled {
  const warnings: string[] = [];
  const logger = { warn: (message: string) => void warnings.push(message), debug: () => {} };
  const css =
    'path' in source
      ? sass.compile(source.path, { logger }).css
      : sass.compileString(source.string, { logger, loadPaths: [SCSS] }).css;
  return { css, warnings };
}

function classesOf(css: string): string[] {
  return [...new Set(css.match(/\.cyber-[\w-]+/g) ?? [])];
}

/** Top-level statements of compiled CSS (selectors and at-rule preludes at brace depth 0). */
function topLevel(css: string): string[] {
  const statements: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    if (char === '{') {
      if (depth === 0) statements.push(css.slice(start, i).trim());
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 0) start = i + 1;
    } else if (char === ';' && depth === 0) {
      statements.push(css.slice(start, i).trim());
      start = i + 1;
    }
  }
  return statements.filter(Boolean);
}

function readList(name: string): string[] {
  const { css } = compile({
    string: `@use "sass:meta"; @use "abstracts/manifest"; a { b: meta.inspect(manifest.$${name}); }`,
  });
  return [...css.matchAll(/"([\w/-]+)"/g)].map((match) => match[1] as string);
}

let manifest: Record<(typeof LISTS)[number], string[]>;
let sassOnly: string[];
let ordered: string[];

beforeAll(() => {
  manifest = Object.fromEntries(LISTS.map((name) => [name, readList(name)])) as typeof manifest;
  sassOnly = readList('sass-only');
  ordered = LISTS.flatMap((name) => manifest[name]);
});

describe('module manifest', () => {
  it('lists every partial that emits CSS, and nothing else', () => {
    const emitting: string[] = [];
    for (const group of GROUPS) {
      for (const file of readdirSync(join(SCSS, group))) {
        const match = /^_([\w-]+)\.scss$/.exec(file);
        if (!match || match[1] === 'index') continue;
        // Mixin-only partials (components/_kit, core/_mixins) emit nothing and are not modules.
        if (compile({ path: join(SCSS, group, file) }).css.trim() === '') continue;
        emitting.push(`${group}/${match[1]}`);
      }
    }
    expect([...ordered].sort()).toEqual(emitting.sort());
    expect(new Set(ordered).size).toBe(ordered.length);
  });

  it('names only real modules as Sass-only', () => {
    for (const path of sassOnly) expect(ordered).toContain(path);
  });

  it('matches the default bundle entry, module for module and in order', () => {
    const entry = readFileSync(join(SCSS, 'cybercore.scss'), 'utf8');
    const used = [...entry.matchAll(/^@use\s+"([\w/-]+)";/gm)].map((match) => match[1]);
    expect(used).toEqual(ordered.filter((path) => !sassOnly.includes(path)));
  });

  it('declares the layer order first', () => {
    expect(manifest.core[0]).toBe('core/layers');
    expect(compile({ path: join(SCSS, 'core/_layers.scss') }).css.trim()).toBe(`@layer ${LAYERS};`);
  });
});

describe('every module on its own', () => {
  it('compiles without a warning, and every rule sits in a cascade layer', () => {
    for (const path of ordered) {
      const [group, name] = path.split('/');
      const { css, warnings } = compile({ path: join(SCSS, group as string, `_${name}.scss`) });
      expect(warnings, path).toEqual([]);
      const unlayered = topLevel(css).filter(
        (statement) => !statement.startsWith('@layer') && !statement.startsWith('@charset')
      );
      expect(unlayered, path).toEqual([]);
    }
  });

  it('loads through each group index and through the core index', () => {
    for (const index of [...GROUPS, 'abstracts']) {
      expect(compile({ string: `@use "${index}";` }).warnings, index).toEqual([]);
    }
    const core = compile({ string: '@use "core";' }).css;
    expect(core).toMatch(/\[data-theme=magenta\]/);
    expect(core).toMatch(/@media \(prefers-reduced-motion: reduce\)/);
  });
});

describe('default bundle', () => {
  let bundle: Compiled;

  beforeAll(() => {
    bundle = compile({ path: join(SCSS, 'cybercore.scss') });
  });

  it('compiles without a single warning', () => {
    expect(bundle.warnings).toEqual([]);
  });

  it('opens with the layer order', () => {
    expect(bundle.css.replace(/^@charset "UTF-8";\s*/, '')).toMatch(
      new RegExp(`^@layer ${LAYERS};`)
    );
  });

  it('carries every class of every bundled module', () => {
    const inBundle = new Set(classesOf(bundle.css));
    for (const path of ordered.filter((module) => !sassOnly.includes(module))) {
      const [group, name] = path.split('/');
      const missing = classesOf(
        compile({ path: join(SCSS, group as string, `_${name}.scss`) }).css
      ).filter((name) => !inBundle.has(name));
      expect(missing, path).toEqual([]);
    }
  });

  it.each(['switch', 'toast', 'breadcrumb', 'pagination', 'accordion', 'tooltip', 'hud'])(
    'includes the %s component',
    (name) => {
      expect(bundle.css).toMatch(new RegExp(`\\.cyber-${name}\\b`));
    }
  );
});
