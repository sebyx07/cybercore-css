/**
 * Filter Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const filter: IconDefinition = {
  name: 'filter',
  category: 'actions',
  description: 'Filter results or data',
  tags: ['filter', 'funnel', 'sort', 'refine', 'narrow'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 5h18l-7 8.5v7l-4 2v-9L3 5z"/>
  <line x1="10" y1="13.5" x2="10" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 .77 1.64l-7.27 8.86v6l-4 2a1 1 0 0 1-1.5-.87v-7.13L2.23 5.64A1 1 0 0 1 2 5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 5h18l-7 8.5v7l-4 2v-9L3 5z" fill="currentColor" opacity="0.3"/>
  <path d="M3 5h18l-7 8.5v7l-4 2v-9L3 5z"/>
  <line x1="10" y1="13.5" x2="10" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 5h18l-7 8.5v7l-4 2v-9L3 5z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M3 5h18l-7 8.5v7l-4 2v-9L3 5z"/>
  <line x1="10" y1="13.5" x2="10" y2="15"/>
</svg>`,
  },
};

export default filter;
