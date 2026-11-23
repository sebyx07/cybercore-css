import { icon } from './icon';

import type { ModuleDoc } from './types';

const cell = (text: string) => `<span class="cyber-badge">${text}</span>`;

const display: ModuleDoc = {
  slug: 'display',
  name: 'Display',
  summary: 'Set the display type of an element: block, inline, flex, grid or hidden.',
  examples: [
    {
      id: 'basic',
      title: 'Display types',
      html: `<span class="cyber-block cyber-mb-xs">${cell('block')}</span>
<span class="cyber-inline">${cell('inline')}</span>
<span class="cyber-inline-block">${cell('inline-block')}</span>
<span class="cyber-hidden">${cell('hidden, not rendered')}</span>`,
    },
  ],
  accessibility: [
    '`cyber-hidden` removes the element for everyone, screen readers included. To hide something visually but keep it announced, use `cyber-sr-only`.',
  ],
};

const flex: ModuleDoc = {
  slug: 'flex',
  name: 'Flexbox',
  summary: 'Direction, wrapping, alignment, justification, gaps and flex sizing.',
  examples: [
    {
      id: 'direction',
      title: 'Direction and gap',
      html: `<div class="cyber-flex cyber-flex-row cyber-gap-sm cyber-mb-md">
  ${cell('one')}${cell('two')}${cell('three')}
</div>
<div class="cyber-flex cyber-flex-col cyber-items-start cyber-gap-xs">
  ${cell('one')}${cell('two')}${cell('three')}
</div>`,
    },
    {
      id: 'justify',
      title: 'Justify and align',
      html: `<div class="cyber-flex cyber-justify-between cyber-items-center cyber-mb-sm">
  ${cell('start')}${cell('between')}${cell('end')}
</div>
<div class="cyber-flex cyber-justify-center cyber-gap-sm cyber-mb-sm">
  ${cell('centred')}${cell('pair')}
</div>
<div class="cyber-flex cyber-justify-end cyber-gap-sm">
  ${cell('pushed')}${cell('to the end')}
</div>`,
    },
    {
      id: 'grow',
      title: 'Grow and wrap',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <span class="cyber-badge cyber-flex-1">flex-1</span>
  <span class="cyber-badge cyber-flex-1">flex-1</span>
  <span class="cyber-badge cyber-flex-none">flex-none</span>
</div>`,
    },
  ],
  accessibility: [
    'Flexbox can reorder things visually. Keyboard and screen reader order still follow the HTML, so keep the two the same.',
  ],
};

const grid: ModuleDoc = {
  slug: 'grid',
  name: 'Grid',
  summary: 'Responsive column grids, auto-fit grids and column spans.',
  examples: [
    {
      id: 'columns',
      title: 'Fixed columns',
      description: 'Each grid collapses to fewer columns on narrow screens.',
      html: `<div class="cyber-grid--3">
  ${cell('one')}${cell('two')}${cell('three')}
</div>`,
    },
    {
      id: 'auto',
      title: 'Auto-fit',
      description: 'As many columns as fit, each at least the named width.',
      html: `<div class="cyber-grid--auto-sm">
  ${cell('a')}${cell('b')}${cell('c')}${cell('d')}${cell('e')}
</div>`,
    },
    {
      id: 'span',
      title: 'Spans',
      html: `<div class="cyber-grid--4">
  <span class="cyber-badge cyber-col-span-2">span 2</span>
  ${cell('one')}${cell('one')}
  <span class="cyber-badge cyber-col-span-full">full row</span>
</div>`,
    },
  ],
};

const spacing: ModuleDoc = {
  slug: 'spacing',
  name: 'Spacing',
  summary: 'Margin and padding on the fluid spacing scale, from xs to xl.',
  thumbnail: `<div class="cyber-flex cyber-flex-wrap cyber-items-start cyber-gap-sm">
  <div class="cyber-card cyber-p-xs">p-xs</div>
  <div class="cyber-card cyber-p-sm">p-sm</div>
  <div class="cyber-card cyber-p-md">p-md</div>
</div>`,
  examples: [
    {
      id: 'padding',
      title: 'Padding',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-start cyber-gap-sm">
  <div class="cyber-card cyber-p-xs">p-xs</div>
  <div class="cyber-card cyber-p-sm">p-sm</div>
  <div class="cyber-card cyber-p-md">p-md</div>
  <div class="cyber-card cyber-p-lg">p-lg</div>
  <div class="cyber-card cyber-px-lg cyber-py-sm">px-lg py-sm</div>
</div>`,
    },
    {
      id: 'margin',
      title: 'Margin',
      html: `<div>
  ${cell('no margin')}
  <div class="cyber-mt-md">${cell('mt-md')}</div>
  <div class="cyber-my-lg">${cell('my-lg')}</div>
  <div class="cyber-mx-auto" style="width: fit-content">${cell('mx-auto centres a sized box')}</div>
</div>`,
    },
  ],
};

