/**
 * QR Code Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const qrCode: IconDefinition = {
  name: 'qr-code',
  category: 'tech',
  description: 'QR code scanner',
  tags: ['qr', 'code', 'scan', 'barcode', 'reader'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
  <rect x="5.5" y="5.5" width="2" height="2"/>
  <rect x="16.5" y="5.5" width="2" height="2"/>
  <rect x="5.5" y="16.5" width="2" height="2"/>
  <rect x="14" y="14" width="3" height="3"/>
  <rect x="18" y="14" width="3" height="3"/>
  <rect x="14" y="18" width="3" height="3"/>
  <rect x="18" y="18" width="3" height="3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M3 3h7v7H3V3zm2 2v3h3V5H5z"/>
  <path d="M14 3h7v7h-7V3zm2 2v3h3V5h-3z"/>
  <path d="M3 14h7v7H3v-7zm2 2v3h3v-3H5z"/>
  <rect x="14" y="14" width="3" height="3"/>
  <rect x="18" y="14" width="3" height="3"/>
  <rect x="14" y="18" width="3" height="3"/>
  <rect x="18" y="18" width="3" height="3"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="14" y="3" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="3" y="14" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="5.5" y="5.5" width="2" height="2" fill="currentColor"/>
  <rect x="16.5" y="5.5" width="2" height="2" fill="currentColor"/>
  <rect x="5.5" y="16.5" width="2" height="2" fill="currentColor"/>
  <rect x="14" y="14" width="3" height="3"/>
  <rect x="18" y="14" width="3" height="3"/>
  <rect x="14" y="18" width="3" height="3"/>
  <rect x="18" y="18" width="3" height="3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </g>
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
  <rect x="5.5" y="5.5" width="2" height="2"/>
  <rect x="16.5" y="5.5" width="2" height="2"/>
  <rect x="5.5" y="16.5" width="2" height="2"/>
  <rect x="14" y="14" width="3" height="3"/>
  <rect x="18" y="14" width="3" height="3"/>
  <rect x="14" y="18" width="3" height="3"/>
  <rect x="18" y="18" width="3" height="3"/>
</svg>`,
  },
};

export default qrCode;
