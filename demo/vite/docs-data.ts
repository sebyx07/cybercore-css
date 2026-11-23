import { resolve } from 'node:path';

import { runnerImport } from 'vite';

import { auditSnippets } from './audit-snippets.ts';
import { readCybercoreMeta } from './cybercore-meta.ts';
import { staticPages } from './static-pages.ts';

import type { Plugin } from 'vite';

/**
 * Evaluates demo/src/data/build.ts with Vite's module runner and serves the
 * result as `virtual:cybercore-docs`. The docs data files stay ordinary
 * TypeScript, yet the browser gets plain strings.
 */

type BuildModule = typeof import('../src/data/build.ts');

const VIRTUAL_ID = 'virtual:cybercore-docs';
const RESOLVED_ID = `\0${VIRTUAL_ID}`;

let cached: Promise<BuildModule> | null = null;

function loadBuildModule(demoRoot: string): Promise<BuildModule> {
  cached ??= runnerImport<BuildModule>(resolve(demoRoot, 'src/data/build.ts'), {
    root: demoRoot,
    configFile: false,
    logLevel: 'error',
  }).then((result) => result.module);
  return cached;
}

export function docsData(demoRoot: string, repoRoot: string): Plugin[] {
  const pages = staticPages(async () => {
    const build = await loadBuildModule(demoRoot);
    const meta = readCybercoreMeta(repoRoot, console.warn);
    const { docs } = build.DOCS_BUNDLE;
    const entries = [
      ...build.buildEntries('components', docs.components, meta.modules),
      ...build.buildEntries('effects', docs.effects, meta.modules),
      ...build.buildEntries('utilities', docs.utilities, meta.modules),
    ];
    return {
      siteUrl: build.SITE_URL,
      routes: build.buildRoutes(entries),
      llms: build.llmsText(entries, meta),
    };
  });

  const data: Plugin = {
    name: 'cybercore-docs-data',
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null;
    },
    async load(id) {
      if (id !== RESOLVED_ID) {
        return null;
      }
      const build = await loadBuildModule(demoRoot);
      return `export default ${JSON.stringify(build.DOCS_BUNDLE)};`;
    },
    // Fills the %PLACEHOLDERS% in index.html from src/site.ts, so the page
    // loads the very font link the install guide tells people to copy.
    async transformIndexHtml(html) {
      const build = await loadBuildModule(demoRoot);
      return html
        .replaceAll('%FONTS_HREF%', build.FONTS_HREF)
        .replaceAll('%SITE_URL%', build.SITE_URL);
    },
    // Warns when a docs snippet uses a class the framework does not define.
    // Set CYBERCORE_STRICT_SNIPPETS=1 to fail the build instead.
    async buildStart() {
      const build = await loadBuildModule(demoRoot);
      const meta = readCybercoreMeta(repoRoot, (message) => this.warn(message));
      const problems = auditSnippets(
        build.DOCS_BUNDLE.docs,
        { 'home hero panel': build.DOCS_BUNDLE.heroPanel, 'starter page': build.starterPage() },
        meta
      );
      if (problems.length === 0) {
        return;
      }
      const message = `Docs snippets use classes the framework does not define:\n  ${problems.join('\n  ')}`;
      if (process.env.CYBERCORE_STRICT_SNIPPETS) {
        this.error(message);
      }
      this.warn(message);
    },
    handleHotUpdate({ file, server }) {
      if (!file.includes('/demo/src/data/') && !file.endsWith('/demo/src/site.ts')) {
        return;
      }
      cached = null;
      const module = server.moduleGraph.getModuleById(RESOLVED_ID);
      if (module) {
        server.moduleGraph.invalidateModule(module);
      }
      server.ws.send({ type: 'full-reload' });
    },
  };

  return [data, pages];
}