const text: ModuleDoc = {
  slug: 'text',
  name: 'Text',
  summary: 'Alignment, colour, glow, weight, family, case and truncation.',
  thumbnail: `<p class="cyber-text-cyan">Cyan</p>
<p class="cyber-text-magenta">Magenta</p>
<p class="cyber-text-green cyber-text-glow-green">Green with glow</p>`,
  examples: [
    {
      id: 'colour',
      title: 'Colour and glow',
      html: `<p class="cyber-text-primary">Primary text</p>
<p class="cyber-text-secondary">Secondary text</p>
<p class="cyber-text-cyan">Cyan</p>
<p class="cyber-text-magenta">Magenta</p>
<p class="cyber-text-yellow">Yellow</p>
<p class="cyber-text-green cyber-text-glow-green">Green with glow</p>`,
    },
    {
      id: 'family',
      title: 'Family, weight and case',
      html: `<p class="cyber-font-display cyber-font-bold cyber-uppercase">Display, bold, uppercase</p>
<p class="cyber-font-body cyber-font-normal">Body, normal weight</p>
<p class="cyber-font-mono cyber-font-medium">Mono, medium weight</p>`,
    },
    {
      id: 'overflow',
      title: 'Truncate and clamp',
      html: `<div style="max-width: 18rem">
  <p class="cyber-truncate cyber-mb-sm">One line only, cut with an ellipsis when it runs out of room.</p>
  <p class="cyber-line-clamp-2">Two lines at most. Anything after the second line is cut with an ellipsis, however long the paragraph turns out to be.</p>
</div>`,
    },
  ],
  accessibility: [
    'Glow lowers legibility at small sizes. Keep it for headings and short labels.',
    '`cyber-text-muted` is for incidental text only. Check its contrast against your background before using it for anything people need to read.',
    'Truncated text is still read in full by screen readers, but sighted users lose it. Offer the full text somewhere.',
  ],
};

const backgrounds: ModuleDoc = {
  slug: 'backgrounds',
  name: 'Backgrounds',
  summary: 'Surface colours, accent fills, subtle tints and gradients.',
  thumbnail: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <div class="cyber-bg-elevated cyber-p-sm">elevated</div>
  <div class="cyber-bg-cyan-subtle cyber-p-sm">cyan-subtle</div>
  <div class="cyber-bg-magenta-subtle cyber-p-sm">magenta-subtle</div>
  <div class="cyber-bg-gradient-cyber cyber-p-sm">gradient</div>
</div>`,
  examples: [
    {
      id: 'surfaces',
      title: 'Surfaces and tints',
      html: `<div class="cyber-grid--4">
  <div class="cyber-bg-secondary cyber-p-md">secondary</div>
  <div class="cyber-bg-tertiary cyber-p-md">tertiary</div>
  <div class="cyber-bg-elevated cyber-p-md">elevated</div>
  <div class="cyber-bg-cyan-subtle cyber-p-md">cyan-subtle</div>
  <div class="cyber-bg-magenta-subtle cyber-p-md">magenta-subtle</div>
  <div class="cyber-bg-yellow-subtle cyber-p-md">yellow-subtle</div>
  <div class="cyber-bg-green-subtle cyber-p-md">green-subtle</div>
  <div class="cyber-bg-gradient-cyber cyber-p-md">gradient-cyber</div>
</div>`,
    },
  ],
  accessibility: [
    'A full accent fill such as `cyber-bg-cyan` needs dark text on top. Light text on neon fails contrast.',
  ],
};

const borders: ModuleDoc = {
  slug: 'borders',
  name: 'Borders',
  summary: 'Border width, side, style and colour, corner radius and focus-style rings.',
  thumbnail: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <div class="cyber-border cyber-p-sm">border</div>
  <div class="cyber-border-2 cyber-border-cyan cyber-p-sm">2, cyan</div>
  <div class="cyber-border cyber-border-dashed cyber-border-magenta cyber-p-sm">dashed</div>
  <div class="cyber-border cyber-rounded-xl cyber-p-sm">rounded-xl</div>
</div>`,
  examples: [
    {
      id: 'borders',
      title: 'Borders and radius',
      html: `<div class="cyber-grid--4">
  <div class="cyber-border cyber-p-md">border</div>
  <div class="cyber-border-2 cyber-border-cyan cyber-p-md">2, cyan</div>
  <div class="cyber-border cyber-border-dashed cyber-border-magenta cyber-p-md">dashed</div>
  <div class="cyber-border-b cyber-border-green cyber-p-md">bottom only</div>
  <div class="cyber-border cyber-rounded-md cyber-p-md">rounded-md</div>
  <div class="cyber-border cyber-rounded-xl cyber-p-md">rounded-xl</div>
  <div class="cyber-border cyber-rounded-full cyber-p-md cyber-text-center">full</div>
  <div class="cyber-ring cyber-p-md">ring</div>
</div>`,
    },
  ],
};

