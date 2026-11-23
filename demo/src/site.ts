import cdn from './data/cdn.json';

/**
 * Single source of truth for everything the site tells people to copy.
 * The install snippets, demo/index.html (through the Vite plugin) and the
 * starter page all read from here, so the site always runs what it documents.
 */

export const SITE_NAME = 'Cybercore CSS';
export const SITE_URL = 'https://sebyx07.github.io/cybercore-css';
export const SITE_TAGLINE = 'Cyberpunk UI in pure CSS';
export const SITE_DESCRIPTION =
  'Cybercore CSS is a pure CSS cyberpunk design system: neon components, glitch effects, design tokens and 150+ SVG icons. No JavaScript, works with any framework.';

export const REPO_URL = 'https://github.com/sebyx07/cybercore-css';
export const NPM_URL = 'https://www.npmjs.com/package/cybercore-css';
export const CHANGELOG_URL = `${REPO_URL}/blob/main/CHANGELOG.md`;
export const ISSUES_URL = `${REPO_URL}/issues`;
export const CHARTS_URL = 'https://sebyx07.github.io/cybercore-charts';
export const MAINTAINER_URL = 'https://developerz.ai';

/**
 * The three families the framework's tokens name, plus Orbitron, which
 * `.cyber-nav__brand` asks for directly. Leaving Orbitron out was issue #8.
 */
export const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Rajdhani:wght@400;500;600;700&display=swap';

export const FONTS_SNIPPET = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS_HREF}" rel="stylesheet">`;

export const CDN_VERSION = cdn.version;
export const CDN_INTEGRITY = cdn.integrity;

export const CDN_URLS = {
  jsdelivr: `https://cdn.jsdelivr.net/npm/cybercore-css@${cdn.version}/${cdn.file}`,
  unpkg: `https://unpkg.com/cybercore-css@${cdn.version}/${cdn.file}`,
} as const;

export type CdnName = keyof typeof CDN_URLS;

export function cdnSnippet(name: CdnName): string {
  return `<link rel="stylesheet" href="${CDN_URLS[name]}" integrity="${CDN_INTEGRITY}" crossorigin="anonymous">`;
}

export const NPM_INSTALL = 'npm install cybercore-css';

/** A complete page: paste into index.html, open it, get the framework. */
export function starterPage(name: CdnName = 'jsdelivr'): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Deck status</title>

  <!-- Fonts: Orbitron, Rajdhani, Exo 2, JetBrains Mono -->
  ${FONTS_SNIPPET.split('\n').join('\n  ')}

  <!-- Cybercore CSS -->
  ${cdnSnippet(name)}
</head>
<body>
  <main class="cyber-p-lg">
    <h1 class="cyber-glitch" data-text="System online">System online</h1>
    <p class="cyber-text-secondary cyber-my-md">Uplink stable. All subsystems nominal.</p>
    <button class="cyber-btn" type="button">Run diagnostics</button>
  </main>
</body>
</html>`;
}
