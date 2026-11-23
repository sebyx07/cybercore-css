// Regenerates the class and token lists in llms.txt from the compiled SCSS. The prose, the
// snippets and the section order stay hand-written; only these lines are rewritten:
//   - the "- `cyber-…`" bullets under each `### <module>` heading (components, effects),
//   - the "- **<module>**" bullets under "## Utilities" (bundle first, then Sass-only),
//   - the "- `--…`" bullets and the "`--…`" component-property line under "## Tokens".
//
//   npm run docs:llms                  rewrite llms.txt
//   node scripts/gen-llms.ts --check   exit 1 when llms.txt is stale (bin/docs-check runs this)
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import postcss from 'postcss';
import * as sass from 'sass';

const ROOT = resolve(import.meta.dirname, '..');
const SCSS = resolve(ROOT, 'src/scss');
const LLMS = resolve(ROOT, 'llms.txt');
const GROUPS = ['components', 'effects', 'utilities'] as const;
const SASS_ONLY_PREVIEW = 14;

interface Module {
  group: (typeof GROUPS)[number];
  slug: string;
  classes: string[];
  properties: string[];
  inBundle: boolean;
}

const sorted = (values: Iterable<string>) => [...new Set(values)].sort();
const code = (names: string[]) => names.map((name) => `\`${name}\``).join(' ');
const compile = (path: string) => sass.compile(path, { logger: sass.Logger.silent }).css;

function classesOf(css: string): string[] {
  const found: string[] = [];
  postcss.parse(css).walkRules((rule) => {
    for (const match of rule.selector.matchAll(/\.(cyber-[\w-]+)/g)) found.push(match[1] ?? '');
  });
  return sorted(found);
}

/** True inside `@media`, `@supports` or `@container`: only `@layer` wraps an unconditional rule. */
function conditional(node: postcss.Node): boolean {
  for (let parent = node.parent; parent; parent = parent.parent) {
    if (parent.type === 'atrule' && (parent as postcss.AtRule).name !== 'layer') return true;
  }
  return false;
}

/** Custom properties declared on `:root` (tokens) or on anything else (component properties). */
function propertiesOf(css: string, root: boolean): string[] {
  const found: string[] = [];
  postcss.parse(css).walkDecls(/^--/, (decl) => {
    const rule = decl.parent;
    if (rule?.type !== 'rule' || conditional(rule)) return;
    const selector = rule.selector;
    const onRoot = /(^|,)\s*:root\s*(,|$)/.test(selector);
    // The derived-token rule also matches `[data-theme]` and friends; theme rules alone do not count.
    const component = !onRoot && !selector.includes('[data-');
    if (root ? onRoot : component) found.push(decl.prop);
  });
  return sorted(found);
}

function readModules(bundleClasses: Set<string>): Module[] {
  const modules: Module[] = [];
  for (const group of GROUPS) {
    for (const file of readdirSync(resolve(SCSS, group)).sort()) {
      const slug = /^_([\w-]+)\.scss$/.exec(file)?.[1];
      if (!slug || slug === 'index') continue;
      const css = compile(resolve(SCSS, group, file));
      const classes = classesOf(css);
      if (classes.length === 0) continue; // mixin-only partials
      // A module overlapping the bundle (shared delay classes) is in it only if all of it is.
      const inBundle = classes.every((name) => bundleClasses.has(name));
      modules.push({ group, slug, classes, properties: propertiesOf(css, false), inBundle });
    }
  }
  return modules;
}

/** `- \`cyber-btn\` · modifiers: … · elements: …`, one line per block. */
function blockLines(classes: string[]): string[] {
  const blocks = sorted(classes.map((name) => name.split(/__|--/)[0] ?? name));
  return blocks.map((block) => {
    const modifiers = classes.filter((name) => name.startsWith(`${block}--`));
    const elements = classes.filter((name) => name.startsWith(`${block}__`));
    let line = `- \`${block}\``;
    if (modifiers.length > 0) line += ` · modifiers: ${code(modifiers)}`;
    if (elements.length > 0) line += ` · elements: ${code(elements)}`;
    return line;
  });
}

