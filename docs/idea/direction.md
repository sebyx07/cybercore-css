# Direction

> **Draft for the owner to correct.** Written on 2026-11-23 from `README.md`, `CHANGELOG.md`
> (`## [Unreleased]` and 0.2.0 to 0.3.0) and the pull requests merged so far; nothing here was
> stated by the owner. Every line is a reading of what the project already does, not a new goal.
> Edit it in place, then remove this note. Until then, agents treat it as maintenance guidance
> only, and `scout.survey` stays at its default (`broken_only`) in `.dz/maintainer/maintainer.yml`.

## What the product is for

A cyberpunk look for any web page from one `<link>` tag: dark, neon, angular components, effects,
utilities, tokens and icons, with no JavaScript and no build step, usable from any stack. Readers:
people who copy a CDN URL into a page, Sass users who import single modules, and AI coding tools
that read `llms.txt`.

## What "better" means here

Ranked as the merged work so far ranks it:

1. **Nothing users already rely on breaks.** Classes, tokens, layer order and the browser floor
   are public API (`CLAUDE.md` § Invariants).
2. **Accessible without effort.** Focus, contrast, reduced motion, high contrast and forced colours
   handled in the framework (the accessibility and reduced-motion entries under `## [Unreleased]`).
3. **Contributors are answered and their work lands.** Outside fixes and additions (#3, #5, #6, #7)
   are finished and released, credited by handle.
4. **Complete for common UI.** Components and states a page needs, styled from native HTML and
   ARIA (the new components, forms and native dialog under `## [Unreleased]`).
5. **Easy to theme.** Overriding a token retints everything (semantic tokens, derived hue scales,
   `data-theme`).
6. **True docs.** The README, `llms.txt` and the demo site describe exactly what the build
   contains.
7. **Small.** The CDN bundle stays under its size budget.

## Out of bounds

The policy's `triage.non_goals` in `.dz/maintainer/maintainer.yml` is the list (no shipped
JavaScript or runtime dependency, no framework wrappers, no light default theme, no renamed public
names outside a major release, among others). It is linked here, not copied.

## Open questions for the owner

- Is a 1.0 release (freezing the API) a goal, and when?
- Which components or effects come next, if any, beyond those under `## [Unreleased]`?
- Is the companion package (cybercore-charts) part of this page's scope?
