/**
 * Plus Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const plus: IconDefinition = {
  name: 'plus',
  category: 'actions',
  description: 'Add or create new item',
  tags: ['plus', 'add', 'create', 'new', 'increase'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5v14"/>
  <path d="M5 12h14"/>
  <circle cx="12" cy="5" r="1"/>
  <circle cx="12" cy="19" r="1"/>
  <circle cx="5" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 0 1 0 2h-7v7a1 1 0 0 1-2 0v-7H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 1-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5h2v14h-2z" fill="currentColor" opacity="0.3"/>
  <path d="M12 5v14"/>
  <path d="M5 12h14"/>
  <circle cx="12" cy="5" r="1"/>
  <circle cx="12" cy="19" r="1"/>
  <circle cx="5" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5v14" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M5 12h14" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M12 5v14"/>
  <path d="M5 12h14"/>
  <circle cx="12" cy="5" r="1"/>
  <circle cx="12" cy="19" r="1"/>
  <circle cx="5" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
</svg>`,
  },
};

export default plus;
