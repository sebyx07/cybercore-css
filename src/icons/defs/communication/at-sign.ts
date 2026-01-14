/**
 * At Sign - Mention symbol (@)
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const atSign: IconDefinition = {
  name: 'at-sign',
  category: 'communication',
  description: 'Mention or at symbol (@)',
  tags: ['at', 'mention', 'tag', 'email', 'username'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  <line x1="19" y1="8" x2="19.01" y2="8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 3.92-.79l.63 1.87A11.96 11.96 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12v1a5 5 0 0 1-10 0V8h2v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94l.63 1.87zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  <line x1="19" y1="8" x2="19.01" y2="8"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  <line x1="19" y1="8" x2="19.01" y2="8"/>
</svg>`,
  },
};

export default atSign;
