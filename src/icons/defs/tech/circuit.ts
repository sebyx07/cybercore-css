/**
 * Circuit Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const circuit: IconDefinition = {
  name: 'circuit',
  category: 'tech',
  description: 'Circuit board pattern',
  tags: ['circuit', 'board', 'electronics', 'pcb', 'connections'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="1.5"/>
  <circle cx="18" cy="6" r="1.5"/>
  <circle cx="6" cy="18" r="1.5"/>
  <circle cx="18" cy="18" r="1.5"/>
  <line x1="7.5" y1="6" x2="11" y2="6"/>
  <line x1="13" y1="6" x2="16.5" y2="6"/>
  <line x1="6" y1="7.5" x2="6" y2="11"/>
  <line x1="6" y1="13" x2="6" y2="16.5"/>
  <line x1="18" y1="7.5" x2="18" y2="11"/>
  <line x1="18" y1="13" x2="18" y2="16.5"/>
  <line x1="7.5" y1="18" x2="11" y2="18"/>
  <line x1="13" y1="18" x2="16.5" y2="18"/>
  <rect x="11" y="11" width="2" height="2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="6" cy="6" r="2"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2"/>
  <rect x="7.5" y="5.25" width="3.5" height="1.5"/>
  <rect x="13" y="5.25" width="3.5" height="1.5"/>
  <rect x="5.25" y="7.5" width="1.5" height="3.5"/>
  <rect x="5.25" y="13" width="1.5" height="3.5"/>
  <rect x="17.25" y="7.5" width="1.5" height="3.5"/>
  <rect x="17.25" y="13" width="1.5" height="3.5"/>
  <rect x="7.5" y="17.25" width="3.5" height="1.5"/>
  <rect x="13" y="17.25" width="3.5" height="1.5"/>
  <rect x="11" y="11" width="2" height="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.3"/>
  <circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.3"/>
  <circle cx="6" cy="18" r="1.5" fill="currentColor" opacity="0.3"/>
  <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.3"/>
  <line x1="7.5" y1="6" x2="11" y2="6"/>
  <line x1="13" y1="6" x2="16.5" y2="6"/>
  <line x1="6" y1="7.5" x2="6" y2="11"/>
  <line x1="6" y1="13" x2="6" y2="16.5"/>
  <line x1="18" y1="7.5" x2="18" y2="11"/>
  <line x1="18" y1="13" x2="18" y2="16.5"/>
  <line x1="7.5" y1="18" x2="11" y2="18"/>
  <line x1="13" y1="18" x2="16.5" y2="18"/>
  <rect x="11" y="11" width="2" height="2" fill="currentColor" opacity="0.3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="1.5"/>
  <circle cx="6" cy="6" r="1.5" transform="translate(1,-1)" opacity="0.4"/>
  <circle cx="18" cy="6" r="1.5"/>
  <circle cx="18" cy="6" r="1.5" transform="translate(1,-1)" opacity="0.4"/>
  <circle cx="6" cy="18" r="1.5"/>
  <circle cx="18" cy="18" r="1.5"/>
  <line x1="7.5" y1="6" x2="11" y2="6"/>
  <line x1="13" y1="6" x2="16.5" y2="6"/>
  <line x1="6" y1="7.5" x2="6" y2="11"/>
  <line x1="6" y1="13" x2="6" y2="16.5"/>
  <line x1="18" y1="7.5" x2="18" y2="11"/>
  <line x1="18" y1="13" x2="18" y2="16.5"/>
  <line x1="7.5" y1="18" x2="11" y2="18"/>
  <line x1="13" y1="18" x2="16.5" y2="18"/>
  <rect x="11" y="11" width="2" height="2"/>
</svg>`,
  },
};

export default circuit;
