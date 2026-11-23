<!-- Proposed by developerz.ai onboarding. This file is yours: the `fix-sweep`
entry under `schedules:` in your policy file reads it each time it fires. Edit it to
steer the sweep; delete that entry to stop it. -->

# Post-merge fix sweep

The weekly fix sweep: the changes merged into the default branch in the last 7 days, read again for the defects their own review let through, and fixed in one pull request.

## 1. Find the touched area

List the files the default branch's merges of the last 7 days changed, from the repository's history. The touched area is those files and their direct callers. Nothing merged: say so and stop.

## 2. Hunt

Read the touched area for, worst first:

- **correctness**: an error path that is swallowed or unhandled, a missing await, an off-by-one, two writers racing on one row or file
- **cost**: a query or remote call issued one per item of a loop, a read or collection with no bound on its size over data that grows, a new filter or sort that no index serves
- **lifetime**: a handle, timer, listener or cache that outlives its owner
- **reuse**: a new copy of a helper the repository already has; name both
- **drift**: a doc, comment or example the merged change made false

Skip tests, fixtures, generated and vendored code. Confirm before you claim: a defect is one you can make fail.

## 3. Fix

- One pull request for the whole sweep, one goal: the defects this week's merges brought in.
- For each defect, a test that fails before the fix and passes after. Run it red first.
- Delete what the fix makes dead.
- Run the repository's own check before you open the pull request; it must pass.
- A defect you cannot make fail is not fixed here: name it in the report, with no pull request for it.
- Do not edit CI configuration or the policy file.

No defect: no pull request. A clean week is a good result; say so and stop.

## Report

The range of merges you read, each defect with its `path:line`, its test and its fix, and what you could not cover, with why.
