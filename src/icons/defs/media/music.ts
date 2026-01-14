/**
 * Music/audio file icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const music: IconDefinition = {
  name: 'music',
  category: 'media',
  description: 'Music/audio file (music note)',
  tags: ['music', 'audio', 'sound', 'note', 'file', 'song'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18V5l12-2v13"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="16" r="3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 18V5l12-2v13"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="16" r="3"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18V5l12-2v13" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="18" r="3" fill="currentColor"/>
  <circle cx="18" cy="16" r="3" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18V5l12-2v13"/>
  <path d="M9 18V5l12-2v13" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="6" cy="18" r="3" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="18" cy="16" r="3"/>
  <circle cx="18" cy="16" r="3" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default music;
