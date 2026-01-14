import { Link, useParams } from 'react-router-dom';

import CodeBlock from '../components/CodeBlock';

import type { IconCategory } from '../../../src/icons';

const SECTIONS = [
  { id: 'installation', label: 'Installation' },
  { id: 'usage', label: 'Usage' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'customization', label: 'Customization' },
  { id: 'colors', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'components', label: 'Components' },
  { id: 'effects', label: 'Effects' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'icons', label: 'Icons' },
] as const;

// Icon category metadata - counts match registry.ts
const ICON_CATEGORIES: { id: IconCategory; label: string; count: number; description: string }[] = [
  {
    id: 'navigation',
    label: 'Navigation',
    count: 14,
    description: 'Arrows, chevrons, home, menu, external links, etc.',
  },
  {
    id: 'actions',
    label: 'Actions',
    count: 23,
    description: 'Search, edit, delete, copy, undo, redo, etc.',
  },
  {
    id: 'media',
    label: 'Media',
    count: 17,
    description: 'Play, pause, volume, camera, microphone, etc.',
  },
  {
    id: 'communication',
    label: 'Communication',
    count: 10,
    description: 'Bell, message, mail, phone, chat, etc.',
  },
  {
    id: 'data',
    label: 'Data',
    count: 14,
    description: 'Charts, database, cloud, calendar, table, etc.',
  },
  {
    id: 'security',
    label: 'Security',
    count: 15,
    description: 'Lock, shield, user, eye, fingerprint, etc.',
  },
  {
    id: 'tech',
    label: 'Tech',
    count: 22,
    description: 'Terminal, code, chip, wifi, git, globe, etc.',
  },
  { id: 'files', label: 'Files', count: 15, description: 'File, folder, clipboard, archive, etc.' },
  {
    id: 'status',
    label: 'Status',
    count: 12,
    description: 'Info, warning, error, success, battery, etc.',
  },
  {
    id: 'social',
    label: 'Social',
    count: 11,
    description: 'Heart, star, thumbs, bookmark, share, etc.',
  },
];

type SectionType = (typeof SECTIONS)[number]['id'];

