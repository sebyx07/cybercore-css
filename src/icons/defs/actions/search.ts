/**
 * Search Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const search: IconDefinition = {
  name: 'search',
  category: 'actions',
  description: 'Search or find content',
  tags: ['search', 'find', 'magnifying-glass', 'lookup', 'query'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10.5" cy="10.5" r="6.5"/>
  <line x1="15.5" y1="15.5" x2="21" y2="21"/>
  <line x1="7" y1="10.5" x2="14" y2="10.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10.5 3C6.36 3 3 6.36 3 10.5S6.36 18 10.5 18c1.61 0 3.09-.51 4.32-1.37l5.28 5.28a1 1 0 0 0 1.41-1.41l-5.28-5.28A7.5 7.5 0 1 0 10.5 3zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm-3 4.5h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10.5" cy="10.5" r="6.5" fill="currentColor" opacity="0.3"/>
  <circle cx="10.5" cy="10.5" r="6.5"/>
  <line x1="15.5" y1="15.5" x2="21" y2="21"/>
  <line x1="7" y1="10.5" x2="14" y2="10.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10.5" cy="10.5" r="6.5" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="10.5" cy="10.5" r="6.5"/>
  <line x1="15.5" y1="15.5" x2="21" y2="21" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="15.5" y1="15.5" x2="21" y2="21"/>
  <line x1="7" y1="10.5" x2="14" y2="10.5"/>
</svg>`,
  },
};

export default search;
