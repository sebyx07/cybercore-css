/**
 * Cyber Icons - Master Icon List
 * This defines all icons to be created for the icon system.
 * Use this as a checklist for artist agents to generate icons.
 */

import type { IconCategory } from './types';

export interface IconSpec {
  name: string;
  description: string;
  tags: string[];
}

export const ICON_LIST: Record<IconCategory, IconSpec[]> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION - Moving through UI
  // ═══════════════════════════════════════════════════════════════════════════
  navigation: [
    { name: 'arrow-up', description: 'Upward arrow', tags: ['direction', 'up', 'move'] },
    { name: 'arrow-down', description: 'Downward arrow', tags: ['direction', 'down', 'move'] },
    { name: 'arrow-left', description: 'Leftward arrow', tags: ['direction', 'left', 'back'] },
    { name: 'arrow-right', description: 'Rightward arrow', tags: ['direction', 'right', 'forward'] },
    { name: 'chevron-up', description: 'Chevron pointing up', tags: ['expand', 'collapse', 'accordion'] },
    { name: 'chevron-down', description: 'Chevron pointing down', tags: ['expand', 'dropdown', 'accordion'] },
    { name: 'chevron-left', description: 'Chevron pointing left', tags: ['back', 'previous', 'carousel'] },
    { name: 'chevron-right', description: 'Chevron pointing right', tags: ['next', 'forward', 'carousel'] },
    { name: 'home', description: 'Home/dashboard', tags: ['main', 'start', 'dashboard'] },
    { name: 'menu', description: 'Hamburger menu', tags: ['navigation', 'sidebar', 'mobile'] },
    { name: 'menu-dots', description: 'Three dots menu (kebab)', tags: ['more', 'options', 'overflow'] },
    { name: 'external-link', description: 'External link indicator', tags: ['new-tab', 'outbound', 'link'] },
    { name: 'maximize', description: 'Maximize/fullscreen', tags: ['expand', 'fullscreen', 'window'] },
    { name: 'minimize', description: 'Minimize/exit fullscreen', tags: ['collapse', 'exit', 'window'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ACTIONS - User interactions
  // ═══════════════════════════════════════════════════════════════════════════
  actions: [
    { name: 'search', description: 'Search/find', tags: ['find', 'lookup', 'query'] },
    { name: 'filter', description: 'Filter results', tags: ['sort', 'refine', 'funnel'] },
    { name: 'sort', description: 'Sort order', tags: ['order', 'arrange', 'list'] },
    { name: 'edit', description: 'Edit/modify', tags: ['pencil', 'modify', 'change'] },
    { name: 'delete', description: 'Delete/remove', tags: ['trash', 'remove', 'destroy'] },
    { name: 'copy', description: 'Copy to clipboard', tags: ['duplicate', 'clipboard', 'clone'] },
    { name: 'paste', description: 'Paste from clipboard', tags: ['clipboard', 'insert'] },
    { name: 'cut', description: 'Cut to clipboard', tags: ['scissors', 'move', 'clipboard'] },
    { name: 'download', description: 'Download file', tags: ['save', 'export', 'get'] },
    { name: 'upload', description: 'Upload file', tags: ['import', 'send', 'attach'] },
    { name: 'share', description: 'Share content', tags: ['send', 'social', 'distribute'] },
    { name: 'save', description: 'Save changes', tags: ['disk', 'store', 'persist'] },
    { name: 'undo', description: 'Undo action', tags: ['revert', 'back', 'history'] },
    { name: 'redo', description: 'Redo action', tags: ['forward', 'repeat', 'history'] },
    { name: 'plus', description: 'Add/create new', tags: ['add', 'new', 'create'] },
    { name: 'minus', description: 'Remove/subtract', tags: ['remove', 'decrease', 'subtract'] },
    { name: 'check', description: 'Confirm/checkmark', tags: ['done', 'complete', 'approve'] },
    { name: 'x', description: 'Close/cancel', tags: ['close', 'cancel', 'dismiss'] },
    { name: 'refresh', description: 'Refresh/reload', tags: ['reload', 'sync', 'update'] },
    { name: 'drag', description: 'Drag handle', tags: ['move', 'reorder', 'grip'] },
    { name: 'pin', description: 'Pin/bookmark', tags: ['favorite', 'save', 'bookmark'] },
    { name: 'link', description: 'Create link', tags: ['chain', 'url', 'connect'] },
    { name: 'unlink', description: 'Break link', tags: ['disconnect', 'remove-link'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MEDIA - Audio/video controls
  // ═══════════════════════════════════════════════════════════════════════════
  media: [
    { name: 'play', description: 'Play media', tags: ['start', 'video', 'audio'] },
    { name: 'pause', description: 'Pause media', tags: ['stop', 'video', 'audio'] },
    { name: 'stop', description: 'Stop media', tags: ['end', 'video', 'audio'] },
    { name: 'skip-back', description: 'Skip to previous', tags: ['previous', 'rewind', 'back'] },
    { name: 'skip-forward', description: 'Skip to next', tags: ['next', 'forward', 'advance'] },
    { name: 'rewind', description: 'Rewind', tags: ['back', 'fast-back'] },
    { name: 'fast-forward', description: 'Fast forward', tags: ['forward', 'advance'] },
    { name: 'volume-high', description: 'Volume on/high', tags: ['sound', 'audio', 'speaker'] },
    { name: 'volume-low', description: 'Volume low', tags: ['sound', 'audio', 'quiet'] },
    { name: 'volume-off', description: 'Volume muted', tags: ['mute', 'silent', 'audio'] },
    { name: 'mic', description: 'Microphone on', tags: ['audio', 'record', 'voice'] },
    { name: 'mic-off', description: 'Microphone off', tags: ['mute', 'voice', 'disabled'] },
    { name: 'camera', description: 'Camera/video on', tags: ['video', 'record', 'photo'] },
    { name: 'camera-off', description: 'Camera/video off', tags: ['video', 'disabled'] },
    { name: 'image', description: 'Image/photo', tags: ['picture', 'photo', 'gallery'] },
    { name: 'video', description: 'Video file', tags: ['movie', 'film', 'media'] },
    { name: 'music', description: 'Music/audio file', tags: ['audio', 'song', 'sound'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNICATION - Messaging & notifications
  // ═══════════════════════════════════════════════════════════════════════════
  communication: [
    { name: 'bell', description: 'Notification bell', tags: ['alert', 'notification', 'alarm'] },
    { name: 'bell-off', description: 'Notifications disabled', tags: ['mute', 'silent', 'dnd'] },
    { name: 'message', description: 'Message/comment', tags: ['chat', 'comment', 'bubble'] },
    { name: 'mail', description: 'Email', tags: ['email', 'envelope', 'inbox'] },
    { name: 'inbox', description: 'Inbox', tags: ['mail', 'messages', 'receive'] },
    { name: 'send', description: 'Send message', tags: ['submit', 'paper-plane', 'dispatch'] },
    { name: 'at-sign', description: 'Mention/at', tags: ['mention', 'email', 'handle'] },
    { name: 'phone', description: 'Phone call', tags: ['call', 'contact', 'telephone'] },
    { name: 'phone-off', description: 'End call', tags: ['hangup', 'disconnect'] },
    { name: 'video-call', description: 'Video call', tags: ['meeting', 'conference', 'chat'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DATA - Information & analytics
  // ═══════════════════════════════════════════════════════════════════════════
  data: [
    { name: 'chart-bar', description: 'Bar chart', tags: ['analytics', 'stats', 'graph'] },
    { name: 'chart-line', description: 'Line chart', tags: ['trend', 'analytics', 'graph'] },
    { name: 'chart-pie', description: 'Pie chart', tags: ['percentage', 'analytics', 'graph'] },
    { name: 'database', description: 'Database', tags: ['storage', 'data', 'backend'] },
    { name: 'table', description: 'Data table', tags: ['grid', 'spreadsheet', 'rows'] },
    { name: 'cloud', description: 'Cloud storage', tags: ['online', 'sync', 'backup'] },
    { name: 'cloud-upload', description: 'Upload to cloud', tags: ['sync', 'backup', 'save'] },
    { name: 'cloud-download', description: 'Download from cloud', tags: ['sync', 'restore', 'get'] },
    { name: 'sync', description: 'Sync/synchronize', tags: ['refresh', 'update', 'cloud'] },
    { name: 'calendar', description: 'Calendar/date', tags: ['date', 'schedule', 'event'] },
    { name: 'clock', description: 'Time/clock', tags: ['time', 'schedule', 'duration'] },
    { name: 'timer', description: 'Timer/countdown', tags: ['countdown', 'stopwatch', 'duration'] },
    { name: 'hash', description: 'Hashtag/number', tags: ['tag', 'number', 'category'] },
    { name: 'percent', description: 'Percentage', tags: ['discount', 'ratio', 'stats'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SECURITY - Auth & privacy
  // ═══════════════════════════════════════════════════════════════════════════
  security: [
    { name: 'lock', description: 'Locked/secure', tags: ['secure', 'private', 'protected'] },
    { name: 'unlock', description: 'Unlocked', tags: ['open', 'unsecure', 'access'] },
    { name: 'key', description: 'Key/access', tags: ['password', 'auth', 'credential'] },
    { name: 'shield', description: 'Security shield', tags: ['protect', 'secure', 'guard'] },
    { name: 'shield-check', description: 'Verified/protected', tags: ['verified', 'secure', 'safe'] },
    { name: 'shield-x', description: 'Not protected', tags: ['vulnerable', 'warning', 'unsafe'] },
    { name: 'eye', description: 'Visible/show', tags: ['view', 'visible', 'show-password'] },
    { name: 'eye-off', description: 'Hidden/hide', tags: ['hide', 'invisible', 'hide-password'] },
    { name: 'fingerprint', description: 'Biometric auth', tags: ['auth', 'biometric', 'identity'] },
    { name: 'user', description: 'User/profile', tags: ['account', 'person', 'avatar'] },
    { name: 'users', description: 'Multiple users', tags: ['team', 'group', 'people'] },
    { name: 'user-plus', description: 'Add user', tags: ['invite', 'add-member', 'signup'] },
    { name: 'user-minus', description: 'Remove user', tags: ['remove-member', 'kick', 'ban'] },
    { name: 'log-in', description: 'Log in', tags: ['signin', 'auth', 'enter'] },
    { name: 'log-out', description: 'Log out', tags: ['signout', 'exit', 'leave'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // TECH - Development & systems
  // ═══════════════════════════════════════════════════════════════════════════
  tech: [
    { name: 'terminal', description: 'Terminal/console', tags: ['cli', 'command', 'shell'] },
    { name: 'code', description: 'Code/programming', tags: ['develop', 'brackets', 'html'] },
    { name: 'chip', description: 'CPU/processor', tags: ['hardware', 'cpu', 'processor'] },
    { name: 'circuit', description: 'Circuit board', tags: ['hardware', 'electronics', 'board'] },
    { name: 'signal', description: 'Signal/broadcast', tags: ['wifi', 'wireless', 'connection'] },
    { name: 'wifi', description: 'WiFi connection', tags: ['internet', 'wireless', 'network'] },
    { name: 'wifi-off', description: 'No WiFi', tags: ['offline', 'disconnected', 'no-internet'] },
    { name: 'bluetooth', description: 'Bluetooth', tags: ['wireless', 'connect', 'pair'] },
    { name: 'server', description: 'Server', tags: ['backend', 'hosting', 'machine'] },
    { name: 'api', description: 'API endpoint', tags: ['interface', 'connect', 'integration'] },
    { name: 'git-branch', description: 'Git branch', tags: ['version', 'branch', 'code'] },
    { name: 'git-commit', description: 'Git commit', tags: ['version', 'save', 'code'] },
    { name: 'git-merge', description: 'Git merge', tags: ['version', 'combine', 'code'] },
    { name: 'git-pull', description: 'Git pull request', tags: ['version', 'review', 'code'] },
    { name: 'bug', description: 'Bug/issue', tags: ['error', 'debug', 'problem'] },
    { name: 'settings', description: 'Settings/config', tags: ['gear', 'config', 'preferences'] },
    { name: 'sliders', description: 'Sliders/adjustments', tags: ['config', 'tune', 'adjust'] },
    { name: 'zap', description: 'Lightning/power', tags: ['fast', 'energy', 'electric'] },
    { name: 'cpu', description: 'CPU usage', tags: ['processor', 'performance', 'load'] },
    { name: 'memory', description: 'Memory/RAM', tags: ['ram', 'storage', 'performance'] },
    { name: 'globe', description: 'Web/internet', tags: ['world', 'website', 'global'] },
    { name: 'qr-code', description: 'QR code', tags: ['scan', 'barcode', 'link'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // FILES - Documents & folders
  // ═══════════════════════════════════════════════════════════════════════════
  files: [
    { name: 'file', description: 'Generic file', tags: ['document', 'page', 'blank'] },
    { name: 'file-text', description: 'Text file', tags: ['document', 'txt', 'content'] },
    { name: 'file-code', description: 'Code file', tags: ['source', 'script', 'programming'] },
    { name: 'file-image', description: 'Image file', tags: ['picture', 'photo', 'graphic'] },
    { name: 'file-video', description: 'Video file', tags: ['movie', 'media', 'clip'] },
    { name: 'file-audio', description: 'Audio file', tags: ['music', 'sound', 'mp3'] },
    { name: 'file-archive', description: 'Archive/zip file', tags: ['zip', 'compress', 'package'] },
    { name: 'file-plus', description: 'New file', tags: ['create', 'add', 'new'] },
    { name: 'file-minus', description: 'Remove file', tags: ['delete', 'remove'] },
    { name: 'folder', description: 'Folder', tags: ['directory', 'container', 'organize'] },
    { name: 'folder-open', description: 'Open folder', tags: ['directory', 'browse', 'explore'] },
    { name: 'folder-plus', description: 'New folder', tags: ['create', 'add', 'directory'] },
    { name: 'archive', description: 'Archive', tags: ['storage', 'old', 'backup'] },
    { name: 'clipboard', description: 'Clipboard', tags: ['paste', 'copy', 'buffer'] },
    { name: 'attachment', description: 'Attachment', tags: ['attach', 'paperclip', 'file'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // STATUS - States & feedback
  // ═══════════════════════════════════════════════════════════════════════════
  status: [
    { name: 'info', description: 'Information', tags: ['help', 'about', 'details'] },
    { name: 'warning', description: 'Warning/caution', tags: ['alert', 'caution', 'attention'] },
    { name: 'error', description: 'Error/danger', tags: ['danger', 'problem', 'fail'] },
    { name: 'success', description: 'Success/complete', tags: ['done', 'complete', 'check'] },
    { name: 'help', description: 'Help/question', tags: ['question', 'support', 'faq'] },
    { name: 'loading', description: 'Loading spinner', tags: ['wait', 'progress', 'busy'] },
    { name: 'progress', description: 'Progress indicator', tags: ['loading', 'percent', 'bar'] },
    { name: 'online', description: 'Online/connected', tags: ['active', 'available', 'green'] },
    { name: 'offline', description: 'Offline/disconnected', tags: ['inactive', 'unavailable', 'gray'] },
    { name: 'battery-full', description: 'Battery full', tags: ['power', 'charge', 'energy'] },
    { name: 'battery-low', description: 'Battery low', tags: ['power', 'charge', 'warning'] },
    { name: 'battery-charging', description: 'Battery charging', tags: ['power', 'charge', 'plug'] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SOCIAL - Social media & sharing
  // ═══════════════════════════════════════════════════════════════════════════
  social: [
    { name: 'heart', description: 'Like/favorite', tags: ['love', 'favorite', 'like'] },
    { name: 'heart-filled', description: 'Liked/favorited', tags: ['loved', 'favorited', 'active'] },
    { name: 'star', description: 'Star/rate', tags: ['favorite', 'rate', 'bookmark'] },
    { name: 'star-filled', description: 'Starred/rated', tags: ['favorited', 'rated', 'active'] },
    { name: 'thumbs-up', description: 'Thumbs up', tags: ['like', 'approve', 'positive'] },
    { name: 'thumbs-down', description: 'Thumbs down', tags: ['dislike', 'reject', 'negative'] },
    { name: 'bookmark', description: 'Bookmark', tags: ['save', 'favorite', 'later'] },
    { name: 'bookmark-filled', description: 'Bookmarked', tags: ['saved', 'favorited', 'active'] },
    { name: 'flag', description: 'Flag/report', tags: ['report', 'mark', 'attention'] },
    { name: 'award', description: 'Award/badge', tags: ['achievement', 'trophy', 'prize'] },
    { name: 'trending', description: 'Trending/popular', tags: ['hot', 'popular', 'rising'] },
  ],
};

/**
 * Get total icon count
 */
export function getIconCount(): number {
  return Object.values(ICON_LIST).reduce((sum, icons) => sum + icons.length, 0);
}

/**
 * Get all icon names as a flat array
 */
export function getAllIconNames(): string[] {
  return Object.values(ICON_LIST).flatMap((icons) => icons.map((icon) => icon.name));
}

/**
 * Get icons by category
 */
export function getIconsByCategory(category: IconCategory): IconSpec[] {
  return ICON_LIST[category] || [];
}
