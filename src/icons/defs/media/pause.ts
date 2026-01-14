/**
 * Pause media icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const pause: IconDefinition = {
  name: 'pause',
  category: 'media',
  description: 'Pause media (two vertical bars)',
  tags: ['pause', 'media', 'video', 'audio', 'stop'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M10 8v8M14 8v8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="12" cy="12" r="10"/>
  <rect x="9" y="8" width="2" height="8" fill="#000"/>
  <rect x="13" y="8" width="2" height="8" fill="#000"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
  <rect x="9" y="8" width="2" height="8" fill="currentColor"/>
  <rect x="13" y="8" width="2" height="8" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="10" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M10 8v8M14 8v8"/>
  <path d="M10 8v8M14 8v8" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default pause;
