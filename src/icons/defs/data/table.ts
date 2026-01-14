/**
 * Table Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const table: IconDefinition = {
  name: 'table',
  category: 'data',
  description: 'Data table with grid layout',
  tags: ['table', 'grid', 'data', 'spreadsheet', 'rows', 'columns'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M3 9h18"/>
  <path d="M3 15h18"/>
  <path d="M9 3v18"/>
  <path d="M15 9v12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
  <path d="M15 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" opacity="0.6"/>
  <path d="M5 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" opacity="0.6"/>
  <path d="M15 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" opacity="0.4"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <rect x="3" y="3" width="6" height="6" fill="currentColor" opacity="0.3"/>
  <rect x="15" y="9" width="6" height="6" fill="currentColor" opacity="0.3"/>
  <path d="M3 9h18"/>
  <path d="M3 15h18"/>
  <path d="M9 3v18"/>
  <path d="M15 9v12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M3 9h18"/>
  <path d="M3 15h18"/>
  <path d="M9 3v18"/>
  <path d="M15 9v12"/>
  <g opacity="0.4" transform="translate(1,-1)">
    <path d="M3 9h18"/>
    <path d="M3 15h18"/>
    <path d="M9 3v18"/>
  </g>
</svg>`,
  },
};

export default table;
