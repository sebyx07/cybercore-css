---
description: Prove a change in sebyx07/cybercore-css before committing or opening a pull request — the repo's own install, run and check commands. Use before every commit.
applies: [typescript, javascript, node]
---

# Verify a change in sebyx07/cybercore-css

> House skill — established by the developerz.ai maintainer agent for the maintainers of this repository from this repo’s own
> detected commands. Correct it in place; setup never overwrites a skill that exists.

## The gate, fast and full

`bin/check` is the gate. CI runs it and the pre-push hook runs it, so a change that
passes it locally passes everywhere.

| Form | Command | When |
|------|---------|------|
| fast | none | this repository has no fast gate: run its test runner and linter on your own paths |
| full | `bin/check` | once, before the change ships. CI and the pre-push hook run exactly this |

- Run one full gate at a time per machine: several full suites at once exhaust its memory. A `bin/check` that setup wrote enforces it with a lock, and a second run waits.
- Several agents in one checkout: Each agent runs the test runner and the linter on its own paths, never `bin/check`: here it is the whole-repository gate.
  Never a check that diffs the working tree to decide what to run: it grades the other
  agents' half-written files. The full gate runs once, at the end, by whoever spawned them.

| Step | Command | What it is |
|------|---------|------------|
| install | `bin/setup` | npm ci |
| run | `bin/dev` | concurrently "npm run dev:css" "npm run dev:demo" — on developerz.ai runs, start it with code_bash_background when you need a running stack |
| prove | `bin/check` | npm run typecheck && npm run lint && npm run test |
| stop | `bin/stop` | true — on developerz.ai runs, the platform runs this when your session ends — do not stop the stack yourself |

## Rules

- Run every command from the repo root — the scripts `cd` there themselves.
- `bin/check` red is not a pull request. Fix the cause, never silence the gate.

## Exit codes `bin/check` must use

A coding box runs this gate before it commits, and it has to tell a FAILING change
from a gate it could not run — otherwise correct work is thrown away as if it were
red. Exit 1 cannot carry that difference, so two codes are reserved:

| Exit | Means | What the platform does |
|------|-------|------------------------|
| 0 | the change passes | commit it |
| 75 | a resource the gate NEEDS is unreachable (a database, a service, a credential) — it refused to grade | refuse the commit, and blame the environment, never the change |
| 79 | every check the gate ran PASSED, but it cannot grade the whole change here (a scoped gate meeting a change whose dependents are the whole suite) | commit it and open the pull request; CI grades the rest |
| any other non-zero | the gate ran and the change is red | refuse the commit, and blame the change |

- Guard preconditions FIRST and `exit 75` when one is unmet. `exit 1` there tells the
  platform your change is broken when it is your environment that is.
- `exit 79` only when every check you ran passed. Anything failed is `exit 1`;
  a deferral never hides a red.
- Changed a dependency? Re-run `bin/setup` before `bin/check`, or you are proving a stale tree.
- Add the test that fails first, then the fix — a green run that never went red proves nothing.
