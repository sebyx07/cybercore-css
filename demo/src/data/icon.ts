import { renderIcon } from '../../../src/icons/utils';

import type { IconSize } from '../../../src/icons/types';

/**
 * Inlines a real icon into a snippet, so examples that show an icon ship the
 * SVG instead of a "put an icon here" comment.
 */
export function icon(name: string, size: IconSize = 16): string {
  const svg = renderIcon(name, { size });
  if (!svg) throw new Error(`Unknown icon "${name}" used in a docs snippet`);
  return svg.replace(/\s*\n\s*/g, '');
}
