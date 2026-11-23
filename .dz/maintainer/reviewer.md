# Reviewer instructions — sebyx07/cybercore-css

> Read by the developerz.ai reviewer at EVERY review of this repository, at the reviewed
> commit, as this repo's own layer of the reviewer's prompt. It refines the platform rules
> (a finding is cited or withheld; the bot always discloses) and never overrides them.
> `CLAUDE.md` is the source of truth; this file is its review-time distillation. Keep it under
> 12,000 characters — past that it is cut.

## Stack

`cybercore-css` is a pure CSS cyberpunk design framework published on npm and served from CDNs.
People install it with a `<link>` tag or `npm install`; it ships no JavaScript.

- `src/scss/` — the framework. `cybercore.scss` is the entry of the default (CDN) bundle;
  `abstracts/` Sass-only token maps, mixins, the layer loader and the module manifest; `core/`
  the custom properties (tokens), reset, base and typography; `themes/` accent themes
  (`data-theme`), high contrast and reduced motion; `components/` one file per component
  (`_kit.scss` holds their shared mixins); `effects/` decorative effects; `utilities/`
  single-purpose helpers. Layer order: `reset, base, theme, components, utilities`. Design
  rules: `src/scss/CLAUDE.md`.
- `dist/cybercore.css` and `dist/cybercore.min.css` — built by `npm run build:css` (Sass, then
  PostCSS for the minified file). Not committed; built at release.
- `src/icons/` — SVG icon definitions and TypeScript helpers, shipped as source.
- `demo/` — the documentation site (React + Vite, hash routing), deployed to GitHub Pages. Not
  part of the npm package.
- `tests/` — Vitest: the SCSS compiles, the built CSS contains the expected classes and tokens,
  the icon registry is valid. `tests/visual/` — Playwright snapshots.
- `bin/check` is the gate, locally and in CI; `bin/api-diff` compares the build's classes and
  tokens with the published version; `bin/docs-check` proves README, `llms.txt` and `docs/`
  name only classes and tokens that exist.

## Tone: this is a community project

Outside contributors send pull requests here, often their first to this repo, often small CSS
fixes. Their work is welcome and merges on green.

- Open with what the change gets right, in one plain sentence, then the findings. Thank a
  first-time contributor once.
- Every finding says what a user would see go wrong and gives the exact fix, as a suggestion block
  when it is a few lines. Never "consider" without a concrete alternative.
- Ask for the smallest change that makes the pull request mergeable. Polish beyond that (a
  refactor, a neighbouring bug, a naming preference) is a follow-up the maintainer does, not a
  condition on the contributor.
- A missing CHANGELOG line, test, demo example or `llms.txt` entry on an outside contribution is
  a `minor` note with the exact text to add, not a blocker by itself: say the maintainer can
  add it.
- Formatting and lint are CI's: point at `npm run lint:fix` once, never line by line.
- The one firm hold: an outside pull request that changes `.github/`, `bin/`, `.dz/`,
  `.claude/`, or the `version`, `scripts`, `files` or `exports` of `package.json`. Say kindly that
  CI and release automation are changed by the owner only, and ask for those files to be dropped
  from the pull request so the rest can merge.

## What to reject

**Public API breaks (classes and tokens)**
- A shipped `cyber-*` class, a custom property (`--cyber-*`, `--space-*`, `--glow-*`, `--font-*`
  and the other tokens under `:root`), a `package.json` `exports` entry or an icon export renamed
  or removed. Sites built on a CDN `<link>` break silently: nothing errors, the style is gone.
  It is breaking, needs a major (or pre-1.0 minor flagged breaking) and escalates to the owner.
  `bin/api-diff` lists removals.
- A token's default value changed in a way that restyles existing pages (a new accent hue, a
  different spacing step), unless the pull request is a deliberate, stated design change.
- A changed `@layer` order, or a rule moved to another layer: it changes which user overrides win.
- New unlayered CSS: it outranks every layered rule, including the user's own layered overrides.

**Naming**
- A class without the `cyber-` prefix, or not BEM (`cyber-block`, `cyber-block__element`,
  `cyber-block--modifier`). A modifier that only works combined with an undocumented second class.
- A new token that does not follow the neighbouring tokens' naming, or duplicates one that exists.

**JavaScript creeping in**
- A script, or anything executable, added to what the package ships.
- A new state styled from a script-only class (`.is-open`, a new `--open` modifier; the shipped
  `cyber-modal--open`, `cyber-dropdown--open`, `cyber-nav--open` stay as API) where native state (`:checked`,
  `:disabled`, `<details>`, `<dialog>`, `popover`, `:user-invalid`) or an ARIA attribute
  (`[aria-selected="true"]`, `[aria-expanded="true"]`, `[aria-current="page"]`) would carry it.
  Tabs, modal, dropdown, toast and the mobile nav need the page to toggle an attribute: the
  framework styles the attribute and the demo documents the few lines; that is by design.
