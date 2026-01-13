import { useState } from 'react';

import CodeBlock from '../components/CodeBlock';

function Docs() {
  const [activeSection, setActiveSection] = useState('installation');

  const sections = [
    { id: 'installation', label: 'Installation' },
    { id: 'usage', label: 'Usage' },
    { id: 'customization', label: 'Customization' },
    { id: 'colors', label: 'Color System' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'utilities', label: 'Utilities' },
  ];

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">&gt; DOCUMENTATION_</p>
          <h1 className="cyber-h1 cyber-text-glow">Docs</h1>
          <p className="cyber-lead">
            Everything you need to know to get started with Cybercore CSS.
          </p>
        </div>
      </header>

      <div className="demo-container">
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-xl)' }}>
          {/* Sidebar Navigation */}
          <nav style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sections.map((section) => (
                <li key={section.id} style={{ marginBottom: 'var(--space-xs)' }}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: 'var(--space-xs) var(--space-sm)',
                      textAlign: 'left',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 'var(--tracking-wide)',
                      color: activeSection === section.id ? 'var(--cyber-cyan-500)' : 'var(--color-text-secondary)',
                      background: activeSection === section.id ? 'color-mix(in srgb, var(--cyber-cyan-500) 10%, transparent)' : 'transparent',
                      border: 'none',
                      borderLeft: activeSection === section.id ? '2px solid var(--cyber-cyan-500)' : '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div>
            {/* Installation */}
            {activeSection === 'installation' && (
              <section className="demo-section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                  <span className="cyber-text-cyan">//</span> Installation
                </h2>

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>NPM</h3>
                <CodeBlock
                  title="Install via NPM"
                  language="bash"
                  code={`npm install cybercore-css`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Yarn</h3>
                <CodeBlock
                  title="Install via Yarn"
                  language="bash"
                  code={`yarn add cybercore-css`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>CDN</h3>
                <CodeBlock
                  title="Use via CDN"
                  language="html"
                  code={`<link rel="stylesheet" href="https://unpkg.com/cybercore-css@latest/dist/cybercore.min.css">`}
                />

                <div className="cyber-alert" style={{ marginTop: 'var(--space-lg)' }}>
                  <strong>Note:</strong> Don't forget to include the required Google Fonts in your HTML head
                  for the best typography experience.
                </div>

                <CodeBlock
                  title="Required Fonts"
                  language="html"
                  code={`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">`}
                />
              </section>
            )}

            {/* Usage */}
            {activeSection === 'usage' && (
              <section className="demo-section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                  <span className="cyber-text-cyan">//</span> Usage
                </h2>

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Import Everything</h3>
                <CodeBlock
                  title="Full Import (SCSS)"
                  language="scss"
                  code={`// Import the complete framework
@use 'cybercore-css';`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Modular Import</h3>
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

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Basic HTML Usage</h3>
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

            {/* Customization */}
            {activeSection === 'customization' && (
              <section className="demo-section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                  <span className="cyber-text-cyan">//</span> Customization
                </h2>

                <p style={{ marginBottom: 'var(--space-lg)' }}>
                  Cybercore CSS is built with CSS custom properties (variables), making it easy to
                  customize colors, spacing, and other design tokens without modifying the source files.
                </p>

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Override CSS Variables</h3>
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

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Scoped Customization</h3>
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
                  The color system is built around four primary accent colors, plus neutral tones
                  for backgrounds and text. Each color has a full scale from 100 (lightest) to 900 (darkest).
                </p>

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Primary Colors</h3>
                <div className="demo-grid" style={{ marginBottom: 'var(--space-xl)' }}>
                  <div className="demo-box">
                    <div style={{ height: '60px', background: 'var(--cyber-cyan-500)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-xs)' }} />
                    <code>--cyber-cyan-500</code>
                    <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>Primary actions, links, tech/neutral</p>
                  </div>
                  <div className="demo-box">
                    <div style={{ height: '60px', background: 'var(--cyber-magenta-500)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-xs)' }} />
                    <code>--cyber-magenta-500</code>
                    <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>Danger, errors, alerts</p>
                  </div>
                  <div className="demo-box">
                    <div style={{ height: '60px', background: 'var(--cyber-yellow-500)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-xs)' }} />
                    <code>--cyber-yellow-500</code>
                    <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>Warnings, highlights</p>
                  </div>
                  <div className="demo-box">
                    <div style={{ height: '60px', background: 'var(--cyber-green-500)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-xs)' }} />
                    <code>--cyber-green-500</code>
                    <p className="cyber-small" style={{ marginTop: 'var(--space-xs)' }}>Success, confirmation</p>
                  </div>
                </div>

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Semantic Tokens</h3>
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

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Font Families</h3>
                <CodeBlock
                  title="Font Stack Variables"
                  language="css"
                  code={`--font-display: 'Rajdhani', 'Orbitron', 'Share Tech Mono', system-ui, sans-serif;
--font-body: 'Exo 2', 'Roboto', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Type Scale</h3>
                <div className="demo-box" style={{ marginBottom: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    <div><span className="cyber-display">Display</span> <code className="cyber-small">cyber-display</code></div>
                    <div><span className="cyber-h1">Heading 1</span> <code className="cyber-small">cyber-h1</code></div>
                    <div><span className="cyber-h2">Heading 2</span> <code className="cyber-small">cyber-h2</code></div>
                    <div><span className="cyber-h3">Heading 3</span> <code className="cyber-small">cyber-h3</code></div>
                    <div><span className="cyber-h4">Heading 4</span> <code className="cyber-small">cyber-h4</code></div>
                    <div><span className="cyber-h5">Heading 5</span> <code className="cyber-small">cyber-h5</code></div>
                    <div><span className="cyber-h6">Heading 6</span> <code className="cyber-small">cyber-h6</code></div>
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
                  The spacing scale uses fluid values that adapt to viewport size, ensuring
                  consistent proportions across all screen sizes.
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

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Visual Reference</h3>
                <div className="demo-box">
                  {['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
                    <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xs)' }}>
                      <code style={{ width: '80px' }}>--space-{size}</code>
                      <div style={{
                        height: `var(--space-${size})`,
                        width: `var(--space-${size})`,
                        minWidth: '8px',
                        background: 'var(--cyber-cyan-500)',
                        borderRadius: 'var(--radius-sm)'
                      }} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Utilities */}
            {activeSection === 'utilities' && (
              <section className="demo-section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                  <span className="cyber-text-cyan">//</span> Utility Classes
                </h2>

                <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Text Colors</h3>
                <CodeBlock
                  title="Text Color Classes"
                  language="html"
                  code={`<span class="cyber-text-cyan">Cyan text</span>
<span class="cyber-text-magenta">Magenta text</span>
<span class="cyber-text-yellow">Yellow text</span>
<span class="cyber-text-green">Green text</span>
<span class="cyber-text-muted">Muted text</span>`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Text Glow</h3>
                <CodeBlock
                  title="Text Glow Classes"
                  language="html"
                  code={`<span class="cyber-text-glow">Cyan glow</span>
<span class="cyber-text-glow--magenta">Magenta glow</span>
<span class="cyber-text-glow--yellow">Yellow glow</span>
<span class="cyber-text-glow--green">Green glow</span>`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Typography Utilities</h3>
                <CodeBlock
                  title="Typography Classes"
                  language="html"
                  code={`<p class="cyber-lead">Large intro text</p>
<span class="cyber-label">Small label text</span>
<code class="cyber-mono">Monospace text</code>
<small class="cyber-small">Small secondary text</small>`}
                />

                <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Border Radius</h3>
                <CodeBlock
                  title="Border Radius Variables"
                  language="css"
                  code={`--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-cyber: 0 12px 0 12px;      /* Signature cyber corners */
--radius-cyber-alt: 12px 0 12px 0;  /* Alternate cyber corners */`}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
