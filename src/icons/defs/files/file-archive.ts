/**
 * File Archive
 * @category files
 */
import type { IconDefinition } from '../../types';

export const fileArchive: IconDefinition = {
  name: 'file-archive',
  category: 'files',
  description: 'Archive/zip file with zipper pattern',
  tags: ['file', 'archive', 'zip', 'compressed'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <line x1="10" y1="14" x2="14" y2="14"/>
  <line x1="10" y1="17" x2="14" y2="17"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 1.5L18.5 8H14V3.5zM10 10h4v2h-4v-2zm0 3h4v2h-4v-2zm0 3h4v2h-4v-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <line x1="10" y1="14" x2="14" y2="14"/>
  <line x1="10" y1="17" x2="14" y2="17"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <line x1="10" y1="11" x2="14" y2="11" transform="translate(-1,1)" opacity="0.5"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <line x1="10" y1="14" x2="14" y2="14" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="10" y1="14" x2="14" y2="14"/>
  <line x1="10" y1="17" x2="14" y2="17" transform="translate(-1,1)" opacity="0.5"/>
  <line x1="10" y1="17" x2="14" y2="17"/>
</svg>`,
  },
};

export default fileArchive;
