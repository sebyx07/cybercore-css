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
// NAVIGATION ICONS (14)
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
// ACTIONS ICONS (23)
// ═══════════════════════════════════════════════════════════════════════════
export const SearchIcon = getSvg('search');
export const EditIcon = getSvg('edit');
export const DeleteIcon = getSvg('delete');
export const CopyIcon = getSvg('copy');
export const CutIcon = getSvg('cut');
export const PasteIcon = getSvg('paste');
export const DownloadIcon = getSvg('download');
export const UploadIcon = getSvg('upload');
export const SaveIcon = getSvg('save');
export const PlusIcon = getSvg('plus');
export const MinusIcon = getSvg('minus');
export const CheckIcon = getSvg('check');
export const XIcon = getSvg('x');
export const RefreshIcon = getSvg('refresh');
export const UndoIcon = getSvg('undo');
export const RedoIcon = getSvg('redo');
export const FilterIcon = getSvg('filter');
export const SortIcon = getSvg('sort');
export const SettingsIcon = getSvg('settings');
export const SlidersIcon = getSvg('sliders');
export const DragIcon = getSvg('drag');
export const PinIcon = getSvg('pin');
export const LinkIcon = getSvg('link');
export const UnlinkIcon = getSvg('unlink');

// ═══════════════════════════════════════════════════════════════════════════
// MEDIA ICONS (17)
// ═══════════════════════════════════════════════════════════════════════════
export const PlayIcon = getSvg('play');
export const PauseIcon = getSvg('pause');
export const StopIcon = getSvg('stop');
export const RewindIcon = getSvg('rewind');
export const FastForwardIcon = getSvg('fast-forward');
export const SkipBackIcon = getSvg('skip-back');
export const SkipForwardIcon = getSvg('skip-forward');
export const VolumeHighIcon = getSvg('volume-high');
export const VolumeLowIcon = getSvg('volume-low');
export const VolumeOffIcon = getSvg('volume-off');
export const MicIcon = getSvg('mic');
export const MicOffIcon = getSvg('mic-off');
export const CameraIcon = getSvg('camera');
export const CameraOffIcon = getSvg('camera-off');
export const ImageIcon = getSvg('image');
export const VideoIcon = getSvg('video');
export const MusicIcon = getSvg('music');

// ═══════════════════════════════════════════════════════════════════════════
// COMMUNICATION ICONS (10)
// ═══════════════════════════════════════════════════════════════════════════
export const BellIcon = getSvg('bell');
export const BellOffIcon = getSvg('bell-off');
export const MessageIcon = getSvg('message');
export const MailIcon = getSvg('mail');
export const InboxIcon = getSvg('inbox');
export const SendIcon = getSvg('send');
export const PhoneIcon = getSvg('phone');
export const PhoneOffIcon = getSvg('phone-off');
export const VideoCallIcon = getSvg('video-call');
export const AtSignIcon = getSvg('at-sign');

// ═══════════════════════════════════════════════════════════════════════════
// DATA ICONS (14)
// ═══════════════════════════════════════════════════════════════════════════
export const ChartBarIcon = getSvg('chart-bar');
export const ChartLineIcon = getSvg('chart-line');
export const ChartPieIcon = getSvg('chart-pie');
export const DatabaseIcon = getSvg('database');
export const TableIcon = getSvg('table');
export const CloudIcon = getSvg('cloud');
export const CloudDownloadIcon = getSvg('cloud-download');
export const CloudUploadIcon = getSvg('cloud-upload');
export const SyncIcon = getSvg('sync');
export const CalendarIcon = getSvg('calendar');
export const ClockIcon = getSvg('clock');
export const TimerIcon = getSvg('timer');
export const HashIcon = getSvg('hash');
export const PercentIcon = getSvg('percent');

// ═══════════════════════════════════════════════════════════════════════════
// SECURITY ICONS (15)
// ═══════════════════════════════════════════════════════════════════════════
export const LockIcon = getSvg('lock');
export const UnlockIcon = getSvg('unlock');
export const KeyIcon = getSvg('key');
export const ShieldIcon = getSvg('shield');
export const ShieldCheckIcon = getSvg('shield-check');
export const ShieldXIcon = getSvg('shield-x');
export const EyeIcon = getSvg('eye');
export const EyeOffIcon = getSvg('eye-off');
export const FingerprintIcon = getSvg('fingerprint');
export const UserIcon = getSvg('user');
export const UsersIcon = getSvg('users');
export const UserPlusIcon = getSvg('user-plus');
export const UserMinusIcon = getSvg('user-minus');
export const LogInIcon = getSvg('log-in');
export const LogOutIcon = getSvg('log-out');

// ═══════════════════════════════════════════════════════════════════════════
// TECH ICONS (22)
// ═══════════════════════════════════════════════════════════════════════════
export const TerminalIcon = getSvg('terminal');
export const CodeIcon = getSvg('code');
export const ChipIcon = getSvg('chip');
export const CpuIcon = getSvg('cpu');
export const MemoryIcon = getSvg('memory');
export const CircuitIcon = getSvg('circuit');
export const SignalIcon = getSvg('signal');
export const WifiIcon = getSvg('wifi');
export const WifiOffIcon = getSvg('wifi-off');
export const BluetoothIcon = getSvg('bluetooth');
export const GlobeIcon = getSvg('globe');
export const ServerIcon = getSvg('server');
export const ApiIcon = getSvg('api');
export const BugIcon = getSvg('bug');
export const ZapIcon = getSvg('zap');
export const QrCodeIcon = getSvg('qr-code');
export const GitBranchIcon = getSvg('git-branch');
export const GitCommitIcon = getSvg('git-commit');
export const GitMergeIcon = getSvg('git-merge');
export const GitPullIcon = getSvg('git-pull');
export const ShareIcon = getSvg('share');
export const ProgressIcon = getSvg('progress');

// ═══════════════════════════════════════════════════════════════════════════
// FILES ICONS (15)
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
// STATUS ICONS (12)
// ═══════════════════════════════════════════════════════════════════════════
export const InfoIcon = getSvg('info');
export const WarningIcon = getSvg('warning');
export const ErrorIcon = getSvg('error');
export const SuccessIcon = getSvg('success');
export const HelpIcon = getSvg('help');
export const LoadingIcon = getSvg('loading');
export const OnlineIcon = getSvg('online');
export const OfflineIcon = getSvg('offline');
export const BatteryFullIcon = getSvg('battery-full');
export const BatteryLowIcon = getSvg('battery-low');
export const BatteryChargingIcon = getSvg('battery-charging');

// ═══════════════════════════════════════════════════════════════════════════
// SOCIAL ICONS (11)
// ═══════════════════════════════════════════════════════════════════════════
export const HeartIcon = getSvg('heart');
export const HeartFilledIcon = getSvg('heart-filled');
export const StarIcon = getSvg('star');
export const StarFilledIcon = getSvg('star-filled');
export const ThumbsUpIcon = getSvg('thumbs-up');
export const ThumbsDownIcon = getSvg('thumbs-down');
export const BookmarkIcon = getSvg('bookmark');
export const BookmarkFilledIcon = getSvg('bookmark-filled');
export const FlagIcon = getSvg('flag');
export const AwardIcon = getSvg('award');
export const TrendingIcon = getSvg('trending');
