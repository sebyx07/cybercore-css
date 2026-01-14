/**
 * Double Check Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const doubleCheck: IconDefinition = {
  name: 'double-check',
  category: 'actions',
  description: 'Double checkmark for read/delivered status',
  tags: ['check', 'checkmark', 'confirm', 'read', 'delivered', 'double'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="2 12 7 17 13 9"/>
  <polyline points="8 12 13 17 22 6"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M13.71 8.29a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-1.42 0l-5-5a1 1 0 1 1 1.42-1.42L7 13.59l5.29-5.3a1 1 0 0 1 1.42 0z"/>
  <path d="M22.71 5.29a1 1 0 0 1 0 1.42l-9 9a1 1 0 0 1-1.42 0l-3-3a1 1 0 1 1 1.42-1.42L13 13.59l8.29-8.3a1 1 0 0 1 1.42 0z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="2 12 7 17 13 9" stroke-width="3" opacity="0.3"/>
  <polyline points="8 12 13 17 22 6" stroke-width="3" opacity="0.3"/>
  <polyline points="2 12 7 17 13 9"/>
  <polyline points="8 12 13 17 22 6"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="2 12 7 17 13 9" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="8 12 13 17 22 6" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="2 12 7 17 13 9"/>
  <polyline points="8 12 13 17 22 6"/>
</svg>`,
  },
};

export default doubleCheck;
