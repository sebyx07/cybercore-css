import {
  cdnSnippet,
  CHANGELOG_URL,
  CHARTS_URL,
  FONTS_SNIPPET,
  NPM_INSTALL,
  REPO_URL,
  SITE_DESCRIPTION,
  SITE_URL,
} from '../site';

import { GROUP_LABEL } from './entries';

import type { ModuleEntry, ModuleGroup } from './types';
import type { CybercoreMeta } from '../lib/meta-types';

const GROUPS: ModuleGroup[] = ['components', 'effects', 'utilities'];

function section(group: ModuleGroup, entries: ModuleEntry[]): string {
  const lines = entries
    .filter((entry) => entry.group === group)
    .map((entry) => {
      const classes = entry.module?.classes.map((name) => `.${name}`).join(' ') ?? '';
      const bundle = entry.module && !entry.module.inBundle ? ' (Sass module only)' : '';
      return `- [${entry.name}](${SITE_URL}/${group}/${entry.slug}/)${bundle}: ${entry.summary}\n  Classes: ${classes}`;
    });
  return `## ${GROUP_LABEL[group]}\n\n${lines.join('\n')}`;
}

/**
 * llms.txt, written at build time from the same data as the pages, so the
 * class lists in it are the classes the compiled CSS really has.
 */
export function llmsText(entries: ModuleEntry[], meta: CybercoreMeta): string {
  return `# Cybercore CSS

> ${SITE_DESCRIPTION}

Version ${meta.version}. All classes start with \`cyber-\` and follow block__element--modifier naming.
Cascade layers, lowest priority first: ${meta.layers.join(', ')}. Unlayered CSS overrides all of them.
${meta.themes.length > 0 ? `Themes, set with \`<html data-theme="…">\`: ${meta.themes.map((theme) => theme.name).join(', ')}.\n` : ''}
## Install

\`\`\`bash
${NPM_INSTALL}
\`\`\`

\`\`\`html
${cdnSnippet('jsdelivr')}
\`\`\`

Fonts (Orbitron, Rajdhani, Exo 2, JetBrains Mono):

\`\`\`html
${FONTS_SNIPPET}
\`\`\`

Sass, in a bundler: \`@use "cybercore-css";\` or one module: \`@use "cybercore-css/scss/components/buttons";\`
Sass CLI: \`sass --pkg-importer=node\` with \`@use "pkg:cybercore-css";\`

## Docs

- [Getting started](${SITE_URL}/docs/)
- [Theming and tokens](${SITE_URL}/docs/theming/): ${meta.tokens.length} custom properties
- [Icons](${SITE_URL}/icons/): \`import { renderIcon } from 'cybercore-css/icons'\`
- [Changelog](${CHANGELOG_URL})
- [Source](${REPO_URL})
- [cybercore-charts](${CHARTS_URL}): SVG charts in the same palette

${GROUPS.map((group) => section(group, entries)).join('\n\n')}
`;
}
