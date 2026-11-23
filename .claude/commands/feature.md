---
description: Take one change in sebyx07/cybercore-css from idea to merged — explore, build, prove it with bin/check, open one pull request, watch it land. Use for feature, implement, build it, ship this, fix and merge.
argument-hint: <what you want built or fixed>
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Task
---

# /feature — idea to merged in sebyx07/cybercore-css

> Workflow command — established by the developerz.ai maintainer agent for the maintainers of this repository. Correct it in place;
> setup never overwrites a command that exists.

**Done means MERGED.** A green local gate is not done, and an open pull request is not
done. Report what you verified, never what you assume happened.

**Decide, never park.** A question the code, the docs or a command can answer is yours to
answer: record the call and its reason in the pull request. Stop for a person only on
payment, a legal choice or access you cannot obtain. A blocked dependency gets another
route before it gets a report, and every part that does not need it is finished first.

## Goal

$ARGUMENTS

## Steps

1. Restate the goal in one line. If it names a URL or an issue, read it first.
2. **Distrust the paperwork.** Check any plan, status file or design doc against the code
   and `git log` before working from it — trackers rot in both directions. Say plainly
   which claims you falsified, and fix the doc in the same change.
3. Explore read-only, in parallel, into a ranked worklist of PR-sized batches.
4. Build primitive-first: one reusable primitive with its first real caller. No
   abstraction before a consumer.
5. **Prove it.** `bin/setup` after any dependency change, then `bin/check`, which here is
   `npm run typecheck && npm run lint && npm run test`.
   Red is not a pull request: fix the cause, never silence the gate. Add the failing test
   first — a green run that never went red proves nothing.
6. **One pull request in flight, start to finish.** Open it, watch it to merged, run
   `git fetch`, and only then start the next. Each merge rebases the base under the
   other, and green-when-opened is not green-to-merge.
7. Re-check the original symptom after the merge, and leave the issues and docs true.
   Close what you opened: the issue, the merged branch, every process and scratch file.

## Fan-out rules — restate these to every agent you spawn

- **One checkout — the file set is the lock.** A git worktree is earned only by a second
  branch in flight, and step 6 keeps one pull request in flight, so this command never
  earns one ([worktrees: when](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/ai-agents/hive-mind.md#-worktrees-when)). A tree nobody is looking at
  hides work, and each costs its own install and its own test database.
- **Exclusive file sets.** Two agents never write one file, and a rename or a signature
  change pulls every caller into the same set.
- **No git in a spawned agent** — no add, commit, branch, stash or push. You own git, and
  you touch it only once every agent has returned.
- **Scope each agent to the files it edited.**
  Each agent runs the test runner and the linter on its own paths, never `bin/check`: here it is the whole-repository gate.
  Never a check that diffs the working tree to decide what to run: inside a fan-out it
  grades the other agents' half-written files.
- **The full gate is yours, run once, at the end**: `bin/check`.
  Run one full gate at a time per machine: several full suites at once exhaust its memory. A `bin/check` that setup wrote enforces it with a lock, and a second run waits.

## Standards — open the page your change touches

Cross-repo rules, linked rather than copied so a correction reaches this repo too:

- [Project from zero](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/workflow/project-from-zero.md) — the repo has no code yet: docs first, then tooling, then code.
- [Resource lifetimes](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/architecture/resource-lifetimes.md) — the change acquires a temp dir, child process, lock, pool or timer.
- [Memory and leaks](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/architecture/memory-and-leaks.md) — a long-lived process grows, or restarts with no error.
- [Query shape](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/architecture/query-shape.md) — the change adds a query inside a loop, a tick or a list view.
- [Bug sweep](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/workflow/bug-sweep.md) — the ask is an area or a goal, not one stated fix.
- [The .dz/ contract](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/workflow/dz-contract.md) — the change edits anything under `.dz/`.
- [Harness techniques](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/ai-agents/harness-techniques.md) — the repo builds or tunes a coding agent.
- [Prompts for weak models](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/writing-for-agents/prompts-for-weak-models.md) — you write a prompt a cheaper model must follow.
- [Dependency updates](https://github.com/developerz-ai/gold-standards-in-ai/blob/main/docs/developer-experience/dependency-updates.md) — the change adds or bumps a dependency: a release younger than 14 days waits, a security fix does not.
