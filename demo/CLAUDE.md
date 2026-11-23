# demo/ — the documentation site

React + Vite + TypeScript, deployed to GitHub Pages at https://sebyx07.github.io/cybercore-css/ by `.github/workflows/deploy.yml` on every merge that touches `demo/` or `src/`. It is not part of the npm package: nothing here ships to users of the framework.

The site exists to show the framework exactly as it ships and to hand people markup they can paste.

## Commands

```bash
bin/dev                      # http://127.0.0.1:5173/cybercore-css/ , hot reload (SCSS edits under src/scss/ too)
PORT=5199 bin/dev --detach   # background, for browser tools; bin/stop ends it
npm run build:demo           # production build into demo/dist (one HTML file per route)
npm run preview              # serve demo/dist as Pages would
npm run build && npm run test:visual           # screenshots against the baselines (Docker)
npm run build && npm run test:visual:update    # accept an intended visual change
bin/check files demo/src/<file>                # eslint + prettier + related tests for one file
```

## Layout

```
index.html              shell; %SITE_URL% and %FONTS_HREF% are filled from src/site.ts at build time
vite.config.ts          base /cybercore-css/ ; plugins from vite/
vite/cybercore-meta.ts  compiles the real SCSS and walks the CSS → virtual:cybercore-meta
                        (classes per module, tokens, themes, layers, what the CDN bundle contains)
vite/docs-data.ts       evaluates src/data/build.ts at build time → virtual:cybercore-docs
vite/audit-snippets.ts  fails the build when an example uses a cyber-* class no SCSS module defines
vite/static-pages.ts    after the build: one index.html per route, 404.html, sitemap.xml, llms.txt
src/site.ts             THE source for everything people copy: URLs, font snippet, CDN snippet, starter page
src/routes.ts           the route table as data (titles, descriptions); app, prerender and sitemap share it
src/data/components.ts  hand-written docs per component (examples, accessibility, ARIA, keyboard)
src/data/effects.ts     same for effects        src/data/utilities.ts  same for utilities
src/data/hero.ts        the home page console, framework classes only
src/data/cdn.json       the published version and its SRI hash (written by scripts/sync-cdn.mjs)
src/pages/              Home, GettingStarted, Theming, Icons, ModuleIndex, ModulePage, NotFound, OgCard
src/components/         Layout, Example (preview + code from one string), CodeBlock, ThemeSwitcher, …
src/styles/site.scss    the site's own styles: `site-*` classes reading the framework's tokens
src/styles/all-modules.scss  every SCSS module, loaded by docs pages so Sass-only modules preview too
public/                 favicon, og.png (rendered by scripts/make-og.mjs), robots.txt
```

## Rules (these bite before any symptom appears)

- **Never define or patch a `cyber-*` class here.** Site styles are `site-*` and read tokens. If a page needs a framework class to look right, the framework is wrong: fix it in `src/scss/`. A demo-only fix hides the bug from every user of the CDN build.
- **An example is one string.** `Example.html` in `src/data/*.ts` is both what the preview renders and what the code block prints. Never render one thing and show another. Markup must be plain HTML that works when pasted into a page that only has the stylesheet.
- **Only classes that exist.** `vite/audit-snippets.ts` fails the build on a `cyber-*` class no module defines. Do not silence it: add the class to the framework or fix the snippet.
- **Say honestly whether a component needs script.** `behaviour: 'no-js'` only when the example works with HTML and CSS alone. When state needs script (tabs, modal, dropdown, toast, the mobile nav), mark `needs-js`, put the few lines in `Example.js`, and document the ARIA attributes and keys in `aria` / `keyboard`. The framework itself never ships that script.
- **Examples teach accessible markup.** Real `<button>`s and labels, `type="button"`, `aria-label` on icon-only controls, an accessible name for every landmark. People copy these.
- **Copyable facts come from `src/site.ts`.** Never type a CDN URL, a version, an SRI hash or the fonts link into a page. After a release reaches npm, `node demo/scripts/sync-cdn.mjs` rewrites `src/data/cdn.json` (version and hash of the published file); a hand-edited hash breaks every page that pastes the snippet, because the browser refuses the stylesheet.
- **Routes are real paths, declared once.** Add a page to `src/routes.ts` (or as a module doc, which generates its route); the prerender, the sitemap and the document title follow. Links go through the router so the `/cybercore-css/` base is applied: never hardcode `/components/…`. Old `#/…` links are redirected in `src/main.tsx`; do not reintroduce hash routing.
- **A new framework module appears by itself.** `buildEntries` lists every SCSS module the build finds, documented or not. Writing its docs means adding a `ModuleDoc` with the same `slug` as the SCSS file name.
- **A new or changed page changes a screenshot.** `tests/visual/pages.spec.ts` shoots every page; an intended change needs its baseline re-rendered in the pinned image (`npm run test:visual:update`) in the same pull request, and the pull request says so.
- **The home page loads the default bundle only**, as the CDN serves it. Docs pages add `all-modules.scss`. Do not import `all-modules` on the home page: it would hide "this class is not in the default bundle" bugs.
- **React is fine here, and only here.** Keep it light: no state library, no CSS-in-JS, no component kit. Each route gets its own HTML file with its title and meta tags (`vite/static-pages.ts`); the body renders client-side.

## Checks before a pull request

`bin/check` covers lint, types and the build (with the snippet audit). Then look at it: 1440 and 390 wide, keyboard through the changed page, `prefers-reduced-motion` emulated; the `visual-a11y-reviewer` agent does this pass.
