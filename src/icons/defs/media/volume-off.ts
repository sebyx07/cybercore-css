/**
 * Volume off/muted icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const volumeOff: IconDefinition = {
  name: 'volume-off',
  category: 'media',
  description: 'Volume muted (speaker with X)',
  tags: ['volume', 'mute', 'sound', 'audio', 'speaker', 'off'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
  <path d="M23 9l-6 6M17 9l6 6"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M23 9l-6 6M17 9l6 6"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" opacity="0.3"/>
  <path d="M23 9l-6 6M17 9l6 6"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
  <path d="M11 5L6 9H2v6h4l5 4V5z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M23 9l-6 6M17 9l6 6"/>
  <path d="M23 9l-6 6M17 9l6 6" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default volumeOff;
