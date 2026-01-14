/**
 * Code Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const code: IconDefinition = {
  name: 'code',
  category: 'tech',
  description: 'Code/programming symbol (</>)',
  tags: ['code', 'programming', 'developer', 'brackets', 'slash'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6"/>
  <polyline points="8 6 2 12 8 18"/>
  <line x1="14" y1="4" x2="10" y2="20"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M16.7 17.3l5-5-5-5-1.4 1.4L18.6 12l-3.3 3.3 1.4 1.4zM7.3 6.7l-5 5 5 5 1.4-1.4L5.4 12l3.3-3.3-1.4-1.4zM14.8 3l-1.6.4 4 16 1.6-.4-4-16z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6" fill="currentColor" opacity="0.3"/>
  <polyline points="8 6 2 12 8 18" fill="currentColor" opacity="0.3"/>
  <line x1="14" y1="4" x2="10" y2="20"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6"/>
  <polyline points="16 18 22 12 16 6" transform="translate(1,-1)" opacity="0.4"/>
  <polyline points="8 6 2 12 8 18"/>
  <polyline points="8 6 2 12 8 18" transform="translate(1,-1)" opacity="0.4"/>
  <line x1="14" y1="4" x2="10" y2="20"/>
</svg>`,
  },
};

export default code;
