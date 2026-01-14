/**
 * Cut Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const cut: IconDefinition = {
  name: 'cut',
  category: 'actions',
  description: 'Cut to clipboard',
  tags: ['cut', 'scissors', 'clipboard', 'remove', 'snip'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2"/>
  <path d="M8 18l4-9 4 9"/>
  <path d="M12 9l8-6"/>
  <line x1="8" y1="3" x2="12" y2="9"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm12 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-9.5 1.5l3.5-7.5 3.5 7.5h-7zm3.5-8.5l7.5-5.5a1 1 0 0 1 1.2 1.6l-8 5.9a1 1 0 0 1-1.4 0L4.3 3.6a1 1 0 1 1 1.2-1.6L12 7.5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.3"/>
  <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2"/>
  <path d="M8 18l4-9 4 9"/>
  <path d="M12 9l8-6"/>
  <line x1="8" y1="3" x2="12" y2="9"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="18" r="2" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="18" cy="18" r="2" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="6" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2"/>
  <path d="M8 18l4-9 4 9"/>
  <path d="M12 9l8-6"/>
  <line x1="8" y1="3" x2="12" y2="9"/>
</svg>`,
  },
};

export default cut;
