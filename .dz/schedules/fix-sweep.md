# Post-merge fix sweep

Weekly sweep, Thursdays 17:00 UTC, OFFERED and off: the `fix-sweep` entry in
`.dz/maintainer/maintainer.yml` is commented out, and uncommenting it is the opt-in. It runs as a
devops task (`mode: devops`: a shell on a checkout, at most one pull request). It is the
developerz.ai platform's standard fix sweep, adapted to cybercore-css: the changes merged into
`main` in the last 7 days, read again for the defects their own review let through, and fixed in
one pull request. Read `CLAUDE.md` first: its invariants bind every fix.

## 1. Find the touched area

```bash
bin/setup
git log --since='7 days ago' --first-parent --format='%h %s' origin/main
git diff --stat "$(git rev-list -1 --before='7 days ago' origin/main)" origin/main
```

The touched area is those files and what loads them (the group `_index.scss`,
`abstracts/_manifest.scss`, `cybercore.scss`, the demo page that shows them). Nothing merged, or
only dependency bumps with an unchanged build: say so and stop.

## 2. Hunt

Read the touched area for, worst first:

- **broken output**: a new class or token missing from `dist/cybercore.css` (a partial nothing
  loads), a rule outside its `@layer`, a selector that no longer matches the documented markup
- **access**: a new interactive state with no `:focus-visible` ring, a colour variant under WCAG AA
  contrast, an animation with no reduced-motion rule, an overlay that eats pointer input
- **API**: a shipped class or token renamed or removed (`bin/api-diff`), a hardcoded value where a
  token exists
- **reuse**: a new copy of a mixin `components/_kit.scss` or `abstracts/` already has; name both
- **drift**: a line in `README.md`, `llms.txt`, `docs/` or the demo's data files that the merged
  change made false (`bin/docs-check`)

Skip tests, fixtures and generated files. Confirm before you claim: a defect is one you can make
fail.

## 3. Fix

- One pull request for the whole sweep, one goal: the defects this week's merges brought in.
- For each defect, a test that fails before the fix and passes after (a vitest assertion on the
  built CSS in `tests/`). Run it red first.
- A visible fix carries before and after screenshots at 1440 and 390 wide, and a CHANGELOG
  `## [Unreleased]` line.
- Delete what the fix makes dead.
- `bin/check` must be green before you open the pull request.
- A defect you cannot make fail is not fixed here: name it in the report, with no pull request for
  it.
- A fix that would rename or remove a shipped class or token is breaking: report it for the owner.
- Do not edit `.github/`, `.dz/` or the version in `package.json`.

No defect: no pull request. A clean week is a good result; say so and stop.

## Report

The range of merges you read, each defect with its `path:line`, its test and its fix, and what you
could not cover, with why.
