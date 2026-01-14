import type { IconDefinition } from '../../types';

export const success: IconDefinition = {
  name: 'success',
  category: 'status',
  description: 'Success icon with checkmark in circle',
  tags: ['check', 'complete', 'done', 'correct', 'verified'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.3"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <circle cx="11.8" cy="12.2" r="9" opacity="0.3"/>
  <polyline points="9 12 11 14 15 10"/>
  <polyline points="8.8 12.2 10.8 14.2 14.8 10.2" opacity="0.3"/>
</svg>`,
  },
};
