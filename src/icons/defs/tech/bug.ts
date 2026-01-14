/**
 * Bug Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const bug: IconDefinition = {
  name: 'bug',
  category: 'tech',
  description: 'Bug/issue (insect)',
  tags: ['bug', 'issue', 'error', 'debug', 'problem'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="6" width="8" height="11" rx="3"/>
  <path d="M9 3h6"/>
  <path d="M4 9h4"/>
  <path d="M4 15h4"/>
  <path d="M16 9h4"/>
  <path d="M16 15h4"/>
  <path d="M8 19l-2 2"/>
  <path d="M16 19l2 2"/>
  <line x1="8" y1="11" x2="16" y2="11"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M9 2h6v2H9V2zm-1 4c-1.7 0-3 1.3-3 3v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3H8zm0 5h8v1H8v-1z"/>
  <rect x="4" y="8.5" width="4" height="1"/>
  <rect x="4" y="14.5" width="4" height="1"/>
  <rect x="16" y="8.5" width="4" height="1"/>
  <rect x="16" y="14.5" width="4" height="1"/>
  <path d="M6.3 19.3l2-2 1.4 1.4-2 2-1.4-1.4zm11.4 0l-2-2 1.4-1.4 2 2-1.4 1.4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="6" width="8" height="11" rx="3" fill="currentColor" opacity="0.3"/>
  <path d="M9 3h6"/>
  <path d="M4 9h4"/>
  <path d="M4 15h4"/>
  <path d="M16 9h4"/>
  <path d="M16 15h4"/>
  <path d="M8 19l-2 2"/>
  <path d="M16 19l2 2"/>
  <line x1="8" y1="11" x2="16" y2="11"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="6" width="8" height="11" rx="3"/>
  <rect x="8" y="6" width="8" height="11" rx="3" transform="translate(1,-1)" opacity="0.4"/>
  <path d="M9 3h6"/>
  <path d="M4 9h4"/>
  <path d="M4 15h4"/>
  <path d="M16 9h4"/>
  <path d="M16 15h4"/>
  <path d="M8 19l-2 2"/>
  <path d="M16 19l2 2"/>
  <line x1="8" y1="11" x2="16" y2="11"/>
</svg>`,
  },
};

export default bug;
