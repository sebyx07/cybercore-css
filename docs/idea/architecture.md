# Architecture

> established by the developerz.ai maintainer agent for the maintainers of this repository from what onboarding read and ran in this repo, then owned by
> its maintainers. Correct it in place; setup never overwrites a page that exists.

`src/scss/cybercore.scss` loads layers and tokens before themes, element defaults, components, effects and utilities. `src/scss/abstracts/_manifest.scss` records module order and the Sass-only utilities omitted from the CDN bundle. Generated CSS lands in `dist/`.

`src/icons/` exposes SVG definitions and typed helpers through the exports in `package.json`. `demo/vite.config.ts` builds the React documentation site under `/cybercore-css/`. `tests/` verifies emitted CSS, module wiring and icons; visual tests are a separate CI lane.
