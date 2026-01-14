/**
 * Chevron Right Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const chevronRight: IconDefinition = {
  name: 'chevron-right',
  category: 'navigation',
  description: 'Chevron pointing right',
  tags: ['direction', 'right', 'forward', 'chevron'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 18 15 12 9 6"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M16 12l-8 7V5l8 7z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 18 15 12 9 6"/>
  <path d="M15 12l-6 6V6l6 6z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 18 15 12 9 6"/>
  <polyline points="9 18 15 12 9 6" transform="translate(-1,1)" opacity="0.5"/>
  <polyline points="9 18 15 12 9 6" transform="translate(1,-1)" opacity="0.5"/>
</svg>`,
  },
};

export default chevronRight;
