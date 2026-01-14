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
  <rect x="5" y="5" width="3" height="3"/>
  <rect x="16" y="5" width="3" height="3"/>
  <rect x="5" y="16" width="3" height="3"/>
  <line x1="14" y1="14" x2="14" y2="15"/>
  <line x1="17" y1="14" x2="17" y2="15"/>
  <line x1="20" y1="14" x2="20" y2="15"/>
  <line x1="14" y1="17" x2="15" y2="17"/>
  <line x1="17" y1="17" x2="18" y2="17"/>
  <line x1="20" y1="17" x2="21" y2="17"/>
  <line x1="14" y1="20" x2="15" y2="20"/>
  <line x1="17" y1="20" x2="18" y2="20"/>
  <line x1="20" y1="20" x2="21" y2="20"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zM14 3h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5z"/>
  <rect x="14" y="14" width="1.5" height="1.5"/>
  <rect x="17" y="14" width="1.5" height="1.5"/>
  <rect x="20" y="14" width="1.5" height="1.5"/>
  <rect x="14" y="17" width="1.5" height="1.5"/>
  <rect x="17" y="17" width="1.5" height="1.5"/>
  <rect x="20" y="17" width="1.5" height="1.5"/>
  <rect x="14" y="20" width="1.5" height="1.5"/>
  <rect x="17" y="20" width="1.5" height="1.5"/>
  <rect x="20" y="20" width="1.5" height="1.5"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="14" y="3" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="3" y="14" width="7" height="7" fill="currentColor" opacity="0.3"/>
  <rect x="5" y="5" width="3" height="3"/>
  <rect x="16" y="5" width="3" height="3"/>
  <rect x="5" y="16" width="3" height="3"/>
  <line x1="14" y1="14" x2="14" y2="15"/>
  <line x1="17" y1="14" x2="17" y2="15"/>
  <line x1="20" y1="14" x2="20" y2="15"/>
  <line x1="14" y1="17" x2="15" y2="17"/>
  <line x1="17" y1="17" x2="18" y2="17"/>
  <line x1="20" y1="17" x2="21" y2="17"/>
  <line x1="14" y1="20" x2="15" y2="20"/>
  <line x1="17" y1="20" x2="18" y2="20"/>
  <line x1="20" y1="20" x2="21" y2="20"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="3" y="3" width="7" height="7" transform="translate(1,-1)" opacity="0.4"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7" transform="translate(1,-1)" opacity="0.4"/>
  <rect x="3" y="14" width="7" height="7"/>
  <rect x="5" y="5" width="3" height="3"/>
  <rect x="16" y="5" width="3" height="3"/>
  <rect x="5" y="16" width="3" height="3"/>
  <line x1="14" y1="14" x2="14" y2="15"/>
  <line x1="17" y1="14" x2="17" y2="15"/>
  <line x1="20" y1="14" x2="20" y2="15"/>
  <line x1="14" y1="17" x2="15" y2="17"/>
  <line x1="17" y1="17" x2="18" y2="17"/>
  <line x1="20" y1="17" x2="21" y2="17"/>
  <line x1="14" y1="20" x2="15" y2="20"/>
  <line x1="17" y1="20" x2="18" y2="20"/>
  <line x1="20" y1="20" x2="21" y2="20"/>
</svg>`,
  },
};

export default qrCode;
