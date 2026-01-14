/**
 * File Code
 * @category files
 */
import type { IconDefinition } from '../../types';

export const fileCode: IconDefinition = {
  name: 'file-code',
  category: 'files',
  description: 'Code file with angle brackets',
  tags: ['file', 'code', 'programming', 'source'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <path d="M10 13l-2 2 2 2"/>
  <path d="M14 13l2 2-2 2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 1.5L18.5 8H14V3.5zM9.3 13l-1.8 2 1.8 2 .7-.7-1.1-1.3 1.1-1.3-.7-.7zm5.4 0l-.7.7 1.1 1.3-1.1 1.3.7.7 1.8-2-1.8-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <path d="M10 13l-2 2 2 2"/>
  <path d="M14 13l2 2-2 2"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <path d="M10 13l-2 2 2 2" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M10 13l-2 2 2 2"/>
  <path d="M14 13l2 2-2 2" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 13l2 2-2 2"/>
</svg>`,
  },
};

export default fileCode;
