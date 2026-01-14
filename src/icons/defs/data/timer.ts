/**
 * Timer Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const timer: IconDefinition = {
  name: 'timer',
  category: 'data',
  description: 'Timer countdown with stopwatch',
  tags: ['timer', 'countdown', 'stopwatch', 'time', 'duration'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 2h4"/>
  <path d="M12 14v-4"/>
  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/>
  <path d="M9 17H2v7l2-2"/>
  <circle cx="18" cy="8" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"/>
  <path d="M12 5a9 9 0 0 1 6.4 15.4l2.6 2.6a1 1 0 0 1-1.4 1.4l-2.6-2.6A9 9 0 1 1 12 5zm1 4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V9z"/>
  <circle cx="18" cy="8" r="1.5"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 2h4"/>
  <path d="M12 14v-4"/>
  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" fill="currentColor" opacity="0.3"/>
  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/>
  <path d="M9 17H2v7l2-2"/>
  <circle cx="18" cy="8" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 2h4"/>
  <path d="M12 14v-4"/>
  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/>
  <path d="M9 17H2v7l2-2"/>
  <circle cx="18" cy="8" r="1"/>
  <g opacity="0.4" transform="translate(-1,1)">
    <path d="M12 14v-4"/>
    <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/>
  </g>
</svg>`,
  },
};

export default timer;
