# Contributing to CYBERCORE CSS

Thank you for your interest in contributing to CYBERCORE CSS! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cybercore-css.git
   cd cybercore-css
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming

Use descriptive branch names:
- `feat/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test additions/updates

### Commands

```bash
# Development
npm run dev              # Watch CSS + demo site
npm run dev:css          # Watch SCSS only
npm run dev:demo         # Start demo dev server

# Testing
npm run test             # Run unit tests
npm run test:watch       # Watch mode
npm run test:visual      # Visual regression tests
npm run test:icons       # Icon validation

# Linting
npm run lint             # Run all linters
npm run lint:fix         # Auto-fix issues
npm run format           # Format with Prettier

# Building
npm run build            # Build everything
npm run build:css        # Build CSS only
```

## Contributing Guidelines

### CSS/SCSS Contributions

1. **Use CSS Layers**: All styles must be wrapped in appropriate `@layer`:
   ```scss
   @layer components {
     .cyber-component { ... }
   }
   ```

2. **Follow BEM Naming**: Use `cyber-` prefix with BEM modifiers:
   - Base: `.cyber-component`
   - Modifier: `.cyber-component--variant`
   - Element: `.cyber-component__element`

3. **Use Design Tokens**: Reference CSS custom properties from `_variables.scss`:
   ```scss
   color: var(--cyber-cyan-500);
   padding: var(--space-md);
   ```

4. **Support Reduced Motion**: Include `prefers-reduced-motion` media queries:
   ```scss
   @media (prefers-reduced-motion: reduce) {
     animation: none;
   }
   ```

5. **Property Order**: Follow the configured order:
   - Position
   - Display/Box Model
   - Typography
   - Visual (colors, backgrounds)
   - Animation

### Icon Contributions

1. Icons use 24x24 viewBox with 1.5px stroke
2. Use `stroke="currentColor"` for theming
3. Include all variants: outline, solid, duotone, glitch
4. Add to registry and individual exports
5. Run `npm run validate:icons` to verify

See `src/icons/README.md` for detailed guidelines.

### Component Contributions

1. Create SCSS in `src/scss/components/`
2. Add to `cybercore.scss` imports
3. Include hover, focus, and disabled states
4. Add demo examples in `demo/src/pages/`
5. Add tests in `tests/`

## Pull Request Process

1. **Create a Branch**: Branch from `main`
2. **Make Changes**: Follow the guidelines above
3. **Test Your Changes**:
   ```bash
   npm run lint
   npm run test
   npm run build
   ```
4. **Commit Using Conventional Commits**:
   ```
   feat: add new button variant
   fix: correct card border color
   docs: update component examples
   ```
5. **Push and Create PR**: Target the `main` branch
6. **Wait for Review**: Maintainers will review your PR

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] All linting passes (`npm run lint`)
- [ ] All tests pass (`npm run test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventional commits

## Reporting Issues

### Bug Reports

Include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case explanation
- Example implementation if possible

## Questions?

Open a [GitHub Discussion](https://github.com/sebyx07/cybercore-css/discussions) for questions or ideas.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
