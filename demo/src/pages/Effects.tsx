import CodeBlock from '../components/CodeBlock';

function Effects() {
  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">&gt; VISUAL_EFFECTS_</p>
          <h1 className="cyber-h1 cyber-text-glow">Effects</h1>
          <p className="cyber-lead">
            Cyberpunk visual effects to add atmosphere and style. Glitches, neon glows, scanlines,
            and more.
          </p>
        </div>
      </header>

      <div className="demo-container">
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
                  padding: 'var(--space-lg)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <span className="cyber-mono">NEON GLOW EFFECT</span>
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
                  padding: 'var(--space-lg)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <span className="cyber-mono">MAGENTA VARIANT</span>
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
              <span className="cyber-h2 cyber-text-glow">Cyan Glow</span>
              <span
                className="cyber-h2 cyber-text-glow--magenta"
                style={{ textShadow: 'var(--glow-text-magenta)' }}
              >
                Magenta Glow
              </span>
              <span
                className="cyber-h2 cyber-text-glow--yellow"
                style={{ textShadow: 'var(--glow-text-yellow)' }}
              >
                Yellow Glow
              </span>
              <span
                className="cyber-h2 cyber-text-glow--green"
                style={{ textShadow: 'var(--glow-text-green)' }}
              >
                Green Glow
              </span>
            </div>
            <CodeBlock
              title="Text Glow Classes"
              language="html"
              code={`<span class="cyber-text-glow">Cyan Glow</span>
<span class="cyber-text-glow--magenta">Magenta Glow</span>
<span class="cyber-text-glow--yellow">Yellow Glow</span>
<span class="cyber-text-glow--green">Green Glow</span>`}
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

          <div className="cyber-alert">
            <strong>Note:</strong> All animated effects respect the{' '}
            <code>prefers-reduced-motion</code> media query. When users have motion reduction
            enabled, animations will be disabled or significantly reduced to prevent discomfort.
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
