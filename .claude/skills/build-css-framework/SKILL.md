---
description: Build expanded and minified CSS outputs. Use for creating production CSS artifacts, optimizing with postcss, or rebuilding CSS after SCSS changes.
applies: [typescript, javascript, node]
---

> House skill — established by the developerz.ai maintainer agent for the maintainers of this repository from this repo's own evidence, then owned by its maintainers. Correct it in place; setup never overwrites a skill that exists.

1. Run `npm run build:css` to build both expanded and minified versions
   - Expanded: `npm run build:css:expanded` outputs `dist/cybercore.css`
   - Minified: `npm run build:css:minified` outputs `dist/cybercore.min.css`
   - Optimize: `npm run build:css:optimize` applies postcss to minified
2. Verify outputs exist: `ls -la dist/cybercore.css dist/cybercore.min.css`
3. Check minified is smaller: file sizes should decrease by ~70%
4. Test in browser: start `npm run dev` and check demo loads correctly
   - fail -> check for SCSS compilation errors in output
5. Commit dist/ changes: `git add dist/`
