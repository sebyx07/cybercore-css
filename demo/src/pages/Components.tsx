import { useState } from 'react';

import CodeBlock from '../components/CodeBlock';

function Components() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownMagentaOpen, setIsDropdownMagentaOpen] = useState(false);
  const [isDropdownRightOpen, setIsDropdownRightOpen] = useState(false);

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">
            &gt; COMPONENT_LIBRARY<span className="cursor">_</span>
          </p>
          <h1 className="cyber-h1 cyber-text-glow">Components</h1>
          <p className="cyber-lead">
            Ready-to-use UI components with cyberpunk aesthetics. Just add the class names to your
            HTML elements.
          </p>
        </div>
      </header>

      <div className="demo-container">
        {/* Tabs Navigation */}
        <nav
          className="cyber-tabs cyber-tabs--fullwidth"
          style={{ marginBottom: 'var(--space-xl)' }}
        >
          {[
            'buttons',
            'inputs',
            'cards',
            'badges',
            'alerts',
            'progress',
            'tables',
            'terminal',
            'modal',
            'dropdown',
            'nav',
            'misc',
          ].map((tab) => (
            <button
              key={tab}
              className={`cyber-tab ${activeTab === tab ? 'cyber-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
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
                <button className="cyber-btn" disabled>
                  Disabled
                </button>
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
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch' }}
              >
                <input type="text" className="cyber-input" placeholder="Enter your handle..." />
              </div>
              <CodeBlock
                title="Text Input"
                language="html"
                code={`<input type="text" class="cyber-input" placeholder="Enter your handle...">`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}
              >
                <input
                  type="text"
                  className="cyber-input cyber-input--success"
                  placeholder="Valid input"
                />
                <input
                  type="text"
                  className="cyber-input cyber-input--error"
                  placeholder="Invalid input"
                />
              </div>
              <CodeBlock
                title="Validation States"
                language="html"
                code={`<input type="text" class="cyber-input cyber-input--success" placeholder="Valid input">
<input type="text" class="cyber-input cyber-input--error" placeholder="Invalid input">`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch' }}
              >
                <textarea className="cyber-textarea" placeholder="Enter your message..." />
              </div>
              <CodeBlock
                title="Textarea"
                language="html"
                code={`<textarea class="cyber-textarea" placeholder="Enter your message..."></textarea>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch' }}
              >
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
                    <h4 className="cyber-h5" style={{ marginBottom: 'var(--space-sm)' }}>
                      Simple Card
                    </h4>
                    <p>
                      A basic card with just body content. Perfect for displaying information
                      blocks.
                    </p>
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
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}
              >
                <div className="cyber-alert">
                  <strong>Info:</strong> System update available. Prepare for maintenance window.
                </div>
                <div className="cyber-alert cyber-alert--success">
                  <strong>Success:</strong> Connection established. Data sync complete.
                </div>
                <div className="cyber-alert cyber-alert--warning">
                  <strong>Warning:</strong> High network latency detected. Performance may be
                  impacted.
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
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}
              >
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

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}
              >
                <div>
                  <span className="cyber-label cyber-text-cyan">Cyan (Default)</span>
                  <div className="cyber-progress" style={{ marginTop: 'var(--space-xs)' }}>
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label cyber-text-magenta">Magenta</span>
                  <div
                    className="cyber-progress cyber-progress--magenta"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label cyber-text-yellow">Yellow</span>
                  <div
                    className="cyber-progress cyber-progress--yellow"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label cyber-text-green">Green</span>
                  <div
                    className="cyber-progress cyber-progress--green"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Color Variants"
                language="html"
                code={`<div class="cyber-progress">...</div>
<div class="cyber-progress cyber-progress--magenta">...</div>
<div class="cyber-progress cyber-progress--yellow">...</div>
<div class="cyber-progress cyber-progress--green">...</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}
              >
                <div>
                  <span className="cyber-label">Small</span>
                  <div
                    className="cyber-progress cyber-progress--sm"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">Default</span>
                  <div className="cyber-progress" style={{ marginTop: 'var(--space-xs)' }}>
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">Large</span>
                  <div
                    className="cyber-progress cyber-progress--lg"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Size Variants"
                language="html"
                code={`<div class="cyber-progress cyber-progress--sm">...</div>
<div class="cyber-progress">...</div>
<div class="cyber-progress cyber-progress--lg">...</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}
              >
                <div>
                  <span className="cyber-label">Loading...</span>
                  <div
                    className="cyber-progress cyber-progress--indeterminate"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">Processing...</span>
                  <div
                    className="cyber-progress cyber-progress--indeterminate cyber-progress--magenta"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__bar" />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Indeterminate (Loading)"
                language="html"
                code={`<div class="cyber-progress cyber-progress--indeterminate">
  <div class="cyber-progress__bar"></div>
</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}
              >
                <div>
                  <span className="cyber-label">Step 2 of 5</span>
                  <div
                    className="cyber-progress cyber-progress--segmented"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__segment cyber-progress__segment--active" />
                    <div className="cyber-progress__segment cyber-progress__segment--active" />
                    <div className="cyber-progress__segment" />
                    <div className="cyber-progress__segment" />
                    <div className="cyber-progress__segment" />
                  </div>
                </div>
                <div>
                  <span className="cyber-label">Step 4 of 5</span>
                  <div
                    className="cyber-progress cyber-progress--segmented cyber-progress--green"
                    style={{ marginTop: 'var(--space-xs)' }}
                  >
                    <div className="cyber-progress__segment cyber-progress__segment--active" />
                    <div className="cyber-progress__segment cyber-progress__segment--active" />
                    <div className="cyber-progress__segment cyber-progress__segment--active" />
                    <div className="cyber-progress__segment cyber-progress__segment--active" />
                    <div className="cyber-progress__segment" />
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Segmented Progress (Steps)"
                language="html"
                code={`<div class="cyber-progress cyber-progress--segmented">
  <div class="cyber-progress__segment cyber-progress__segment--active"></div>
  <div class="cyber-progress__segment cyber-progress__segment--active"></div>
  <div class="cyber-progress__segment"></div>
  <div class="cyber-progress__segment"></div>
  <div class="cyber-progress__segment"></div>
</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ padding: 'var(--space-lg)' }}>
                <div className="demo-showcase">
                  <div
                    className="cyber-progress-circle"
                    style={{ '--progress-value': 25 } as React.CSSProperties}
                  >
                    <svg className="cyber-progress-circle__svg" viewBox="0 0 100 100">
                      <circle className="cyber-progress-circle__track" cx="50" cy="50" r="40" />
                      <circle className="cyber-progress-circle__bar" cx="50" cy="50" r="40" />
                    </svg>
                    <span className="cyber-progress-circle__value">25%</span>
                  </div>
                  <div
                    className="cyber-progress-circle cyber-progress-circle--magenta"
                    style={{ '--progress-value': 50 } as React.CSSProperties}
                  >
                    <svg className="cyber-progress-circle__svg" viewBox="0 0 100 100">
                      <circle className="cyber-progress-circle__track" cx="50" cy="50" r="40" />
                      <circle className="cyber-progress-circle__bar" cx="50" cy="50" r="40" />
                    </svg>
                    <span className="cyber-progress-circle__value">50%</span>
                  </div>
                  <div
                    className="cyber-progress-circle cyber-progress-circle--green"
                    style={{ '--progress-value': 75 } as React.CSSProperties}
                  >
                    <svg className="cyber-progress-circle__svg" viewBox="0 0 100 100">
                      <circle className="cyber-progress-circle__track" cx="50" cy="50" r="40" />
                      <circle className="cyber-progress-circle__bar" cx="50" cy="50" r="40" />
                    </svg>
                    <span className="cyber-progress-circle__value">75%</span>
                  </div>
                  <div
                    className="cyber-progress-circle cyber-progress-circle--yellow"
                    style={{ '--progress-value': 100 } as React.CSSProperties}
                  >
                    <svg className="cyber-progress-circle__svg" viewBox="0 0 100 100">
                      <circle className="cyber-progress-circle__track" cx="50" cy="50" r="40" />
                      <circle className="cyber-progress-circle__bar" cx="50" cy="50" r="40" />
                    </svg>
                    <span className="cyber-progress-circle__value">100%</span>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Circular Progress"
                language="html"
                code={`<div class="cyber-progress-circle" style="--progress-value: 75">
  <svg class="cyber-progress-circle__svg" viewBox="0 0 100 100">
    <circle class="cyber-progress-circle__track" cx="50" cy="50" r="40" />
    <circle class="cyber-progress-circle__bar" cx="50" cy="50" r="40" />
  </svg>
  <span class="cyber-progress-circle__value">75%</span>
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
                      <td>
                        <span className="cyber-badge cyber-badge--green">Active</span>
                      </td>
                      <td>Admin</td>
                    </tr>
                    <tr>
                      <td className="cyber-mono">002</td>
                      <td>netwatch_42</td>
                      <td>
                        <span className="cyber-badge cyber-badge--green">Active</span>
                      </td>
                      <td>Operator</td>
                    </tr>
                    <tr>
                      <td className="cyber-mono">003</td>
                      <td>zero_cool</td>
                      <td>
                        <span className="cyber-badge cyber-badge--yellow">Pending</span>
                      </td>
                      <td>User</td>
                    </tr>
                    <tr>
                      <td className="cyber-mono">004</td>
                      <td>crash_override</td>
                      <td>
                        <span className="cyber-badge cyber-badge--magenta">Locked</span>
                      </td>
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
                    <span style={{ color: 'var(--color-text-muted)' }}>
                      Installing dependencies...
                    </span>
                    <br />
                    <span style={{ color: 'var(--cyber-green-500)' }}>+ cybercore-css@1.0.0</span>
                    <br />
                    <span style={{ color: 'var(--cyber-green-500)' }}>added 1 package in 2.3s</span>
                    <br />
                    <br />
                    <span className="cyber-terminal__prompt">$</span>{' '}
                    <span className="cyber-terminal__cursor" />
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

        {/* Modal Section */}
        {activeTab === 'modal' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Modal
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <button className="cyber-btn" onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </button>

                <div className={`cyber-modal ${isModalOpen ? 'cyber-modal--open' : ''}`}>
                  <div className="cyber-modal__dialog">
                    <div className="cyber-modal__header">
                      <h3 className="cyber-modal__title">System Alert</h3>
                      <button
                        className="cyber-modal__close"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close modal"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="cyber-modal__body">
                      <p>
                        Connection to the mainframe has been established. All systems are
                        operational and ready for neural interface synchronization.
                      </p>
                    </div>
                    <div className="cyber-modal__footer">
                      <button
                        className="cyber-btn cyber-btn--ghost"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button className="cyber-btn" onClick={() => setIsModalOpen(false)}>
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Modal with Header, Body & Footer"
                language="html"
                code={`<div class="cyber-modal cyber-modal--open">
  <div class="cyber-modal__dialog">
    <div class="cyber-modal__header">
      <h3 class="cyber-modal__title">System Alert</h3>
      <button class="cyber-modal__close">
        <svg><!-- close icon --></svg>
      </button>
    </div>
    <div class="cyber-modal__body">
      <p>Modal content goes here.</p>
    </div>
    <div class="cyber-modal__footer">
      <button class="cyber-btn cyber-btn--ghost">Cancel</button>
      <button class="cyber-btn">Confirm</button>
    </div>
  </div>
</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}
              >
                <p className="cyber-label">Color variants change the accent color:</p>
                <div className="demo-showcase">
                  <span className="cyber-badge">Default (Cyan)</span>
                  <span className="cyber-badge cyber-badge--magenta">--magenta</span>
                  <span className="cyber-badge cyber-badge--yellow">--yellow</span>
                  <span className="cyber-badge cyber-badge--green">--green</span>
                </div>
              </div>
              <CodeBlock
                title="Color Variants"
                language="html"
                code={`<!-- Add variant class to cyber-modal -->
<div class="cyber-modal cyber-modal--open"><!-- cyan (default) -->
<div class="cyber-modal cyber-modal--magenta cyber-modal--open">
<div class="cyber-modal cyber-modal--yellow cyber-modal--open">
<div class="cyber-modal cyber-modal--green cyber-modal--open">`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}
              >
                <p className="cyber-label">Size variants control the dialog width:</p>
                <div className="demo-showcase">
                  <span className="cyber-badge cyber-badge--sm">--sm (360px)</span>
                  <span className="cyber-badge">Default (500px)</span>
                  <span className="cyber-badge">--lg (720px)</span>
                  <span className="cyber-badge">--xl (960px)</span>
                  <span className="cyber-badge cyber-badge--magenta">--fullscreen</span>
                </div>
              </div>
              <CodeBlock
                title="Size Variants"
                language="html"
                code={`<!-- Add size class to cyber-modal -->
<div class="cyber-modal cyber-modal--sm cyber-modal--open">
<div class="cyber-modal cyber-modal--open"> <!-- default 500px -->
<div class="cyber-modal cyber-modal--lg cyber-modal--open">
<div class="cyber-modal cyber-modal--xl cyber-modal--open">
<div class="cyber-modal cyber-modal--fullscreen cyber-modal--open">`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}
              >
                <p className="cyber-label">Animation variants for entrance effects:</p>
                <div className="demo-showcase">
                  <span className="cyber-badge">Default (scale)</span>
                  <span className="cyber-badge cyber-badge--green">--slide-up</span>
                  <span className="cyber-badge cyber-badge--yellow">--zoom</span>
                </div>
              </div>
              <CodeBlock
                title="Animation Variants"
                language="html"
                code={`<!-- Add animation class to cyber-modal -->
<div class="cyber-modal cyber-modal--open"> <!-- default scale -->
<div class="cyber-modal cyber-modal--slide-up cyber-modal--open">
<div class="cyber-modal cyber-modal--zoom cyber-modal--open">`}
              />
            </div>
          </section>
        )}

        {/* Dropdown Section */}
        {activeTab === 'dropdown' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Dropdown
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className={`cyber-dropdown ${isDropdownOpen ? 'cyber-dropdown--open' : ''}`}>
                  <button
                    className="cyber-dropdown__trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Select Action
                  </button>
                  <ul className="cyber-dropdown__menu">
                    <li>
                      <button className="cyber-dropdown__item">Initialize</button>
                    </li>
                    <li>
                      <button className="cyber-dropdown__item cyber-dropdown__item--active">
                        Connect
                      </button>
                    </li>
                    <li>
                      <button className="cyber-dropdown__item">Sync Data</button>
                    </li>
                    <li className="cyber-dropdown__divider" />
                    <li>
                      <button className="cyber-dropdown__item cyber-dropdown__item--disabled">
                        Disconnect
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <CodeBlock
                title="Basic Dropdown"
                language="html"
                code={`<div class="cyber-dropdown cyber-dropdown--open">
  <button class="cyber-dropdown__trigger">Select Action</button>
  <ul class="cyber-dropdown__menu">
    <li><button class="cyber-dropdown__item">Initialize</button></li>
    <li><button class="cyber-dropdown__item cyber-dropdown__item--active">Connect</button></li>
    <li><button class="cyber-dropdown__item">Sync Data</button></li>
    <li class="cyber-dropdown__divider"></li>
    <li><button class="cyber-dropdown__item cyber-dropdown__item--disabled">Disconnect</button></li>
  </ul>
</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview">
                <div
                  className={`cyber-dropdown cyber-dropdown--magenta ${isDropdownMagentaOpen ? 'cyber-dropdown--open' : ''}`}
                >
                  <button
                    className="cyber-dropdown__trigger"
                    onClick={() => setIsDropdownMagentaOpen(!isDropdownMagentaOpen)}
                  >
                    Danger Zone
                  </button>
                  <ul className="cyber-dropdown__menu">
                    <li>
                      <button className="cyber-dropdown__item">Override Security</button>
                    </li>
                    <li>
                      <button className="cyber-dropdown__item">Purge Cache</button>
                    </li>
                    <li>
                      <button className="cyber-dropdown__item">System Reset</button>
                    </li>
                  </ul>
                </div>
              </div>
              <CodeBlock
                title="Magenta Variant"
                language="html"
                code={`<div class="cyber-dropdown cyber-dropdown--magenta cyber-dropdown--open">
  <button class="cyber-dropdown__trigger">Danger Zone</button>
  <ul class="cyber-dropdown__menu">
    <li><button class="cyber-dropdown__item">Override Security</button></li>
    <li><button class="cyber-dropdown__item">Purge Cache</button></li>
    <li><button class="cyber-dropdown__item">System Reset</button></li>
  </ul>
</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ justifyContent: 'flex-end' }}>
                <div
                  className={`cyber-dropdown cyber-dropdown--right ${isDropdownRightOpen ? 'cyber-dropdown--open' : ''}`}
                >
                  <button
                    className="cyber-dropdown__trigger"
                    onClick={() => setIsDropdownRightOpen(!isDropdownRightOpen)}
                  >
                    Right Aligned
                  </button>
                  <ul className="cyber-dropdown__menu">
                    <li>
                      <button className="cyber-dropdown__item">Option Alpha</button>
                    </li>
                    <li>
                      <button className="cyber-dropdown__item">Option Beta</button>
                    </li>
                    <li>
                      <button className="cyber-dropdown__item">Option Gamma</button>
                    </li>
                  </ul>
                </div>
              </div>
              <CodeBlock
                title="Right Aligned"
                language="html"
                code={`<div class="cyber-dropdown cyber-dropdown--right cyber-dropdown--open">
  <button class="cyber-dropdown__trigger">Right Aligned</button>
  <ul class="cyber-dropdown__menu">
    <li><button class="cyber-dropdown__item">Option Alpha</button></li>
    <li><button class="cyber-dropdown__item">Option Beta</button></li>
    <li><button class="cyber-dropdown__item">Option Gamma</button></li>
  </ul>
</div>`}
              />
            </div>
          </section>
        )}

        {/* Nav Section */}
        {activeTab === 'nav' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Navigation
            </h2>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ alignItems: 'stretch' }}>
                <nav className="cyber-nav" style={{ position: 'relative', width: '100%' }}>
                  <span className="cyber-nav__brand">CyberCore</span>
                  <ul className="cyber-nav__links">
                    <li>
                      <span className="cyber-nav__link cyber-nav__link--active">Home</span>
                    </li>
                    <li>
                      <span className="cyber-nav__link">Systems</span>
                    </li>
                    <li>
                      <span className="cyber-nav__link">Network</span>
                    </li>
                    <li>
                      <span className="cyber-nav__link">Terminal</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <CodeBlock
                title="Navigation Bar"
                language="html"
                code={`<nav class="cyber-nav">
  <a href="#" class="cyber-nav__brand">CyberCore</a>
  <ul class="cyber-nav__links">
    <li><a href="#" class="cyber-nav__link cyber-nav__link--active">Home</a></li>
    <li><a href="#" class="cyber-nav__link">Systems</a></li>
    <li><a href="#" class="cyber-nav__link">Network</a></li>
    <li><a href="#" class="cyber-nav__link">Terminal</a></li>
  </ul>
</nav>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview" style={{ alignItems: 'stretch' }}>
                <nav className="cyber-nav" style={{ position: 'relative', width: '100%' }}>
                  <span className="cyber-nav__brand">NetWatch</span>
                  <ul className="cyber-nav__links">
                    <li>
                      <span className="cyber-nav__link">Dashboard</span>
                    </li>
                    <li>
                      <span className="cyber-nav__link">Logs</span>
                    </li>
                  </ul>
                  <div className="cyber-status">
                    <span className="cyber-status__dot" />
                    Online
                  </div>
                </nav>
              </div>
              <CodeBlock
                title="Nav with Status Indicator"
                language="html"
                code={`<nav class="cyber-nav">
  <a href="#" class="cyber-nav__brand">NetWatch</a>
  <ul class="cyber-nav__links">
    <li><a href="#" class="cyber-nav__link">Dashboard</a></li>
    <li><a href="#" class="cyber-nav__link">Logs</a></li>
  </ul>
  <div class="cyber-status">
    <span class="cyber-status__dot"></span>
    Online
  </div>
</nav>`}
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
            <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
              Spinner
            </h3>
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
            <h3
              className="cyber-h4"
              style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
            >
              Skeleton Loaders
            </h3>
            <div className="demo-code-preview">
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'stretch' }}
              >
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
            <h3
              className="cyber-h4"
              style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}
            >
              Typography Classes
            </h3>
            <div className="demo-code-preview">
              <div
                className="demo-preview"
                style={{ flexDirection: 'column', alignItems: 'start', gap: 'var(--space-sm)' }}
              >
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
