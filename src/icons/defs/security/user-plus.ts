/**
 * User Plus - Add user
 * @category security
 */
import type { IconDefinition } from '../../types';

export const userPlus: IconDefinition = {
  name: 'user-plus',
  category: 'security',
  description: 'Add user or create account',
  tags: ['user', 'add', 'create', 'new', 'invite', 'register'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4"/>
  <line x1="19" y1="12" x2="19" y2="18"/>
  <line x1="16" y1="15" x2="22" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 2.5c-3 0-5.5 2.5-5.5 5.5S6 13.5 9 13.5s5.5-2.5 5.5-5.5S12 2.5 9 2.5zM.5 21.5v-1.5c0-3.6 4-6.5 9-6.5 1.2 0 2.4.2 3.5.5v.5h1.5v-2.5h2.5v1h1v-2h-1v-1h2.5v2.5h1V15h2.5v1.5h-2.5v2.5h-1v1h-2.5v-1h-1v2.5H.5zm18.5-8h-1.5v2.5H15v1.5h2.5V20h1.5v-2.5H22V16h-2.5v-2.5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4" fill="currentColor" opacity="0.3"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4"/>
  <line x1="19" y1="12" x2="19" y2="18"/>
  <line x1="16" y1="15" x2="22" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4"/>
  <line x1="19" y1="12" x2="19" y2="18" transform="translate(1,-1)" opacity="0.3"/>
  <line x1="19" y1="12" x2="19" y2="18"/>
  <line x1="16" y1="15" x2="22" y2="15" transform="translate(1,-1)" opacity="0.3"/>
  <line x1="16" y1="15" x2="22" y2="15"/>
</svg>`,
  },
};

export default userPlus;
