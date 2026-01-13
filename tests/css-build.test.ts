import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = join(__dirname, '..');
const DIST_DIR = join(ROOT_DIR, 'dist');

describe('CSS Build', () => {
  beforeAll(() => {
    // Clean dist directory before tests
    try {
      execSync('rm -rf dist', { cwd: ROOT_DIR });
    } catch {
      // Ignore if dist doesn't exist
    }
  });

  it('should compile SCSS to CSS without errors', () => {
    expect(() => {
      execSync('npm run build:css:expanded', {
        cwd: ROOT_DIR,
        stdio: 'pipe',
      });
    }).not.toThrow();
  });

  it('should create cybercore.css in dist folder', () => {
    const cssPath = join(DIST_DIR, 'cybercore.css');
    expect(existsSync(cssPath)).toBe(true);
  });

  it('should create non-empty CSS output', () => {
    const cssPath = join(DIST_DIR, 'cybercore.css');
    const css = readFileSync(cssPath, 'utf-8');
    expect(css.length).toBeGreaterThan(0);
  });

  it('should compile minified CSS without errors', () => {
    expect(() => {
      execSync('npm run build:css:minified', {
        cwd: ROOT_DIR,
        stdio: 'pipe',
      });
    }).not.toThrow();
  });

  it('should create cybercore.min.css in dist folder', () => {
    const minCssPath = join(DIST_DIR, 'cybercore.min.css');
    expect(existsSync(minCssPath)).toBe(true);
  });

  it('should produce smaller minified output', () => {
    const cssPath = join(DIST_DIR, 'cybercore.css');
    const minCssPath = join(DIST_DIR, 'cybercore.min.css');

    const css = readFileSync(cssPath, 'utf-8');
    const minCss = readFileSync(minCssPath, 'utf-8');

    expect(minCss.length).toBeLessThan(css.length);
  });

  it('should not contain SCSS syntax in output', () => {
    const cssPath = join(DIST_DIR, 'cybercore.css');
    const css = readFileSync(cssPath, 'utf-8');

    // SCSS-specific syntax that shouldn't appear in compiled CSS
    expect(css).not.toMatch(/\$[a-zA-Z]/); // SCSS variables
    expect(css).not.toMatch(/@use\s/); // @use statements
    expect(css).not.toMatch(/@forward\s/); // @forward statements
    expect(css).not.toMatch(/@include\s/); // @include statements
    expect(css).not.toMatch(/@mixin\s/); // @mixin statements
  });

  it('should contain valid CSS structure', () => {
    const cssPath = join(DIST_DIR, 'cybercore.css');
    const css = readFileSync(cssPath, 'utf-8');

    // Should contain CSS layer declarations
    expect(css).toMatch(/@layer/);
    // Should have balanced braces (basic validation)
    const openBraces = (css.match(/{/g) || []).length;
    const closeBraces = (css.match(/}/g) || []).length;
    expect(openBraces).toBe(closeBraces);
  });
});
