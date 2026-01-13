/**
 * CYBERCORE CSS - Type Definitions
 *
 * This is a pure CSS framework. These type definitions are provided
 * for TypeScript projects that import the CSS.
 *
 * @packageDocumentation
 */

/**
 * Import the CSS framework.
 *
 * @example
 * ```typescript
 * import 'cybercore-css';
 * // or
 * import 'cybercore-css/dist/cybercore.css';
 * ```
 */
declare module 'cybercore-css' {
  const styles: string;
  export default styles;
}

declare module 'cybercore-css/dist/cybercore.css' {
  const styles: string;
  export default styles;
}

declare module 'cybercore-css/dist/cybercore.min.css' {
  const styles: string;
  export default styles;
}

/**
 * CSS Custom Properties (CSS Variables) available in the framework.
 * Use these in your TypeScript/JavaScript for dynamic styling.
 *
 * @example
 * ```typescript
 * element.style.setProperty('--cyber-cyan-500', '#00ffff');
 * ```
 */
export interface CybercoreVariables {
  // Accent Colors
  '--cyber-cyan-100': string;
  '--cyber-cyan-200': string;
  '--cyber-cyan-300': string;
  '--cyber-cyan-400': string;
  '--cyber-cyan-500': string;
  '--cyber-cyan-600': string;
  '--cyber-cyan-700': string;
  '--cyber-cyan-800': string;
  '--cyber-cyan-900': string;

  '--cyber-magenta-100': string;
  '--cyber-magenta-200': string;
  '--cyber-magenta-300': string;
  '--cyber-magenta-400': string;
  '--cyber-magenta-500': string;
  '--cyber-magenta-600': string;
  '--cyber-magenta-700': string;
  '--cyber-magenta-800': string;
  '--cyber-magenta-900': string;

  '--cyber-yellow-100': string;
  '--cyber-yellow-200': string;
  '--cyber-yellow-300': string;
  '--cyber-yellow-400': string;
  '--cyber-yellow-500': string;
  '--cyber-yellow-600': string;
  '--cyber-yellow-700': string;
  '--cyber-yellow-800': string;
  '--cyber-yellow-900': string;

  '--cyber-green-100': string;
  '--cyber-green-200': string;
  '--cyber-green-300': string;
  '--cyber-green-400': string;
  '--cyber-green-500': string;
  '--cyber-green-600': string;
  '--cyber-green-700': string;
  '--cyber-green-800': string;
  '--cyber-green-900': string;

  // Background Colors
  '--cyber-void-100': string;
  '--cyber-void-200': string;
  '--cyber-void-300': string;
  '--cyber-void-400': string;
  '--cyber-void-500': string;
  '--cyber-void-600': string;
  '--cyber-void-700': string;
  '--cyber-void-800': string;
  '--cyber-void-900': string;

  // Chrome/Metallic Colors
  '--cyber-chrome-100': string;
  '--cyber-chrome-200': string;
  '--cyber-chrome-300': string;
  '--cyber-chrome-400': string;
  '--cyber-chrome-500': string;
  '--cyber-chrome-600': string;
  '--cyber-chrome-700': string;
  '--cyber-chrome-800': string;
  '--cyber-chrome-900': string;
}
