/**
 * Cloud Download Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const cloudDownload: IconDefinition = {
  name: 'cloud-download',
  category: 'data',
  description: 'Download from cloud storage',
  tags: ['cloud', 'download', 'storage', 'data', 'transfer'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  <path d="M12 13v6"/>
  <path d="M15 16l-3 3-3-3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17.5 20H9a7.5 7.5 0 1 1 7.21-9.5h1.29a5 5 0 0 1 0 10Z"/>
  <path d="M12 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" fill="white" opacity="0.9"/>
  <path d="M11.3 18.7l-3-3a1 1 0 0 1 1.4-1.4l2.3 2.3 2.3-2.3a1 1 0 0 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0z" fill="white" opacity="0.9"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" opacity="0.3"/>
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  <path d="M12 13v6"/>
  <path d="M15 16l-3 3-3-3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  <path d="M12 13v6"/>
  <path d="M15 16l-3 3-3-3"/>
  <g opacity="0.4" transform="translate(1,-1)">
    <path d="M12 13v6"/>
    <path d="M15 16l-3 3-3-3"/>
  </g>
</svg>`,
  },
};

export default cloudDownload;
