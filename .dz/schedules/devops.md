# Devops checkup

Weekly checkup, Saturdays 23:00 UTC, OFFERED and off: the `devops` entry in
`.dz/maintainer/maintainer.yml` is commented out, and uncommenting it is the opt-in. It is the
developerz.ai platform's standard devops checkup, adapted to cybercore-css: how this repository
ships, graded on five axes. A read-only scout: you read files only, no shell, network or database.
You also have the Signals block: recent CI job failures and failed tasks.

What ships here: an npm package (`cybercore-css`, CSS, Sass sources and icon definitions, no
runtime dependency) published by `.github/workflows/release.yml` through npm trusted publishing
when `package.json`'s version changes on `main`, and the demo site published to GitHub Pages by
`.github/workflows/deploy.yml`. There is no server, container or database.

**Evidence or nothing.** Every point lost names a `path:line` or a Signals line. A number you
cannot read is reported as `not read`, never an estimate, and a finding whose harm depends on a
size or a rate you cannot see is marked `measure first: yes`. Do not fix what is not broken.

## The axes

1. **Reliable.** Does a change get proved before it ships, and can a bad one be undone?
   - `bin/check` and CI run the same gate (`ci.yml` runs `bin/check`; the aggregate `CI OK` job
     needs every other job), and `release.yml` runs that workflow before `npm publish`.
   - `package-lock.json` is committed and agrees with `package.json`; Node is pinned by `.nvmrc`.
   - A bad release can be undone: `RELEASE.md` says how (`npm deprecate` the broken version and
     ship a fixed patch; a published version is never republished).
   - Signals: the same CI job or task failure kind recurring. Report the counts as they stand.
2. **Secure.** What could leak, or run that nobody reviewed?
   - A secret, token or npm credential committed to the tree. Quote the key and path, never the
     value. Publishing is OIDC: an `NPM_TOKEN` anywhere is a finding.
   - Third-party actions pinned to a full commit SHA; workflow `permissions` declared and narrow;
     no `pull_request_target`.
   - In the package: an SVG icon with a script, event handler, `style` or external reference
     (consumers inject icon strings as HTML); a remote `url()`, `@import` or font in the CSS.
3. **Fast.** How long does a change wait for its answer?
   - CI that repeats work: serial jobs that could run side by side, a step rebuilding what an
     earlier one built. The missing dependency cache in `ci.yml` is deliberate (its comment says
     why): not a finding.
   - Superseded CI runs left running (`concurrency`).
4. **Efficient.** What does this repository carry that it does not use?
   - A devDependency nothing imports, two tools doing one job, a file in the npm tarball that
     users never load (`files` in `package.json`, `scripts/check-package.ts`).
   - A generated artifact committed beside its source (`dist/` is never committed).
5. **Cheap.** What costs money every day without paying for itself?
   - A scheduled workflow or checkup far more frequent than its result is read; a test matrix wider
     than the Node versions supported.
   - Workflow artifacts or Pages builds kept with no expiry.
   - Money is almost always `measure first: yes`: name what to measure, never a price you did not
     read.

**CI configuration is graded, never filed.** Read workflow files to score the axes, and report what
you find in your answer. Never name a CI configuration file in a handoff, nor a secret-shaped path:
a handoff naming one is refused whole.

## Rows

One per axis; a handoff reports one failing row.

- `reliable`: a change can ship unproved, or cannot be undone
- `secure`: something can leak, or run unreviewed
- `fast`: a change waits on avoidable work
- `efficient`: the repository carries what it does not use
- `cheap`: something costs money every day without paying for itself

## How to judge

- Confirm before you claim: read the file that does the thing, not only a file that mentions it.
- Rank by blast radius: what breaks or leaks for users first, money last.
- Skip tests, fixtures, generated and vendored code.
- A check that does not apply to this repository is not a failure.
- One handoff per row: every defect on an axis goes in it, worst first.

## Every finding

Besides the checkup rules' fields, each handoff carries these; one over any limit is dropped whole:

- **work**: one sentence naming the defect and the fix, at most 300 characters.
- **why**: a concrete failure scenario, what triggers it and what breaks, at most 300 characters.
- **evidence**: at most 10 lines of at most 280 characters each. One line `path:line: the code` per
  site. The last line starts `measure first:`, `no` with the reason or `yes` with what to measure
  and how.
- **paths**: at most 20 files.
- **anchor**: the row id (`reliable:`, `secure:`, `fast:`, `efficient:` or `cheap:`), then the
  worst file or symbol, at most 120 characters.
- **metric**: the number the fix moves, at most 200 characters.

## Report

First the score, then the findings.

For each axis, `N of 5` or `not read`: 5 means you looked and nothing failed, and each failing check
costs a point. One line per point lost, with its evidence. Then the total, `N of 25`, or `N of M
over K axes read`, with the change since the last checkup when the Signals block names one.

Then the finding list, worst first: every point lost, including the CI configuration ones no handoff
may carry. Name anything you could not cover, and why.
