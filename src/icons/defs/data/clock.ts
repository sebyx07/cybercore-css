/**
 * Clock Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const clock: IconDefinition = {
  name: 'clock',
  category: 'data',
  description: 'Clock showing time',
  tags: ['clock', 'time', 'hours', 'minutes', 'schedule'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 6v6l4 2"/>
  <path d="M16.24 7.76l-.5.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm1 5v5.6l3.7 2.2-.9 1.5-4.8-2.9V6h2zm3.7 1.3l.7.7-.7-.7z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 6v6l4 2"/>
  <path d="M16.24 7.76l-.5.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 6v6l4 2" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M12 6v6l4 2"/>
  <path d="M16.24 7.76l-.5.5"/>
</svg>`,
  },
};

export default clock;
