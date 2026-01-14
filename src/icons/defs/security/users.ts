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
  <circle cx="9" cy="7" r="4"/>
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
  <circle cx="17" cy="7" r="3"/>
  <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="9" cy="7" r="4"/>
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2H3z"/>
  <circle cx="17" cy="7" r="3"/>
  <path d="M17.5 11c1.9 0 3.5 1.6 3.5 3.5V21h-4v-6.5c0-.8-.3-1.6-.8-2.2.5-.2 1.1-.3 1.8-.3z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="7" r="4" fill="currentColor" opacity="0.3"/>
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="7" r="4"/>
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
  <circle cx="17" cy="7" r="3"/>
  <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <circle cx="9" cy="7" r="4"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    <circle cx="17" cy="7" r="3"/>
  </g>
  <circle cx="9" cy="7" r="4"/>
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
  <circle cx="17" cy="7" r="3"/>
  <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
</svg>`,
  },
};

export default users;
