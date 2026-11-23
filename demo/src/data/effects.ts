import type { ModuleDoc } from './types';

const glitch: ModuleDoc = {
  slug: 'glitch',
  name: 'Glitch',
  summary:
    'Chromatic-aberration text that splits into cyan and magenta channels, always on or on hover.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'basic',
      title: 'Glitch text',
      description:
        'The effect draws two copies of the text from `data-text`, so repeat the content there.',
      html: `<p class="cyber-glitch cyber-font-display cyber-font-bold cyber-uppercase" data-text="Signal lost" style="font-size: var(--text-3xl)">Signal lost</p>`,
    },
    {
      id: 'variants',
      title: 'Subtle, intense and hover',
      html: `<div class="cyber-flex cyber-flex-col cyber-gap-md cyber-font-display cyber-font-bold cyber-uppercase" style="font-size: var(--text-2xl)">
  <span class="cyber-glitch cyber-glitch--subtle" data-text="Subtle">Subtle</span>
  <span class="cyber-glitch cyber-glitch--intense" data-text="Intense">Intense</span>
  <span class="cyber-glitch cyber-glitch--hover" data-text="Hover me">Hover me</span>
</div>`,
    },
    {
      id: 'heading',
      title: 'Glowing heading',
      description:
        '`cyber-heading` adds a cyan glow under a slower glitch, for one headline per view.',
      html: `<p class="cyber-heading cyber-font-display cyber-font-bold cyber-uppercase" data-text="Night shift" style="font-size: var(--text-3xl)">Night shift</p>`,
    },
  ],
  accessibility: [
    'The animation stops under `prefers-reduced-motion: reduce`. The text stays.',
    'Keep `data-text` identical to the visible text. Some screen readers read generated content, and a mismatch would be read aloud.',
    'Use glitch on short display text. Moving body copy is hard to read for everyone, and harder with dyslexia or low vision.',
    'The intense variant flashes. Keep it small and brief, and never on large areas.',
  ],
};

const neonBorder: ModuleDoc = {
  slug: 'neon-border',
  name: 'Neon border',
  summary: 'An animated gradient glow that flows around any box.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-neon-border cyber-p-md">
  <p class="cyber-font-display cyber-font-bold cyber-uppercase">Priority channel</p>
</div>`,
  examples: [
    {
      id: 'basic',
      title: 'Neon border',
      description: 'Put the class on a wrapper. Its centre is filled with the surface colour.',
      html: `<div class="cyber-p-md">
  <div class="cyber-neon-border cyber-p-lg">
    <p class="cyber-font-display cyber-font-bold cyber-uppercase">Priority channel</p>
    <p class="cyber-text-secondary">Encrypted end to end.</p>
  </div>
</div>`,
    },
    {
      id: 'colours',
      title: 'Single-colour variants',
      html: `<div class="cyber-grid--4 cyber-p-md">
  <div class="cyber-neon-border cyber-neon-border--cyan cyber-p-md">Cyan</div>
  <div class="cyber-neon-border cyber-neon-border--magenta cyber-p-md">Magenta</div>
  <div class="cyber-neon-border cyber-neon-border--yellow cyber-p-md">Yellow</div>
  <div class="cyber-neon-border cyber-neon-border--green cyber-p-md">Green</div>
</div>`,
    },
  ],
  accessibility: [
    'The flow animation stops under reduced motion. The glow stays.',
    'The border is decoration. Do not use its colour as the only sign of state.',
    'The glow bleeds past the box, so leave room around it or it will be clipped by an `overflow: hidden` parent.',
  ],
};

const scanlines: ModuleDoc = {
  slug: 'scanlines',
  name: 'Scanlines',
  summary: 'A CRT scanline overlay for any box, static, flickering or scrolling.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'basic',
      title: 'Scanlines',
      html: `<div class="cyber-scanlines cyber-p-lg">
  <p class="cyber-font-display cyber-font-bold cyber-uppercase cyber-text-cyan" style="font-size: var(--text-2xl)">Camera 04</p>
  <p class="cyber-font-mono cyber-text-secondary">REC 00:14:07</p>
</div>`,
    },
    {
      id: 'variants',
      title: 'Fine, heavy and scrolling',
      html: `<div class="cyber-grid--3">
  <div class="cyber-scanlines cyber-scanlines--fine cyber-p-lg cyber-font-mono">Fine</div>
  <div class="cyber-scanlines cyber-scanlines--heavy cyber-p-lg cyber-font-mono">Heavy</div>
  <div class="cyber-scanlines cyber-scanlines--scroll cyber-p-lg cyber-font-mono">Scroll</div>
</div>`,
    },
  ],
  accessibility: [
    'Scanlines darken what is under them. Check text contrast with the overlay on, and prefer the fine variant over body text.',
    'The overlay ignores pointer events, so controls underneath still work.',
    'Flicker and scroll stop under reduced motion.',
  ],
};

const noise: ModuleDoc = {
  slug: 'noise',
  name: 'Noise',
  summary: 'A film-grain texture overlay, still or animated.',
  behaviour: 'no-js',
  thumbnail: `<div class="cyber-noise cyber-p-lg cyber-font-mono">Static grain</div>`,
  examples: [
    {
      id: 'basic',
      title: 'Noise',
      html: `<div class="cyber-grid--2">
  <div class="cyber-noise cyber-p-lg cyber-font-mono">Static grain</div>
  <div class="cyber-noise cyber-noise--animated cyber-p-lg cyber-font-mono">Animated grain</div>
</div>`,
    },
  ],
  accessibility: [
    'Grain lowers contrast a little. Keep it off long passages of small text.',
    'The animated variant stops under reduced motion.',
    'The overlay ignores pointer events.',
  ],
};

const datastream: ModuleDoc = {
  slug: 'datastream',
  name: 'Datastream',
  summary: 'A band of light that travels down a box, like data moving through it.',
  behaviour: 'no-js',
  examples: [
    {
      id: 'basic',
      title: 'Datastream',
      html: `<div class="cyber-datastream cyber-p-lg">
  <p class="cyber-font-display cyber-font-bold cyber-uppercase">Transfer in progress</p>
  <p class="cyber-font-mono cyber-text-secondary">412 MB of 1.2 GB</p>
</div>`,
    },
  ],
  accessibility: [
    'The stream is decoration and loops forever, so it stops under reduced motion.',
    'It does not tell assistive tech anything. Report real progress with a progress bar or a status message.',
  ],
};

export const EFFECT_DOCS: ModuleDoc[] = [glitch, neonBorder, scanlines, noise, datastream];
