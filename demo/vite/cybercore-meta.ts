import { readdirSync, readFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

import postcss from 'postcss';
import * as sass from 'sass';

import type { AtRule, Container, Rule } from 'postcss';
import type { Plugin } from 'vite';

/**
 * Reads the framework the way a browser would: compiles the real SCSS and
 * walks the CSS. The docs site builds its theme switcher, token tables, class
 * references and "is this in the CDN bundle?" checks from the result, so they
 * cannot drift from the source.
 */

import type {
  CustomPropertyMeta,
  CybercoreMeta,
  ModuleMeta,
  ThemeMeta,
  TokenMeta,
} from '../src/lib/meta-types.ts';

const VIRTUAL_ID = 'virtual:cybercore-meta';
const RESOLVED_ID = `\0${VIRTUAL_ID}`;
const THEME_SELECTOR = /\[data-theme=["']?([\w-]+)["']?\]/g;
const CLASS_SELECTOR = /\.(cyber-[\w-]+)/g;
const GROUPS = ['components', 'effects', 'utilities'] as const;

function isConditional(rule: Rule): boolean {
  let parent: Container | undefined = rule.parent;
  while (parent) {
    if (parent.type === 'atrule') {
      const name = (parent as AtRule).name;
      if (name === 'media' || name === 'supports' || name === 'container') return true;
    }
    parent = parent.parent as Container | undefined;
  }
  return false;
}

function classesOf(css: string): string[] {
  const found = new Set<string>();
  postcss.parse(css).walkRules((rule) => {
    for (const match of rule.selector.matchAll(CLASS_SELECTOR)) found.add(match[1]);
  });
  return [...found].sort();
}

function customPropertiesOf(css: string): CustomPropertyMeta[] {
  const seen = new Map<string, CustomPropertyMeta>();
  postcss.parse(css).walkRules((rule) => {
    if (/(^|,)\s*(:root|html)\b/.test(rule.selector) || rule.selector.includes('[data-theme')) {
      return;
    }
    rule.walkDecls(/^--/, (decl) => {
      if (decl.parent !== rule || seen.has(decl.prop)) return;
      seen.set(decl.prop, {
        name: decl.prop,
        value: decl.value.replace(/\s+/g, ' ').trim(),
        selector: rule.selector.split(',')[0].trim(),
      });
    });
  });
  return [...seen.values()];
}

function leadingNotes(source: string): string {
  const lines: string[] = [];
  for (const line of source.split('\n')) {
    if (!line.startsWith('//')) {
      if (line.trim() === '' && lines.length === 0) continue;
      break;
    }
    const text = line.replace(/^\/\/ ?/, '');
    if (/^[=\-*\s]*$/.test(text) && text.trim() !== '') continue;
    lines.push(text);
  }
  return lines.join('\n').trim();
}

function readThemesAndTokens(css: string): Pick<CybercoreMeta, 'themes' | 'tokens'> {
  const themes = new Map<string, ThemeMeta>();
  const tokens = new Map<string, TokenMeta>();

  postcss.parse(css).walkRules((rule) => {
    const themeNames = [...rule.selector.matchAll(THEME_SELECTOR)].map((match) => match[1]);
    for (const name of themeNames) {
      if (!themes.has(name)) themes.set(name, { name, colorScheme: null });
    }
    const isRoot = /(^|,)\s*(:root|html)\s*(,|$)/.test(rule.selector);
    if (!isRoot && themeNames.length === 0) return;
    if (isConditional(rule)) return;

    rule.walkDecls((decl) => {
      if (decl.parent !== rule) return;
      if (decl.prop === 'color-scheme') {
        for (const name of themeNames) {
          const theme = themes.get(name);
          if (theme) {
            theme.colorScheme = decl.value;
          }
        }
        return;
      }
      if (!decl.prop.startsWith('--')) return;
      const value = decl.value.replace(/\s+/g, ' ').trim();
      const token = tokens.get(decl.prop) ?? { name: decl.prop, value: '', themes: {} };
      if (themeNames.length === 0) token.value = value;
      for (const name of themeNames) token.themes[name] = value;
      tokens.set(decl.prop, token);
    });
  });

  return { themes: [...themes.values()], tokens: [...tokens.values()] };
}

let cached: CybercoreMeta | null = null;

/** Compiles once per process. The dev server clears it when the SCSS changes. */
export function readCybercoreMeta(
  repoRoot: string,
  warn: (message: string) => void
): CybercoreMeta {
  cached ??= compileMeta(repoRoot, warn);
  return cached;
}

function compileMeta(repoRoot: string, warn: (message: string) => void): CybercoreMeta {
  const scssRoot = resolve(repoRoot, 'src/scss');
  const pkg = JSON.parse(readFileSync(resolve(repoRoot, 'package.json'), 'utf8')) as {
    version: string;
  };

  const bundle = sass.compile(resolve(scssRoot, 'cybercore.scss'), {
    style: 'compressed',
    logger: sass.Logger.silent,
  }).css;
  const bundleClasses = classesOf(bundle);
  const inBundle = new Set(bundleClasses);

  const modules: ModuleMeta[] = [];
  for (const group of GROUPS) {
    const dir = resolve(scssRoot, group);
    const files = readdirSync(dir).filter((file) => /^_[\w-]+\.scss$/.test(file));
    for (const file of files.sort()) {
      const slug = basename(file, '.scss').slice(1);
      if (slug === 'index') continue;
      const path = resolve(dir, file);
      try {
        const css = sass.compile(path, { logger: sass.Logger.silent }).css;
        const classes = classesOf(css);
        // Shared partials (mixins, placeholders) emit no classes of their own.
        if (classes.length === 0) continue;
        modules.push({
          id: `${group}/${slug}`,
          group,
          slug,
          classes,
          customProperties: customPropertiesOf(css),
          notes: leadingNotes(readFileSync(path, 'utf8')),
          inBundle: classes.some((name) => inBundle.has(name)),
        });
      } catch (error) {
        warn(`cybercore-meta: could not compile ${group}/${file}: ${(error as Error).message}`);
      }
    }
  }

  // core/_index.scss forwards the layer order, tokens, themes, reset and element defaults:
  // one line loads everything a single component module builds on.
  const coreModules = ['core'];
  const layers = /@layer\s+([\w-]+(?:\s*,\s*[\w-]+)+)\s*;/.exec(bundle)?.[1].split(/\s*,\s*/) ?? [];

  return {
    version: pkg.version,
    coreModules,
    layers,
    css: { bytes: Buffer.byteLength(bundle), gzipBytes: gzipSync(bundle).byteLength },
    ...readThemesAndTokens(bundle),
    bundleClasses,
    modules,
  };
}

export function cybercoreMeta(repoRoot: string): Plugin {
  return {
    name: 'cybercore-meta',
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null;
    },
    load(id) {
      if (id !== RESOLVED_ID) return null;
      const meta = readCybercoreMeta(repoRoot, (message) => this.warn(message));
      return `export default ${JSON.stringify(meta)};`;
    },
    handleHotUpdate({ file, server }) {
      if (!file.includes('/src/scss/')) {
        return;
      }
      cached = null;
      const module = server.moduleGraph.getModuleById(RESOLVED_ID);
      if (module) {
        server.moduleGraph.invalidateModule(module);
      }
    },
  };
}
