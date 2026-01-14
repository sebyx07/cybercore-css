/**
 * Individual Icon Exports
 * Tree-shakeable imports for bundlers that support it
 *
 * @example
 * ```ts
 * import { ChipIcon, TerminalIcon } from '@cybercore/icons/individual';
 * ```
 *
 * Each export is the raw SVG string for that icon.
 * For rendered icons with options, use renderIcon() from the main export.
 */

import { icons } from './registry';

// Helper to safely get icon SVG
const getSvg = (name: string): string => icons[name]?.svg ?? '';

// ═══════════════════════════════════════════════════════════════════════════
// TECH ICONS
// ═══════════════════════════════════════════════════════════════════════════
export const ChipIcon = getSvg('chip');
export const SignalIcon = getSvg('signal');
export const TerminalIcon = getSvg('terminal');

// ═══════════════════════════════════════════════════════════════════════════
// ADD MORE EXPORTS AS ICONS ARE CREATED
// When artist agents add new icons to the registry,
// add corresponding exports here for tree-shaking support
// ═══════════════════════════════════════════════════════════════════════════

// Navigation (to be added)
// export const ArrowUpIcon = getSvg('arrow-up');
// export const ArrowDownIcon = getSvg('arrow-down');
// export const ArrowLeftIcon = getSvg('arrow-left');
// export const ArrowRightIcon = getSvg('arrow-right');
// export const HomeIcon = getSvg('home');
// export const MenuIcon = getSvg('menu');

// Actions (to be added)
// export const SearchIcon = getSvg('search');
// export const EditIcon = getSvg('edit');
// export const DeleteIcon = getSvg('delete');
// export const CopyIcon = getSvg('copy');
// export const DownloadIcon = getSvg('download');
// export const UploadIcon = getSvg('upload');
// export const PlusIcon = getSvg('plus');
// export const CheckIcon = getSvg('check');
// export const XIcon = getSvg('x');

// Status (to be added)
// export const InfoIcon = getSvg('info');
// export const WarningIcon = getSvg('warning');
// export const ErrorIcon = getSvg('error');
// export const SuccessIcon = getSvg('success');
