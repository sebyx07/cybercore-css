/**
 * Play media icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const play: IconDefinition = {
  name: 'play',
  category: 'media',
  description: 'Play media (triangle in circle)',
  tags: ['play', 'media', 'video', 'audio', 'start'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M10 8l6 4-6 4V8z"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="12" cy="12" r="10"/>
  <path fill="#000" d="M10 8l6 4-6 4V8z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
  <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="10" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M10 8l6 4-6 4V8z"/>
  <path d="M10 8l6 4-6 4V8z" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default play;
