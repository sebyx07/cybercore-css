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
  <rect x="4" y="4" width="7" height="7" rx="1"/>
  <rect x="13" y="13" width="7" height="7" rx="1"/>
  <path d="M11 7.5h2"/>
  <path d="M7.5 11v2"/>
  <path d="M16.5 13v-2h-2"/>
  <path d="M13 16.5h2v2"/>
  <circle cx="7.5" cy="7.5" r="1"/>
  <circle cx="16.5" cy="16.5" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="4" y="4" width="7" height="7" rx="1"/>
  <rect x="13" y="13" width="7" height="7" rx="1"/>
  <rect x="11" y="7" width="2" height="1"/>
  <rect x="7" y="11" width="1" height="2"/>
  <path d="M16.5 13v-2h-2v1h1v1h1z"/>
  <path d="M13 16.5h2v2h-1v-1h-1v-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
  <rect x="13" y="13" width="7" height="7" rx="1" fill="currentColor" opacity="0.3"/>
  <path d="M11 7.5h2"/>
  <path d="M7.5 11v2"/>
  <path d="M16.5 13v-2h-2"/>
  <path d="M13 16.5h2v2"/>
  <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
  <circle cx="16.5" cy="16.5" r="1" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="7" height="7" rx="1"/>
  <rect x="4" y="4" width="7" height="7" rx="1" transform="translate(1,-1)" opacity="0.4"/>
  <rect x="13" y="13" width="7" height="7" rx="1"/>
  <path d="M11 7.5h2"/>
  <path d="M7.5 11v2"/>
  <path d="M16.5 13v-2h-2"/>
  <path d="M13 16.5h2v2"/>
  <circle cx="7.5" cy="7.5" r="1"/>
  <circle cx="16.5" cy="16.5" r="1"/>
</svg>`,
  },
};

export default api;
