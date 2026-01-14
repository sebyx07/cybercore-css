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
  <circle cx="18" cy="18" r="2"/>
  <circle cx="6" cy="6" r="2"/>
  <path d="M6 8v7a2 2 0 0 0 2 2h8"/>
  <line x1="18" y1="16" x2="18" y2="11"/>
  <line x1="16" y1="11" x2="20" y2="11"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="18" cy="18" r="2.5"/>
  <circle cx="6" cy="6" r="2.5"/>
  <path d="M6 8.5v6.5a2 2 0 002 2h10v-1.5H8a.5.5 0 01-.5-.5V8.5H6z"/>
  <rect x="16" y="10.5" width="4" height="1"/>
  <rect x="17.25" y="11" width="1.5" height="5"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="18" r="2" fill="currentColor"/>
  <circle cx="6" cy="6" r="2" fill="currentColor"/>
  <path d="M6 8v7a2 2 0 0 0 2 2h8" opacity="0.3"/>
  <line x1="18" y1="16" x2="18" y2="11" opacity="0.3"/>
  <line x1="16" y1="11" x2="20" y2="11"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2" transform="translate(1,-1)" opacity="0.4"/>
  <circle cx="6" cy="6" r="2"/>
  <circle cx="6" cy="6" r="2" transform="translate(1,-1)" opacity="0.4"/>
  <path d="M6 8v7a2 2 0 0 0 2 2h8"/>
  <line x1="18" y1="16" x2="18" y2="11"/>
  <line x1="16" y1="11" x2="20" y2="11"/>
</svg>`,
  },
};

export default gitMerge;
