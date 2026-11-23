# Hygiene checkup

Weekly checkup, Sundays 11:00 UTC, OFFERED and off: the `hygiene` entry in
`.dz/maintainer/maintainer.yml` is commented out, and uncommenting it is the opt-in. It is the
developerz.ai platform's standard hygiene checkup, adapted to a CSS framework: a deep read for the
defects tests never show. A read-only scout: you read files only, no shell, network or database, so
a finding whose harm depends on a size you cannot see (bytes in the CDN bundle, a selector's match
cost) is marked `measure first: yes`, never guessed. Read `CLAUDE.md` and `src/scss/CLAUDE.md`
first: their invariants define what a defect is here.

## What to look for

1. **Cascade.** A rule outside its `@layer`; specificity above a single class in `core/` reset or
   base; `!important` outside a utility; a selector that a user's one-class override can no longer
   beat.
2. **Tokens.** A hardcoded colour, spacing, font, radius, duration or z-index in a component where
   a token exists; a token nothing reads; two tokens for one value.
3. **Reuse.** A partial re-implementing a mixin `components/_kit.scss` or `abstracts/` already has
   (focus ring, frame, clip, reduced-motion guard). Name both the copy and the original.
4. **Bundle weight.** A duplicated rule, a rule that the build emits twice, a vendor prefix
   autoprefixer already adds, a module in the default bundle (`abstracts/_manifest.scss`,
   `cybercore.scss`) whose classes nothing in the demo or docs uses.
5. **Documentation drift.** In `README.md`, `llms.txt`, `docs/`, `CLAUDE.md`, `CONTRIBUTING.md`
   and the demo's data files: a path that no longer exists, a command naming a script the
   repository does not define, a class, token or import path the sources no longer have. Quote both
   the doc line and the source.
6. **Code quality.** A partial far beyond the others' size; dead code (a mixin with no caller, an
   icon helper nothing exports, a script nothing runs).
7. **Motion and access.** A keyframe animation with no reduced-motion rule in its partial; a
   `:focus` style with no `:focus-visible`; `outline: none` with no replacement ring; an overlay
   effect without `pointer-events: none`.

## Rows

One per area above; a handoff reports one failing row.

- `cascade`: cascade and specificity
- `token`: tokens
- `reuse`: reuse
- `weight`: bundle weight
- `doc-drift`: documentation drift
- `quality`: code quality
- `motion-access`: motion and access

## How to judge

- Confirm before you claim: read the partial and the module that loads it. A pattern is a finding
  only once you have seen that it ships in the built CSS.
- Rank by blast radius: what breaks users' pages first (cascade, access, a doc naming a class that
  does not exist), weight and quality last.
- Skip tests, fixtures, generated files, `dist/` and `node_modules/`. Skip CI configuration and
  `.dz/`: a handoff naming one is refused whole.
- One handoff per row: every defect in an area goes in it, worst first.
- A finding that would rename or remove a shipped class or token is breaking: report it, do not
  file it.

## Every finding

Besides the checkup rules' fields, each handoff carries these; one over any limit is dropped whole:

- **work**: one sentence naming the defect and the fix, at most 300 characters.
- **why**: a concrete failure scenario, what triggers it and what breaks, at most 300 characters.
- **evidence**: at most 10 lines of at most 280 characters each. Up to 8 lines `path:line: the
  code`, one per site; with more sites, a 9th line "and N more sites like it in <directories>".
  The last line starts `measure first:`, `no` with the reason or `yes` with what to measure and
  how (`npm run build:css`, then `npm run check:size`).
- **paths**: at most 20 files.
- **anchor**: the row id, then the worst file or selector, at most 120 characters.
- **metric**: the number the fix moves, at most 200 characters.

## Report

For each of the seven areas: what you read and whether it was clean. Name any area you could not
cover, and why.
