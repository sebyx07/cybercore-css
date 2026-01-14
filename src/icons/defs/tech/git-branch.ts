/**
 * Git Branch Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const gitBranch: IconDefinition = {
  name: 'git-branch',
  category: 'tech',
  description: 'Git branch',
  tags: ['git', 'branch', 'version-control', 'source', 'code'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="6" y1="3" x2="6" y2="15"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/>
  <path d="M18 9a9 9 0 0 1-9 9"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="6" cy="18" r="2.5"/>
  <circle cx="18" cy="6" r="2.5"/>
  <path d="M6 15.5V3h1.5v12.5H6zm12 3.5a9 9 0 01-9-9v-1.5a10.5 10.5 0 0010.5 10.5V19z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="6" y1="3" x2="6" y2="15" opacity="0.3"/>
  <circle cx="18" cy="6" r="2" fill="currentColor"/>
  <circle cx="6" cy="18" r="2" fill="currentColor"/>
  <path d="M18 9a9 9 0 0 1-9 9" opacity="0.3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="6" y1="3" x2="6" y2="15"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="18" cy="6" r="2" transform="translate(1,-1)" opacity="0.4"/>
  <circle cx="6" cy="18" r="2"/>
  <circle cx="6" cy="18" r="2" transform="translate(1,-1)" opacity="0.4"/>
  <path d="M18 9a9 9 0 0 1-9 9"/>
</svg>`,
  },
};

export default gitBranch;
