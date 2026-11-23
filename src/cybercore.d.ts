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
 * The design tokens: every CSS custom property `core/variables` defines on `:root`
 * (tests/variables.test.ts keeps this list in step with the build). Override any of
 * them in your own CSS, or set them from script.
 *
 * @example
 * ```typescript
 * const token: keyof CybercoreVariables = '--color-accent';
 * document.documentElement.style.setProperty(token, '#ff2a6d');
 * ```
 */
export interface CybercoreVariables {
  // Palette: neon hues (100-900; anchors hand-tuned, the rest mixed from the 500)
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
  '--cyber-acid-100': string;
  '--cyber-acid-200': string;
  '--cyber-acid-300': string;
  '--cyber-acid-400': string;
  '--cyber-acid-500': string;
  '--cyber-acid-600': string;
  '--cyber-acid-700': string;
  '--cyber-acid-800': string;
  '--cyber-acid-900': string;
  '--cyber-amber-100': string;
  '--cyber-amber-200': string;
  '--cyber-amber-300': string;
  '--cyber-amber-400': string;
  '--cyber-amber-500': string;
  '--cyber-amber-600': string;
  '--cyber-amber-700': string;
  '--cyber-amber-800': string;
  '--cyber-amber-900': string;
  '--cyber-violet-100': string;
  '--cyber-violet-200': string;
  '--cyber-violet-300': string;
  '--cyber-violet-400': string;
  '--cyber-violet-500': string;
  '--cyber-violet-600': string;
  '--cyber-violet-700': string;
  '--cyber-violet-800': string;
  '--cyber-violet-900': string;

  // Palette: neutrals (void = surfaces, chrome = text and borders)
  '--cyber-void-100': string;
  '--cyber-void-200': string;
  '--cyber-void-300': string;
  '--cyber-void-400': string;
  '--cyber-void-500': string;
  '--cyber-void-600': string;
  '--cyber-void-700': string;
  '--cyber-void-800': string;
  '--cyber-void-900': string;
  '--cyber-void-950': string;
  '--cyber-chrome-100': string;
  '--cyber-chrome-200': string;
  '--cyber-chrome-300': string;
  '--cyber-chrome-400': string;
  '--cyber-chrome-500': string;
  '--cyber-chrome-600': string;
  '--cyber-chrome-700': string;
  '--cyber-chrome-800': string;
  '--cyber-chrome-900': string;

  // Semantic colours: surfaces, text, borders, status, accent
  '--color-bg-primary': string;
  '--color-bg-secondary': string;
  '--color-bg-tertiary': string;
  '--color-bg-elevated': string;
  '--color-bg-default': string;
  '--color-bg-inset': string;
  '--color-bg-overlay': string;
  '--color-text-primary': string;
  '--color-text-secondary': string;
  '--color-text-muted': string;
  '--color-text-placeholder': string;
  '--color-text-disabled': string;
  '--color-text-on-accent': string;
  '--color-border-default': string;
  '--color-border-subtle': string;
  '--color-border-strong': string;
  '--color-success': string;
  '--color-warning': string;
  '--color-danger': string;
  '--color-info': string;
  '--color-success-soft': string;
  '--color-warning-soft': string;
  '--color-danger-soft': string;
  '--color-info-soft': string;
  '--color-accent': string;
  '--color-accent-light': string;
  '--color-accent-dark': string;
  '--color-secondary': string;
  '--color-accent-soft': string;
  '--color-accent-muted': string;
  '--color-border-accent': string;
  '--color-link': string;
  '--color-link-hover': string;
  '--color-selection-bg': string;

  // Typography
  '--font-display': string;
  '--font-orbitron': string;
  '--font-body': string;
  '--font-mono': string;
  '--text-xs': string;
  '--text-sm': string;
  '--text-base': string;
  '--text-lg': string;
  '--text-xl': string;
  '--text-2xl': string;
  '--text-3xl': string;
  '--text-4xl': string;
  '--text-5xl': string;
  '--font-weight-light': string;
  '--font-weight-normal': string;
  '--font-weight-medium': string;
  '--font-weight-semibold': string;
  '--font-weight-bold': string;
  '--font-weight-black': string;
  '--leading-none': string;
  '--leading-tight': string;
  '--leading-snug': string;
  '--leading-normal': string;
  '--leading-relaxed': string;
  '--tracking-tight': string;
  '--tracking-normal': string;
  '--tracking-wide': string;
  '--tracking-wider': string;
  '--tracking-widest': string;

  // Spacing, shape, sizing
  '--space-3xs': string;
  '--space-2xs': string;
  '--space-xs': string;
  '--space-sm': string;
  '--space-md': string;
  '--space-lg': string;
  '--space-xl': string;
  '--space-2xl': string;
  '--space-3xl': string;
  '--radius-none': string;
  '--radius-sm': string;
  '--radius-md': string;
  '--radius-lg': string;
  '--radius-xl': string;
  '--radius-2xl': string;
  '--radius-full': string;
  '--radius-cyber': string;
  '--clip-xs': string;
  '--clip-sm': string;
  '--clip-md': string;
  '--clip-lg': string;
  '--clip-xl': string;
  '--border-thin': string;
  '--border-medium': string;
  '--border-thick': string;
  '--control-height-sm': string;
  '--control-height-md': string;
  '--control-height-lg': string;
  '--focus-ring-width': string;
  '--focus-ring-offset': string;
  '--focus-ring-color': string;

  // Stacking
  '--z-base': string;
  '--z-raised': string;
  '--z-dropdown': string;
  '--z-sticky': string;
  '--z-fixed': string;
  '--z-overlay': string;
  '--z-modal-backdrop': string;
  '--z-modal': string;
  '--z-popover': string;
  '--z-toast': string;
  '--z-tooltip': string;

  // Motion (durations become 0ms under reduced motion)
  '--duration-instant': string;
  '--duration-fast': string;
  '--duration-normal': string;
  '--duration-slow': string;
  '--duration-slower': string;
  '--ease-linear': string;
  '--ease-in': string;
  '--ease-out': string;
  '--ease-in-out': string;
  '--ease-smooth': string;
  '--ease-cyber': string;
  '--ease-bounce': string;
  '--ease-out-expo': string;
  '--duration-base': string;
  '--transition-fast': string;
  '--transition-base': string;
  '--transition-slow': string;

  // Effects (glows scale with --glow-intensity)
  '--glow-intensity': string;
  '--noise-opacity': string;
  '--scanline-opacity': string;
  '--glow-cyan': string;
  '--glow-magenta': string;
  '--glow-yellow': string;
  '--glow-green': string;
  '--glow-accent': string;
  '--glow-text-cyan': string;
  '--glow-text-magenta': string;
  '--glow-text-yellow': string;
  '--glow-text-green': string;
  '--glow-text-accent': string;
}
