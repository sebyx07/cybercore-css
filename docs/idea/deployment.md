# Deployment

> established by the developerz.ai maintainer agent for the maintainers of this repository from what onboarding read and ran in this repo, then owned by
> its maintainers. Correct it in place; setup never overwrites a page that exists.

Demo site deployed to GitHub Pages at sebyx07.github.io/cybercore-css. HashRouter hash-based routing (`/#/path`) for static hosting. GitHub Actions CI runs on push/PR to main/develop: lint (ESLint, Stylelint), test (Vitest), build (CSS and demo), typecheck. Release: push git tag (e.g., `git tag v0.3.0 && git push origin v0.3.0`) triggers Actions workflow that publishes to npm and GitHub Packages automatically. Framework NPM package exports dist/cybercore.css as primary, src/scss as SCSS source, src/icons as TypeScript exports. All 734 dev dependencies locked in package-lock.json.
