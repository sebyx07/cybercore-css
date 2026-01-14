/**
 * Calendar Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const calendar: IconDefinition = {
  name: 'calendar',
  category: 'data',
  description: 'Calendar with date grid',
  tags: ['calendar', 'date', 'schedule', 'time', 'event'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <path d="M3 10h18"/>
  <path d="M8 2v4"/>
  <path d="M16 2v4"/>
  <path d="M8 14h.01"/>
  <path d="M12 14h.01"/>
  <path d="M16 14h.01"/>
  <path d="M8 18h.01"/>
  <path d="M12 18h.01"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 1v2h8V1h2v2h1a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V6a3 3 0 013-3h1V1h2zm13 10H3v9a1 1 0 001 1h16a1 1 0 001-1v-9zm-12 3h1v1H9v-1zm3 0h1v1h-1v-1zm3 0h1v1h-1v-1zM9 18h1v1H9v-1zm3 0h1v1h-1v-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <path d="M3 10h18"/>
  <path d="M8 2v4"/>
  <path d="M16 2v4"/>
  <path d="M8 14h.01"/>
  <path d="M12 14h.01"/>
  <path d="M16 14h.01"/>
  <path d="M8 18h.01"/>
  <path d="M12 18h.01"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" transform="translate(1,-1)" opacity="0.3"/>
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <path d="M3 10h18" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M3 10h18"/>
  <path d="M8 2v4"/>
  <path d="M16 2v4"/>
  <path d="M8 14h.01"/>
  <path d="M12 14h.01"/>
  <path d="M16 14h.01"/>
  <path d="M8 18h.01"/>
  <path d="M12 18h.01"/>
</svg>`,
  },
};

export default calendar;
