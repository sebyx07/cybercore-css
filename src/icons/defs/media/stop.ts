/**
 * Stop media icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const stop: IconDefinition = {
  name: 'stop',
  category: 'media',
  description: 'Stop media (square)',
  tags: ['stop', 'media', 'video', 'audio', 'end'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <rect x="9" y="9" width="6" height="6"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="12" cy="12" r="10"/>
  <rect x="9" y="9" width="6" height="6" fill="#000"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
  <rect x="9" y="9" width="6" height="6" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="10" transform="translate(1,-1)" opacity="0.3"/>
  <rect x="9" y="9" width="6" height="6"/>
  <rect x="9" y="9" width="6" height="6" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default stop;
