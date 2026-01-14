/**
 * Skip to next icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const skipForward: IconDefinition = {
  name: 'skip-forward',
  category: 'media',
  description: 'Skip to next track or chapter',
  tags: ['skip', 'next', 'forward', 'media', 'fast-forward'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 4l10 8-10 8V4z"/>
  <path d="M19 5v14"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M5 4l10 8-10 8V4z"/>
  <rect x="17" y="5" width="2" height="14"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 4l10 8-10 8V4z" fill="currentColor" opacity="0.3"/>
  <path d="M19 5v14"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 4l10 8-10 8V4z"/>
  <path d="M5 4l10 8-10 8V4z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M19 5v14"/>
  <path d="M19 5v14" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default skipForward;
