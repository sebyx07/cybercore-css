import type { IconDefinition } from '../../types';

export const batteryFull: IconDefinition = {
  name: 'battery-full',
  category: 'status',
  description: 'Full battery indicator at 100% charge',
  tags: ['power', 'charge', 'full', 'energy'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <rect x="4" y="9" width="14" height="6" rx="1" fill="currentColor"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M20 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2h1v-2h-1V9c0-1.1-.9-2-2-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2" fill="currentColor" opacity="0.3"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <rect x="4" y="9" width="14" height="6" rx="1" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2"/>
  <rect x="2.2" y="7.2" width="18" height="10" rx="2" opacity="0.3"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <rect x="4" y="9" width="14" height="6" rx="1" fill="currentColor"/>
  <rect x="4.2" y="9.2" width="14" height="6" rx="1" fill="currentColor" opacity="0.3"/>
</svg>`,
  },
};
