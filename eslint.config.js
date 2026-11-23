// ESLint flat config: TypeScript (type-aware), React, hooks and accessibility for the demo,
// TypeScript only for the published icon sources, tests, scripts and root configs.
// Formatting belongs to Prettier (`npm run format:check`); eslint-config-prettier switches
// off every rule that would fight it.
import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '**/dist/**',
    'coverage/**',
    'tmp/**',
    'playwright-report/**',
    'test-results/**',
    '**/*.min.js',
    'cybercore-demo.html',
  ]),

  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        // Explicit projects: the demo's two tsconfigs are separate programs, not references.
        project: ['./tsconfig.json', './demo/tsconfig.json', './demo/tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false },
      ],
      'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
    },
  },

  // Demo app: React 19 in the browser.
  {
    files: ['demo/src/**/*.{ts,tsx}'],
    extends: [
      eslintReact.configs['recommended-type-checked'],
      reactHooks.configs.flat.recommended,
      jsxA11y.configs.recommended,
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      // Terminal-style "// comment" text is part of the demo's look.
      '@eslint-react/jsx-no-comment-textnodes': 'off',
      // Icons are trusted SVG strings from src/icons, rendered as markup.
      '@eslint-react/dom-no-dangerously-set-innerhtml': 'off',
      // react-hooks/set-state-in-effect reports the same thing.
      '@eslint-react/set-state-in-effect': 'off',
      // onClick={async () => …} handlers are fine in the demo.
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },

  // Node: tests, scripts, configs.
  {
    files: [
      'tests/**/*.ts',
      'scripts/**/*.ts',
      '*.config.{js,ts}',
      'demo/vite.config.ts',
      'demo/vite/**/*.ts',
      'demo/scripts/**',
    ],
    languageOptions: { globals: globals.node },
    rules: { 'no-console': 'off' },
  },
  {
    files: ['tests/**/*.ts'],
    rules: { '@typescript-eslint/no-non-null-assertion': 'off' },
  },

  // Plain JS files have no type information.
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  prettier,
]);
