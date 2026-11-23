# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). While the version is below 1.0, a minor release may contain breaking changes; they are listed under **Changed** and marked **Breaking**.

Releases are cut by merging a `package.json` version bump: see [RELEASE.md](RELEASE.md). Each section below becomes that version's GitHub Release notes.

## [Unreleased]

## [0.4.0] - 2026-11-23

### Added

- **New components:** switch (`cyber-switch`), toast (`cyber-toast`), accordion (`cyber-accordion`, on native `<details>`), tooltip (`cyber-tooltip`), breadcrumb (`cyber-breadcrumb`), pagination (`cyber-pagination`) and HUD frame (`cyber-hud`, `cyber-stat`, `cyber-divider`).
- **Native dialog:** `cyber-dialog` styles `<dialog>`, so a modal gets its focus trap, Esc handling and inert page from the browser.
- **Forms:** radio (`cyber-radio`), range (`cyber-range`), sizes and colour variants for inputs, selects and textareas, validation states (`--error`, `--success`, `--warning`, `aria-invalid`), `cyber-field__hint`, `cyber-field__error`, `cyber-field__success`.
- `cyber-input-group` and `cyber-input-group__addon` (#6, thanks @ctrisciuzzi).
- **Buttons:** `cyber-btn--chrome`, `cyber-btn--icon`, `cyber-btn--block`, `cyber-btn--loading`, `cyber-btn-group`.
- **Cards:** `cyber-card__body`, `cyber-card__footer`, `cyber-card__subtitle`, and the `--flat`, `--compact`, `--glow`, `--active`, `--scanlines` modifiers.
- **Alerts:** `cyber-alert__body`, `cyber-alert__actions`, `cyber-alert__close`, `cyber-alert--info`.
- Colour variants for tables, dropdowns, checkboxes and terminals; `cyber-table--sticky`; `cyber-dropdown__header` and `cyber-dropdown__item--danger`; a collapsible mobile menu for `cyber-nav`.
- **Semantic tokens:** `--color-accent` (with `-light`, `-dark`, `-soft`, `-muted`), `--color-success`, `--color-warning`, `--color-danger`, `--color-info`, more `--color-bg-*`, `--color-text-*` and `--color-border-*` roles, `--focus-ring-*`, `--control-height-*`, `--clip-*`, `--glow-intensity`.
- **Palette:** full 100 to 900 scales for every hue, derived from the 500 shade with `color-mix()`, so overriding one anchor retints the scale; new `acid`, `amber` and `violet` hues.
- **Themes:** accent themes with `data-theme` (`cyan`, `magenta`, `acid`, `amber`), on the page or on any subtree; `data-contrast="high"` and `data-motion="reduce"` to force the high-contrast and reduced-motion behaviour.
- **Sass API:** `cybercore-css/scss/abstracts` exposes the token maps and mixins (breakpoints, container queries, `font-face`) without emitting CSS.
- [`llms.txt`](llms.txt): a class and token reference for AI coding tools.

### Changed

- **Accessibility:** every interactive component has one visible `:focus-visible` ring that the cut corners no longer clip; contrast raised to WCAG AA across colour variants; `prefers-contrast: more` and Windows forced-colors mode are supported; hover styles apply only where a real pointer exists.
- **Reduced motion:** duration tokens collapse to `0ms` under `prefers-reduced-motion: reduce`, and every looping animation is stopped.
- Components read tokens with a literal fallback, so a single Sass module renders when loaded on its own.
- State is styled from ARIA attributes as well as classes: `aria-selected`, `aria-expanded`, `aria-current`, `aria-disabled`, `aria-busy`, `aria-invalid`, `aria-pressed`.
- Spacing and type scales are fluid (`clamp()`).
- Browser support is now stated as what the CSS needs: Chrome and Edge 111, Firefox 121, Safari 16.2 (`color-mix()`, cascade layers, `:has()`).
- The demo site is rebuilt: one page per component with copy-ready markup, ARIA and keyboard notes, real URLs instead of hash routes (old `#/…` links redirect), and a CDN snippet with a Subresource Integrity hash.
- The project is maintained by [developerz.ai](https://developerz.ai): pull requests are reviewed and merged by its agent once CI is green. See [CONTRIBUTING.md](CONTRIBUTING.md).
- Releases are published from CI with npm trusted publishing and provenance when the version in `package.json` changes on `main`. The package is no longer mirrored to GitHub Packages.
- Development needs Node 24 (`.nvmrc`). Using the package needs no Node at all.

### Fixed

- Icon spin animation no longer wobbles off-centre (#5, thanks @chadol27).
- `cyber-nav__link` is `inline-block`, so its padding and underline line up (#7, thanks @ctrisciuzzi).
- The demo's utilities page shows the optional utility styles (#3, thanks @mountainash).
- Sass imports documented in the README now resolve (`cybercore-css/scss/components/buttons`; the old `cybercore-css/components/buttons` never did).

## [0.3.0] - 2026-01-14

### Changed

- Icon system reorganised into per-category definition modules (`cybercore-css/icons/defs/<category>`), with more than 20 icons redrawn or fixed.

## [0.2.6] - 2026-01-14

### Fixed

- Mobile layout of the icon grid and of tables.
- README images and the CDN section.

## [0.2.0] - 2026-01-14

### Added

- **Cyber Icons System** - 153 cyberpunk-themed SVG icons
  - 10 icon categories: navigation, actions, media, communication, data,
    security, tech, files, status, social
  - 4 style variants: outline, solid, duotone, glitch
  - Full TypeScript support with type definitions
  - Tree-shakeable individual icon imports
  - Utility functions: `renderIcon()`, `getIcon()`, `iconExists()`,
    `createSpriteSheet()`
  - Data URI support for CSS backgrounds
  - Icon validation and testing infrastructure

- **Icon Documentation**
  - Interactive icon browser in demo site
  - Full API documentation
  - Usage examples for all import patterns

### Changed

- Updated README with icon system documentation
- Added `cybercore-css/icons` and `cybercore-css/icons/individual` exports to
  package.json

## [0.1.0] - 2026-01-13

### Added

- Initial release of CYBERCORE CSS framework
- **Core System**
  - CSS custom properties for theming (cyan, magenta, yellow, green accent
    colors)
  - CSS `@layer` cascade management (reset, base, theme, components, utilities)
  - Dark-first design optimized for cyberpunk aesthetics
  - `prefers-reduced-motion` support throughout

- **Components**
  - Buttons (`.cyber-btn`) with color variants and ghost/outline styles
  - Cards (`.cyber-card`) with interactive and holographic variants
  - Form inputs (`.cyber-input`, `.cyber-select`, `.cyber-checkbox`)
  - Terminal component (`.cyber-terminal`) with typing animation
  - Modal dialogs (`.cyber-modal`)
  - Badges and alerts
  - Tables with cyberpunk styling
  - Progress bars and spinners
  - Tabs and navigation
  - Skeleton loading states

- **Effects**
  - Glitch text effect (`.cyber-glitch`)
  - Neon border glow (`.cyber-neon-border`)
  - Scanlines overlay (`.cyber-scanlines`)
  - Noise texture (`.cyber-noise`)
  - Datastream animation (`.cyber-datastream`)

- **Utilities**
  - Display and visibility helpers
  - Flexbox and grid utilities
  - Spacing scale (margin, padding)
  - Text utilities (colors, alignment, sizing)
  - Animation utilities
  - Accessibility helpers (`.cyber-sr-only`, `.cyber-focus-visible`)

- **Documentation**
  - Comprehensive README with installation and usage examples
  - Interactive demo site with component showcase
  - SCSS source files for customization

### Browser Support

- Chrome 105+
- Firefox 121+
- Safari 15.4+
- Edge 105+
