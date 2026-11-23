# Standards

How work is done here, and the check that enforces each rule. The rules themselves live in
`CLAUDE.md` (coding rules, preventive rules, never, PR conventions) and `src/scss/CLAUDE.md` (design
rules); this page is the map from rule to guard.

| Rule                                                                 | Enforced by                                 |
| -------------------------------------------------------------------- | ------------------------------------------- |
| Lint, format, typecheck, tests, icons, build, size, package, docs    | `bin/check`, and `CI OK` in CI              |
| `cyber-*` BEM names, property order, no unlayered rule               | stylelint (`npm run lint:css`)              |
| A shipped class or token is not renamed or removed                   | `bin/api-diff`, the reviewer                |
| A partial is registered in its group, the manifest and the entry     | `tests/css-modules.test.ts`                 |
| The CDN bundle stays under its gzip budget                           | `scripts/check-size.ts`                     |
| No runtime dependency, `dist/` not committed, versioned URLs current | `bin/repo-guards`                           |
| Agent-read files carry no HTML comment or invisible character        | `bin/repo-guards`                           |
| Every class and token a doc names exists                             | `bin/docs-check`                            |
| Visible changes match the committed screenshots                      | `npm run test:visual`, CI's visual job      |
| Actions pinned to a commit SHA; the release proves the commit first  | `bin/repo-guards`                           |
| Conventional Commits; one concern per pull request                   | the reviewer (`.dz/maintainer/reviewer.md`) |
