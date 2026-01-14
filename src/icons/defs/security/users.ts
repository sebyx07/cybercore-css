/**
 * Users - Multiple users/group
 * @category security
 */
import type { IconDefinition } from '../../types';

export const users: IconDefinition = {
  name: 'users',
  category: 'security',
  description: 'Multiple users or group with two people',
  tags: ['users', 'group', 'team', 'people', 'multiple', 'collaboration'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.5 0 2.9.3 4.1.9"/>
  <circle cx="17" cy="8" r="3"/>
  <path d="M23 19c0-2.5-2.7-4.5-6-4.5-.8 0-1.6.1-2.3.4"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 2.5c-3 0-5.5 2.5-5.5 5.5S6 13.5 9 13.5s5.5-2.5 5.5-5.5S12 2.5 9 2.5zM.5 21.5v-1.5c0-3.6 4-6.5 9-6.5 1.7 0 3.3.3 4.6.9-.2.5-.3 1-.3 1.6v5.5H.5zM17 4.5c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5 3.5-1.5 3.5-3.5-1.5-3.5-3.5-3.5zm6.5 16v-1.5c0-2.8-3-5-6.5-5-1 0-1.9.2-2.7.5.4.7.7 1.5.7 2.5v3.5h8.5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.5 0 2.9.3 4.1.9" fill="currentColor" opacity="0.3"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.5 0 2.9.3 4.1.9"/>
  <circle cx="17" cy="8" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="17" cy="8" r="3"/>
  <path d="M23 19c0-2.5-2.7-4.5-6-4.5-.8 0-1.6.1-2.3.4"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="8" r="4" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.5 0 2.9.3 4.1.9" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M1 20c0-3.3 3.6-6 8-6 1.5 0 2.9.3 4.1.9"/>
  <circle cx="17" cy="8" r="3" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="17" cy="8" r="3"/>
  <path d="M23 19c0-2.5-2.7-4.5-6-4.5-.8 0-1.6.1-2.3.4"/>
</svg>`,
  },
};

export default users;
