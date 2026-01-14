import { useState } from 'react';

import { Link } from 'react-router-dom';

import { getRegisteredIcons, renderIcon } from '../../../src/icons';
import CodeBlock from '../components/CodeBlock';

const ICON_COLORS = ['cyan', 'magenta', 'yellow', 'green'] as const;

function Effects() {
  const [activeAnimation, setActiveAnimation] = useState<string>('spin');
  const [activeColor, setActiveColor] = useState<string>('cyan');
  const iconCount = getRegisteredIcons().length;

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">
            &gt; VISUAL_EFFECTS<span className="cursor">_</span>
          </p>
          <h1 className="cyber-h1 cyber-text-glow">Effects</h1>
          <p className="cyber-lead">
            Cyberpunk visual effects to add atmosphere and style. Glitches, neon glows, scanlines,
            icon animations, and more.
          </p>
        </div>
      </header>

      <div className="demo-container">
        {/* Icon Animations Section - NEW */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Icon Animations
          </h2>

          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
            Built-in CSS animations for {iconCount} Cyber Icons. Apply these classes to any icon for
            dynamic effects.
          </p>

          {/* Interactive Animation Playground */}
          <div className="cyber-card cyber-datastream" style={{ marginBottom: 'var(--space-xl)' }}>
            <div className="cyber-grid cyber-grid--2" style={{ gap: 'var(--space-xl)' }}>
              {/* Preview Area */}
              <div style={{ textAlign: 'center' }}>
                <p className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
                  Live Preview
                </p>
                <div
                  style={{
                    background: 'var(--cyber-void-950)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-2xl)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <span
                    className={`cyber-icon--${activeAnimation}`}
                    style={{
                      color: `var(--cyber-${activeColor}-500)`,
                      filter: `drop-shadow(0 0 15px var(--cyber-${activeColor}-500))`,
                      display: 'inline-block',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('chip', { size: 64 }) }}
                  />
                </div>
                <code
                  className="cyber-mono"
                  style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}
                >
                  .cyber-icon--{activeAnimation}
                </code>
              </div>

              {/* Controls */}
              <div>
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <p className="cyber-label" style={{ marginBottom: 'var(--space-sm)' }}>
                    Animation Type
                  </p>
                  <div className="cyber-flex cyber-gap-sm cyber-flex--wrap">
                    {['spin', 'pulse', 'glitch'].map((anim) => (
                      <button
                        key={anim}
                        className={`cyber-btn cyber-btn--sm ${activeAnimation === anim ? '' : 'cyber-btn--ghost'}`}
                        onClick={() => setActiveAnimation(anim)}
                      >
                        {anim}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="cyber-label" style={{ marginBottom: 'var(--space-sm)' }}>
                    Icon Color
                  </p>
                  <div className="cyber-flex cyber-gap-sm cyber-flex--wrap">
                    {ICON_COLORS.map((color) => (
                      <button
                        key={color}
                        className={`cyber-btn cyber-btn--sm cyber-btn--${color} ${activeColor === color ? '' : 'cyber-btn--ghost'}`}
                        onClick={() => setActiveColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <Link
                    to="/icons"
                    className="cyber-btn cyber-flex cyber-items-center cyber-gap-sm"
                    style={{ width: '100%' }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: renderIcon('chip', { size: 20 }) }} />
                    Browse All {iconCount} Icons
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Animation Grid */}
          <div className="cyber-grid cyber-grid--3" style={{ marginBottom: 'var(--space-xl)' }}>
            {/* Spin Animation */}
            <div className="demo-code-preview">
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', gap: 'var(--space-md)' }}
              >
                <div className="cyber-flex cyber-gap-lg cyber-items-center">
                  <span
                    className="cyber-icon--spin"
                    style={{
                      color: 'var(--cyber-cyan-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-cyan-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('loading', { size: 32 }) }}
                  />
                  <span
                    className="cyber-icon--spin"
                    style={{
                      color: 'var(--cyber-magenta-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-magenta-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('settings', { size: 32 }) }}
                  />
                  <span
                    className="cyber-icon--spin"
                    style={{
                      color: 'var(--cyber-green-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-green-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('progress', { size: 32 }) }}
                  />
                </div>
                <p
                  className="cyber-mono"
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}
                >
                  Continuous rotation
                </p>
              </div>
              <CodeBlock
                title="Spin Animation"
                language="html"
                code={`<span class="cyber-icon--spin">
  <!-- icon SVG -->
</span>

/* CSS animation: 1s linear infinite */`}
              />
            </div>

            {/* Pulse Animation */}
            <div className="demo-code-preview">
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', gap: 'var(--space-md)' }}
              >
                <div className="cyber-flex cyber-gap-lg cyber-items-center">
                  <span
                    className="cyber-icon--pulse"
                    style={{
                      color: 'var(--cyber-cyan-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-cyan-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('signal', { size: 32 }) }}
                  />
                  <span
                    className="cyber-icon--pulse"
                    style={{
                      color: 'var(--cyber-magenta-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-magenta-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('wifi', { size: 32 }) }}
                  />
                  <span
                    className="cyber-icon--pulse"
                    style={{
                      color: 'var(--cyber-yellow-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-yellow-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('online', { size: 32 }) }}
                  />
                </div>
                <p
                  className="cyber-mono"
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}
                >
                  Scale + opacity pulse
                </p>
              </div>
              <CodeBlock
                title="Pulse Animation"
                language="html"
                code={`<span class="cyber-icon--pulse">
  <!-- icon SVG -->
</span>

/* CSS animation: 2s ease-in-out infinite */`}
              />
            </div>

            {/* Glitch Animation */}
            <div className="demo-code-preview">
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', gap: 'var(--space-md)' }}
              >
                <div className="cyber-flex cyber-gap-lg cyber-items-center">
                  <span
                    className="cyber-icon--glitch"
                    style={{
                      color: 'var(--cyber-yellow-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-yellow-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('warning', { size: 32 }) }}
                  />
                  <span
                    className="cyber-icon--glitch"
                    style={{
                      color: 'var(--cyber-magenta-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-magenta-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('error', { size: 32 }) }}
                  />
                  <span
                    className="cyber-icon--glitch"
                    style={{
                      color: 'var(--cyber-cyan-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-cyan-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 32 }) }}
                  />
                </div>
                <p
                  className="cyber-mono"
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}
                >
                  Digital distortion
                </p>
              </div>
              <CodeBlock
                title="Glitch Animation"
                language="html"
                code={`<span class="cyber-icon--glitch">
  <!-- icon SVG -->
</span>

/* Cyan/magenta chromatic aberration */`}
              />
            </div>
          </div>

          {/* Icon Color Variations */}
          <div className="demo-box" style={{ marginTop: 'var(--space-lg)' }}>
            <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
              Icon Color Classes
            </h4>
            <div className="cyber-flex cyber-gap-xl cyber-items-center cyber-mb-md">
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--cyan"
                  style={{ filter: 'drop-shadow(0 0 6px var(--cyber-cyan-500))' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 32 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>.cyber-icon--cyan</code>
              </div>
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--magenta"
                  style={{ filter: 'drop-shadow(0 0 6px var(--cyber-magenta-500))' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 32 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>.cyber-icon--magenta</code>
              </div>
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--yellow"
                  style={{ filter: 'drop-shadow(0 0 6px var(--cyber-yellow-500))' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 32 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>.cyber-icon--yellow</code>
              </div>
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--green"
                  style={{ filter: 'drop-shadow(0 0 6px var(--cyber-green-500))' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 32 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>.cyber-icon--green</code>
              </div>
            </div>
            <CodeBlock
              title="Icon Color Classes"
              language="css"
              code={`.cyber-icon--cyan { color: var(--cyber-cyan-500); }
.cyber-icon--magenta { color: var(--cyber-magenta-500); }
.cyber-icon--yellow { color: var(--cyber-yellow-500); }
.cyber-icon--green { color: var(--cyber-green-500); }

/* Add glow with filter */
.my-icon {
  color: var(--cyber-cyan-500);
  filter: drop-shadow(0 0 8px var(--cyber-cyan-500));
}`}
            />
          </div>

          {/* Icon Size Classes */}
          <div className="demo-box" style={{ marginTop: 'var(--space-lg)' }}>
            <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
              Icon Size Classes
            </h4>
            <div className="cyber-flex cyber-gap-xl cyber-items-end cyber-mb-md">
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--sm"
                  style={{ color: 'var(--cyber-cyan-500)' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 16 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>--sm (16px)</code>
              </div>
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--md"
                  style={{ color: 'var(--cyber-cyan-500)' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 24 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>--md (24px)</code>
              </div>
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--lg"
                  style={{ color: 'var(--cyber-cyan-500)' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 32 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>--lg (32px)</code>
              </div>
              <div className="cyber-flex cyber-flex--col cyber-items-center cyber-gap-xs">
                <span
                  className="cyber-icon--xl"
                  style={{ color: 'var(--cyber-cyan-500)' }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 48 }) }}
                />
                <code style={{ fontSize: 'var(--text-xs)' }}>--xl (48px)</code>
              </div>
            </div>
            <CodeBlock
              title="Icon Size Classes"
              language="css"
              code={`.cyber-icon--sm { width: 1rem; height: 1rem; }     /* 16px */
.cyber-icon--md { width: 1.5rem; height: 1.5rem; } /* 24px */
.cyber-icon--lg { width: 2rem; height: 2rem; }     /* 32px */
.cyber-icon--xl { width: 3rem; height: 3rem; }     /* 48px */`}
            />
          </div>
        </section>

        {/* Glitch Effect */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Glitch Effect
          </h2>

          <div className="demo-code-preview">
            <div className="demo-preview" style={{ padding: 'var(--space-2xl)' }}>
              <h2
                className="cyber-h1 cyber-glitch"
                data-text="GLITCH TEXT"
                style={{ color: 'var(--color-text-primary)' }}
              >
                GLITCH TEXT
              </h2>
            </div>
            <CodeBlock
              title="Glitch Text"
              language="html"
              code={`<h2 class="cyber-glitch" data-text="GLITCH TEXT">
  GLITCH TEXT
</h2>

<!-- The data-text attribute is required for the effect -->`}
            />
          </div>

          <div className="demo-box" style={{ marginTop: 'var(--space-lg)' }}>
            <h4 className="cyber-label" style={{ marginBottom: 'var(--space-sm)' }}>
              How it works
            </h4>
            <p>
              The glitch effect uses CSS pseudo-elements (::before and ::after) with clip-path and
              animations to create a digital distortion effect. The <code>data-text</code> attribute
              is required to duplicate the text content for the pseudo-elements.
            </p>
          </div>
        </section>

        {/* Neon Border Effect */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Neon Border
          </h2>

          <div className="demo-code-preview">
            <div className="demo-preview">
              <div
                className="cyber-neon-border"
                style={{
                  padding: 'var(--space-xl)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div className="cyber-flex cyber-items-center cyber-gap-sm">
                  <span
                    style={{ color: 'var(--cyber-cyan-500)' }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('circuit', { size: 24 }) }}
                  />
                  <span className="cyber-mono">NEON GLOW EFFECT</span>
                </div>
              </div>
            </div>
            <CodeBlock
              title="Cyan Neon Border"
              language="html"
              code={`<div class="cyber-neon-border">
  <span class="cyber-mono">NEON GLOW EFFECT</span>
</div>`}
            />
          </div>

          <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="demo-preview">
              <div
                className="cyber-neon-border cyber-neon-border--magenta"
                style={{
                  padding: 'var(--space-xl)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div className="cyber-flex cyber-items-center cyber-gap-sm">
                  <span
                    style={{ color: 'var(--cyber-magenta-500)' }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 24 }) }}
                  />
                  <span className="cyber-mono">MAGENTA VARIANT</span>
                </div>
              </div>
            </div>
            <CodeBlock
              title="Magenta Neon Border"
              language="html"
              code={`<div class="cyber-neon-border cyber-neon-border--magenta">
  <span class="cyber-mono">MAGENTA VARIANT</span>
</div>`}
            />
          </div>
        </section>

        {/* Scanlines Effect */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Scanlines
          </h2>

          <div className="demo-code-preview">
            <div className="demo-preview cyber-scanlines" style={{ minHeight: '250px' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="cyber-flex cyber-justify-center cyber-gap-md cyber-mb-md">
                  <span
                    style={{
                      color: 'var(--cyber-cyan-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-cyan-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 48 }) }}
                  />
                </div>
                <h3 className="cyber-h3">CRT DISPLAY</h3>
                <p className="cyber-mono" style={{ marginTop: 'var(--space-sm)' }}>
                  Retro monitor scanline overlay effect
                </p>
              </div>
            </div>
            <CodeBlock
              title="Scanlines Overlay"
              language="html"
              code={`<div class="cyber-scanlines">
  <h3 class="cyber-h3">CRT DISPLAY</h3>
  <p>Retro monitor scanline overlay effect</p>
</div>

<!-- Add the class to any container for the effect -->`}
            />
          </div>
        </section>

        {/* Noise Effect */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Noise Overlay
          </h2>

          <div className="demo-code-preview">
            <div className="demo-preview cyber-noise" style={{ minHeight: '250px' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="cyber-flex cyber-justify-center cyber-gap-md cyber-mb-md">
                  <span
                    className="cyber-icon--glitch"
                    style={{
                      color: 'var(--cyber-magenta-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-magenta-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('signal', { size: 48 }) }}
                  />
                </div>
                <h3 className="cyber-h3">NOISE TEXTURE</h3>
                <p className="cyber-mono" style={{ marginTop: 'var(--space-sm)' }}>
                  Subtle static noise overlay for added texture
                </p>
              </div>
            </div>
            <CodeBlock
              title="Noise Overlay"
              language="html"
              code={`<div class="cyber-noise">
  <h3 class="cyber-h3">NOISE TEXTURE</h3>
  <p>Subtle static noise overlay</p>
</div>

<!-- Adjust opacity with --noise-opacity variable -->`}
            />
          </div>
        </section>

        {/* Datastream Effect */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Datastream
          </h2>

          <div className="demo-code-preview">
            <div
              className="demo-preview cyber-datastream"
              style={{
                minHeight: '250px',
                background: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div className="cyber-flex cyber-justify-center cyber-gap-md cyber-mb-md">
                  <span
                    className="cyber-icon--pulse"
                    style={{
                      color: 'var(--cyber-green-500)',
                      filter: 'drop-shadow(0 0 8px var(--cyber-green-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('download', { size: 48 }) }}
                  />
                </div>
                <h3 className="cyber-h3">DATA TRANSFER</h3>
                <p className="cyber-mono" style={{ marginTop: 'var(--space-sm)' }}>
                  Animated light sweep effect
                </p>
              </div>
            </div>
            <CodeBlock
              title="Datastream Animation"
              language="html"
              code={`<div class="cyber-datastream">
  <h3>DATA TRANSFER</h3>
  <p>Animated light sweep effect</p>
</div>`}
            />
          </div>
        </section>

        {/* Text Glow */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Text Glow
          </h2>

          <div className="demo-code-preview">
            <div
              className="demo-preview"
              style={{ flexDirection: 'column', gap: 'var(--space-lg)' }}
            >
              <div className="cyber-flex cyber-items-center cyber-gap-md">
                <span
                  style={{
                    color: 'var(--cyber-cyan-500)',
                    filter: 'drop-shadow(0 0 6px var(--cyber-cyan-500))',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('chip', { size: 32 }) }}
                />
                <span className="cyber-h2 cyber-text-glow">Cyan Glow</span>
              </div>
              <div className="cyber-flex cyber-items-center cyber-gap-md">
                <span
                  style={{
                    color: 'var(--cyber-magenta-500)',
                    filter: 'drop-shadow(0 0 6px var(--cyber-magenta-500))',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 32 }) }}
                />
                <span className="cyber-h2 cyber-text-glow cyber-text-glow--magenta">
                  Magenta Glow
                </span>
              </div>
              <div className="cyber-flex cyber-items-center cyber-gap-md">
                <span
                  style={{
                    color: 'var(--cyber-yellow-500)',
                    filter: 'drop-shadow(0 0 6px var(--cyber-yellow-500))',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('warning', { size: 32 }) }}
                />
                <span className="cyber-h2 cyber-text-glow cyber-text-glow--yellow">
                  Yellow Glow
                </span>
              </div>
              <div className="cyber-flex cyber-items-center cyber-gap-md">
                <span
                  style={{
                    color: 'var(--cyber-green-500)',
                    filter: 'drop-shadow(0 0 6px var(--cyber-green-500))',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderIcon('success', { size: 32 }) }}
                />
                <span className="cyber-h2 cyber-text-glow cyber-text-glow--green">Green Glow</span>
              </div>
            </div>
            <CodeBlock
              title="Text Glow Classes"
              language="html"
              code={`<!-- Base cyan glow -->
<span class="cyber-text-glow">Cyan Glow</span>

<!-- Color variants (use base + modifier) -->
<span class="cyber-text-glow cyber-text-glow--magenta">Magenta Glow</span>
<span class="cyber-text-glow cyber-text-glow--yellow">Yellow Glow</span>
<span class="cyber-text-glow cyber-text-glow--green">Green Glow</span>

<!-- Or use flat naming -->
<span class="cyber-text-glow-magenta">Magenta Glow</span>`}
            />
          </div>
        </section>

        {/* Combining Effects */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Combining Effects
          </h2>

          <div className="demo-code-preview">
            <div
              className="demo-preview cyber-noise cyber-scanlines"
              style={{ minHeight: '300px' }}
            >
              <div style={{ textAlign: 'center' }}>
                <div className="cyber-flex cyber-justify-center cyber-gap-lg cyber-mb-md">
                  <span
                    className="cyber-icon--glitch"
                    style={{
                      color: 'var(--cyber-cyan-500)',
                      filter: 'drop-shadow(0 0 10px var(--cyber-cyan-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('terminal', { size: 48 }) }}
                  />
                  <span
                    className="cyber-icon--pulse"
                    style={{
                      color: 'var(--cyber-magenta-500)',
                      filter: 'drop-shadow(0 0 10px var(--cyber-magenta-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('shield', { size: 48 }) }}
                  />
                  <span
                    className="cyber-icon--spin"
                    style={{
                      color: 'var(--cyber-green-500)',
                      filter: 'drop-shadow(0 0 10px var(--cyber-green-500))',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderIcon('loading', { size: 48 }) }}
                  />
                </div>
                <h2
                  className="cyber-h1 cyber-glitch cyber-text-glow"
                  data-text="SYSTEM ONLINE"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  SYSTEM ONLINE
                </h2>
                <p className="cyber-mono" style={{ marginTop: 'var(--space-md)' }}>
                  Multiple effects layered together
                </p>
              </div>
            </div>
            <CodeBlock
              title="Combined Effects"
              language="html"
              code={`<div class="cyber-noise cyber-scanlines">
  <span class="cyber-icon--glitch"><!-- icon --></span>
  <span class="cyber-icon--pulse"><!-- icon --></span>
  <span class="cyber-icon--spin"><!-- icon --></span>

  <h2 class="cyber-glitch cyber-text-glow" data-text="SYSTEM ONLINE">
    SYSTEM ONLINE
  </h2>
</div>

<!-- Effects can be stacked for more intense visuals -->`}
            />
          </div>
        </section>

        {/* CSS Variables */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Glow Variables
          </h2>

          <div className="demo-box">
            <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
              Available CSS Variables for Glows
            </h4>
            <CodeBlock
              title="Glow CSS Variables"
              language="css"
              code={`/* Box shadow glows */
--glow-cyan: 0 0 5px var(--cyber-cyan-500), ...;
--glow-magenta: 0 0 5px var(--cyber-magenta-500), ...;
--glow-yellow: 0 0 5px var(--cyber-yellow-500), ...;
--glow-green: 0 0 5px var(--cyber-green-500), ...;

/* Text shadow glows */
--glow-text-cyan: 0 0 10px var(--cyber-cyan-500), ...;
--glow-text-magenta: 0 0 10px var(--cyber-magenta-500), ...;
--glow-text-yellow: 0 0 10px var(--cyber-yellow-500), ...;
--glow-text-green: 0 0 10px var(--cyber-green-500), ...;

/* Effect opacities */
--noise-opacity: 0.03;
--scanline-opacity: 0.04;`}
            />
          </div>

          <div className="demo-box" style={{ marginTop: 'var(--space-lg)' }}>
            <h4 className="cyber-label" style={{ marginBottom: 'var(--space-md)' }}>
              Customizing Effects
            </h4>
            <CodeBlock
              title="Custom Effect Example"
              language="css"
              code={`/* Increase noise intensity */
.my-noisy-section {
  --noise-opacity: 0.08;
}

/* Custom icon glow */
.my-icon {
  color: var(--cyber-cyan-500);
  filter: drop-shadow(0 0 8px var(--cyber-cyan-500));
  animation: cyber-icon-pulse 2s ease-in-out infinite;
}

/* Custom glow color */
.custom-glow {
  box-shadow: 0 0 5px #00ff00,
              0 0 20px rgba(0, 255, 0, 0.5),
              0 0 40px rgba(0, 255, 0, 0.3);
}`}
            />
          </div>
        </section>

        {/* Accessibility Note */}
        <section className="demo-section">
          <h2 className="section-title">
            <span className="cyber-text-cyan">//</span> Accessibility
          </h2>

          <div className="cyber-alert cyber-flex cyber-items-start cyber-gap-sm">
            <span dangerouslySetInnerHTML={{ __html: renderIcon('info', { size: 20 }) }} />
            <div>
              <strong>Note:</strong> All animated effects respect the{' '}
              <code>prefers-reduced-motion</code> media query. When users have motion reduction
              enabled, animations will be disabled or significantly reduced to prevent discomfort.
            </div>
          </div>

          <div className="demo-box" style={{ marginTop: 'var(--space-lg)' }}>
            <CodeBlock
              title="Reduced Motion Support"
              language="css"
              code={`@media (prefers-reduced-motion: reduce) {
  .cyber-glitch::before,
  .cyber-glitch::after {
    animation: none;
  }

  .cyber-icon--spin,
  .cyber-icon--pulse,
  .cyber-icon--glitch {
    animation: none;
  }

  .cyber-datastream::before {
    animation: none;
  }

  .cyber-terminal__cursor {
    animation: none;
  }
}`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Effects;
