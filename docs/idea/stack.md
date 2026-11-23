# Stack

- **Framework:** Sass (`src/scss/`, `sass` with fatal deprecations) compiled to
  `dist/cybercore.css`; PostCSS with autoprefixer and cssnano for `dist/cybercore.min.css`. Icons
  are TypeScript modules under `src/icons/`, shipped as source.
- **Demo site:** React 19, React Router and Vite (`demo/`), TypeScript.
- **Tests:** vitest (`tests/`: the Sass compiles, classes and tokens are in the build, icons are
  valid); Playwright screenshots of every demo page (`tests/visual/`, run in a pinned Docker image
  by `scripts/visual.sh`).
- **Lint and format:** stylelint (BEM pattern, property order), ESLint, Prettier, `tsc`.
- **Toolchain:** Node 24 (`.nvmrc`), npm with `package-lock.json`. Using the package needs no
  Node.
- **Gate:** `bin/check` locally and the `CI OK` job in `.github/workflows/ci.yml`, which runs the
  same `bin/check` plus workflow lint, `npm audit` and the visual suite.
- **Runtime dependencies:** none, by rule (`bin/repo-guards`).

Exact versions are in `package.json`; Dependabot keeps them current.
