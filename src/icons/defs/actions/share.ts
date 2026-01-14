/**
 * Share Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const share: IconDefinition = {
  name: 'share',
  category: 'actions',
  description: 'Share content with others',
  tags: ['share', 'send', 'distribute', 'export', 'forward'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <path d="M8.5 13.5l7 3"/>
  <path d="M8.5 10.5l7-3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18 1a4 4 0 0 0-2.5 7.08l-5.66 3.4A4 4 0 1 0 6 16a4 4 0 0 0 3.84-2.92l5.66-3.4A4 4 0 1 0 18 1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="5" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="12" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="18" cy="19" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <path d="M8.5 13.5l7 3"/>
  <path d="M8.5 10.5l7-3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="5" r="3" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="18" cy="19" r="3" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <path d="M8.5 13.5l7 3"/>
  <path d="M8.5 10.5l7-3"/>
</svg>`,
  },
};

export default share;
