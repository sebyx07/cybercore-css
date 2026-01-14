/**
 * API Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const api: IconDefinition = {
  name: 'api',
  category: 'tech',
  description: 'API endpoint',
  tags: ['api', 'endpoint', 'integration', 'interface', 'service'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h7v7H4z"/>
  <path d="M13 13h7v7h-7z"/>
  <path d="M11 8h2"/>
  <path d="M8 11v2"/>
  <path d="M16 11v2"/>
  <path d="M11 16h2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="4" y="4" width="7" height="7" rx="1"/>
  <rect x="13" y="13" width="7" height="7" rx="1"/>
  <rect x="11" y="7" width="2" height="2"/>
  <rect x="7" y="11" width="2" height="2"/>
  <rect x="15" y="11" width="2" height="2"/>
  <rect x="11" y="15" width="2" height="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="13" y="13" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <path d="M4 4h7v7H4z"/>
  <path d="M13 13h7v7h-7z"/>
  <path d="M11 8h2"/>
  <path d="M8 11v2"/>
  <path d="M16 11v2"/>
  <path d="M11 16h2"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <path d="M4 4h7v7H4z"/>
    <path d="M13 13h7v7h-7z"/>
  </g>
  <path d="M4 4h7v7H4z"/>
  <path d="M13 13h7v7h-7z"/>
  <path d="M11 8h2"/>
  <path d="M8 11v2"/>
  <path d="M16 11v2"/>
  <path d="M11 16h2"/>
</svg>`,
  },
};

export default api;
