import type { IconDefinition } from '../../types';

export const offline: IconDefinition = {
  name: 'offline',
  category: 'status',
  description: 'Offline status indicator - wifi with slash',
  tags: ['disconnected', 'unavailable', 'no-connection', 'status'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="2" x2="22" y2="22"/>
  <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
  <path d="M2 8.82a15 15 0 0 1 4.17-2.65"/>
  <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/>
  <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/>
  <path d="M5 12.86a10 10 0 0 1 5.17-2.58"/>
  <circle cx="12" cy="20" r="1" fill="currentColor"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="12" cy="12" r="4"/>
  <rect x="1" y="11" width="22" height="2" transform="rotate(45 12 12)"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
  <line x1="3" y1="3" x2="21" y2="21" stroke-width="2"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <circle cx="12.2" cy="11.8" r="4" opacity="0.3"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <line x1="3.2" y1="2.8" x2="21.2" y2="20.8" opacity="0.3"/>
</svg>`,
  },
};
