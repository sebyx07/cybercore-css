import { useMemo } from 'react';

import { getIcon, iconExists, hasVariant } from '../../../src/icons/utils';

import type { IconColor, IconVariant } from '../../../src/icons/types';

/**
 * Color map for CSS custom properties
 * Maps icon colors to CYBERCORE CSS variables
 */
const COLOR_MAP: Record<IconColor, string> = {
  cyan: 'var(--cyber-cyan-500, #00f0ff)',
  magenta: 'var(--cyber-magenta-500, #ff00aa)',
  yellow: 'var(--cyber-yellow-500, #f0ff00)',
  green: 'var(--cyber-green-500, #00ff88)',
  current: 'currentColor',
};

export interface IconProps {
  /** Icon name from the registry */
  name: string;
  /** Size in pixels (default: 24) */
  size?: number;
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
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * Icon component for rendering CYBERCORE icons
 *
 * @example
 * <Icon name="terminal" size={24} color="cyan" />
 * <Icon name="chip" variant="solid" color="magenta" />
 * <Icon name="signal" aria-label="Signal strength" />
 */
function Icon({
  name,
  size = 24,
  color = 'current',
  variant = 'outline',
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  style,
  onClick,
}: IconProps) {
  // Determine if icon should be hidden from screen readers
  const shouldHide = ariaHidden ?? !ariaLabel;

  // Get the SVG content
  const svgContent = useMemo(() => {
    if (!iconExists(name)) {
      console.warn(`[CyberIcons] Icon "${name}" not found in registry`);
      return null;
    }

    // If requested variant doesn't exist, fall back to outline
    const actualVariant = hasVariant(name, variant) ? variant : 'outline';
    return getIcon(name, actualVariant);
  }, [name, variant]);

  if (!svgContent) {
    return null;
  }

  // Build class list
  const variantClass = variant !== 'outline' ? `cyber-icon--${variant}` : '';
  const classes = ['cyber-icon', `cyber-icon--${name}`, variantClass, className]
    .filter(Boolean)
    .join(' ');

  // Build styles
  const colorValue = COLOR_MAP[color] || color;
  const combinedStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    color: colorValue,
    ...style,
  };

  return (
    <span
      className={classes}
      style={combinedStyle}
      role={shouldHide ? undefined : 'img'}
      aria-label={shouldHide ? undefined : ariaLabel}
      aria-hidden={shouldHide ? true : undefined}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

export default Icon;
