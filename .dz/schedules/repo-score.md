<!-- Proposed by developerz.ai onboarding. This file is yours: the
`repo-score` entry under `schedules:` in your policy file reads it each time it fires.
Edit it to steer the checkup; delete that entry to stop it. -->

# Repository score

The weekly repository score: ten checks of whether this repository can be worked on unattended, 10 points each. You read files only: no shell, network or database. You also have the Signals block: recent CI failures, failed tasks, old open pull requests and issues.

**Evidence or nothing.** Every failing row names a `path:line`, a path that is missing, or a Signals line. A row that neither the files nor the Signals block can answer is `not read`, never an estimate, and is left out of the total.

## The checks

1. **One-command gate.** One documented command runs the type check, the lint and the tests, and the agent file or the README names it. Fails when there is none, or when it leaves one of the three out.
2. **Default branch green.** Fails when the Signals block lists a failing CI job on the default branch. `not read` when that section is missing.
3. **Tests run in CI.** Fails when there are no tests, or when the pipeline skips them wholesale: a disabled job, a skip-all flag, a command that runs none.
4. **Agent file.** A short instruction file at the root that opens with the commands and links the deeper docs. Fails when it is missing, a placeholder, or names a command or path the repository does not have.
5. **Direction page.** `docs/idea/direction.md` says what the product is for, what better means here, and what is out of bounds. Fails when it is missing or empty. Its handoff asks for a first draft from the README, the roadmap and what merged recently, marked a draft for the maintainer to correct, and never invents a direction.
6. **No tracked secret or build artifact.** Fails on a committed secret, token, private key or filled environment file, and on committed build output or dependency directories. Quote the key name and the path, never the secret's value.
7. **Dependency updates clear.** No dependency update pull request open over 7 days.
8. **No stale pull requests.** No other pull request open over 7 days.
9. **Issues are decided.** No issue open over 30 days with no triage decision.
10. **Deploy verdict wired.** Each deploy reports its outcome for the change it shipped, or the repository states it has no deploy target. Fails when it deploys and nothing reports the outcome.

No file holds checks 7, 8 and 9: grade each from its Signals section; a missing one is `not read`. Ages count from opening, not last activity. Branches are not listed: check 8 says so.

**Graded, never filed.** A tracked secret, and any failure whose fix changes CI configuration, the merge gate or a policy file, is scored and written in your answer for a person: a secret is rotated first, then removed from history. Never name a CI configuration file or a secret-shaped path in a handoff: a handoff naming one is refused whole.

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
- A check that does not apply here passes: a library with no deploy states so and keeps its 10 points.
- One handoff per failing row: every site of the failure goes in it, worst first.

## Every finding

Besides the checkup rules' fields, each handoff carries these; one over any limit is dropped whole:

- **work**: one sentence naming the failure and the fix, at most 300 characters.
- **evidence**: at most 10 lines of at most 280 characters each, one `path:line: the code` or one missing path per site.
- **paths**: at most 20 files.
- **anchor**: the row id, then the worst file or what is missing, at most 120 characters.
- **metric**: the row's 10 points, at most 200 characters.

## Report

First the score: one line per check, `pass`, `fail` or `not read`, each fail with its evidence. Then the total, `N of 100`, or `N of M over K checks read`, with the change since the last checkup when the Signals block names one. Then what was graded and not filed, and what you could not read and why.

A full score is a result: say so plainly, and file nothing.
