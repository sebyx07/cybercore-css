/**
 * Cyber Icons - Type definitions
 * Cyberpunk-themed SVG icon system for CYBERCORE CSS
 */

/**
 * Icon style variants
 * - outline: Stroke-based, default style (1.5px stroke)
 * - solid: Filled icons for emphasis
 * - duotone: Two-tone with primary and secondary colors
 * - glitch: Animated/glitchy variant for cyber effects
 */
export type IconVariant = 'outline' | 'solid' | 'duotone' | 'glitch';

/**
 * SVG content for each variant
 */
export type IconVariants = {
  [K in IconVariant]?: string;
};

export interface IconDefinition {
  /** Unique identifier for the icon */
  name: string;
  /** Default SVG (outline variant) */
  svg: string;
  /** Additional style variants */
  variants?: IconVariants;
  /** Category for organization */
  category: IconCategory;
  /** Brief description of the icon's purpose */
  description: string;
  /** Suggested use cases */
  tags: string[];
}

export type IconCategory =
  | 'navigation'
  | 'actions'
  | 'media'
  | 'communication'
  | 'data'
  | 'security'
  | 'tech'
  | 'files'
  | 'status'
  | 'social';

export type IconSize = 16 | 20 | 24 | 32 | 48 | 64;

export type IconColor = 'cyan' | 'magenta' | 'yellow' | 'green' | 'current';

export interface IconProps {
  /** Icon name from the registry */
  name: string;
  /** Size in pixels (default: 24) */
  size?: IconSize;
  /** Color variant (default: 'current') */
  color?: IconColor;
  /** Style variant (default: 'outline') */
  variant?: IconVariant;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Hide from screen readers (use when icon is decorative) */
  'aria-hidden'?: boolean;
}

/**
 * Icon registry mapping names to definitions
 */
export type IconRegistry = Record<string, IconDefinition>;
