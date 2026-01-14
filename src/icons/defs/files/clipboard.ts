/**
 * Clipboard
 * @category files
 */
import type { IconDefinition } from '../../types';

export const clipboard: IconDefinition = {
  name: 'clipboard',
  category: 'files',
  description: 'Clipboard with content',
  tags: ['clipboard', 'copy', 'paste', 'document'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="4" width="12" height="16" rx="2"/>
  <path d="M9 2h6v2H9z"/>
  <line x1="9" y1="11" x2="15" y2="11"/>
  <line x1="9" y1="15" x2="15" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="6" y="4" width="12" height="16" rx="2"/>
  <path d="M9 2h6v2H9z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="9" y="10" width="6" height="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="9" y="14" width="6" height="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="4" width="12" height="16" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="6" y="4" width="12" height="16" rx="2"/>
  <path d="M9 2h6v2H9z"/>
  <line x1="9" y1="11" x2="15" y2="11"/>
  <line x1="9" y1="15" x2="15" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="4" width="12" height="16" rx="2" transform="translate(1,-1)" opacity="0.5"/>
  <rect x="6" y="4" width="12" height="16" rx="2"/>
  <path d="M9 2h6v2H9z" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M9 2h6v2H9z"/>
  <line x1="9" y1="11" x2="15" y2="11" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="9" y1="11" x2="15" y2="11"/>
  <line x1="9" y1="15" x2="15" y2="15" transform="translate(-1,1)" opacity="0.5"/>
  <line x1="9" y1="15" x2="15" y2="15"/>
</svg>`,
  },
};

export default clipboard;
