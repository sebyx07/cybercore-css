import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="demo-hero cyber-noise">
        <p className="demo-subtitle">&gt; INITIALIZING DESIGN SYSTEM_</p>
        <h1 className="cyber-display cyber-text-glow" data-text="CYBERCORE CSS">
          CYBERCORE CSS
        </h1>
        <p className="cyber-lead" style={{ maxWidth: '600px', marginTop: 'var(--space-md)' }}>
          A pure CSS cyberpunk design system. No JavaScript required. Neon-drenched components,
          glitch effects, and futuristic aesthetics for the digital frontier.
        </p>
        <div className="demo-showcase" style={{ marginTop: 'var(--space-lg)' }}>
          <Link to="/components" className="cyber-btn cyber-btn--lg">
            View Components
          </Link>
          <Link to="/docs" className="cyber-btn cyber-btn--outline cyber-btn--lg">
            Documentation
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="demo-section">
        <div className="demo-container">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Features
          </h2>

          <div className="demo-feature-grid">
            <div className="demo-feature-card">
              <h3>Pure CSS</h3>
              <p>
                Zero JavaScript dependencies. Everything works with plain HTML and CSS. Maximum
                performance, minimum complexity.
              </p>
            </div>

            <div className="demo-feature-card">
              <h3>CSS Custom Properties</h3>
              <p>
                Fully customizable through CSS variables. Change colors, spacing, and effects
                without touching the source code.
              </p>
            </div>

            <div className="demo-feature-card">
              <h3>Modular Architecture</h3>
              <p>
                Import only what you need. Components, effects, and utilities are all independently
                importable SCSS modules.
              </p>
            </div>

            <div className="demo-feature-card">
              <h3>Cyberpunk Aesthetics</h3>
              <p>
                Neon glows, glitch effects, scanlines, and more. Authentic cyberpunk visual design
                out of the box.
              </p>
            </div>

            <div className="demo-feature-card">
              <h3>Responsive & Fluid</h3>
              <p>
                Fluid typography and spacing that adapts to any screen size. Mobile-first design
                principles throughout.
              </p>
            </div>

            <div className="demo-feature-card">
              <h3>Accessibility</h3>
              <p>
                Respects prefers-reduced-motion, includes focus states, and maintains readable
                contrast ratios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="demo-section">
        <div className="demo-container">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Quick Start
          </h2>

          <div className="demo-grid">
            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-sm)' }}>
                Install via NPM
              </h4>
              <pre style={{ margin: 0 }}>
                <code>npm install cybercore-css</code>
              </pre>
            </div>

            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-sm)' }}>
                Import in SCSS
              </h4>
              <pre style={{ margin: 0 }}>
                <code>@use 'cybercore-css';</code>
              </pre>
            </div>

            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-sm)' }}>
                Or use the CDN
              </h4>
              <pre style={{ margin: 0, fontSize: 'var(--text-xs)' }}>
                <code>&lt;link rel="stylesheet" href="..."&gt;</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Component Preview Section */}
      <section className="demo-section">
        <div className="demo-container">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Component Preview
          </h2>

          <div className="demo-grid">
            {/* Buttons Preview */}
            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Buttons
              </h4>
              <div className="demo-showcase">
                <button className="cyber-btn">Primary</button>
                <button className="cyber-btn cyber-btn--magenta">Danger</button>
                <button className="cyber-btn cyber-btn--outline">Outline</button>
              </div>
            </div>

            {/* Inputs Preview */}
            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Inputs
              </h4>
              <input type="text" className="cyber-input" placeholder="Enter access code..." />
            </div>

            {/* Badges Preview */}
            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Badges
              </h4>
              <div className="demo-showcase">
                <span className="cyber-badge">System</span>
                <span className="cyber-badge cyber-badge--green">Online</span>
                <span className="cyber-badge cyber-badge--magenta">Alert</span>
                <span className="cyber-badge cyber-badge--yellow">Warning</span>
              </div>
            </div>

            {/* Progress Preview */}
            <div className="demo-box">
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Progress
              </h4>
              <div className="cyber-progress">
                <div className="cyber-progress__bar" style={{ width: '75%' }} />
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/components" className="cyber-btn cyber-btn--lg">
              Explore All Components
            </Link>
          </div>
        </div>
      </section>

      {/* Effects Preview Section */}
      <section className="demo-section">
        <div className="demo-container">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Effects Preview
          </h2>

          <div className="demo-grid">
            {/* Glitch Effect */}
            <div className="demo-box" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Glitch Text
              </h4>
              <span
                className="cyber-h2 cyber-glitch"
                data-text="GLITCH"
                style={{ color: 'var(--color-text-primary)' }}
              >
                GLITCH
              </span>
            </div>

            {/* Neon Border */}
            <div className="demo-box" style={{ textAlign: 'center' }}>
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Neon Borders
              </h4>
              <div
                className="cyber-neon-border"
                style={{ padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}
              >
                <span className="cyber-mono">NEON GLOW</span>
              </div>
            </div>

            {/* Scanlines */}
            <div className="demo-box cyber-scanlines" style={{ textAlign: 'center' }}>
              <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                Scanlines
              </h4>
              <p className="cyber-mono">CRT monitor effect overlay</p>
            </div>

            {/* Terminal */}
            <div className="demo-box" style={{ padding: 0 }}>
              <div className="cyber-terminal">
                <div className="cyber-terminal__header">
                  <span className="cyber-terminal__dot cyber-terminal__dot--red" />
                  <span className="cyber-terminal__dot cyber-terminal__dot--yellow" />
                  <span className="cyber-terminal__dot cyber-terminal__dot--green" />
                </div>
                <div className="cyber-terminal__body">
                  <span className="cyber-terminal__prompt">$</span> system.init()
                  <br />
                  <span style={{ color: 'var(--cyber-cyan-500)' }}>&gt; Loading cybercore...</span>
                  <br />
                  <span style={{ color: 'var(--cyber-green-500)' }}>&gt; Ready.</span>
                  <span className="cyber-terminal__cursor" />
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/effects" className="cyber-btn cyber-btn--lg cyber-btn--magenta">
              Explore All Effects
            </Link>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="demo-section">
        <div className="demo-container">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Color Palette
          </h2>

          <div className="demo-grid">
            <div className="demo-box">
              <h4
                className="cyber-label cyber-text-cyan"
                style={{ marginBottom: 'var(--space-sm)' }}
              >
                Cyber Cyan
              </h4>
              <div
                style={{
                  height: '60px',
                  background: 'var(--cyber-cyan-500)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: 'var(--space-xs)',
                }}
              />
              <code className="cyber-mono">#00f0ff</code>
            </div>

            <div className="demo-box">
              <h4
                className="cyber-label cyber-text-magenta"
                style={{ marginBottom: 'var(--space-sm)' }}
              >
                Cyber Magenta
              </h4>
              <div
                style={{
                  height: '60px',
                  background: 'var(--cyber-magenta-500)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: 'var(--space-xs)',
                }}
              />
              <code className="cyber-mono">#ff2a6d</code>
            </div>

            <div className="demo-box">
              <h4
                className="cyber-label cyber-text-yellow"
                style={{ marginBottom: 'var(--space-sm)' }}
              >
                Cyber Yellow
              </h4>
              <div
                style={{
                  height: '60px',
                  background: 'var(--cyber-yellow-500)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: 'var(--space-xs)',
                }}
              />
              <code className="cyber-mono">#fcee0a</code>
            </div>

            <div className="demo-box">
              <h4
                className="cyber-label cyber-text-green"
                style={{ marginBottom: 'var(--space-sm)' }}
              >
                Cyber Green
              </h4>
              <div
                style={{
                  height: '60px',
                  background: 'var(--cyber-green-500)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: 'var(--space-xs)',
                }}
              />
              <code className="cyber-mono">#05ffa1</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
