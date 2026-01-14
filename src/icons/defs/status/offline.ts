import type { IconDefinition } from '../../types';

export const offline: IconDefinition = {
  name: 'offline',
  category: 'status',
  description: 'Offline status indicator with slash through circle',
  tags: ['disconnected', 'unavailable', 'away', 'status'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
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
