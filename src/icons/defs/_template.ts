/**
 * Icon Name
 * @category category-name
 *
 * TEMPLATE FILE - Copy this to create a new icon definition
 * Filename: icon-name.ts (kebab-case)
 * Export name: iconName (camelCase)
 */
import type { IconDefinition } from '../types';

export const iconName: IconDefinition = {
  name: 'icon-name', // kebab-case, matches filename
  category: 'navigation', // navigation|actions|media|communication|data|security|tech|files|status|social
  description: 'Brief description of the icon',
  tags: ['tag1', 'tag2', 'tag3'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <!-- Icon paths here -->
</svg>`,
  // Optional: Add variants
  // variants: {
  //   solid: `<svg>...</svg>`,
  //   duotone: `<svg>...</svg>`,
  //   glitch: `<svg>...</svg>`,
  // },
};

export default iconName;
