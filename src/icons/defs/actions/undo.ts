/**
 * Undo Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const undo: IconDefinition = {
  name: 'undo',
  category: 'actions',
  description: 'Undo last action',
  tags: ['undo', 'revert', 'back', 'reverse', 'arrow-left'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 10h11a4 4 0 0 1 0 8h-1"/>
  <path d="M7 6L3 10l4 4"/>
  <line x1="13" y1="14" x2="13" y2="18"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.71 5.29a1 1 0 0 0-1.42 0l-4 4a1 1 0 0 0 0 1.42l4 4a1 1 0 1 0 1.42-1.42L5.41 11H14a3 3 0 0 1 0 6h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.17A5 5 0 0 0 14 9H5.41l2.3-2.29a1 1 0 0 0 0-1.42z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 6L3 10l4 4" fill="currentColor" opacity="0.3"/>
  <path d="M3 10h11a4 4 0 0 1 0 8h-1"/>
  <path d="M7 6L3 10l4 4"/>
  <line x1="13" y1="14" x2="13" y2="18"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 10h11a4 4 0 0 1 0 8h-1" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M7 6L3 10l4 4" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M3 10h11a4 4 0 0 1 0 8h-1"/>
  <path d="M7 6L3 10l4 4"/>
  <line x1="13" y1="14" x2="13" y2="18"/>
</svg>`,
  },
};

export default undo;
