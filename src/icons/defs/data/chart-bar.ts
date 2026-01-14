/**
 * Bar Chart Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const chartBar: IconDefinition = {
  name: 'chart-bar',
  category: 'data',
  description: 'Bar chart with vertical columns',
  tags: ['chart', 'graph', 'bar', 'analytics', 'data', 'statistics'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
  <path d="M7 16V9"/>
  <path d="M12 16V6"/>
  <path d="M17 16v-4"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 2a1 1 0 0 1 1 1v16c0 .6.4 1 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1z"/>
  <rect x="6" y="8" width="2" height="9" rx="1"/>
  <rect x="11" y="5" width="2" height="12" rx="1"/>
  <rect x="16" y="11" width="2" height="6" rx="1"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
  <rect x="6.5" y="9" width="1" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="11.5" y="6" width="1" height="10" fill="currentColor" opacity="0.3"/>
  <rect x="16.5" y="12" width="1" height="4" fill="currentColor" opacity="0.3"/>
  <path d="M7 16V9"/>
  <path d="M12 16V6"/>
  <path d="M17 16v-4"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
  <path d="M7 16V9"/>
  <path d="M12 16V6"/>
  <path d="M17 16v-4"/>
  <g opacity="0.4" transform="translate(1,-1)">
    <path d="M7 16V9"/>
    <path d="M12 16V6"/>
    <path d="M17 16v-4"/>
  </g>
</svg>`,
  },
};

export default chartBar;
