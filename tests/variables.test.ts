import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = join(__dirname, '..');
const DIST_DIR = join(ROOT_DIR, 'dist');

let css: string;

describe('CSS Custom Properties', () => {
  beforeAll(() => {
    // Ensure CSS is built
    execSync('npm run build:css:expanded', {
      cwd: ROOT_DIR,
      stdio: 'pipe',
    });
    css = readFileSync(join(DIST_DIR, 'cybercore.css'), 'utf-8');
  });

  describe('Color Variables', () => {
    it('should define cyber-cyan color scale', () => {
      expect(css).toMatch(/--cyber-cyan-500/);
      expect(css).toMatch(/--cyber-cyan-100/);
      expect(css).toMatch(/--cyber-cyan-900/);
    });

    it('should define cyber-magenta color scale', () => {
      expect(css).toMatch(/--cyber-magenta-500/);
      expect(css).toMatch(/--cyber-magenta-100/);
      expect(css).toMatch(/--cyber-magenta-900/);
    });

    it('should define cyber-yellow color scale', () => {
      expect(css).toMatch(/--cyber-yellow-500/);
      expect(css).toMatch(/--cyber-yellow-100/);
      expect(css).toMatch(/--cyber-yellow-900/);
    });

    it('should define cyber-green color scale', () => {
      expect(css).toMatch(/--cyber-green-500/);
      expect(css).toMatch(/--cyber-green-100/);
      expect(css).toMatch(/--cyber-green-900/);
    });

    it('should define cyber-void color scale', () => {
      expect(css).toMatch(/--cyber-void-500/);
      expect(css).toMatch(/--cyber-void-100/);
      expect(css).toMatch(/--cyber-void-900/);
    });

    it('should define cyber-chrome color scale', () => {
      expect(css).toMatch(/--cyber-chrome-500/);
      expect(css).toMatch(/--cyber-chrome-100/);
      expect(css).toMatch(/--cyber-chrome-900/);
    });
  });

  describe('Semantic Color Tokens', () => {
    it('should define background color tokens', () => {
      expect(css).toMatch(/--color-bg-primary/);
      expect(css).toMatch(/--color-bg-secondary/);
      expect(css).toMatch(/--color-bg-tertiary/);
      expect(css).toMatch(/--color-bg-elevated/);
    });

    it('should define text color tokens', () => {
      expect(css).toMatch(/--color-text-primary/);
      expect(css).toMatch(/--color-text-secondary/);
      expect(css).toMatch(/--color-text-muted/);
      expect(css).toMatch(/--color-text-accent/);
    });

    it('should define border color tokens', () => {
      expect(css).toMatch(/--color-border-default/);
    });
  });

  describe('Glow Effects', () => {
    it('should define glow effect variables', () => {
      expect(css).toMatch(/--glow-cyan/);
      expect(css).toMatch(/--glow-magenta/);
      expect(css).toMatch(/--glow-yellow/);
      expect(css).toMatch(/--glow-green/);
    });

    it('should define text glow variables', () => {
      expect(css).toMatch(/--glow-text-cyan/);
    });
  });

  describe('Typography Variables', () => {
    it('should define font family variables', () => {
      expect(css).toMatch(/--font-display/);
      expect(css).toMatch(/--font-body/);
      expect(css).toMatch(/--font-mono/);
    });

    it('should define fluid type scale', () => {
      expect(css).toMatch(/--text-xs/);
      expect(css).toMatch(/--text-sm/);
      expect(css).toMatch(/--text-base/);
      expect(css).toMatch(/--text-lg/);
      expect(css).toMatch(/--text-xl/);
      expect(css).toMatch(/--text-2xl/);
      expect(css).toMatch(/--text-3xl/);
      expect(css).toMatch(/--text-4xl/);
      expect(css).toMatch(/--text-5xl/);
    });

    it('should define line-height variables', () => {
      expect(css).toMatch(/--leading-tight/);
      expect(css).toMatch(/--leading-normal/);
      expect(css).toMatch(/--leading-relaxed/);
    });

    it('should define letter-spacing variables', () => {
      expect(css).toMatch(/--tracking-tight/);
      expect(css).toMatch(/--tracking-normal/);
      expect(css).toMatch(/--tracking-wide/);
      expect(css).toMatch(/--tracking-wider/);
      expect(css).toMatch(/--tracking-widest/);
    });
  });

  describe('Spacing Scale', () => {
    it('should define spacing variables', () => {
      expect(css).toMatch(/--space-3xs/);
      expect(css).toMatch(/--space-2xs/);
      expect(css).toMatch(/--space-xs/);
      expect(css).toMatch(/--space-sm/);
      expect(css).toMatch(/--space-md/);
      expect(css).toMatch(/--space-lg/);
      expect(css).toMatch(/--space-xl/);
      expect(css).toMatch(/--space-2xl/);
      expect(css).toMatch(/--space-3xl/);
    });
  });

  describe('Border Variables', () => {
    it('should define border width variables', () => {
      expect(css).toMatch(/--border-thin/);
      expect(css).toMatch(/--border-medium/);
      expect(css).toMatch(/--border-thick/);
    });

    it('should define border radius variables', () => {
      expect(css).toMatch(/--radius-none/);
      expect(css).toMatch(/--radius-sm/);
      expect(css).toMatch(/--radius-md/);
      expect(css).toMatch(/--radius-lg/);
      expect(css).toMatch(/--radius-cyber/);
      expect(css).toMatch(/--radius-cyber-alt/);
    });
  });

  describe('Transition Variables', () => {
    it('should define transition variables', () => {
      expect(css).toMatch(/--transition-fast/);
      expect(css).toMatch(/--transition-base/);
      expect(css).toMatch(/--transition-slow/);
    });

    it('should define easing variables', () => {
      expect(css).toMatch(/--ease-out-expo/);
      expect(css).toMatch(/--ease-in-out-expo/);
    });
  });

  describe('Z-Index Scale', () => {
    it('should define z-index variables', () => {
      expect(css).toMatch(/--z-base/);
      expect(css).toMatch(/--z-dropdown/);
      expect(css).toMatch(/--z-sticky/);
      expect(css).toMatch(/--z-fixed/);
      expect(css).toMatch(/--z-modal-backdrop/);
      expect(css).toMatch(/--z-modal/);
      expect(css).toMatch(/--z-popover/);
      expect(css).toMatch(/--z-tooltip/);
    });
  });

  describe('Effect Variables', () => {
    it('should define noise opacity variable', () => {
      expect(css).toMatch(/--noise-opacity/);
    });

    it('should define scanline opacity variable', () => {
      expect(css).toMatch(/--scanline-opacity/);
    });
  });

  describe('Reduced Motion Support', () => {
    it('should include prefers-reduced-motion media query', () => {
      expect(css).toMatch(/@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)/);
    });
  });

  describe('CSS Layer Support', () => {
    it('should define theme layer', () => {
      expect(css).toMatch(/@layer\s+theme/);
    });
  });
});
