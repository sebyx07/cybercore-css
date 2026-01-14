/**
 * Database Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const database: IconDefinition = {
  name: 'database',
  category: 'data',
  description: 'Database with stacked cylinders',
  tags: ['database', 'storage', 'data', 'server', 'sql'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
  <path d="M7 8.5h.01"/>
  <path d="M7 14.5h.01"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5z" opacity="0.8"/>
  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6z" opacity="0.6"/>
  <ellipse cx="12" cy="11" rx="8" ry="3"/>
  <ellipse cx="12" cy="17" rx="8" ry="3"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="currentColor" opacity="0.3"/>
  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="currentColor" opacity="0.3"/>
  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
  <path d="M7 8.5h.01"/>
  <path d="M7 14.5h.01"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
  <path d="M7 8.5h.01"/>
  <path d="M7 14.5h.01"/>
  <g opacity="0.4" transform="translate(1,-1)">
    <ellipse cx="12" cy="5" rx="8" ry="3"/>
    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
  </g>
</svg>`,
  },
};

export default database;
