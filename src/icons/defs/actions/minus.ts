/**
 * Minus Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const minus: IconDefinition = {
  name: 'minus',
  category: 'actions',
  description: 'Remove or subtract item',
  tags: ['minus', 'remove', 'subtract', 'delete', 'decrease'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"/>
  <circle cx="5" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
  <line x1="8" y1="9" x2="6" y2="11"/>
  <line x1="16" y1="9" x2="18" y2="11"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 11h14v2H5z" fill="currentColor" opacity="0.3"/>
  <path d="M5 12h14"/>
  <circle cx="5" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
  <line x1="8" y1="9" x2="6" y2="11"/>
  <line x1="16" y1="9" x2="18" y2="11"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M5 12h14"/>
  <circle cx="5" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
  <line x1="8" y1="9" x2="6" y2="11"/>
  <line x1="16" y1="9" x2="18" y2="11"/>
</svg>`,
  },
};

export default minus;
