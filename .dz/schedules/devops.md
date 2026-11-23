<!-- Proposed by developerz.ai onboarding. This file is yours: the
`devops` entry under `schedules:` in your policy file reads it each time it fires.
Edit it to steer the checkup; delete that entry to stop it. -->

# Devops checkup

The weekly devops checkup: how this repository ships, graded on five axes. You read files only: no shell, network or database. You also have the Signals block: recent CI job failures and failed tasks.

**Evidence or nothing.** Every point lost names a `path:line` or a Signals line. A number you cannot read is reported as `not read`, never an estimate, and a finding whose harm depends on a size or a rate you cannot see is marked `measure first: yes`. Do not fix what is not broken.

## The axes

1. **Reliable.** Does a change get proved before it ships, and can a bad one be undone?
   - A gate exists that runs the tests, and the local command and CI run the same thing.
   - Dependencies are locked: a lockfile is committed and agrees with the manifests it locks.
   - Long-running services declare a health check; a release can be rolled back.
   - Signals: the same CI job or task failure kind recurring. Report the counts as they stand.
2. **Secure.** What could leak, or run that nobody reviewed?
   - A secret, token, private key or `.env` value committed to the tree. Quote the key and path, never the secret's value.
   - Third-party CI steps and base images pinned to an immutable digest, not a moving tag.
   - CI token permissions declared and narrow. A secret scan or dependency audit that exists and runs.
   - A service, port or bucket opened to everyone with no stated reason.
   - In the code: a URL dialled again after its address was checked, a lookup by id with no owner scope, ciphertext not bound to its row, a signed request with no timestamp.
3. **Fast.** How long does a change wait for its answer?
   - CI that repeats work: no dependency cache, serial jobs that could run side by side, a step rebuilding what an earlier one built.
   - Superseded CI runs left running.
4. **Efficient.** What does this repository carry that it does not use?
   - A dependency nothing imports, two libraries doing one job, a dev tool shipped in a production image.
   - An image that copies more than it runs, a generated artifact committed beside its source.
5. **Cheap.** What costs money every day without paying for itself?
   - A scheduled job far more frequent than its result is read, a test matrix wider than the versions supported.
   - Stored artifacts, logs, images or backups with no expiry.
   - Money is almost always `measure first: yes`: name what to measure, never a price you did not read.

**CI configuration is graded, never filed.** Read workflow and pipeline files to score the axes, and report what you find in your answer. Never name a CI configuration file in a handoff, nor a secret-shaped path: a handoff naming one is refused whole.

## Rows

One per axis; a handoff reports one failing row.

- `reliable`: a change can ship unproved, or cannot be undone
- `secure`: something can leak, or run unreviewed
- `fast`: a change waits on avoidable work
- `efficient`: the repository carries what it does not use
- `cheap`: something costs money every day without paying for itself

## How to judge

- Confirm before you claim: read the file that does the thing, not only a file that mentions it.
- Rank by blast radius: what breaks or leaks in production first, money last.
- Skip tests, fixtures, generated and vendored code.
- A check that does not apply to this repository is not a failure.
- One handoff per row: every defect on an axis goes in it, worst first.

## Every finding

Besides the checkup rules' fields, each handoff carries these; one over any limit is dropped whole:

- **work**: one sentence naming the defect and the fix, at most 300 characters.
- **why**: a concrete failure scenario, what triggers it and what breaks, at most 300 characters.
- **evidence**: at most 10 lines of at most 280 characters each. One line `path:line: the code` per site. The last line starts `measure first:`. Write `measure first: no` with the reason when the file alone proves the harm, or `measure first: yes` with what to measure and how.
- **paths**: at most 20 files.
- **anchor**: the row id (`reliable:`, `secure:`, `fast:`, `efficient:` or `cheap:`), then the worst file or symbol, at most 120 characters.
- **metric**: the number the fix moves, at most 200 characters.

## Report

First the score, then the findings.

For each axis, `N of 5` or `not read`: 5 means you looked and nothing failed, and each failing check costs a point. One line per point lost, with its evidence. Then the total, `N of 25`, or `N of M over K axes read`, with the change since the last checkup when the Signals block names one.

Then the finding list, worst first: every point lost, including the CI configuration ones no handoff may carry. Name anything you could not cover, and why.
