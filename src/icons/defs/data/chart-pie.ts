/**
 * Pie Chart Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const chartPie: IconDefinition = {
  name: 'chart-pie',
  category: 'data',
  description: 'Pie chart with segments',
  tags: ['chart', 'graph', 'pie', 'circular', 'analytics', 'data'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v10l7.07 7.07"/>
  <path d="M12 12L4.93 19.07"/>
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2a10 10 0 0 1 7.07 17.07"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2a10 10 0 0 1 10 10h-10V2z"/>
  <path d="M12 13h9.95A10 10 0 1 1 11 3.05V13z" opacity="0.6"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2v10h10" fill="none"/>
  <path d="M12 2v10l7.07 7.07" fill="none"/>
  <path d="M12 2a10 10 0 0 1 7.07 17.07L12 12V2z" fill="currentColor" opacity="0.3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v10l7.07 7.07"/>
  <path d="M12 12L4.93 19.07"/>
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2a10 10 0 0 1 7.07 17.07"/>
  <g opacity="0.4" transform="translate(-1,1)">
    <path d="M12 2v10l7.07 7.07"/>
    <path d="M12 12L4.93 19.07"/>
  </g>
</svg>`,
  },
};

export default chartPie;
