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
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="20" y1="4" x2="8.12" y2="15.88"/>
  <line x1="14.47" y1="9.53" x2="20" y2="20"/>
  <line x1="8.12" y1="8.12" x2="12" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <path d="M19.3 3.3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-1.4-1.4l11-11a1 1 0 0 1 1.4 0z"/>
  <path d="M14 9l6 11a1 1 0 0 1-1.7 1l-5-9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="20" y1="4" x2="8.12" y2="15.88"/>
  <line x1="14.47" y1="9.53" x2="20" y2="20"/>
  <line x1="8.12" y1="8.12" x2="12" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="6" cy="18" r="3" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="20" y1="4" x2="8.12" y2="15.88"/>
  <line x1="14.47" y1="9.53" x2="20" y2="20"/>
  <line x1="8.12" y1="8.12" x2="12" y2="12"/>
</svg>`,
  },
};

export default cut;
