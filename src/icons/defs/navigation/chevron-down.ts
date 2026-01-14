/**
 * Chevron Down Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const chevronDown: IconDefinition = {
  name: 'chevron-down',
  category: 'navigation',
  description: 'Chevron pointing down',
  tags: ['direction', 'down', 'expand', 'chevron'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 16l-7-8h14l-7 8z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"/>
  <path d="M12 15l-6-6h12l-6 6z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"/>
  <polyline points="6 9 12 15 18 9" transform="translate(-1,1)" opacity="0.5"/>
  <polyline points="6 9 12 15 18 9" transform="translate(1,-1)" opacity="0.5"/>
</svg>`,
  },
};

export default chevronDown;
