import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import type { RouteMeta } from '../src/routes.ts';
import type { Plugin } from 'vite';

/**
 * GitHub Pages serves files, not routes. After the build this writes one
 * index.html per route, each with its own title, description, canonical URL
 * and social tags, plus 404.html (the app shell, so unknown paths still reach
 * the in-app not-found page), sitemap.xml and llms.txt.
 */

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function pageUrl(siteUrl: string, path: string): string {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}/`;
}

function withMeta(html: string, route: RouteMeta, siteUrl: string): string {
  const title = escapeAttribute(route.title);
  const description = escapeAttribute(route.description);
  const url = pageUrl(siteUrl, route.path);
  const content = (name: string) =>
    new RegExp(`(<meta\\s+(?:name|property)="${name}"\\s+content=")[^"]*(")`);

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(content('description'), `$1${description}$2`)
    .replace(content('og:title'), `$1${title}$2`)
    .replace(content('og:description'), `$1${description}$2`)
    .replace(content('og:url'), `$1${url}$2`)
    .replace(content('twitter:title'), `$1${title}$2`)
    .replace(content('twitter:description'), `$1${description}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
}

function sitemap(routes: RouteMeta[], siteUrl: string): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${pageUrl(siteUrl, route.path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function staticPages(
  load: () => Promise<{ siteUrl: string; routes: RouteMeta[]; llms: string }>
): Plugin {
  let outDir = '';

  return {
    name: 'cybercore-static-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const shell = readFileSync(resolve(outDir, 'index.html'), 'utf8');
      const { siteUrl, routes, llms } = await load();

      for (const route of routes) {
        if (route.path === '/') {
          continue;
        }
        const file = resolve(outDir, `.${route.path}`, 'index.html');
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, withMeta(shell, route, siteUrl));
      }

      const notFound = shell
        .replace(/<title>[^<]*<\/title>/, '<title>Page not found | Cybercore CSS</title>')
        .replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/, '$1noindex$2');
      writeFileSync(resolve(outDir, '404.html'), notFound);
      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap(routes, siteUrl));
      // llm.txt is the address the previous site used; llms.txt is the convention.
      writeFileSync(resolve(outDir, 'llms.txt'), llms);
      writeFileSync(resolve(outDir, 'llm.txt'), llms);
    },
  };
}
