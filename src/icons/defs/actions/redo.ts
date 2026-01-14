/**
 * Redo Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const redo: IconDefinition = {
  name: 'redo',
  category: 'actions',
  description: 'Redo last undone action',
  tags: ['redo', 'forward', 'repeat', 'arrow-right', 'restore'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10H10a4 4 0 0 0 0 8h1"/>
  <path d="M17 6l4 4-4 4"/>
  <line x1="11" y1="14" x2="11" y2="18"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M16.29 5.29a1 1 0 0 1 1.42 0l4 4a1 1 0 0 1 0 1.42l-4 4a1 1 0 0 1-1.42-1.42L18.59 11H10a3 3 0 0 0 0 6h1a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-.17A5 5 0 0 1 10 9h8.59l-2.3-2.29a1 1 0 0 1 0-1.42z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 6l4 4-4 4" fill="currentColor" opacity="0.3"/>
  <path d="M21 10H10a4 4 0 0 0 0 8h1"/>
  <path d="M17 6l4 4-4 4"/>
  <line x1="11" y1="14" x2="11" y2="18"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10H10a4 4 0 0 0 0 8h1" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M17 6l4 4-4 4" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M21 10H10a4 4 0 0 0 0 8h1"/>
  <path d="M17 6l4 4-4 4"/>
  <line x1="11" y1="14" x2="11" y2="18"/>
</svg>`,
  },
};

export default redo;
