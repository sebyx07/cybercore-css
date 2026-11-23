---
description: Sweep sebyx07/cybercore-css for defects in one area — hunt the defect classes below, fix each with a failing test first, ship one goal-scoped pull request. Use for bug sweep, find bugs, fix everything in, QA pass.
argument-hint: <the area or goal to sweep>
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Task
---

# /bug-sweep — find and fix defects in sebyx07/cybercore-css

> Workflow command — established by the developerz.ai maintainer agent for the maintainers of this repository. Correct it in place;
> setup never overwrites a command that exists.

**A clean area reported clean is a success.** Never invent a defect to have something to
ship; never fix what is not broken.

## Area

$ARGUMENTS

## Steps

1. Read the area, then run each detector below over it. Read the code that does the
   thing, not only a file that mentions it.
2. For each defect: write the failing test first and watch it fail, then fix the cause.
   A test you never saw red proves nothing.
3. A defect class that recurred is fixed as a class: a type, a lint rule or a check that
   makes the next one fail, in the same change.
4. Prove it with `bin/check`, which here is `npm run typecheck && npm run lint && npm run test`. Red is not a
   pull request: fix the cause, never silence the check.
5. Ship one goal-scoped pull request for the area — one goal, every defect in it, each
   with its test. A defect outside the area is its own pull request, named in the body.
6. The body lists each defect: the input that broke it, the test that pins it, the fix.

## What to hunt — run the detector, do not just read

| Class | Detector |
|---|---|
| Dead producer — the mechanism is complete, the observable hop is missing | find the consumer of what the code writes; nothing reads it is the finding |
| Guard that proves nothing — a substring match, a hard-coded list, a vacuous assert | break the guarded thing; if the guard stays green, the guard is the bug |
| Silent degrade — invalid config caps, defaults or falls back | trace one bad value from the seam it enters |
| Per-item query or remote call inside a loop | a query, fetch or API call whose count grows with the input; batch it |
| Unbounded read — a query, list or file read with no limit | a read of something that grows with no LIMIT, page or cap |
| Short-lived helper given a process lifetime — a per-request cache, client or listener at module scope | a module-level value written per request or job and never released |
| Refusal collapsed into a null — three reasons returning one value | a caller that cannot tell why it got nothing |
| A doc or comment asserting what the code no longer does | read the code the sentence describes |
| Missing test | a branch that can actually be wrong and that no test would catch |
