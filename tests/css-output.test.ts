import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = join(__dirname, '..');
const DIST_DIR = join(ROOT_DIR, 'dist');

let css: string;

describe('CSS Output Classes', () => {
  beforeAll(() => {
    // Ensure CSS is built
    execSync('npm run build:css:expanded', {
      cwd: ROOT_DIR,
      stdio: 'pipe',
    });
    css = readFileSync(join(DIST_DIR, 'cybercore.css'), 'utf-8');
  });

  describe('Core Components', () => {
    it('should contain button classes', () => {
      // Primary button class
      expect(css).toMatch(/\.cyber-btn\b/);
    });

    it('should contain card classes', () => {
      expect(css).toMatch(/\.cyber-card\b/);
    });

    it('should contain input classes', () => {
      expect(css).toMatch(/\.cyber-input\b/);
    });

    it('should contain progress classes', () => {
      expect(css).toMatch(/\.cyber-progress\b/);
    });

    it('should contain badge classes', () => {
      expect(css).toMatch(/\.cyber-badge\b/);
    });

    it('should contain alert classes', () => {
      expect(css).toMatch(/\.cyber-alert\b/);
    });

    it('should contain table classes', () => {
      expect(css).toMatch(/\.cyber-table\b/);
    });

    it('should contain nav classes', () => {
      expect(css).toMatch(/\.cyber-nav\b/);
    });

    it('should contain tab classes', () => {
      expect(css).toMatch(/\.cyber-tabs\b/);
    });

    it('should contain modal classes', () => {
      expect(css).toMatch(/\.cyber-modal\b/);
    });

    it('should contain terminal classes', () => {
      expect(css).toMatch(/\.cyber-terminal\b/);
    });

    it('should contain spinner classes', () => {
      expect(css).toMatch(/\.cyber-spinner\b/);
    });

    it('should contain skeleton classes', () => {
      expect(css).toMatch(/\.cyber-skeleton\b/);
    });
  });

  describe('Effects', () => {
    it('should contain noise effect', () => {
      expect(css).toMatch(/\.cyber-noise\b/);
    });

    it('should contain scanlines effect', () => {
      expect(css).toMatch(/\.cyber-scanlines\b/);
    });

    it('should contain glitch effect', () => {
      expect(css).toMatch(/\.cyber-glitch\b/);
    });

    it('should contain neon border effect', () => {
      expect(css).toMatch(/\.cyber-neon-border\b/);
    });

    it('should contain datastream effect', () => {
      expect(css).toMatch(/\.cyber-datastream\b/);
    });
  });

  describe('Button Variants', () => {
    it('should contain magenta button variant', () => {
      expect(css).toMatch(/\.cyber-btn--magenta\b/);
    });

    it('should contain yellow button variant', () => {
      expect(css).toMatch(/\.cyber-btn--yellow\b/);
    });

    it('should contain green button variant', () => {
      expect(css).toMatch(/\.cyber-btn--green\b/);
    });
  });

  describe('Color Theme Classes', () => {
    it('should contain cyan theme class', () => {
      expect(css).toMatch(/\.cyber-cyan\b|--cyber-cyan/);
    });

    it('should contain magenta theme class', () => {
      expect(css).toMatch(/\.cyber-magenta\b|--cyber-magenta/);
    });

    it('should contain yellow theme class', () => {
      expect(css).toMatch(/\.cyber-yellow\b|--cyber-yellow/);
    });

    it('should contain green theme class', () => {
      expect(css).toMatch(/\.cyber-green\b|--cyber-green/);
    });
  });
});
