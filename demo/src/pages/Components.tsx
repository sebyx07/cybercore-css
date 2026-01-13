import { useState } from 'react';

import CodeBlock from '../components/CodeBlock';

function Components() {
  const [activeTab, setActiveTab] = useState('buttons');

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">&gt; COMPONENT_LIBRARY_</p>
          <h1 className="cyber-h1 cyber-text-glow">Components</h1>
          <p className="cyber-lead">
            Ready-to-use UI components with cyberpunk aesthetics.
            Just add the class names to your HTML elements.
          </p>
        </div>
      </header>

      <div className="demo-container">
        {/* Tabs Navigation */}
        <nav className="cyber-tabs" style={{ marginBottom: 'var(--space-xl)' }}>
          <ul className="cyber-tabs__list">
            {['buttons', 'inputs', 'cards', 'badges', 'alerts', 'progress', 'tables', 'terminal', 'misc'].map((tab) => (
              <li key={tab}>
                <button
                  className={`cyber-tabs__tab ${activeTab === tab ? 'cyber-tabs__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons Section */}
        {activeTab === 'buttons' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Buttons
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="demo-showcase">
                  <button className="cyber-btn">Primary</button>
                  <button className="cyber-btn cyber-btn--magenta">Danger</button>
                  <button className="cyber-btn cyber-btn--green">Success</button>
                  <button className="cyber-btn cyber-btn--yellow">Warning</button>
                </div>
              </div>
              <CodeBlock
                title="Color Variants"
                language="html"
                code={`<button class="cyber-btn">Primary</button>
<button class="cyber-btn cyber-btn--magenta">Danger</button>
<button class="cyber-btn cyber-btn--green">Success</button>
<button class="cyber-btn cyber-btn--yellow">Warning</button>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview">
                <div className="demo-showcase">
                  <button className="cyber-btn cyber-btn--outline">Outline</button>
                  <button className="cyber-btn cyber-btn--ghost">Ghost</button>
                </div>
              </div>
              <CodeBlock
                title="Style Variants"
                language="html"
                code={`<button class="cyber-btn cyber-btn--outline">Outline</button>
<button class="cyber-btn cyber-btn--ghost">Ghost</button>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview">
                <div className="demo-showcase">
                  <button className="cyber-btn cyber-btn--sm">Small</button>
                  <button className="cyber-btn">Default</button>
                  <button className="cyber-btn cyber-btn--lg">Large</button>
                </div>
              </div>
              <CodeBlock
                title="Sizes"
                language="html"
                code={`<button class="cyber-btn cyber-btn--sm">Small</button>
<button class="cyber-btn">Default</button>
<button class="cyber-btn cyber-btn--lg">Large</button>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview">
                <button className="cyber-btn" disabled>Disabled</button>
              </div>
              <CodeBlock
                title="Disabled State"
                language="html"
                code={`<button class="cyber-btn" disabled>Disabled</button>`}
              />
            </div>
          </section>
        )}

        {/* Inputs Section */}
        {activeTab === 'inputs' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Form Inputs
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                <input type="text" className="cyber-input" placeholder="Enter your handle..." />
              </div>
              <CodeBlock
                title="Text Input"
                language="html"
                code={`<input type="text" class="cyber-input" placeholder="Enter your handle...">`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <input type="text" className="cyber-input cyber-input--success" placeholder="Valid input" />
                <input type="text" className="cyber-input cyber-input--error" placeholder="Invalid input" />
              </div>
              <CodeBlock
                title="Validation States"
                language="html"
                code={`<input type="text" class="cyber-input cyber-input--success" placeholder="Valid input">
<input type="text" class="cyber-input cyber-input--error" placeholder="Invalid input">`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                <textarea className="cyber-textarea" placeholder="Enter your message..." />
              </div>
              <CodeBlock
                title="Textarea"
                language="html"
                code={`<textarea class="cyber-textarea" placeholder="Enter your message..."></textarea>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                <select className="cyber-select">
                  <option>Select protocol...</option>
                  <option>HTTP/3</option>
                  <option>WebSocket</option>
                  <option>gRPC</option>
                </select>
              </div>
              <CodeBlock
                title="Select"
                language="html"
                code={`<select class="cyber-select">
  <option>Select protocol...</option>
  <option>HTTP/3</option>
  <option>WebSocket</option>
  <option>gRPC</option>
</select>`}
              />
            </div>
          </section>
        )}

        {/* Cards Section */}
        {activeTab === 'cards' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Cards
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ alignItems: 'stretch' }}>
                <div className="cyber-card" style={{ width: '100%', maxWidth: '300px' }}>
                  <div className="cyber-card__header">
                    <h4 className="cyber-h5">System Status</h4>
                  </div>
                  <div className="cyber-card__body">
                    <p>All systems operational. Network latency within acceptable parameters.</p>
                  </div>
                  <div className="cyber-card__footer">
                    <span className="cyber-badge cyber-badge--green">Online</span>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Card with Header & Footer"
                language="html"
                code={`<div class="cyber-card">
  <div class="cyber-card__header">
    <h4 class="cyber-h5">System Status</h4>
  </div>
  <div class="cyber-card__body">
    <p>All systems operational.</p>
  </div>
  <div class="cyber-card__footer">
    <span class="cyber-badge cyber-badge--green">Online</span>
  </div>
</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ alignItems: 'stretch' }}>
                <div className="cyber-card" style={{ width: '100%', maxWidth: '300px' }}>
                  <div className="cyber-card__body">
                    <h4 className="cyber-h5" style={{ marginBottom: 'var(--space-sm)' }}>Simple Card</h4>
                    <p>A basic card with just body content. Perfect for displaying information blocks.</p>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Simple Card"
                language="html"
                code={`<div class="cyber-card">
  <div class="cyber-card__body">
    <h4 class="cyber-h5">Simple Card</h4>
    <p>Card content goes here.</p>
  </div>
</div>`}
              />
            </div>
          </section>
        )}

        {/* Badges Section */}
        {activeTab === 'badges' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Badges
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="demo-showcase">
                  <span className="cyber-badge">Default</span>
                  <span className="cyber-badge cyber-badge--magenta">Alert</span>
                  <span className="cyber-badge cyber-badge--green">Success</span>
                  <span className="cyber-badge cyber-badge--yellow">Warning</span>
                </div>
              </div>
              <CodeBlock
                title="Badge Variants"
                language="html"
                code={`<span class="cyber-badge">Default</span>
<span class="cyber-badge cyber-badge--magenta">Alert</span>
<span class="cyber-badge cyber-badge--green">Success</span>
<span class="cyber-badge cyber-badge--yellow">Warning</span>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview">
                <h4 className="cyber-h4">
                  System Status <span className="cyber-badge cyber-badge--green">Online</span>
                </h4>
              </div>
              <CodeBlock
                title="Badge with Text"
                language="html"
                code={`<h4 class="cyber-h4">
  System Status <span class="cyber-badge cyber-badge--green">Online</span>
</h4>`}
              />
            </div>
          </section>
        )}

        {/* Alerts Section */}
        {activeTab === 'alerts' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Alerts
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div className="cyber-alert">
                  <strong>Info:</strong> System update available. Prepare for maintenance window.
                </div>
                <div className="cyber-alert cyber-alert--success">
                  <strong>Success:</strong> Connection established. Data sync complete.
                </div>
                <div className="cyber-alert cyber-alert--warning">
                  <strong>Warning:</strong> High network latency detected. Performance may be impacted.
                </div>
                <div className="cyber-alert cyber-alert--error">
                  <strong>Error:</strong> Authentication failed. Access denied.
                </div>
              </div>
              <CodeBlock
                title="Alert Variants"
                language="html"
                code={`<div class="cyber-alert">
  <strong>Info:</strong> System update available.
</div>

<div class="cyber-alert cyber-alert--success">
  <strong>Success:</strong> Connection established.
</div>

<div class="cyber-alert cyber-alert--warning">
  <strong>Warning:</strong> High network latency.
</div>

<div class="cyber-alert cyber-alert--error">
  <strong>Error:</strong> Authentication failed.
</div>`}
              />
            </div>
          </section>
        )}

        {/* Progress Section */}
        {activeTab === 'progress' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Progress Bars
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div>
                  <span className="cyber-label">25%</span>
                  <div className="cyber-progress" style={{ marginTop: 'var(--space-xs)' }}>
                    <div className="cyber-progress__bar" style={{ width: '25%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">50%</span>
                  <div className="cyber-progress" style={{ marginTop: 'var(--space-xs)' }}>
                    <div className="cyber-progress__bar" style={{ width: '50%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">75%</span>
                  <div className="cyber-progress" style={{ marginTop: 'var(--space-xs)' }}>
                    <div className="cyber-progress__bar" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">100%</span>
                  <div className="cyber-progress" style={{ marginTop: 'var(--space-xs)' }}>
                    <div className="cyber-progress__bar" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Progress Bar"
                language="html"
                code={`<div class="cyber-progress">
  <div class="cyber-progress__bar" style="width: 75%"></div>
</div>`}
              />
            </div>
          </section>
        )}

        {/* Tables Section */}
        {activeTab === 'tables' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Tables
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ alignItems: 'stretch', overflow: 'auto' }}>
                <table className="cyber-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Status</th>
                      <th>Access Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cyber-mono">001</td>
                      <td>ghost_runner</td>
                      <td><span className="cyber-badge cyber-badge--green">Active</span></td>
                      <td>Admin</td>
                    </tr>
                    <tr>
                      <td className="cyber-mono">002</td>
                      <td>netwatch_42</td>
                      <td><span className="cyber-badge cyber-badge--green">Active</span></td>
                      <td>Operator</td>
                    </tr>
                    <tr>
                      <td className="cyber-mono">003</td>
                      <td>zero_cool</td>
                      <td><span className="cyber-badge cyber-badge--yellow">Pending</span></td>
                      <td>User</td>
                    </tr>
                    <tr>
                      <td className="cyber-mono">004</td>
                      <td>crash_override</td>
                      <td><span className="cyber-badge cyber-badge--magenta">Locked</span></td>
                      <td>User</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <CodeBlock
                title="Data Table"
                language="html"
                code={`<table class="cyber-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>User</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>ghost_runner</td>
      <td><span class="cyber-badge">Active</span></td>
    </tr>
  </tbody>
</table>`}
              />
            </div>
          </section>
        )}

        {/* Terminal Section */}
        {activeTab === 'terminal' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Terminal
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ alignItems: 'stretch' }}>
                <div className="cyber-terminal" style={{ width: '100%' }}>
                  <div className="cyber-terminal__header">
                    <span className="cyber-terminal__dot cyber-terminal__dot--red" />
                    <span className="cyber-terminal__dot cyber-terminal__dot--yellow" />
                    <span className="cyber-terminal__dot cyber-terminal__dot--green" />
                  </div>
                  <div className="cyber-terminal__body">
                    <span className="cyber-terminal__prompt">$</span> npm install cybercore-css
                    <br />
                    <span style={{ color: 'var(--color-text-muted)' }}>Installing dependencies...</span>
                    <br />
                    <span style={{ color: 'var(--cyber-green-500)' }}>+ cybercore-css@1.0.0</span>
                    <br />
                    <span style={{ color: 'var(--cyber-green-500)' }}>added 1 package in 2.3s</span>
                    <br /><br />
                    <span className="cyber-terminal__prompt">$</span> <span className="cyber-terminal__cursor" />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Terminal Component"
                language="html"
                code={`<div class="cyber-terminal">
  <div class="cyber-terminal__header">
    <span class="cyber-terminal__dot cyber-terminal__dot--red"></span>
    <span class="cyber-terminal__dot cyber-terminal__dot--yellow"></span>
    <span class="cyber-terminal__dot cyber-terminal__dot--green"></span>
  </div>
  <div class="cyber-terminal__body">
    <span class="cyber-terminal__prompt">$</span> npm install cybercore-css
    <br>
    <span class="cyber-terminal__cursor"></span>
  </div>
</div>`}
              />
            </div>
          </section>
        )}

        {/* Misc Section */}
        {activeTab === 'misc' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Miscellaneous
            </h2>

            {/* Spinner */}
            <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>Spinner</h3>
            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="cyber-spinner" />
              </div>
              <CodeBlock
                title="Loading Spinner"
                language="html"
                code={`<div class="cyber-spinner"></div>`}
              />
            </div>

            {/* Skeleton */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Skeleton Loaders</h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
                  <div className="cyber-skeleton cyber-skeleton--avatar" />
                  <div style={{ flex: 1 }}>
                    <div className="cyber-skeleton cyber-skeleton--title" />
                    <div className="cyber-skeleton cyber-skeleton--text" />
                    <div className="cyber-skeleton cyber-skeleton--text" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Skeleton Loading"
                language="html"
                code={`<div class="cyber-skeleton cyber-skeleton--avatar"></div>
<div class="cyber-skeleton cyber-skeleton--title"></div>
<div class="cyber-skeleton cyber-skeleton--text"></div>`}
              />
            </div>

            {/* Typography */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Typography Classes</h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'start', gap: 'var(--space-sm)' }}>
                <span className="cyber-display">Display</span>
                <span className="cyber-h1">Heading 1</span>
                <span className="cyber-h2">Heading 2</span>
                <span className="cyber-h3">Heading 3</span>
                <span className="cyber-lead">Lead paragraph text</span>
                <span className="cyber-mono">Monospace text</span>
                <span className="cyber-label">Label text</span>
              </div>
              <CodeBlock
                title="Typography"
                language="html"
                code={`<span class="cyber-display">Display</span>
<span class="cyber-h1">Heading 1</span>
<span class="cyber-h2">Heading 2</span>
<span class="cyber-lead">Lead paragraph</span>
<span class="cyber-mono">Monospace</span>
<span class="cyber-label">Label</span>`}
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Components;
