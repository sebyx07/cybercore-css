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
// NAVIGATION ICONS
// ═══════════════════════════════════════════════════════════════════════════
export const ArrowUpIcon = getSvg('arrow-up');
export const ArrowDownIcon = getSvg('arrow-down');
export const ArrowLeftIcon = getSvg('arrow-left');
export const ArrowRightIcon = getSvg('arrow-right');
export const ChevronUpIcon = getSvg('chevron-up');
export const ChevronDownIcon = getSvg('chevron-down');
export const ChevronLeftIcon = getSvg('chevron-left');
export const ChevronRightIcon = getSvg('chevron-right');
export const HomeIcon = getSvg('home');
export const MenuIcon = getSvg('menu');
export const MenuDotsIcon = getSvg('menu-dots');
export const ExternalLinkIcon = getSvg('external-link');
export const MaximizeIcon = getSvg('maximize');
export const MinimizeIcon = getSvg('minimize');

// ═══════════════════════════════════════════════════════════════════════════
// FILES ICONS
// ═══════════════════════════════════════════════════════════════════════════
export const FileIcon = getSvg('file');
export const FileTextIcon = getSvg('file-text');
export const FileCodeIcon = getSvg('file-code');
export const FileImageIcon = getSvg('file-image');
export const FileVideoIcon = getSvg('file-video');
export const FileAudioIcon = getSvg('file-audio');
export const FileArchiveIcon = getSvg('file-archive');
export const FilePlusIcon = getSvg('file-plus');
export const FileMinusIcon = getSvg('file-minus');
export const FolderIcon = getSvg('folder');
export const FolderOpenIcon = getSvg('folder-open');
export const FolderPlusIcon = getSvg('folder-plus');
export const ArchiveIcon = getSvg('archive');
export const ClipboardIcon = getSvg('clipboard');
export const AttachmentIcon = getSvg('attachment');

// ═══════════════════════════════════════════════════════════════════════════
// ADD MORE EXPORTS AS ICONS ARE CREATED
// When artist agents add new icons to the registry,
// add corresponding exports here for tree-shaking support
// ═══════════════════════════════════════════════════════════════════════════

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
