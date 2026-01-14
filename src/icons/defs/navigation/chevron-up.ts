/**
 * Chevron Up Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const chevronUp: IconDefinition = {
  name: 'chevron-up',
  category: 'navigation',
  description: 'Chevron pointing up',
  tags: ['direction', 'up', 'collapse', 'chevron'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="18 15 12 9 6 15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 8l7 8H5l7-8z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="18 15 12 9 6 15"/>
  <path d="M12 9l6 6H6l6-6z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="18 15 12 9 6 15"/>
  <polyline points="18 15 12 9 6 15" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="18 15 12 9 6 15" transform="translate(-1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default chevronUp;
