/**
 * User Minus - Remove user
 * @category security
 */
import type { IconDefinition } from '../../types';

export const userMinus: IconDefinition = {
  name: 'user-minus',
  category: 'security',
  description: 'Remove user or delete account',
  tags: ['user', 'remove', 'delete', 'revoke', 'ban', 'exclude'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4"/>
  <line x1="16" y1="15" x2="22" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 2.5c-3 0-5.5 2.5-5.5 5.5S6 13.5 9 13.5s5.5-2.5 5.5-5.5S12 2.5 9 2.5zM.5 21.5v-1.5c0-3.6 4-6.5 9-6.5 1.2 0 2.4.2 3.5.5v.5h1.5v-.5c-1.4-.6-3-.9-4.5-.9h-1c-5 0-9 2.9-9 6.5v1.5h19v-5h-1.5v5H.5zm15.5-7.5h-1.5v1.5H22v-1.5h-6z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4" fill="currentColor" opacity="0.3"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4"/>
  <line x1="16" y1="15" x2="22" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.1 0 2.1.1 3 .4"/>
  <line x1="16" y1="15" x2="22" y2="15" transform="translate(1,-1)" opacity="0.3"/>
  <line x1="16" y1="15" x2="22" y2="15"/>
</svg>`,
  },
};

export default userMinus;
