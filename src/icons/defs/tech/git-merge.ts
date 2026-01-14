/**
 * Git Merge Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const gitMerge: IconDefinition = {
  name: 'git-merge',
  category: 'tech',
  description: 'Git merge',
  tags: ['git', 'merge', 'version-control', 'combine', 'integrate'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="6" r="3"/>
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <path d="M6 9v6"/>
  <path d="M18 9c0 6-6 6-6 12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="18" cy="6" r="3"/>
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <rect x="5" y="9" width="2" height="6"/>
  <path d="M17 9c0 2.5-1 4.5-2.5 6S12 18 12 21h2c0-2.5 1-4.5 2.5-6S19 12 19 9h-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.3"/>
  <path d="M6 9v6"/>
  <path d="M18 9c0 6-6 6-6 12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
  </g>
  <circle cx="18" cy="6" r="3"/>
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <path d="M6 9v6"/>
  <path d="M18 9c0 6-6 6-6 12"/>
</svg>`,
  },
};

export default gitMerge;
