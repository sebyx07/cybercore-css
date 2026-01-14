/**
 * Eye Off - Hidden/hide
 * @category security
 */
import type { IconDefinition } from '../../types';

export const eyeOff: IconDefinition = {
  name: 'eye-off',
  category: 'security',
  description: 'Hidden or hide content with slashed eye',
  tags: ['eye', 'hide', 'hidden', 'invisible', 'private', 'password'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
  <circle cx="12" cy="12" r="3"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
  <circle cx="12" cy="12" r="2"/>
  <path d="M3.7 2.3L2.3 3.7l18 18 1.4-1.4-18-18z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" fill="currentColor" opacity="0.3"/>
  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
  <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="12" r="3"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
    <circle cx="12" cy="12" r="3"/>
  </g>
  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
  <circle cx="12" cy="12" r="3"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
  },
};

export default eyeOff;
