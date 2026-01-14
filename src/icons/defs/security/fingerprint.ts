/**
 * Fingerprint - Biometric authentication
 * @category security
 */
import type { IconDefinition } from '../../types';

export const fingerprint: IconDefinition = {
  name: 'fingerprint',
  category: 'security',
  description: 'Biometric authentication with fingerprint',
  tags: ['fingerprint', 'biometric', 'authentication', 'identity', 'scan', 'secure'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12c0-5.5 4.5-10 10-10 1.6 0 3.2.4 4.5 1"/>
  <path d="M7 3.8A10 10 0 0 0 2 12"/>
  <path d="M22 12c0 5.5-4.5 10-10 10"/>
  <path d="M17 20.2A10 10 0 0 0 22 12"/>
  <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.8 1.3 3.8"/>
  <path d="M15.5 7A6 6 0 0 1 18 12c0 1.5-.5 2.8-1.3 3.8"/>
  <path d="M12 10a2 2 0 0 0-2 2c0 2.2.5 4.5 1.5 6.5"/>
  <path d="M14 12a2 2 0 0 0-2-2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 2c4.4 0 8.1 3.2 8.8 7.4-.7-.2-1.4-.4-2.3-.4-3.5 0-6.5 2.9-6.5 6.5 0 1.2.4 2.4 1 3.4-.3 0-.7.1-1 .1-5 0-9-4-9-9s4-9 9-9zm1 7c-1.7 0-3 1.3-3 3 0 2.5.6 5 1.8 7.2.4-.1.7-.2 1.2-.2 1.1 0 2.2.3 3.1.8C16.6 18.3 17 15.7 17 13c0-1.7-1.3-3-3-3-.3 0-.7 0-1 .1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12c0-5.5 4.5-10 10-10 1.6 0 3.2.4 4.5 1" opacity="0.3"/>
  <path d="M22 12c0 5.5-4.5 10-10 10" opacity="0.3"/>
  <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.8 1.3 3.8" fill="currentColor" opacity="0.3"/>
  <path d="M2 12c0-5.5 4.5-10 10-10 1.6 0 3.2.4 4.5 1"/>
  <path d="M22 12c0 5.5-4.5 10-10 10"/>
  <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.8 1.3 3.8"/>
  <path d="M15.5 7A6 6 0 0 1 18 12c0 1.5-.5 2.8-1.3 3.8"/>
  <path d="M12 10a2 2 0 0 0-2 2c0 2.2.5 4.5 1.5 6.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <path d="M2 12c0-5.5 4.5-10 10-10 1.6 0 3.2.4 4.5 1"/>
    <path d="M22 12c0 5.5-4.5 10-10 10"/>
    <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.8 1.3 3.8"/>
  </g>
  <path d="M2 12c0-5.5 4.5-10 10-10 1.6 0 3.2.4 4.5 1"/>
  <path d="M22 12c0 5.5-4.5 10-10 10"/>
  <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.8 1.3 3.8"/>
  <path d="M15.5 7A6 6 0 0 1 18 12c0 1.5-.5 2.8-1.3 3.8"/>
  <path d="M12 10a2 2 0 0 0-2 2c0 2.2.5 4.5 1.5 6.5"/>
</svg>`,
  },
};

export default fingerprint;
