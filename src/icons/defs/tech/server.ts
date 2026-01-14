/**
 * Server Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const server: IconDefinition = {
  name: 'server',
  category: 'tech',
  description: 'Server (stacked boxes)',
  tags: ['server', 'hosting', 'datacenter', 'backend', 'infrastructure'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="6" rx="2"/>
  <rect x="3" y="11" width="18" height="6" rx="2"/>
  <rect x="3" y="19" width="18" height="2" rx="1"/>
  <circle cx="7" cy="6" r="0.5"/>
  <circle cx="7" cy="14" r="0.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="3" y="3" width="18" height="6" rx="2"/>
  <rect x="3" y="11" width="18" height="6" rx="2"/>
  <rect x="3" y="19" width="18" height="2" rx="1"/>
  <circle cx="7" cy="6" r="1"/>
  <circle cx="7" cy="14" r="1"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="6" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="3" y="11" width="18" height="6" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="3" y="19" width="18" height="2" rx="1" fill="currentColor" opacity="0.3"/>
  <circle cx="7" cy="6" r="0.5"/>
  <circle cx="7" cy="14" r="0.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="6" rx="2"/>
  <rect x="3" y="3" width="18" height="6" rx="2" transform="translate(1,-1)" opacity="0.4"/>
  <rect x="3" y="11" width="18" height="6" rx="2"/>
  <rect x="3" y="19" width="18" height="2" rx="1"/>
  <circle cx="7" cy="6" r="0.5"/>
  <circle cx="7" cy="14" r="0.5"/>
</svg>`,
  },
};

export default server;
