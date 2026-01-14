/**
 * Cyber Icons Test Suite
 * Validates icon registry, structure, and rendering
 */

import { describe, it, expect, beforeAll } from 'vitest';
import {
  icons,
  getIcon,
  renderIcon,
  iconExists,
  getRegisteredIcons,
  isIconRegistered,
  createSpriteSheet,
  getIconDataUri,
  ICON_LIST,
  getIconCount,
  getAllIconNames,
} from '../src/icons';

describe('Icon Registry', () => {
  it('should have icons registered', () => {
    const registered = getRegisteredIcons();
    expect(registered.length).toBeGreaterThan(0);
  });

  it('should have valid icon definitions', () => {
    Object.entries(icons).forEach(([name, def]) => {
      expect(def.name).toBe(name);
      expect(def.svg).toBeDefined();
      expect(def.svg).toContain('<svg');
      expect(def.svg).toContain('</svg>');
      expect(def.category).toBeDefined();
      expect(def.description).toBeDefined();
      expect(Array.isArray(def.tags)).toBe(true);
    });
  });

  it('should check icon existence correctly', () => {
    expect(iconExists('chip')).toBe(true);
    expect(iconExists('terminal')).toBe(true);
    expect(iconExists('nonexistent-icon-xyz')).toBe(false);
  });

  it('should return null for nonexistent icons', () => {
    expect(getIcon('nonexistent-icon-xyz')).toBeNull();
  });
});

describe('Icon SVG Structure', () => {
  it('should have proper SVG attributes', () => {
    Object.values(icons).forEach((def) => {
      const svg = def.svg;

      // Must have viewBox
      expect(svg).toMatch(/viewBox="0 0 24 24"/);

      // Must use currentColor for theming
      expect(svg).toContain('currentColor');

      // Must have xmlns
      expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');

      // Should be stroke-based (not filled)
      expect(svg).toContain('fill="none"');
      expect(svg).toContain('stroke="currentColor"');
    });
  });

  it('should have consistent stroke width', () => {
    Object.values(icons).forEach((def) => {
      // All icons should use 1.5 stroke width
      expect(def.svg).toMatch(/stroke-width="1\.5"/);
    });
  });

  it('should not contain inline styles', () => {
    Object.values(icons).forEach((def) => {
      // SVG source should not have inline style attributes
      // (styles are added by renderIcon)
      expect(def.svg).not.toMatch(/style="/);
    });
  });

  it('should not contain script tags', () => {
    Object.values(icons).forEach((def) => {
      expect(def.svg.toLowerCase()).not.toContain('<script');
      expect(def.svg.toLowerCase()).not.toContain('javascript:');
      expect(def.svg.toLowerCase()).not.toContain('onclick');
      expect(def.svg.toLowerCase()).not.toContain('onerror');
    });
  });
});

describe('Icon Rendering', () => {
  it('should render icon with default options', () => {
    const html = renderIcon('chip');
    expect(html).toContain('class="cyber-icon cyber-icon--chip"');
    expect(html).toContain('width: 24px');
    expect(html).toContain('height: 24px');
    expect(html).toContain('aria-hidden="true"');
  });

  it('should render icon with custom size', () => {
    const html = renderIcon('chip', { size: 32 });
    expect(html).toContain('width: 32px');
    expect(html).toContain('height: 32px');
  });

  it('should render icon with color', () => {
    const html = renderIcon('chip', { color: 'cyan' });
    expect(html).toContain('var(--cyber-cyan-500');
  });

  it('should render icon with custom class', () => {
    const html = renderIcon('chip', { className: 'my-custom-class' });
    expect(html).toContain('my-custom-class');
  });

  it('should render icon with aria-label', () => {
    const html = renderIcon('chip', { 'aria-label': 'Processor icon' });
    expect(html).toContain('aria-label="Processor icon"');
    expect(html).toContain('role="img"');
    expect(html).not.toContain('aria-hidden');
  });

  it('should return empty string for nonexistent icon', () => {
    const html = renderIcon('nonexistent-icon-xyz');
    expect(html).toBe('');
  });
});

describe('Sprite Sheet', () => {
  it('should generate valid sprite sheet', () => {
    const sprite = createSpriteSheet();
    expect(sprite).toContain('<svg');
    expect(sprite).toContain('style="display: none;"');

    // Should have symbols for each icon
    Object.keys(icons).forEach((name) => {
      expect(sprite).toContain(`id="cyber-icon-${name}"`);
    });
  });
});

describe('Data URI', () => {
  it('should generate valid data URI', () => {
    const uri = getIconDataUri('chip');
    expect(uri).toMatch(/^data:image\/svg\+xml,/);
    expect(uri).toContain('%3Csvg'); // encoded <svg
  });

  it('should replace color in data URI', () => {
    const uri = getIconDataUri('chip', '#ff0000');
    expect(uri).toContain('%23ff0000'); // encoded #ff0000
    expect(uri).not.toContain('currentColor');
  });

  it('should return null for nonexistent icon', () => {
    expect(getIconDataUri('nonexistent-icon-xyz')).toBeNull();
  });
});

describe('Icon List (Specs)', () => {
  it('should have icon count', () => {
    const count = getIconCount();
    expect(count).toBeGreaterThan(100); // We defined ~150 icons
  });

  it('should get all icon names', () => {
    const names = getAllIconNames();
    expect(Array.isArray(names)).toBe(true);
    expect(names.length).toBe(getIconCount());
  });

  it('should have unique icon names', () => {
    const names = getAllIconNames();
    const unique = new Set(names);
    expect(unique.size).toBe(names.length);
  });

  it('should have valid icon specs', () => {
    Object.entries(ICON_LIST).forEach(([category, specs]) => {
      specs.forEach((spec) => {
        expect(spec.name).toBeDefined();
        expect(spec.name.length).toBeGreaterThan(0);
        expect(spec.description).toBeDefined();
        expect(Array.isArray(spec.tags)).toBe(true);
        expect(spec.tags.length).toBeGreaterThan(0);
      });
    });
  });
});

describe('Icon Coverage', () => {
  it('should track implementation progress', () => {
    const specNames = getAllIconNames();
    const implementedNames = getRegisteredIcons();

    const implemented = implementedNames.length;
    const total = specNames.length;
    const percentage = ((implemented / total) * 100).toFixed(1);

    console.log(`\n📊 Icon Implementation Progress: ${implemented}/${total} (${percentage}%)`);
    console.log(`   Implemented: ${implementedNames.join(', ')}`);

    // This test always passes - it's for reporting
    expect(true).toBe(true);
  });
});
