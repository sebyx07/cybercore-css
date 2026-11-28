# Repository score

Weekly checkup, Tuesdays 05:00 UTC, fired by `schedules: repo-score` in
`.dz/maintainer/maintainer.yml` as a read-only scout. It is the developerz.ai platform's standard
score, adapted to cybercore-css: ten checks of whether this repository can be worked on unattended,
10 points each. You read files only: no shell, network or database. You also have the Signals
block: recent CI failures, failed tasks, old open pull requests and issues.

**Evidence or nothing.** Every failing row names a `path:line`, a path that is missing, or a
Signals line. A row that neither the files nor the Signals block can answer is `not read`, never an
estimate, and is left out of the total.

## The checks

1. **One-command gate.** `bin/check` runs the repo guards, lint, format, typecheck, tests, icon
   validation, the build, the size budget, the package check and the docs truth check, and
   `CLAUDE.md` names it. Fails when `bin/check` is missing, or when one of lint, typecheck or tests
   is no longer among its steps (`FULL_STEPS` in `bin/check`, the `check` script in
   `package.json`).
2. **Default branch green.** Fails when the Signals block lists a failing CI job on `main`. `not
   read` when that section is missing.
3. **Tests run in CI.** Fails when `tests/` holds no vitest file, or when the pipeline skips them
   wholesale: a disabled job, a skip-all flag, a `test` script that runs none.
4. **Agent file.** `CLAUDE.md` at the root (with `AGENTS.md` a symlink to it) opens with the
   commands and links the deeper docs. Fails when it is missing, a placeholder, or names a command
   or path the repository does not have.
5. **Direction page.** `docs/idea/direction.md` says what the product is for, what better means
   here, and what is out of bounds. Fails when it is missing or empty. Its handoff asks for a first
   draft from the README, the CHANGELOG and what merged recently, marked a draft for the maintainer
   to correct, and never invents a direction. A page still marked draft passes, and the report
   says it awaits the owner.
6. **No tracked secret or build artifact.** Fails on a committed secret, token, private key or
   filled environment file, and on committed `dist/`, `demo/dist/`, `node_modules/`,
   `playwright-report/` or `test-results/`. Quote the key name and the path, never the secret's
   value.
7. **Dependency updates clear.** No dependency update pull request open over 7 days.
8. **No stale pull requests.** No other pull request open over 7 days.
9. **Issues are decided.** No issue open over 30 days with no triage decision.
10. **Deploy verdict wired.** Two lanes ship here: `.github/workflows/release.yml` publishes to npm
    and creates the GitHub release, and `.github/workflows/deploy.yml` publishes the demo to GitHub
    Pages. Each must report its outcome (a failed workflow run is that report). Fails when a lane ships and nothing reports.

No file holds checks 7, 8 and 9: grade each from its Signals section; a missing one is `not read`.
Ages count from opening, not last activity. Branches are not listed: check 8 says so.

**Graded, never filed.** A tracked secret, and any failure whose fix changes CI configuration, the
merge gate or a policy file, is scored and written in your answer for a person: a secret is rotated
first, then removed from history. Never name a CI configuration file or a secret-shaped path in a
handoff: a handoff naming one is refused whole.

## Rows

One per check; a handoff reports one failing row.

- `one-command-gate`: no single documented command runs the type check, the lint and the tests
- `default-branch-green`: a CI job is failing on the default branch
- `tests-in-ci`: there are no tests, or the pipeline does not run them
- `agent-file`: the agent instruction file is missing, a placeholder or wrong about the repository
- `direction-page`: `docs/idea/direction.md` is missing or empty
- `tracked-files`: a secret or a build artifact is committed
- `dependency-updates`: a dependency update pull request has been open over 7 days
- `stale-work`: a pull request has been open over 7 days
- `issues-decided`: an issue open over 30 days has no triage decision
- `deploy-verdict`: a deploy reports no outcome and no missing deploy target is stated

## How to judge

- Confirm before you claim: read the file that does the thing, not only a file that mentions it.
- A check that does not apply here passes, and keeps its 10 points.
- One handoff per failing row: every site of the failure goes in it, worst first.
- A row that already has an open issue (its title) is scored, not
  filed again.

## Every finding

Besides the checkup rules' fields, each handoff carries these; one over any limit is dropped whole:

- **work**: one sentence naming the failure and the fix, at most 300 characters.
- **evidence**: at most 10 lines of at most 280 characters each, one `path:line: the code` or one
  missing path per site.
- **paths**: at most 20 files.
- **anchor**: the row id, then the worst file or what is missing, at most 120 characters.
- **metric**: the row's 10 points, at most 200 characters.

## Report

First the score: one line per check, `pass`, `fail` or `not read`, each fail with its evidence.
Then the total, `N of 100`, or `N of M over K checks read`, with the change since the last checkup
when the Signals block names one. Then what was graded and not filed, and what you could not read
and why.

A full score is a result: say so plainly, and file nothing.
