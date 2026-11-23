---
description: Publish new versions to npm. Use for cutting releases, updating package version, or triggering GitHub Actions publish workflow.
applies: [typescript, javascript, node]
---

> House skill — established by the developerz.ai maintainer agent for the maintainers of this repository from this repo's own evidence, then owned by its maintainers. Correct it in place; setup never overwrites a skill that exists.

1. Verify all tests pass: `npm run typecheck && npm run lint && npm run test`
2. Bump version: `npm version patch` (or minor/major for bigger changes)
   - Updates package.json and package-lock.json
   - Creates git commit and tag automatically
   - Choose: patch (0.3.0 -> 0.3.1), minor (0.3.0 -> 0.4.0), major (0.3.0 -> 1.0.0)
3. Build CSS: `npm run build:css` produces production artifacts in dist/
4. Push commits and tag: `git push origin main` then `git push origin vX.X.X`
   - GitHub Actions CI publishes to npm automatically on tag push
   - Watch Actions tab at github.com/sebyx07/cybercore-css/actions
   - fail -> check workflow logs, fix issues, amend commit if needed
5. Verify on npm: `npm view cybercore-css@latest version` after ~2 min
