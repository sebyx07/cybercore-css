import { GROUP_LABEL } from './data/entries';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from './site';

import type { ModuleEntry, ModuleGroup } from './data/types';

/**
 * The route table as data. The app reads it for document titles, the Vite
 * build reads it to write one HTML file and one sitemap entry per page.
 */
export interface RouteMeta {
  /** Path under the site base, with a leading slash and no trailing one. */
  path: string;
  title: string;
  description: string;
}

const GROUP_DESCRIPTION: Record<ModuleGroup, string> = {
  components:
    'Every Cybercore CSS component with live examples, copy-ready markup, states and accessibility guidance.',
  effects:
    'Glitch text, neon borders, scanlines, noise and datastream overlays. Pure CSS, all honouring reduced motion.',
  utilities:
    'Utility classes for layout, spacing, text, colour and motion, built on the same tokens as the components.',
};

export const STATIC_ROUTES: RouteMeta[] = [
  { path: '/', title: `${SITE_NAME}: ${SITE_TAGLINE}`, description: SITE_DESCRIPTION },
  {
    path: '/docs',
    title: `Getting started | ${SITE_NAME}`,
    description:
      'Install Cybercore CSS from npm or a CDN with SRI, load the fonts, and ship your first cyberpunk page in a minute.',
  },
  {
    path: '/docs/theming',
    title: `Theming and tokens | ${SITE_NAME}`,
    description:
      'Every Cybercore CSS design token, live: colours, type scale, spacing, motion. Switch themes or override custom properties.',
  },
  {
    path: '/icons',
    title: `Icons | ${SITE_NAME}`,
    description:
      'Search 150+ cyberpunk SVG icons in four variants. Copy the markup or import them tree-shaken from cybercore-css/icons.',
  },
];

export function buildRoutes(entries: ModuleEntry[]): RouteMeta[] {
  const groups = [...new Set(entries.map((entry) => entry.group))];
  return [
    ...STATIC_ROUTES,
    ...groups.map((group) => ({
      path: `/${group}`,
      title: `${GROUP_LABEL[group]} | ${SITE_NAME}`,
      description: GROUP_DESCRIPTION[group],
    })),
    ...entries.map((entry) => ({
      path: `/${entry.group}/${entry.slug}`,
      title: `${entry.name} | ${GROUP_LABEL[entry.group]} | ${SITE_NAME}`,
      description: entry.summary,
    })),
  ];
}

export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}
