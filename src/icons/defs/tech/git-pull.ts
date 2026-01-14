/**
 * Git Pull Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const gitPull: IconDefinition = {
  name: 'git-pull',
  category: 'tech',
  description: 'Git pull request',
  tags: ['git', 'pull', 'request', 'pr', 'review'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="18" r="2"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/>
  <line x1="18" y1="8" x2="18" y2="16"/>
  <line x1="6" y1="9" x2="6" y2="16"/>
  <polyline points="14 6 18 2 22 6"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="18" cy="18" r="2.5"/>
  <circle cx="18" cy="6" r="2.5"/>
  <circle cx="6" cy="18" r="2.5"/>
  <rect x="17.25" y="8" width="1.5" height="8"/>
  <rect x="5.25" y="9" width="1.5" height="7"/>
  <path d="M18 2l4 4h-2.5v1h-3V6H14l4-4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="18" r="2" fill="currentColor"/>
  <circle cx="18" cy="6" r="2" fill="currentColor"/>
  <circle cx="6" cy="18" r="2" fill="currentColor"/>
  <line x1="18" y1="8" x2="18" y2="16" opacity="0.3"/>
  <line x1="6" y1="9" x2="6" y2="16" opacity="0.3"/>
  <polyline points="14 6 18 2 22 6"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2" transform="translate(1,-1)" opacity="0.4"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/>
  <line x1="18" y1="8" x2="18" y2="16"/>
  <line x1="6" y1="9" x2="6" y2="16"/>
  <polyline points="14 6 18 2 22 6"/>
  <polyline points="14 6 18 2 22 6" transform="translate(1,-1)" opacity="0.4"/>
</svg>`,
  },
};

export default gitPull;
