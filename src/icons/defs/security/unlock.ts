/**
 * Unlock - Unlocked/accessible state
 * @category security
 */
import type { IconDefinition } from '../../types';

export const unlock: IconDefinition = {
  name: 'unlock',
  category: 'security',
  description: 'Unlocked/accessible state with open padlock',
  tags: ['unlock', 'open', 'accessible', 'unsecured'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="1.5"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"/>
  <circle cx="12" cy="16" r="1"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 11V7c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2l.8 1.4 1.4-.8-.8-1.4C15.5 2.3 13.8 1 12 1 8.7 1 6 3.7 6 7v4H5a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2H8zm4 3.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5v1.5h1V17.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="1.5" fill="currentColor" opacity="0.3"/>
  <rect x="5" y="11" width="14" height="10" rx="1.5"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"/>
  <circle cx="12" cy="16" r="1"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="1.5" transform="translate(1,-1)" opacity="0.3"/>
  <rect x="5" y="11" width="14" height="10" rx="1.5"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M8 11V7c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"/>
  <circle cx="12" cy="16" r="1"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
  },
};

export default unlock;
