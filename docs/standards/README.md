# Standards

> established by the developerz.ai maintainer agent for the maintainers of this repository from what onboarding read and ran in this repo, then owned by
> its maintainers. Correct it in place; setup never overwrites a page that exists.

SCSS code style enforced by Stylelint: BEM class names with `cyber-` prefix, max nesting 4 levels, property order (position → display → box-model → typography → visual → animation), specificity max `0,4,2`. All styles in CSS layers. Import order: external → internal → sibling. TypeScript strict mode: `noUnusedLocals`, `noUnusedParameters`, `exactOptionalPropertyTypes`. ESLint for demo/src: Prettier integration, import order enforced. Prettier formats all TS/TSX/SCSS/JSON/MD. Tests: unit tests via Vitest (css-build, css-output, variables, icons), visual regression via Playwright. Format check: `npm run format:check` part of CI and local gate. All commits use Conventional Commits (feat:, fix:, docs:, etc.). Release via changesets CLI or semantic versioning.
