/**
 * X Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const x: IconDefinition = {
  name: 'x',
  category: 'actions',
  description: 'Close or cancel action',
  tags: ['x', 'close', 'cancel', 'dismiss', 'exit'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 6L6 18"/>
  <path d="M6 6l12 12"/>
  <circle cx="6" cy="6" r="1"/>
  <circle cx="18" cy="18" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.71 5.29a1 1 0 0 1 0 1.42L13.41 12l5.3 5.29a1 1 0 0 1-1.42 1.42L12 13.41l-5.29 5.3a1 1 0 0 1-1.42-1.42L10.59 12 5.3 6.71a1 1 0 0 1 1.42-1.42L12 10.59l5.29-5.3a1 1 0 0 1 1.42 0z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 6l12 12M18 6L6 18" fill="currentColor" opacity="0.3" stroke="none"/>
  <path d="M18 6L6 18"/>
  <path d="M6 6l12 12"/>
  <circle cx="6" cy="6" r="1"/>
  <circle cx="18" cy="18" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 6L6 18" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M6 6l12 12" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M18 6L6 18"/>
  <path d="M6 6l12 12"/>
  <circle cx="6" cy="6" r="1"/>
  <circle cx="18" cy="18" r="1"/>
</svg>`,
  },
};

export default x;
