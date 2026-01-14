/**
 * Sync Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const sync: IconDefinition = {
  name: 'sync',
  category: 'data',
  description: 'Synchronize data with bidirectional arrows',
  tags: ['sync', 'refresh', 'update', 'data', 'transfer', 'arrows'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
  <path d="M3 14v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
  <path d="M7 7l-4 3 4 3"/>
  <path d="M17 17l4-3-4-3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2.6l3.3-2.3a1 1 0 0 1 1.4.2 1 1 0 0 1-.2 1.4l-4 3a1 1 0 0 1-1.2 0l-1-.7V8a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v2z"/>
  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.6l-3.3 2.3a1 1 0 0 1-1.4-.2 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.2 0l1 .7V16a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
  <path d="M3 14v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
  <path d="M5 6h14a2 2 0 0 1 2 2v2h-18V8a2 2 0 0 1 2-2z" fill="currentColor" opacity="0.3"/>
  <path d="M7 7l-4 3 4 3"/>
  <path d="M17 17l4-3-4-3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
  <path d="M3 14v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
  <path d="M7 7l-4 3 4 3"/>
  <path d="M17 17l4-3-4-3"/>
  <g opacity="0.4" transform="translate(-1,1)">
    <path d="M7 7l-4 3 4 3"/>
    <path d="M17 17l4-3-4-3"/>
  </g>
</svg>`,
  },
};

export default sync;
