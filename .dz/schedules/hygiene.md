<!-- This file is yours: the `hygiene` entry under `schedules:` in your policy file
reads it each time it fires. Edit it to steer the checkup; delete that entry to stop
it. -->

# Hygiene checkup

This is the weekly hygiene checkup: a deep read for defects tests never show. You read files only: no shell, network or database, so a finding whose harm depends
on a size or a rate you cannot see is marked `measure first: yes`, never guessed.

## What to look for

1. **Resource lifetimes.** Something acquired per call in a long-running process
   and not released on every exit path, the error path included:
   a response body never closed; a client or pool built per call
   instead of once; a listener or timer added per call and never removed; a release listed by hand where the language's scoped disposal fits;
   a module-level cache or list that only grows.
2. **Algorithms.** A linear search inside a loop over a collection that grows; a regular expression or
   other compiled object built inside a loop; one query per row of a loop (N+1); all
   rows fetched and then paged or filtered in memory; a query with no limit on a
   growing table; a poll that refetches everything with no change probe.
3. **Reuse.** A hand-rolled copy of a helper the repository already has (retry,
   timeout, pagination). Name both the copy and the original.
4. **Data.** From the migrations and schema files: an index that duplicates another or
   is the leading prefix of another non-unique one, an index no query filters, sorts
   or joins on. A unique or foreign-key index earns its keep; do not file it.
5. **Documentation drift.** In README, CLAUDE.md, AGENTS.md and docs/: a path that
   no longer exists, a command naming a script or binary the repository does not
   define, a function, flag or variable the code no longer has, a claim the code
   contradicts. Quote both the doc line and the code.
6. **Code quality.** A file or function far beyond the repository's own norm or its
   configured lint limit; dead code (an export nothing imports, a branch no caller
   reaches, a setting nothing reads).
7. **Infrastructure.** Whatever stack is present.
   Container images: a base image with no pinned tag or digest; no non-root user; a
   secret copied into a layer or baked in as an environment value or build argument; a
   copy of the whole context with no `.dockerignore`; a package install whose cache is
   not cleaned in the same layer. Deployment manifests (compose, Kubernetes, similar): no resource requests or limits;
   privileged mode, host networking or a host path with no stated reason; an unpinned
   image; no liveness or readiness probe on a long-running service; an inline secret. Infrastructure as code: a hard-coded credential; a public bucket;
   a rule open to `0.0.0.0/0` on a non-web port; an unpinned provider or module
   version; a committed state file. Quote the key, never the secret's value. Skip CI
   configuration (workflow and pipeline files) and secret-shaped paths: a handoff
   naming one is refused whole.

## Rows

One per area above; a handoff reports one failing row.

- `leak`: resource lifetimes
- `algo`: algorithms
- `reuse`: reuse
- `index`: data
- `doc-drift`: documentation drift
- `quality`: code quality
- `infra`: infrastructure

## How to judge

- Confirm before you claim: read the call path. A pattern is a finding only once you
  have seen that it runs where it hurts.
- Rank by blast radius: what breaks production first (leaks, unbounded reads, exposed
  infrastructure, docs naming a command that does not exist), quality last.
- Skip tests, fixtures, generated and vendored code.
- One handoff per row: every defect in an area goes in it, worst first.

## Every finding

Besides the checkup rules' fields, each handoff carries these; one over any limit is
dropped whole:

- **work**: one sentence naming the defect and the fix, at most 300 characters.
- **why**: a concrete failure scenario, what triggers it and what breaks, at most 300
  characters.
- **evidence**: at most 10 lines of at most 280 characters each. Up to 8 lines
  `path:line: the code`, one per site; with more sites, a 9th line "and N more sites
  like it in <directories>". The last line starts `measure first:`. Write `measure
  first: no` with the reason when the code alone proves the harm, or `measure first:
  yes` with what to measure and how when it depends on sizes or rates. The coding agent
  that takes the handoff measures on its own stack first, and drops the fix if the
  number shows no harm.
- **paths**: at most 20 files.
- **anchor**: the row id (`leak:`, `algo:`, `reuse:`, `index:`, `doc-drift:`,
  `quality:` or `infra:`), then the worst file or symbol, at most 120 characters.
- **metric**: the number the fix moves, at most 200 characters.

## Report

For each of the seven areas: what you read and whether it was clean. Name any area you
could not cover, and why.
