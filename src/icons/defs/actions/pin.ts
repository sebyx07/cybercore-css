/**
 * Pin Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const pin: IconDefinition = {
  name: 'pin',
  category: 'actions',
  description: 'Pin or bookmark item',
  tags: ['pin', 'bookmark', 'favorite', 'save', 'mark'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 4v6l3 3v1h-7v7l-1 3-1-3v-7H3v-1l3-3V4"/>
  <line x1="9" y1="4" x2="15" y2="4"/>
  <circle cx="12" cy="3" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M16 3v7l3 3v2h-6v6l-1 3-1-3v-6H5v-2l3-3V3h8zm-1 0h-2v1h2V3z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 4v6l3 3v1h-7v7l-1 3-1-3v-7H3v-1l3-3V4" fill="currentColor" opacity="0.3"/>
  <path d="M16 4v6l3 3v1h-7v7l-1 3-1-3v-7H3v-1l3-3V4"/>
  <line x1="9" y1="4" x2="15" y2="4"/>
  <circle cx="12" cy="3" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 4v6l3 3v1h-7v7l-1 3-1-3v-7H3v-1l3-3V4" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M16 4v6l3 3v1h-7v7l-1 3-1-3v-7H3v-1l3-3V4"/>
  <line x1="9" y1="4" x2="15" y2="4"/>
  <circle cx="12" cy="3" r="1"/>
</svg>`,
  },
};

export default pin;
