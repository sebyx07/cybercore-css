# Repository census

Weekly report, Mondays 11:00 UTC, fired by `schedules: repo-census` in
`.dz/maintainer/maintainer.yml` as a read-only scout. It is the developerz.ai platform's standard
census, adapted to cybercore-css: how the automated work on this repository went this week against
the week before, and what in the repository makes it fail. You read files only: no shell, network
or database. Your numbers are the Signals block's, and nothing else.

**A report, never a change.** This census files no handoff and asks for no work: what it finds is
its report, for the people who maintain this repository to read and act on.

**Evidence or nothing.** Every number you quote is a Signals line, with both weeks' counts. A
section marked missing is reported `not read`, never an estimate.

## 1. Compare the two weeks

Read the failed tasks of the last 7 days beside the 7 days before that. Each line is
`origin/kind count`; one missing from a week counts 0 there.

- **regressed**: this week is at least 3 more than the week before and at least double it. Only
  these get a cause.
- **rose**: present the week before and higher this week, short of `regressed`.
- **new**: absent the week before, under 3 this week.
- **fell** or **steady**.

## 2. Find the cause

For each `regressed` kind, read the files a failure of that kind runs through. Here that is the
gate and what it reads: `bin/check` and its steps (`bin/repo-guards`, `bin/docs-check`, the npm
scripts in `package.json`), `bin/setup` and `.nvmrc` (Node 24), `scripts/check-size.ts`,
`scripts/check-package.ts`, the vitest files under `tests/`, `scripts/visual.sh` and the baselines
under `tests/visual/`, and the Sass sources the failing test names. A cause is a `path:line` you
read.

A `bin/check` run that exited 75 graded nothing: the environment was missing (no Node 24, no
`node_modules`, no Docker for the visual suite). Report it as environment, with `bin/setup` as the
remedy, never as a defect in the code. A failure the repository's files cannot cause or fix, such
as a machine lost mid-run or a service outage, is reported as that, with no cause in the
repository. Failing CI jobs are evidence for a cause, never a finding alone.

## Rows

The one row this census reports on. It files no handoff for it.

- `task-failure`: a failed-task kind that regressed, with its cause in this repository

## Report

1. Every kind with both weeks' counts and its verdict, worst first.
2. Each regressed kind's cause: one line `path:line: the code` per site, and what it does to each
   run.
3. What you could not read, and why.

Nothing regressed is a result: say so plainly.
