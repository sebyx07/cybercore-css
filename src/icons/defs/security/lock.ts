/**
 * Lock - Locked/secure state
 * @category security
 */
import type { IconDefinition } from '../../types';

export const lock: IconDefinition = {
  name: 'lock',
  category: 'security',
  description: 'Locked/secure state with padlock',
  tags: ['lock', 'secure', 'private', 'protected', 'closed'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="1.5"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4s4 1.8 4 4v4"/>
  <circle cx="12" cy="16" r="1"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 11V7c0-2.2 1.8-4 4-4s4 1.8 4 4v4h1a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2h1zm2 0h4V7c0-1.1-.9-2-2-2s-2 .9-2 2v4zm2 3.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5v1.5h1V17.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="1.5" fill="currentColor" opacity="0.3"/>
  <rect x="5" y="11" width="14" height="10" rx="1.5"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4s4 1.8 4 4v4"/>
  <circle cx="12" cy="16" r="1"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="1.5" transform="translate(1,-1)" opacity="0.3"/>
  <rect x="5" y="11" width="14" height="10" rx="1.5"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4s4 1.8 4 4v4" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4s4 1.8 4 4v4"/>
  <circle cx="12" cy="16" r="1"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
  },
};

export default lock;
