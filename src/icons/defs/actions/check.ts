/**
 * Check Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const check: IconDefinition = {
  name: 'check',
  category: 'actions',
  description: 'Confirm or mark complete',
  tags: ['check', 'checkmark', 'confirm', 'done', 'success'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 6L9 17l-5-5"/>
  <circle cx="9" cy="17" r="1"/>
  <line x1="7" y1="10" x2="9" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.71 5.29a1 1 0 0 1 0 1.42l-11 11a1 1 0 0 1-1.42 0l-5-5a1 1 0 1 1 1.42-1.42L9 15.59l10.29-10.3a1 1 0 0 1 1.42 0z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 12l5 5L20 6" fill="currentColor" opacity="0.3"/>
  <path d="M20 6L9 17l-5-5"/>
  <circle cx="9" cy="17" r="1"/>
  <line x1="7" y1="10" x2="9" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 6L9 17l-5-5" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M20 6L9 17l-5-5"/>
  <circle cx="9" cy="17" r="1"/>
  <line x1="7" y1="10" x2="9" y2="12"/>
</svg>`,
  },
};

export default check;
