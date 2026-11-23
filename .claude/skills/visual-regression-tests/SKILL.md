---
description: Run and update Playwright visual regression tests. Use for validating component screenshots, updating snapshots after intentional visual changes, or debugging visual test failures.
applies: [typescript, javascript, node]
---

> House skill — established by the developerz.ai maintainer agent for the maintainers of this repository from this repo's own evidence, then owned by its maintainers. Correct it in place; setup never overwrites a skill that exists.

1. Ensure demo is built: `npm run build:demo` creates `demo/dist/`
2. Run visual tests: `npm run test:visual` starts preview server, runs against components
   - Tests run against `http://localhost:4173` preview
   - Chromium, Firefox, WebKit browsers tested
   - Snapshots stored in `tests/visual/__snapshots__/`
3. If changes are intentional, update snapshots: `npm run test:visual:update`
   - Regenerates `__snapshots__/*.png` files
4. If tests fail:
   - Check diffs in Playwright HTML report (auto-generated)
   - Verify CSS changes are correct with `npm run lint:css`
   - Run `npm run build:demo` to ensure latest demo code is used
5. Commit snapshot changes: visual changes tracked via diff
