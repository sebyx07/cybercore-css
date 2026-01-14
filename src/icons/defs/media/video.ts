/**
 * Video file icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const video: IconDefinition = {
  name: 'video',
  category: 'media',
  description: 'Video file (clapperboard)',
  tags: ['video', 'film', 'movie', 'file', 'media'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="20" height="12" rx="2"/>
  <path d="M7 2v4M17 2v4"/>
  <path d="M2 10h20"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <rect x="2" y="6" width="20" height="12" rx="2"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M7 2v4M17 2v4"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M2 10h20"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor" opacity="0.3"/>
  <path d="M7 2v4M17 2v4"/>
  <path d="M2 10h20"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="20" height="12" rx="2"/>
  <rect x="2" y="6" width="20" height="12" rx="2" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M7 2v4M17 2v4"/>
  <path d="M7 2v4M17 2v4" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M2 10h20"/>
  <path d="M2 10h20" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default video;
