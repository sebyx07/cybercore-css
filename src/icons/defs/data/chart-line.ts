/**
 * Line Chart Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const chartLine: IconDefinition = {
  name: 'chart-line',
  category: 'data',
  description: 'Line chart with trend line',
  tags: ['chart', 'graph', 'line', 'trend', 'analytics', 'data'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
  <path d="M7 14l3.5-3.5 3 3L19 8"/>
  <circle cx="19" cy="8" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 2a1 1 0 0 1 1 1v16c0 .6.4 1 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1z"/>
  <path d="M7.7 13.3a1 1 0 1 0-1.4 1.4l3.5 3.5a1 1 0 0 0 1.4 0l2.6-2.6 5 5a1 1 0 0 0 1.4-1.4l-5.7-5.7a1 1 0 0 0-1.4 0l-2.6 2.6-2.8-2.8z"/>
  <circle cx="19" cy="8" r="1.5"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
  <polygon points="7 14 10.5 10.5 13.5 13.5 19 8 20 9 20 20 7 20" fill="currentColor" opacity="0.3"/>
  <path d="M7 14l3.5-3.5 3 3L19 8"/>
  <circle cx="19" cy="8" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
  <path d="M7 14l3.5-3.5 3 3L19 8"/>
  <circle cx="19" cy="8" r="1"/>
  <g opacity="0.4" transform="translate(1,-1)">
    <path d="M7 14l3.5-3.5 3 3L19 8"/>
    <circle cx="19" cy="8" r="1"/>
  </g>
</svg>`,
  },
};

export default chartLine;
