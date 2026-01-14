/**
 * Chevron Left Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const chevronLeft: IconDefinition = {
  name: 'chevron-left',
  category: 'navigation',
  description: 'Chevron pointing left',
  tags: ['direction', 'left', 'back', 'chevron'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 12l8-7v14l-8-7z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6"/>
  <path d="M9 12l6-6v12l-6-6z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6"/>
  <polyline points="15 18 9 12 15 6" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="15 18 9 12 15 6" transform="translate(-1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default chevronLeft;
