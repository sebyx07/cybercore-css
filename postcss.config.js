/**
 * PostCSS Configuration for Cybercore CSS
 *
 * This configuration processes CSS output from Sass compilation.
 * - autoprefixer: Adds vendor prefixes for browser compatibility
 * - cssnano: Minifies CSS in production builds
 */

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    // Add vendor prefixes automatically based on browserslist
    autoprefixer({
      // Use flexbox: 'no-2009' to avoid generating old flexbox syntax
      flexbox: 'no-2009',
      // Grid layout prefixing for IE (autoplace enabled)
      grid: 'autoplace',
    }),

    // Minify CSS only in production
    isProduction &&
      cssnano({
        preset: [
          'default',
          {
            // Preserve @charset declarations
            normalizeCharset: false,
            // Remove all comments in production
            discardComments: {
              removeAll: true,
            },
            // Optimize calc expressions
            calc: true,
            // Merge identical rules
            mergeRules: true,
            // Merge identical @media queries
            mergeLonghand: true,
            // Minimize selectors
            minifySelectors: true,
            // Minimize gradients
            minifyGradients: true,
            // Minimize font values
            minifyFontValues: true,
            // Convert color values to shortest form
            colormin: true,
            // Reduce transform functions
            reduceTransforms: true,
            // Normalize timing functions
            normalizeTimingFunctions: true,
            // Normalize URL quotes
            normalizeUrl: true,
            // Sort media queries
            cssDeclarationSorter: false,
            // Don't convert units - preserve rem/em
            convertValues: {
              length: false,
            },
            // Keep z-index values as-is
            zindex: false,
          },
        ],
      }),
  ].filter(Boolean),
};