function utilityLines(modules: Module[], inBundle: boolean): string[] {
  return modules
    .filter((module) => module.group === 'utilities' && module.inBundle === inBundle)
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map(({ slug, classes }) =>
      inBundle
        ? `- **${slug}**: ${code(classes)}`
        : `- **${slug}** (${classes.length} classes, \`@use "cybercore-css/scss/utilities/${slug}"\`): ${code(classes.slice(0, SASS_ONLY_PREVIEW))} …`
    );
}

/** Tokens grouped by family (`--color-<family>-*`, else `--<family>-*`); palettes collapsed. */
function tokenLines(tokens: string[]): string[] {
  const families = new Map<string, string[]>();
  for (const token of tokens) {
    const parts = token.slice(2).split('-');
    const palette = /^--cyber-([a-z]+)-(\d+)$/.exec(token);
    const key = palette
      ? `--cyber-${palette[1]}`
      : `--${parts.slice(0, parts[0] === 'color' ? 2 : 1).join('-')}`;
    families.set(key, [...(families.get(key) ?? []), token]);
  }
  return [...families.keys()].sort().map((key) => {
    const members = families.get(key) ?? [];
    if (!key.startsWith('--cyber-')) return `- ${code(members)}`;
    const steps = members.map((token) => token.slice(key.length + 1));
    steps.sort((a, b) => Number(a) - Number(b));
    return `- \`${key}-<step>\` with steps ${steps.join(', ')}`;
  });
}

/** Replaces the first run of lines matching `pattern` at or after `from`; returns the run's end. */
function replaceRun(lines: string[], from: number, pattern: RegExp, next: string[]): number {
  const start = lines.findIndex((line, index) => index >= from && pattern.test(line));
  if (start < 0) throw new Error(`llms.txt: no ${String(pattern)} list after line ${from + 1}`);
  let end = start;
  while (end < lines.length && pattern.test(lines[end] ?? '')) end += 1;
  lines.splice(start, end - start, ...next);
  return start + next.length;
}

function headingIndex(lines: string[], heading: string): number {
  const index = lines.indexOf(heading);
  if (index < 0) throw new Error(`llms.txt: no "${heading}" heading`);
  return index;
}

function generate(text: string): string {
  const bundle = compile(resolve(SCSS, 'cybercore.scss'));
  const modules = readModules(new Set(classesOf(bundle)));
  const lines = text.split('\n');

  for (const module of modules.filter((entry) => entry.group !== 'utilities')) {
    const heading = headingIndex(lines, `### ${module.slug}`);
    replaceRun(lines, heading, /^- `cyber-/, blockLines(module.classes));
  }

  const utilities = headingIndex(lines, '## Utilities');
  const afterBundle = replaceRun(lines, utilities, /^- \*\*/, utilityLines(modules, true));
  replaceRun(lines, afterBundle, /^- \*\*/, utilityLines(modules, false));

  const tokens = headingIndex(lines, '## Tokens');
  replaceRun(lines, tokens, /^- `--/, tokenLines(propertiesOf(bundle, true)));
  const properties = sorted(modules.flatMap((module) => module.properties));
  replaceRun(lines, tokens, /^`--/, [code(properties)]);

  return lines.join('\n');
}

const current = readFileSync(LLMS, 'utf8');
const next = generate(current);
if (process.argv.includes('--check')) {
  if (next !== current) {
    console.error('✗ llms.txt is stale: its class or token lists differ from the SCSS.');
    console.error('  Regenerate it: npm run docs:llms');
    process.exit(1);
  }
  console.log('llms.txt: class and token lists match the SCSS');
} else {
  writeFileSync(LLMS, next);
  console.log(next === current ? 'llms.txt: already up to date' : 'llms.txt: regenerated');
}
