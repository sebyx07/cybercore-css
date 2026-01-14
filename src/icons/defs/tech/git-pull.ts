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
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="18" r="3"/>
  <path d="M6 9v6"/>
  <path d="M18 9v6"/>
  <path d="M6 6h6c2.2 0 4 1.8 4 4v2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="18" r="3"/>
  <rect x="5" y="9" width="2" height="6"/>
  <rect x="17" y="9" width="2" height="6"/>
  <path d="M6 5h6c2.8 0 5 2.2 5 5v2h-2v-2c0-1.7-1.3-3-3-3H6V5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.3"/>
  <path d="M6 9v6"/>
  <path d="M18 9v6"/>
  <path d="M6 6h6c2.2 0 4 1.8 4 4v2"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="18" r="3"/>
  </g>
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="18" r="3"/>
  <path d="M6 9v6"/>
  <path d="M18 9v6"/>
  <path d="M6 6h6c2.2 0 4 1.8 4 4v2"/>
</svg>`,
  },
};

export default gitPull;
