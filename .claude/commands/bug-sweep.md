---
description: Sweep one area of cybercore-css for defects — run the detectors below, fix each with a failing test first, ship one goal-scoped pull request. Use for bug sweep, find bugs, fix everything in, QA pass.
argument-hint: <the area or goal to sweep, e.g. "forms" or "effects">
---

Sweep `$ARGUMENTS` for defects. A clean area reported clean is a success: never invent a defect to have something to ship, never fix what is not broken. Read `CLAUDE.md` and `src/scss/CLAUDE.md` first; their invariants bind every fix.

## Steps

1. Read the area (the partials, what loads them, its demo pages), then run each detector below over it. Read the code that does the thing, not only a file that mentions it.
2. For each defect: write the failing test first (a vitest assertion on the built CSS in `tests/`) and watch it fail, then fix the cause.
3. A defect class that recurred is fixed as a class: a stylelint rule, a test or a guard that makes the next one fail, in the same change.
4. Prove it with `bin/check`. Visible changes also get `npm run build && npm run test:visual` and before/after screenshots at 1440 and 390 (the `verify-change` skill). Red is not a pull request: fix the cause, never silence the check.
5. Ship one goal-scoped pull request for the area, every defect in it with its test, and a `CHANGELOG.md` `## [Unreleased]` line for what users see. A defect outside the area is its own pull request, named in the body.
6. The body lists each defect: the markup or setting that broke it, the test that pins it, the fix.

A fix that renames or removes a shipped class or token, changes the layer order or raises the browser floor is breaking: report it and stop for the owner.

## What to hunt — run the detector, do not just read

| Class | Detector |
| --- | --- |
| Partial nothing loads — the class is written, the build lacks it | grep `dist/cybercore.css` after `npm run build:css` for each class the area defines |
| Rule outside its layer, or specificity above one class | read the selector's layer and weight; a user's one-class override must still win |
| Hardcoded value where a token exists | a literal colour, spacing, font, radius, duration or z-index in a component |
| State only a class can reach | an interactive state with no native or ARIA hook (`:checked`, `[aria-expanded="true"]`) |
| Focus ring missing or clipped | Tab through the demo page; `:focus` without `:focus-visible`, `outline: none` with no ring |
| Contrast under WCAG AA in a variant | computed text and boundary colours of every colour variant and state |
| Animation that ignores reduced motion | a keyframe loop with no `prefers-reduced-motion: reduce` rule in its partial |
| Overlay that eats input | an effect layer without `pointer-events: none`, or one above a focus ring |
| Breaks at 390 px | horizontal scroll or clipped content on the demo page at 390 wide |
| A doc, example or `llms.txt` line the code no longer matches | `bin/docs-check`, then read the sentence against the partial |
| Guard that proves nothing | break the guarded thing; if the test stays green, the test is the bug |
| Missing test | a class, modifier or token the area ships that no test asserts is in the build |
