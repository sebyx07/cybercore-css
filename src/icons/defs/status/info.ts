import type { IconDefinition } from '../../types';

export const info: IconDefinition = {
  name: 'info',
  category: 'status',
  description: 'Information icon with i symbol in circle',
  tags: ['help', 'about', 'details', 'information'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <circle cx="12" cy="8.5" r="0.5" fill="currentColor"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.3"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <circle cx="12" cy="8.5" r="0.5" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <circle cx="11.8" cy="12.2" r="9" opacity="0.3"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <line x1="11.8" y1="16.2" x2="11.8" y2="12.2" opacity="0.3"/>
  <circle cx="12" cy="8.5" r="0.5" fill="currentColor"/>
</svg>`,
  },
};
