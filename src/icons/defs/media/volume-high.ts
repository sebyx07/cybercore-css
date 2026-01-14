/**
 * Volume high icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const volumeHigh: IconDefinition = {
  name: 'volume-high',
  category: 'media',
  description: 'Volume on/high (speaker with waves)',
  tags: ['volume', 'sound', 'audio', 'speaker', 'loud'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
  <path d="M15.54 8.46a5 5 0 010 7.07"/>
  <path d="M19.07 4.93a10 10 0 010 14.14"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M15.54 8.46a5 5 0 010 7.07"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M19.07 4.93a10 10 0 010 14.14"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" opacity="0.3"/>
  <path d="M15.54 8.46a5 5 0 010 7.07"/>
  <path d="M19.07 4.93a10 10 0 010 14.14"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
  <path d="M11 5L6 9H2v6h4l5 4V5z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M15.54 8.46a5 5 0 010 7.07"/>
  <path d="M15.54 8.46a5 5 0 010 7.07" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M19.07 4.93a10 10 0 010 14.14"/>
  <path d="M19.07 4.93a10 10 0 010 14.14" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default volumeHigh;