function Docs() {
  const { section } = useParams<{ section?: string }>();
  const validIds = SECTIONS.map((s) => s.id);
  const activeSection: SectionType = validIds.includes(section as SectionType)
    ? (section as SectionType)
    : 'installation';

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">
            &gt; DOCUMENTATION<span className="cursor">_</span>
          </p>
          <h1 className="cyber-h1 cyber-text-glow">Docs</h1>
          <p className="cyber-lead">
            Everything you need to know to get started with Cybercore CSS.
          </p>
        </div>
      </header>

      <div className="demo-container">
        {/* Tabs Navigation - same as Components page */}
        <nav
          className="cyber-tabs cyber-tabs--fullwidth"
          style={{ marginBottom: 'var(--space-xl)' }}
        >
          {SECTIONS.map((sec) => (
            <Link
              key={sec.id}
              to={`/docs/${sec.id}`}
              className={`cyber-tab ${activeSection === sec.id ? 'cyber-tab--active' : ''}`}
            >
              {sec.label}
            </Link>
          ))}
        </nav>

        <div>
          {/* Installation */}
          {activeSection === 'installation' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Installation
              </h2>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                NPM
              </h3>
              <CodeBlock
                title="Install via NPM"
                language="bash"
                code={`npm install cybercore-css`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Yarn
              </h3>
              <CodeBlock title="Install via Yarn" language="bash" code={`yarn add cybercore-css`} />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                CDN
              </h3>
              <CodeBlock
                title="Use via CDN"
                language="html"
                code={`<link rel="stylesheet" href="https://unpkg.com/cybercore-css@latest/dist/cybercore.min.css">`}
              />

              <div className="cyber-alert" style={{ marginTop: 'var(--space-lg)' }}>
                <strong>Note:</strong> Don't forget to include the required Google Fonts in your
                HTML head for the best typography experience.
              </div>

              <CodeBlock
                title="Required Fonts"
                language="html"
                code={`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                HTML Only (No Build Tools)
              </h3>
              <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-secondary)' }}>
                For simple websites without npm or bundlers:
              </p>
              <CodeBlock
                title="Simple HTML Setup"
                language="html"
                code={`<!DOCTYPE html>
<html>
<head>
  <!-- Required fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Cybercore CSS from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/cybercore-css@latest/dist/cybercore.min.css">
</head>
<body>
  <button class="cyber-btn">Click me</button>
  <div class="cyber-card">Hello World</div>
</body>
</html>`}
              />
            </section>
          )}

          {/* Usage */}
          {activeSection === 'usage' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Usage
              </h2>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Import Everything
              </h3>
              <CodeBlock
                title="Full Import (SCSS)"
                language="scss"
                code={`// Import the complete framework
@use 'cybercore-css';`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Modular Import
              </h3>
              <CodeBlock
                title="Selective Import (SCSS)"
                language="scss"
                code={`// Import only what you need
@use 'cybercore-css/core/variables';
@use 'cybercore-css/core/reset';
@use 'cybercore-css/core/base';
@use 'cybercore-css/core/typography';

// Components
@use 'cybercore-css/components/buttons';
@use 'cybercore-css/components/cards';

// Effects
@use 'cybercore-css/effects/glitch';
@use 'cybercore-css/effects/neon-border';`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Basic HTML Usage
              </h3>
              <CodeBlock
                title="HTML Example"
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="path/to/cybercore.css">
  <title>My Cyber App</title>
</head>
<body>
  <h1 class="cyber-h1 cyber-text-glow">Welcome</h1>
  <button class="cyber-btn">Click Me</button>
</body>
</html>`}
              />
            </section>
          )}

          {/* Architecture */}
          {activeSection === 'architecture' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Architecture
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Cybercore CSS is built on modern CSS best practices with a layered architecture that
                gives you full control over the cascade. The framework is pure CSS with no
                JavaScript dependencies.
              </p>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                CSS Layers
              </h3>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                The framework uses CSS <code>@layer</code> for cascade control with this priority
                order (lowest to highest):
              </p>
              <CodeBlock
                title="Layer Order"
                language="css"
                code={`@layer reset, base, theme, components, utilities;

/* Reset: Browser normalization */
/* Base: Element defaults, typography */
/* Theme: CSS variables, color tokens */
/* Components: Buttons, cards, inputs, etc. */
/* Utilities: Helper classes (highest priority) */`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                File Structure
              </h3>
              <CodeBlock
                title="SCSS Structure"
                language="bash"
                code={`src/scss/
├── cybercore.scss      # Entry point
├── core/               # Variables, reset, base, typography
│   ├── _variables.scss # CSS custom properties
│   ├── _reset.scss     # Browser normalization
│   ├── _base.scss      # Element defaults
│   └── _typography.scss
├── components/         # UI components
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _inputs.scss
│   ├── _modal.scss
│   ├── _dropdown.scss
│   └── ...
├── effects/            # Visual effects
│   ├── _glitch.scss
│   ├── _neon-border.scss
│   ├── _scanlines.scss
│   └── _noise.scss
└── utilities/          # Helper classes
    ├── _display.scss
    ├── _flex.scss
    ├── _spacing.scss
    └── ...`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Class Naming Convention
              </h3>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                All classes use the <code>cyber-</code> prefix with BEM-style modifiers:
              </p>
              <CodeBlock
                title="Naming Pattern"
                language="html"
                code={`<!-- Base class -->
<button class="cyber-btn">Button</button>

<!-- Color modifiers -->
<button class="cyber-btn cyber-btn--magenta">Danger</button>
<button class="cyber-btn cyber-btn--green">Success</button>

<!-- Style modifiers -->
<button class="cyber-btn cyber-btn--ghost">Ghost</button>
<button class="cyber-btn cyber-btn--outline">Outline</button>

<!-- Size modifiers -->
<button class="cyber-btn cyber-btn--sm">Small</button>
<button class="cyber-btn cyber-btn--lg">Large</button>

<!-- BEM elements -->
<div class="cyber-card">
  <div class="cyber-card__header">Header</div>
  <div class="cyber-card__body">Body</div>
  <div class="cyber-card__footer">Footer</div>
</div>`}
              />
            </section>
          )}

          {/* Customization */}
          {activeSection === 'customization' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Customization
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Cybercore CSS is built with CSS custom properties (variables), making it easy to
                customize colors, spacing, and other design tokens without modifying the source
                files.
              </p>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Override CSS Variables
              </h3>
              <CodeBlock
                title="Custom Theme"
                language="css"
                code={`:root {
  /* Override primary color */
  --cyber-cyan-500: #00ff88;

  /* Change background */
  --color-bg-primary: #0a0a0f;

  /* Adjust spacing */
  --space-md: 1.5rem;

  /* Custom font */
  --font-display: 'Your Custom Font', sans-serif;
}`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Scoped Customization
              </h3>
              <CodeBlock
                title="Component-level Override"
                language="css"
                code={`.my-custom-section {
  /* Override just for this section */
  --cyber-cyan-500: #ff00ff;
  --glow-cyan: 0 0 20px #ff00ff;
}

.my-custom-button {
  /* Custom button styling */
  --radius-cyber: 0 20px 0 20px;
}`}
              />
            </section>
          )}

          {/* Colors */}
          {activeSection === 'colors' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Color System
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                The color system is built around four primary accent colors, plus neutral tones for
                backgrounds and text. Each color has a full scale from 100 (lightest) to 900
                (darkest).
              </p>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Primary Colors
              </h3>
              <div className="demo-grid" style={{ marginBottom: 'var(--space-xl)' }}>
                <div className="demo-box">
                  <div
                    style={{
                      height: '60px',
                      background: 'var(--cyber-cyan-500)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  />
                  <code>--cyber-cyan-500</code>
                  <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>
                    Primary actions, links, tech/neutral
                  </p>
                </div>
                <div className="demo-box">
                  <div
                    style={{
                      height: '60px',
                      background: 'var(--cyber-magenta-500)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  />
                  <code>--cyber-magenta-500</code>
                  <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>
                    Danger, errors, alerts
                  </p>
                </div>
                <div className="demo-box">
                  <div
                    style={{
                      height: '60px',
                      background: 'var(--cyber-yellow-500)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  />
                  <code>--cyber-yellow-500</code>
                  <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>
                    Warnings, highlights
                  </p>
                </div>
                <div className="demo-box">
                  <div
                    style={{
                      height: '60px',
                      background: 'var(--cyber-green-500)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  />
                  <code>--cyber-green-500</code>
                  <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>
                    Success, confirmation
                  </p>
                </div>
              </div>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Semantic Tokens
              </h3>
              <CodeBlock
                title="Semantic Color Variables"
                language="css"
                code={`/* Backgrounds */
--color-bg-primary: var(--cyber-void-500);
--color-bg-secondary: var(--cyber-void-400);
--color-bg-tertiary: var(--cyber-void-300);
--color-bg-elevated: var(--cyber-void-200);

/* Text */
--color-text-primary: var(--cyber-chrome-100);
--color-text-secondary: var(--cyber-chrome-300);
--color-text-muted: var(--cyber-chrome-500);
--color-text-accent: var(--cyber-cyan-500);

/* Borders */
--color-border-default: var(--cyber-chrome-700);
--color-border-accent: var(--cyber-cyan-500);`}
              />
            </section>
          )}

          {/* Typography */}
          {activeSection === 'typography' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Typography
              </h2>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Font Families
              </h3>
              <CodeBlock
                title="Font Stack Variables"
                language="css"
                code={`--font-display: 'Rajdhani', 'Orbitron', 'Share Tech Mono', system-ui, sans-serif;
--font-body: 'Exo 2', 'Roboto', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Type Scale
              </h3>
              <div className="demo-box" style={{ marginBottom: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  <div>
                    <span className="cyber-display">Display</span>{' '}
                    <code className="cyber-small">cyber-display</code>
                  </div>
                  <div>
                    <span className="cyber-h1">Heading 1</span>{' '}
                    <code className="cyber-small">cyber-h1</code>
                  </div>
                  <div>
                    <span className="cyber-h2">Heading 2</span>{' '}
                    <code className="cyber-small">cyber-h2</code>
                  </div>
                  <div>
                    <span className="cyber-h3">Heading 3</span>{' '}
                    <code className="cyber-small">cyber-h3</code>
                  </div>
                  <div>
                    <span className="cyber-h4">Heading 4</span>{' '}
                    <code className="cyber-small">cyber-h4</code>
                  </div>
                  <div>
                    <span className="cyber-h5">Heading 5</span>{' '}
                    <code className="cyber-small">cyber-h5</code>
                  </div>
                  <div>
                    <span className="cyber-h6">Heading 6</span>{' '}
                    <code className="cyber-small">cyber-h6</code>
                  </div>
                </div>
              </div>

              <CodeBlock
                title="Fluid Type Scale"
                language="css"
                code={`--text-xs: clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem);
--text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
--text-base: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
--text-lg: clamp(1.1rem, 1rem + 0.5vw, 1.25rem);
--text-xl: clamp(1.3rem, 1.1rem + 0.75vw, 1.563rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1vw, 1.953rem);
--text-3xl: clamp(1.8rem, 1.4rem + 1.5vw, 2.441rem);
--text-4xl: clamp(2.2rem, 1.6rem + 2vw, 3.052rem);
--text-5xl: clamp(2.8rem, 2rem + 2.5vw, 3.815rem);`}
              />
            </section>
          )}

          {/* Spacing */}
          {activeSection === 'spacing' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Spacing System
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                The spacing scale uses fluid values that adapt to viewport size, ensuring consistent
                proportions across all screen sizes.
              </p>

              <CodeBlock
                title="Spacing Scale"
                language="css"
                code={`--space-3xs: clamp(0.2rem, 0.15rem + 0.25vw, 0.25rem);
--space-2xs: clamp(0.4rem, 0.35rem + 0.25vw, 0.5rem);
--space-xs: clamp(0.6rem, 0.5rem + 0.5vw, 0.75rem);
--space-sm: clamp(0.8rem, 0.7rem + 0.5vw, 1rem);
--space-md: clamp(1.2rem, 1rem + 1vw, 1.5rem);
--space-lg: clamp(1.6rem, 1.4rem + 1vw, 2rem);
--space-xl: clamp(2.4rem, 2rem + 2vw, 3rem);
--space-2xl: clamp(3.2rem, 2.5rem + 3vw, 4rem);
--space-3xl: clamp(4.8rem, 4rem + 4vw, 6rem);`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Visual Reference
              </h3>
              <div className="demo-box">
                {['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
                  <div
                    key={size}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-md)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  >
                    <code style={{ width: '80px' }}>--space-{size}</code>
                    <div
                      style={{
                        height: `var(--space-${size})`,
                        width: `var(--space-${size})`,
                        minWidth: '8px',
                        background: 'var(--cyber-cyan-500)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Components */}
          {activeSection === 'components' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Components Overview
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Cybercore CSS provides a comprehensive set of pure CSS UI components. Each component
                supports color variants (cyan, magenta, yellow, green) and respects the{' '}
                <code>prefers-reduced-motion</code> setting.
              </p>

              <div className="cyber-alert" style={{ marginBottom: 'var(--space-lg)' }}>
                <strong>See live demos:</strong> Visit the{' '}
                <Link to="/components" style={{ color: 'var(--cyber-cyan-500)' }}>
                  Components page
                </Link>{' '}
                for interactive examples with code snippets.
              </div>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Available Components
              </h3>
              <div
                className="demo-grid"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: 'var(--space-sm)',
                }}
              >
                {[
                  { name: 'Buttons', desc: 'Primary, ghost, outline, sizes' },
                  { name: 'Inputs', desc: 'Text, textarea, select, validation' },
                  { name: 'Cards', desc: 'Header, body, footer, variants' },
                  { name: 'Badges', desc: 'Status indicators, counts' },
                  { name: 'Alerts', desc: 'Info, success, warning, error' },
                  { name: 'Progress', desc: 'Bar, circular, segmented' },
                  { name: 'Tables', desc: 'Data display with hover states' },
                  { name: 'Terminal', desc: 'CLI-style display box' },
                  { name: 'Modal', desc: 'Dialog with animations' },
                  { name: 'Dropdown', desc: 'Menu with dividers' },
                  { name: 'Navigation', desc: 'Navbar with mobile toggle' },
                  { name: 'Tabs', desc: 'Tab navigation system' },
                ].map((comp) => (
                  <div key={comp.name} className="demo-box" style={{ padding: 'var(--space-md)' }}>
                    <span className="cyber-h6">{comp.name}</span>
                    <p className="cyber-small cyber-text-muted">{comp.desc}</p>
                  </div>
                ))}
              </div>

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Color Variants
              </h3>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                Most components support color variants via modifier classes:
              </p>
              <CodeBlock
                title="Component Color Variants"
                language="html"
                code={`<!-- Buttons -->
<button class="cyber-btn">Cyan (default)</button>
<button class="cyber-btn cyber-btn--magenta">Magenta</button>
<button class="cyber-btn cyber-btn--yellow">Yellow</button>
<button class="cyber-btn cyber-btn--green">Green</button>

<!-- Cards -->
<div class="cyber-card cyber-card--magenta">...</div>

<!-- Alerts -->
<div class="cyber-alert cyber-alert--success">...</div>

<!-- Progress -->
<div class="cyber-progress cyber-progress--green">...</div>

<!-- Badges -->
<span class="cyber-badge cyber-badge--yellow">Warning</span>`}
              />
            </section>
          )}

          {/* Effects */}
          {activeSection === 'effects' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Visual Effects
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Add cyberpunk atmosphere with CSS-only visual effects. All effects respect{' '}
                <code>prefers-reduced-motion</code> for accessibility.
              </p>

              <div className="cyber-alert" style={{ marginBottom: 'var(--space-lg)' }}>
                <strong>See live demos:</strong> Visit the{' '}
                <Link to="/effects" style={{ color: 'var(--cyber-cyan-500)' }}>
                  Effects page
                </Link>{' '}
                for interactive examples.
              </div>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Available Effects
              </h3>
              <div className="demo-grid" style={{ gap: 'var(--space-md)' }}>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Glitch
                  </h5>
                  <p className="cyber-small">Animated text distortion effect</p>
                  <code className="cyber-small">.cyber-glitch</code>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Neon Border
                  </h5>
                  <p className="cyber-small">Animated rainbow glow border</p>
                  <code className="cyber-small">.cyber-neon-border</code>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Scanlines
                  </h5>
                  <p className="cyber-small">CRT monitor overlay effect</p>
                  <code className="cyber-small">.cyber-scanlines</code>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Noise
                  </h5>
                  <p className="cyber-small">Subtle static texture overlay</p>
                  <code className="cyber-small">.cyber-noise</code>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Datastream
                  </h5>
                  <p className="cyber-small">Animated light sweep</p>
                  <code className="cyber-small">.cyber-datastream</code>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Text Glow
                  </h5>
                  <p className="cyber-small">Neon text shadow effect</p>
                  <code className="cyber-small">.cyber-text-glow</code>
                </div>
              </div>

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Usage Examples
              </h3>
              <CodeBlock
                title="Applying Effects"
                language="html"
                code={`<!-- Glitch text (requires data-text attribute) -->
<h2 class="cyber-glitch" data-text="SYSTEM ONLINE">SYSTEM ONLINE</h2>

<!-- Neon border on any element -->
<div class="cyber-card cyber-neon-border">
  Glowing card content
</div>

<!-- CRT scanlines overlay -->
<div class="cyber-scanlines">
  Retro monitor content
</div>

<!-- Combine multiple effects -->
<div class="cyber-noise cyber-scanlines">
  <h2 class="cyber-glitch cyber-text-glow" data-text="BREACH">BREACH</h2>
</div>

<!-- Text glow with color variants -->
<span class="cyber-text-glow">Cyan glow</span>
<span class="cyber-text-glow cyber-text-glow--magenta">Magenta glow</span>`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Customizing Effects
              </h3>
              <CodeBlock
                title="CSS Variables for Effects"
                language="css"
                code={`/* Adjust effect intensity */
.my-section {
  --noise-opacity: 0.08;    /* Default: 0.03 */
  --scanline-opacity: 0.06; /* Default: 0.04 */
}

/* Custom glow colors */
.custom-glow {
  text-shadow: 0 0 10px #ff00ff,
               0 0 20px rgba(255, 0, 255, 0.5);
}`}
              />
            </section>
          )}

          {/* Utilities */}
          {activeSection === 'utilities' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Utility Classes
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Low-level utility classes for rapid UI development. See the{' '}
                <Link to="/utilities" style={{ color: 'var(--cyber-cyan-500)' }}>
                  Utilities page
                </Link>{' '}
                for comprehensive documentation with live examples.
              </p>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Utility Categories
              </h3>
              <div
                className="demo-grid"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {[
                  { name: 'Display', classes: 'block, flex, grid, hidden' },
                  { name: 'Flexbox', classes: 'direction, wrap, align, justify' },
                  { name: 'Grid', classes: 'columns, gap, auto-fit' },
                  { name: 'Spacing', classes: 'margin, padding' },
                  { name: 'Text', classes: 'colors, sizes, alignment' },
                  { name: 'Backgrounds', classes: 'colors, gradients' },
                  { name: 'Borders', classes: 'colors, radius' },
                  { name: 'Shadows', classes: 'box, glow effects' },
                  { name: 'Transforms', classes: 'scale, rotate, translate' },
                  { name: 'Animation', classes: 'pulse, fade, slide' },
                  { name: 'Accessibility', classes: 'sr-only, focus' },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    to={`/utilities/${cat.name.toLowerCase()}`}
                    className="demo-box"
                    style={{ padding: 'var(--space-sm)', textDecoration: 'none' }}
                  >
                    <span className="cyber-h6">{cat.name}</span>
                    <p
                      className="cyber-small cyber-text-muted"
                      style={{ marginTop: 'var(--space-2xs)' }}
                    >
                      {cat.classes}
                    </p>
                  </Link>
                ))}
              </div>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                Text Colors
              </h3>
              <CodeBlock
                title="Text Color Classes"
                language="html"
                code={`<span class="cyber-text-cyan">Cyan text</span>
<span class="cyber-text-magenta">Magenta text</span>
<span class="cyber-text-yellow">Yellow text</span>
<span class="cyber-text-green">Green text</span>
<span class="cyber-text-muted">Muted text</span>`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Flexbox Quick Reference
              </h3>
              <CodeBlock
                title="Flex Utility Classes"
                language="html"
                code={`<!-- Flex container with common patterns -->
<div class="cyber-flex cyber-gap-md cyber-items-center">
  <span>Item 1</span>
  <span>Item 2</span>
</div>

<!-- Flex direction -->
<div class="cyber-flex cyber-flex-col">...</div>
<div class="cyber-flex cyber-flex-row">...</div>

<!-- Justify content -->
<div class="cyber-flex cyber-justify-between">...</div>
<div class="cyber-flex cyber-justify-center">...</div>

<!-- Wrap -->
<div class="cyber-flex cyber-flex-wrap">...</div>`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Spacing Classes
              </h3>
              <CodeBlock
                title="Margin & Padding"
                language="html"
                code={`<!-- Padding (all sides) -->
<div class="cyber-p-sm">Small padding</div>
<div class="cyber-p-md">Medium padding</div>
<div class="cyber-p-lg">Large padding</div>

<!-- Margin (all sides) -->
<div class="cyber-m-md">Medium margin</div>

<!-- Directional spacing -->
<div class="cyber-mt-lg">Margin top large</div>
<div class="cyber-mb-md">Margin bottom medium</div>
<div class="cyber-px-lg">Padding horizontal large</div>
<div class="cyber-py-sm">Padding vertical small</div>`}
              />
            </section>
          )}

          {/* Icons */}
          {activeSection === 'icons' && (
            <section className="demo-section" style={{ paddingTop: 0 }}>
              <h2 className="section-title">
                <span className="cyber-text-cyan">//</span> Icon System
              </h2>

              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Cybercore CSS includes a comprehensive SVG icon system with 153 cyberpunk-themed
                icons across 10 categories. All icons use <code>currentColor</code> for seamless
                theming and are optimized for use at 16-64px sizes.
              </p>

              <div className="cyber-alert" style={{ marginBottom: 'var(--space-lg)' }}>
                <strong>Explore all icons:</strong> Visit the{' '}
                <Link to="/icons" style={{ color: 'var(--cyber-cyan-500)' }}>
                  Icons page
                </Link>{' '}
                for a complete searchable gallery with live preview and code examples.
              </div>

              <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
                HTML Only (Copy SVG)
              </h3>
              <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-secondary)' }}>
                For simple websites without bundlers, copy SVG code directly:
              </p>
              <CodeBlock
                title="Direct SVG Usage"
                language="html"
                code={`<!-- Copy any SVG from the Icons page and paste inline -->
<span class="cyber-icon cyber-icon--cyan" style="width: 24px; height: 24px;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
</span>

<!-- Or use the raw SVG files from node_modules/cybercore-css/src/icons/svg/ -->`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                React / Vue / Svelte
              </h3>
              <CodeBlock
                title="Import Icons"
                language="typescript"
                code={`// Import icon utilities
import { renderIcon, getIcon, icons } from 'cybercore-css/icons';

// Render an icon with options
const html = renderIcon('terminal', {
  size: 24,           // 16 | 20 | 24 | 32 | 48 | 64
  color: 'cyan',      // 'cyan' | 'magenta' | 'yellow' | 'green' | 'current'
  variant: 'outline', // 'outline' | 'solid' | 'duotone' | 'glitch'
});

// Get raw SVG string
const svg = getIcon('terminal');

// Check icon registry
const allIcons = Object.keys(icons); // Array of icon names`}
              />

              <CodeBlock
                title="Tree-Shakeable Imports"
                language="typescript"
                code={`// Import individual icons for smaller bundles
import { TerminalIcon, ChipIcon, SignalIcon } from 'cybercore-css/icons/individual';

// Each export contains the full IconDefinition
console.log(TerminalIcon.svg);      // Raw SVG string
console.log(TerminalIcon.category); // 'tech'
console.log(TerminalIcon.tags);     // ['cli', 'command', 'shell', 'console']

// Import by category
import { arrowUp, arrowDown } from 'cybercore-css/icons/defs/navigation';
import { terminal, chip } from 'cybercore-css/icons/defs/tech';`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Icon Categories
              </h3>
              <div
                className="demo-grid"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: 'var(--space-sm)',
                }}
              >
                {ICON_CATEGORIES.map((category) => (
                  <div
                    key={category.id}
                    className="demo-box"
                    style={{ padding: 'var(--space-md)' }}
                  >
                    <div
                      className="cyber-flex cyber-items-center cyber-gap-sm"
                      style={{ marginBottom: 'var(--space-xs)' }}
                    >
                      <span className="cyber-badge">{category.count}</span>
                      <span className="cyber-h6">{category.label}</span>
                    </div>
                    <p className="cyber-small cyber-text-muted">{category.description}</p>
                  </div>
                ))}
              </div>

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Using Icons with Components
              </h3>
              <CodeBlock
                title="Icons in Buttons"
                language="html"
                code={`<!-- Button with icon -->
<button class="cyber-btn cyber-flex cyber-items-center cyber-gap-sm">
  <span class="cyber-icon"><!-- renderIcon('download', { size: 16 }) --></span>
  Download
</button>

<!-- Icon-only button -->
<button class="cyber-btn cyber-btn--ghost" aria-label="Settings">
  <!-- renderIcon('settings', { size: 20 }) -->
</button>`}
              />

              <CodeBlock
                title="Icons in Cards"
                language="html"
                code={`<div class="cyber-card">
  <div class="cyber-card__header cyber-flex cyber-items-center cyber-gap-sm">
    <span style="color: var(--cyber-cyan-500)">
      <!-- renderIcon('terminal', { size: 20 }) -->
    </span>
    <h4 class="cyber-h5">Terminal Access</h4>
  </div>
  <div class="cyber-card__body">
    <p>Card content here.</p>
  </div>
</div>`}
              />

              <CodeBlock
                title="Icons in Inputs"
                language="html"
                code={`<!-- Input with icon prefix -->
<div class="cyber-input-group">
  <span class="cyber-input-group__addon">
    <!-- renderIcon('search', { size: 16 }) -->
  </span>
  <input type="text" class="cyber-input" placeholder="Search...">
</div>`}
              />

              <h3
                className="cyber-h4"
                style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
              >
                Design Guidelines
              </h3>
              <div className="demo-grid" style={{ gap: 'var(--space-md)' }}>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    ViewBox
                  </h5>
                  <p className="cyber-small">24x24 grid with 1.5px stroke width</p>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Stroke-based
                  </h5>
                  <p className="cyber-small">No fills by default, rounded caps/joins</p>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    currentColor
                  </h5>
                  <p className="cyber-small">Icons inherit color from parent</p>
                </div>
                <div className="demo-box">
                  <h5 className="cyber-h6" style={{ marginBottom: 'var(--space-xs)' }}>
                    Variants
                  </h5>
                  <p className="cyber-small">outline, solid, duotone, glitch</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Docs;
