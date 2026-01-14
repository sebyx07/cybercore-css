/**
 * Attachment
 * @category files
 */
import type { IconDefinition } from '../../types';

export const attachment: IconDefinition = {
  name: 'attachment',
  category: 'files',
  description: 'Attachment paperclip',
  tags: ['attachment', 'paperclip', 'attach', 'file'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7"/>
  <path d="M8 15c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7h2zM10 8v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8h-6z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7" fill="currentColor" opacity="0.3"/>
  <path d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7"/>
  <path d="M8 15c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7"/>
  <path d="M8 15c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M8 15c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8"/>
</svg>`,
  },
};

export default attachment;
