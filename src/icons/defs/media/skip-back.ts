/**
 * Skip to previous icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const skipBack: IconDefinition = {
  name: 'skip-back',
  category: 'media',
  description: 'Skip to previous track or chapter',
  tags: ['skip', 'previous', 'back', 'media', 'rewind'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 20L9 12l10-8v16z"/>
  <path d="M5 19V5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M19 20L9 12l10-8v16z"/>
  <rect x="5" y="5" width="2" height="14"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 20L9 12l10-8v16z" fill="currentColor" opacity="0.3"/>
  <path d="M5 19V5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 20L9 12l10-8v16z"/>
  <path d="M19 20L9 12l10-8v16z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M5 19V5"/>
  <path d="M5 19V5" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default skipBack;
