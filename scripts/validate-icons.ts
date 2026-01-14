#!/usr/bin/env npx ts-node
/**
 * Icon Validation Script
 * Run with: npx ts-node scripts/validate-icons.ts
 *
 * Validates all icons in the registry for:
 * - Correct SVG structure
 * - Consistent styling
 * - Security (no scripts)
 * - Accessibility readiness
 */

import { icons, ICON_LIST, getAllIconNames, getRegisteredIcons } from '../src/icons';

interface ValidationResult {
  icon: string;
  errors: string[];
  warnings: string[];
}

const REQUIRED_ATTRIBUTES = [
  { attr: 'viewBox="0 0 24 24"', message: 'Must have 24x24 viewBox' },
  { attr: 'xmlns="http://www.w3.org/2000/svg"', message: 'Must have xmlns' },
  { attr: 'fill="none"', message: 'Must be stroke-based (fill="none")' },
  { attr: 'stroke="currentColor"', message: 'Must use currentColor for stroke' },
  { attr: 'stroke-width="1.5"', message: 'Must use 1.5 stroke width' },
];

const FORBIDDEN_PATTERNS = [
  { pattern: /<script/i, message: 'Contains script tag (security risk)' },
  { pattern: /javascript:/i, message: 'Contains javascript: URL (security risk)' },
  { pattern: /on\w+=/i, message: 'Contains event handler (security risk)' },
  { pattern: /style="/i, message: 'Contains inline styles (use CSS instead)' },
  { pattern: /<image/i, message: 'Contains raster image (should be pure SVG)' },
  { pattern: /xlink:href="(?!#)/i, message: 'Contains external reference' },
];

const WARNING_PATTERNS = [
  { pattern: /<text/i, message: 'Contains text element (may not render correctly)' },
  { pattern: /font-family/i, message: 'Contains font reference (may not be available)' },
  { pattern: /transform=/i, message: 'Uses transforms (may affect scaling)' },
  { pattern: /clip-path/i, message: 'Uses clip-path (check browser support)' },
  { pattern: /filter=/i, message: 'Uses SVG filter (check performance)' },
];

function validateIcon(name: string, svg: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required attributes
  for (const { attr, message } of REQUIRED_ATTRIBUTES) {
    if (!svg.includes(attr)) {
      errors.push(message);
    }
  }

  // Check forbidden patterns
  for (const { pattern, message } of FORBIDDEN_PATTERNS) {
    if (pattern.test(svg)) {
      errors.push(message);
    }
  }

  // Check warning patterns
  for (const { pattern, message } of WARNING_PATTERNS) {
    if (pattern.test(svg)) {
      warnings.push(message);
    }
  }

  // Check SVG is well-formed
  if (!svg.trim().startsWith('<svg')) {
    errors.push('SVG must start with <svg tag');
  }
  if (!svg.trim().endsWith('</svg>')) {
    errors.push('SVG must end with </svg> tag');
  }

  // Check for reasonable size (not too complex)
  if (svg.length > 5000) {
    warnings.push(`SVG is large (${svg.length} chars) - consider simplifying`);
  }

  return { icon: name, errors, warnings };
}

function main() {
  console.log('\n🔍 Validating Cyber Icons...\n');
  console.log('═'.repeat(60));

  const results: ValidationResult[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  // Validate all registered icons
  for (const [name, def] of Object.entries(icons)) {
    const result = validateIcon(name, def.svg);
    results.push(result);
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  // Print results
  for (const result of results) {
    if (result.errors.length === 0 && result.warnings.length === 0) {
      console.log(`✅ ${result.icon}`);
    } else {
      if (result.errors.length > 0) {
        console.log(`❌ ${result.icon}`);
        result.errors.forEach((e) => console.log(`   ERROR: ${e}`));
      }
      if (result.warnings.length > 0) {
        if (result.errors.length === 0) {
          console.log(`⚠️  ${result.icon}`);
        }
        result.warnings.forEach((w) => console.log(`   WARN: ${w}`));
      }
    }
  }

  // Print coverage
  console.log('\n' + '═'.repeat(60));
  console.log('\n📊 Coverage Report:\n');

  const specNames = getAllIconNames();
  const implementedNames = getRegisteredIcons();
  const implemented = implementedNames.length;
  const total = specNames.length;
  const percentage = ((implemented / total) * 100).toFixed(1);

  console.log(`   Total specified: ${total}`);
  console.log(`   Implemented:     ${implemented}`);
  console.log(`   Coverage:        ${percentage}%`);

  // List missing icons by category
  console.log('\n📋 Missing Icons by Category:\n');

  for (const [category, specs] of Object.entries(ICON_LIST)) {
    const missing = specs.filter((s) => !implementedNames.includes(s.name));
    if (missing.length > 0) {
      console.log(`   ${category}: ${missing.map((m) => m.name).join(', ')}`);
    }
  }

  // Print summary
  console.log('\n' + '═'.repeat(60));
  console.log('\n📈 Summary:\n');
  console.log(`   Icons validated: ${results.length}`);
  console.log(`   Errors:          ${totalErrors}`);
  console.log(`   Warnings:        ${totalWarnings}`);

  if (totalErrors > 0) {
    console.log('\n❌ Validation FAILED\n');
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n⚠️  Validation passed with warnings\n');
    process.exit(0);
  } else {
    console.log('\n✅ All icons valid!\n');
    process.exit(0);
  }
}

main();