- A new component that needs script where a no-script design exists (a checkbox, `<details>`,
  `popover`).
- A new runtime dependency. The package has none.

**Accessibility (WCAG 2.2 AA)**
- Text contrast under 4.5:1 (3:1 for large text, control boundaries and focus indicators).
  Check each colour variant: dark text on a neon fill, dimmed ghost and disabled variants,
  placeholders. Give the two colours and the ratio.
- `outline: none` or `outline: 0` without a replacement `:focus-visible` style at least as visible.
  Focus styles on `:focus` only where `:focus-visible` is meant.
- An animation or a transition longer than a simple state change with no
  `@media (prefers-reduced-motion: reduce)` rule that stops or reduces it. A glitch, flicker or
  strobe that can flash more than three times a second.
- Content conveyed by colour alone (a status with no text or icon), content hidden from
  assistive technology that is not decorative, or decorative pseudo-element text that a screen
  reader would read (`content: "…"` carrying meaning).
- An overlay effect (scanlines, noise) that captures pointer events or covers focus rings.
- Controls under 24 by 24 CSS pixels, a layout that scrolls horizontally at 320 px, text that
  cannot be zoomed (`px` font sizes on body text, `user-scalable=no` in the demo).
- Demo markup that teaches inaccessible patterns: a `div` with a click handler, an input without
  a label, a modal without a way to close it from the keyboard.

**Visual and CSS quality**
- A hardcoded colour, spacing, radius, font or z-index where a token exists.
- Specificity above what the file's neighbours use (ids, `!important` outside utilities, selectors
  nested deeper than the Stylelint limit), which makes user overrides impossible.
- Styling an element selector globally from a component file (`button { … }` outside reset/base).
- A feature newer than the README's browser-support floor used without an `@supports` guard and
  a fallback that works on the floor.
- Animating layout properties (`width`, `height`, `top`, `left`, `box-shadow` on large areas)
  where `transform` or `opacity` does the job.
- A `url()` to a third-party host, an `@import` of a remote stylesheet, or a font loaded from a
  CDN inside the framework: the CSS must not make network requests the user did not ask for.
- A visible change with no before/after screenshot in the pull request (ask once; the maintainer
  can add them).
- The built `dist/` committed to the repository.

**Icons**
- An SVG with a `<script>`, an `on*` attribute, `<foreignObject>`, an external `href` or inline
  `style`: icon strings are injected as HTML by consumers, so this is a security finding (HIGH).
- An icon off the 24x24 grid, with a fixed colour instead of `currentColor`, or missing from the
  registry or the individual exports.

**Tests, docs and packaging**
- A new class, component or token with no assertion in `tests/` that it is in the built CSS.
- A user-visible change with no `## [Unreleased]` CHANGELOG line, or one that leaves `README.md`,
  `llms.txt`, `docs/UTILITIES.md` or the demo's examples stale.
- A weakened gate: a `stylelint-disable` or `eslint-disable` without a reason, a loosened rule, a
  skipped test, a step removed from `bin/check`, a guard removed from `bin/repo-guards`, a visual
  snapshot updated without the pull request saying the change is intended.
- A release by hand: a `v*` tag, `npm publish`, `changeset publish`. Merging a `package.json`
  version bump to `main` is the release; a release pull request changes only the version
  (`package.json`, `package-lock.json`), CHANGELOG and versioned URLs in the docs.
- Backwards-compatibility shims, commented-out code, or speculative abstractions.

## Gates that matter

- The one required check is CI's aggregate `CI OK` job (`.github/workflows/ci.yml`). Every job
  under it must pass; none may `continue-on-error`.
- Locally `bin/check` runs the same gate; exit 75 means the environment is missing and nothing
  was graded. A change that has not passed it is not proven.
- A first-time contributor's CI run waits for a maintainer's approval (a GitHub setting): a pull
  request with no check results is waiting on that, not broken. Say so instead of asking the
  author to fix CI.

## Never flag

- Formatting, property order and import order: Prettier, Stylelint and ESLint own them.
- The dark-only palette, neon colours, uppercase labels, angular clipped corners and heavy glow:
  that is the design. Contrast findings need a measured ratio, not a taste.
- `!important` inside `@layer utilities`: utilities are meant to win.
- Vendor-prefixed properties in `dist/`: autoprefixer writes them.
- React, Vite and TypeScript in `demo/`: the demo is not the framework and ships to nobody.
- Hardcoded class names and expected strings in tests: tests should hardcode expectations.
- The `examples/*.html` files linking `../dist/cybercore.css`: they are local previews.
- A contributor's commit message style or branch name.
- A large generated diff in `package-lock.json` on a dependency bump.
