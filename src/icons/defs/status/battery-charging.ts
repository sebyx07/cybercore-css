import type { IconDefinition } from '../../types';

export const batteryCharging: IconDefinition = {
  name: 'battery-charging',
  category: 'status',
  description: 'Battery charging indicator with lightning bolt',
  tags: ['power', 'charge', 'charging', 'electricity'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <polyline points="13 9 10 13 12 13 9 17"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M20 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2h1v-2h-1V9c0-1.1-.9-2-2-2zm-7 9l3-4h-2l3-4h-4l-2 4h2l-3 4h3z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2" fill="currentColor" opacity="0.3"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <polyline points="13 9 10 13 12 13 9 17" stroke-width="2"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2"/>
  <rect x="2.2" y="7.2" width="18" height="10" rx="2" opacity="0.3"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <polyline points="13 9 10 13 12 13 9 17"/>
  <polyline points="13.3 8.7 10.3 12.7 12.3 12.7 9.3 16.7" opacity="0.3"/>
</svg>`,
  },
};
