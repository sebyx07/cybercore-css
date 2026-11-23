/**
 * Everything the Vite build evaluates ahead of time (see demo/vite/docs-data.ts).
 * Rendering icons and snippets here keeps the 153-icon registry out of the
 * browser bundle: pages receive finished strings.
 */
import { icons } from '../../../src/icons/registry';

import { COMPONENT_DOCS } from './components';
import { EFFECT_DOCS } from './effects';
import { HERO_PANEL } from './hero';
import { icon } from './icon';
import { UTILITY_DOCS } from './utilities';

import type { DocsBundle } from './types';

function iconRow(names: string[]): string {
  return names
    .filter((name) => name in icons)
    .map((name) => icon(name, 32))
    .join('');
}

export const DOCS_BUNDLE: DocsBundle = {
  docs: { components: COMPONENT_DOCS, effects: EFFECT_DOCS, utilities: UTILITY_DOCS },
  heroPanel: HERO_PANEL,
  iconCount: Object.keys(icons).length,
  iconSample: iconRow(['terminal', 'chip', 'shield', 'signal', 'lock', 'eye', 'zap', 'globe']),
  chartSample: iconRow(['chart-line', 'chart-bar', 'chart-pie', 'database', 'table']),
};

export { buildEntries } from './entries';
export { buildRoutes } from '../routes';
export { FONTS_HREF, SITE_URL, starterPage } from '../site';
export { llmsText } from './llms';
