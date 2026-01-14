/**
 * Refresh Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const refresh: IconDefinition = {
  name: 'refresh',
  category: 'actions',
  description: 'Refresh or reload content',
  tags: ['refresh', 'reload', 'sync', 'update', 'rotate'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c-1-4-4.5-7-9-7-4.97 0-9 4.03-9 9s4.03 9 9 9c3 0 5.5-1.5 7.5-3.5"/>
  <path d="M21 4v6h-6"/>
  <circle cx="12" cy="12" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c3.31 0 6.24-1.61 8.06-4.09a1 1 0 1 0-1.62-1.18A7.98 7.98 0 0 1 12 20a8 8 0 1 1 7.75-10H16a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v2.35A9.97 9.97 0 0 0 12 2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c-1-4-4.5-7-9-7-4.97 0-9 4.03-9 9s4.03 9 9 9c3 0 5.5-1.5 7.5-3.5" fill="currentColor" opacity="0.3"/>
  <path d="M21 10c-1-4-4.5-7-9-7-4.97 0-9 4.03-9 9s4.03 9 9 9c3 0 5.5-1.5 7.5-3.5"/>
  <path d="M21 4v6h-6"/>
  <circle cx="12" cy="12" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c-1-4-4.5-7-9-7-4.97 0-9 4.03-9 9s4.03 9 9 9c3 0 5.5-1.5 7.5-3.5" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M21 10c-1-4-4.5-7-9-7-4.97 0-9 4.03-9 9s4.03 9 9 9c3 0 5.5-1.5 7.5-3.5"/>
  <path d="M21 4v6h-6"/>
  <circle cx="12" cy="12" r="1"/>
</svg>`,
  },
};

export default refresh;
