/**
 * Git Commit Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const gitCommit: IconDefinition = {
  name: 'git-commit',
  category: 'tech',
  description: 'Git commit (circle with line)',
  tags: ['git', 'commit', 'version-control', 'change', 'history'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <line x1="3" y1="12" x2="9" y2="12"/>
  <line x1="15" y1="12" x2="21" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="12" cy="12" r="4"/>
  <rect x="3" y="11" width="6" height="2"/>
  <rect x="15" y="11" width="6" height="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
  <line x1="3" y1="12" x2="9" y2="12"/>
  <line x1="15" y1="12" x2="21" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <circle cx="12" cy="12" r="3" transform="translate(1,-1)" opacity="0.4"/>
  <line x1="3" y1="12" x2="9" y2="12"/>
  <line x1="15" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="12" x2="9" y2="12" transform="translate(1,-1)" opacity="0.4"/>
</svg>`,
  },
};

export default gitCommit;