const shadows: ModuleDoc = {
  slug: 'shadows',
  name: 'Shadows',
  summary: 'Elevation shadows, neon glows, opacity and backdrop blur.',
  thumbnail: `<div class="cyber-grid--2 cyber-p-sm">
  <div class="cyber-bg-secondary cyber-shadow-glow cyber-p-sm">glow</div>
  <div class="cyber-bg-secondary cyber-shadow-glow-magenta cyber-p-sm">magenta</div>
</div>`,
  examples: [
    {
      id: 'glow',
      title: 'Shadows and glows',
      html: `<div class="cyber-grid--4 cyber-p-md">
  <div class="cyber-bg-secondary cyber-shadow-lg cyber-p-md">shadow-lg</div>
  <div class="cyber-bg-secondary cyber-shadow-glow cyber-p-md">glow</div>
  <div class="cyber-bg-secondary cyber-shadow-glow-magenta cyber-p-md">glow-magenta</div>
  <div class="cyber-bg-secondary cyber-shadow-glow-green cyber-p-md">glow-green</div>
</div>`,
    },
    {
      id: 'opacity',
      title: 'Opacity',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <span class="cyber-badge cyber-opacity-100">100</span>
  <span class="cyber-badge cyber-opacity-75">75</span>
  <span class="cyber-badge cyber-opacity-50">50</span>
  <span class="cyber-badge cyber-opacity-25">25</span>
</div>`,
    },
  ],
  accessibility: [
    'Opacity lowers contrast for text too. Do not dim text people need to read below what passes on your background.',
  ],
};

const transforms: ModuleDoc = {
  slug: 'transforms',
  name: 'Transforms',
  summary: 'Scale, rotate, skew, translate and transform origin.',
  examples: [
    {
      id: 'basic',
      title: 'Scale, rotate and skew',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-lg cyber-p-md">
  <span class="cyber-badge cyber-scale-125">scale-125</span>
  <span class="cyber-badge cyber-rotate-45">rotate-45</span>
  <span class="cyber-badge cyber--rotate-90">-rotate-90</span>
  <span class="cyber-badge cyber-skew-x-12">skew-x-12</span>
</div>`,
    },
  ],
  accessibility: [
    'Transforms move pixels, not layout or reading order. Rotated text is slow to read, so keep it to short labels.',
  ],
};

const animation: ModuleDoc = {
  slug: 'animation',
  name: 'Animation',
  summary:
    'Preset animations with delay, duration and play-state controls, plus transition helpers.',
  examples: [
    {
      id: 'presets',
      title: 'Presets',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-lg cyber-p-md">
  <span class="cyber-animate-pulse">${icon('signal', 32)}</span>
  <span class="cyber-animate-spin">${icon('sync', 32)}</span>
  <span class="cyber-animate-bounce">${icon('download', 32)}</span>
  <span class="cyber-animate-float">${icon('cloud', 32)}</span>
  <span class="cyber-animate-glow cyber-badge">glow</span>
</div>`,
    },
    {
      id: 'control',
      title: 'Delay and pause',
      html: `<div class="cyber-flex cyber-flex-wrap cyber-items-center cyber-gap-lg cyber-p-md">
  <span class="cyber-animate-pulse">${icon('zap', 32)}</span>
  <span class="cyber-animate-pulse cyber-delay-300">${icon('zap', 32)}</span>
  <span class="cyber-animate-pulse cyber-delay-500">${icon('zap', 32)}</span>
  <span class="cyber-animate-spin cyber-animate-paused">${icon('sync', 32)}</span>
</div>`,
    },
  ],
  accessibility: [
    'Every animation should say something: loading, attention, a change of state. Decoration that loops forever is a distraction.',
    'Looping animations stop under `prefers-reduced-motion: reduce`. Do not rely on motion alone to carry meaning.',
    'Nothing here flashes faster than three times a second. Keep it that way in your own keyframes.',
  ],
};

const accessibility: ModuleDoc = {
  slug: 'accessibility',
  name: 'Accessibility',
  summary: 'Screen-reader-only text, skip links, focus rings and motion preferences.',
  examples: [
    {
      id: 'sr-only',
      title: 'Screen-reader-only text',
      description:
        'Hidden visually, still announced. Use it to give context to icons and bare numbers.',
      html: `<button class="cyber-btn cyber-btn--icon" type="button">
  ${icon('delete')}
  <span class="cyber-sr-only">Delete session</span>
</button>`,
    },
    {
      id: 'skip-link',
      title: 'Skip link',
      description: 'Invisible until it receives focus. Tab into the preview to see it.',
      html: `<a class="cyber-sr-only cyber-sr-only-focusable" href="#skip-link">Skip to content</a>
<p class="cyber-text-secondary">A skip link sits above this line.</p>`,
    },
    {
      id: 'focus',
      title: 'Focus ring',
      html: `<a class="cyber-focus-visible" href="#focus">A link with the framework focus ring</a>`,
    },
  ],
  accessibility: [
    'Put a skip link first in the page, before the navigation.',
    'Never remove a focus outline without replacing it. `cyber-focus-visible` gives any element the framework ring.',
    'Prefer visible text. `cyber-sr-only` is for cases where the design truly has no room for it.',
  ],
};

export const UTILITY_DOCS: ModuleDoc[] = [
  display,
  flex,
  grid,
  spacing,
  text,
  backgrounds,
  borders,
  shadows,
  transforms,
  animation,
  accessibility,
];
