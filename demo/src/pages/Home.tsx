import { useState } from 'react';

import { Link } from 'react-router-dom';

function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="cyber-hero">
        <p className="cyber-hero__subtitle">[ System v2.077 Initialized ]</p>
        <h1 className="cyber-heading cyber-hero__title" data-text="CYBERCORE">
          CYBERCORE
        </h1>
        <p className="cyber-hero__description">
          Built by AI, for AI. A cyberpunk design system where AI agents are first-class citizens.
          Pure CSS, no JavaScript—perfect for AI-powered web apps.
        </p>
        <div className="cyber-flex cyber-gap-md">
          <a
            href="/cybercore-css/llm.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn cyber-btn--lg"
          >
            llm.txt
          </a>
          <Link
            to="/components"
            className="cyber-btn cyber-btn--lg cyber-btn--magenta cyber-btn--ghost"
          >
            Components
          </Link>
        </div>
      </section>

      <main className="cyber-container">
        {/* Stats Section */}
        <section className="cyber-section">
          <div className="cyber-grid cyber-grid--4">
            <div className="cyber-card cyber-card--interactive">
              <div className="cyber-stat">
                <div className="cyber-stat__value">847.3</div>
                <div className="cyber-stat__label">TB/s Bandwidth</div>
              </div>
            </div>
            <div className="cyber-card cyber-card--magenta cyber-card--interactive">
              <div className="cyber-stat">
                <div
                  className="cyber-stat__value"
                  style={{
                    color: 'var(--cyber-magenta-500)',
                    textShadow: '0 0 10px var(--cyber-magenta-500)',
                  }}
                >
                  12
                </div>
                <div className="cyber-stat__label">Active Threats</div>
              </div>
            </div>
            <div className="cyber-card cyber-card--yellow cyber-card--interactive">
              <div className="cyber-stat">
                <div
                  className="cyber-stat__value"
                  style={{
                    color: 'var(--cyber-yellow-500)',
                    textShadow: '0 0 10px var(--cyber-yellow-500)',
                  }}
                >
                  98.7%
                </div>
                <div className="cyber-stat__label">System Integrity</div>
              </div>
            </div>
            <div className="cyber-card cyber-card--green cyber-card--interactive">
              <div className="cyber-stat">
                <div
                  className="cyber-stat__value"
                  style={{
                    color: 'var(--cyber-green-500)',
                    textShadow: '0 0 10px var(--cyber-green-500)',
                  }}
                >
                  $247K
                </div>
                <div className="cyber-stat__label">Crypto Balance</div>
              </div>
            </div>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Buttons Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// Buttons</h2>
            <p className="cyber-section__subtitle">Interactive controls with hover effects</p>
          </div>

          <div className="cyber-flex cyber-flex--wrap cyber-gap-md cyber-items-center">
            <button className="cyber-btn">Default</button>
            <button className="cyber-btn cyber-btn--magenta">Danger</button>
            <button className="cyber-btn cyber-btn--yellow">Warning</button>
            <button className="cyber-btn cyber-btn--green">Success</button>
          </div>

          <div className="cyber-flex cyber-flex--wrap cyber-gap-md cyber-items-center cyber-mt-lg">
            <button className="cyber-btn cyber-btn--ghost">Ghost</button>
            <button className="cyber-btn cyber-btn--filled">Filled</button>
            <button className="cyber-btn cyber-btn--sm">Small</button>
            <button className="cyber-btn cyber-btn--lg">Large</button>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Cards Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// Data Cards</h2>
            <p className="cyber-section__subtitle">Information panels with cyberpunk aesthetics</p>
          </div>

          <div className="cyber-grid cyber-grid--3">
            {/* Neural Link Card */}
            <div className="cyber-card cyber-card--interactive">
              <div className="cyber-card__header">
                <div className="cyber-card__icon">&#x26A1;</div>
                <span className="cyber-card__title">Neural Link</span>
                <span className="cyber-card__badge">ACTIVE</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-sm)' }}>
                Connection stable. Bandwidth optimized for maximum data transfer.
              </p>
              <div className="cyber-progress" style={{ ['--progress-value' as string]: '78%' }}>
                <div className="cyber-progress__bar" />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  marginTop: 'var(--space-xs)',
                }}
              >
                78% CAPACITY
              </p>
            </div>

            {/* Threat Detection Card */}
            <div className="cyber-card cyber-card--magenta cyber-card--interactive">
              <div className="cyber-card__header">
                <div className="cyber-card__icon">&#x1F6E1;</div>
                <span className="cyber-card__title">Threat Detection</span>
                <span className="cyber-badge cyber-badge--magenta cyber-badge--pulse">HIGH</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-sm)' }}>
                Hostile ICE detected in sector 7G. Countermeasures active.
              </p>
              <div
                className="cyber-progress cyber-progress--magenta"
                style={{ ['--progress-value' as string]: '45%' }}
              >
                <div className="cyber-progress__bar" />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  marginTop: 'var(--space-xs)',
                }}
              >
                45% NEUTRALIZED
              </p>
            </div>

            {/* Crypto Wallet Card */}
            <div className="cyber-card cyber-card--green cyber-card--holo cyber-card--interactive">
              <div className="cyber-card__header">
                <div className="cyber-card__icon">&#x1F4B0;</div>
                <span className="cyber-card__title">Crypto Wallet</span>
              </div>
              <p
                style={{
                  fontFamily: "'Orbitron', var(--font-display)",
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--cyber-green-500)',
                  textShadow: '0 0 10px var(--cyber-green-500)',
                }}
              >
                $247,892.00
              </p>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--text-sm)',
                  marginTop: 'var(--space-xs)',
                }}
              >
                +12.4% from last sync
              </p>
              <div className="cyber-flex cyber-gap-sm cyber-mt-md">
                <button className="cyber-btn cyber-btn--green cyber-btn--sm">Send</button>
                <button className="cyber-btn cyber-btn--green cyber-btn--sm cyber-btn--ghost">
                  Receive
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Form Section */}
        <section className="cyber-section">
          <div className="cyber-grid cyber-grid--2">
            <div>
              <div className="cyber-section__header">
                <h2 className="cyber-section__title">// Access Terminal</h2>
                <p className="cyber-section__subtitle">Authenticate to the network</p>
              </div>

              <div className="cyber-card">
                <div className="cyber-field">
                  <label className="cyber-field__label" htmlFor="handle-input">
                    Handle
                  </label>
                  <input
                    type="text"
                    id="handle-input"
                    className="cyber-input"
                    placeholder="Enter your handle..."
                  />
                </div>

                <div className="cyber-field">
                  <label className="cyber-field__label" htmlFor="access-key-input">
                    Access Key
                  </label>
                  <input
                    type="password"
                    id="access-key-input"
                    className="cyber-input"
                    placeholder="************"
                  />
                </div>

                <div className="cyber-field">
                  <label className="cyber-field__label" htmlFor="message-input">
                    Message
                  </label>
                  <textarea
                    id="message-input"
                    className="cyber-input cyber-textarea"
                    placeholder="Enter transmission..."
                  />
                </div>

                <div className="cyber-flex cyber-gap-md cyber-items-center cyber-mb-md">
                  <label className="cyber-checkbox">
                    <input type="checkbox" />
                    <span className="cyber-checkbox__box" />
                    <span className="cyber-checkbox__label">Remember Me</span>
                  </label>

                  <label className="cyber-checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="cyber-checkbox__box" />
                    <span className="cyber-checkbox__label">Encrypt Connection</span>
                  </label>
                </div>

                <div className="cyber-flex cyber-gap-md">
                  <button className="cyber-btn">Connect</button>
                  <button className="cyber-btn cyber-btn--magenta cyber-btn--ghost">Cancel</button>
                </div>
              </div>
            </div>

            <div>
              <div className="cyber-section__header">
                <h2 className="cyber-section__title">// System Terminal</h2>
                <p className="cyber-section__subtitle">Live command interface</p>
              </div>

              <div className="cyber-terminal">
                <div className="cyber-terminal__header">
                  <span className="cyber-terminal__dot cyber-terminal__dot--red" />
                  <span className="cyber-terminal__dot cyber-terminal__dot--yellow" />
                  <span className="cyber-terminal__dot cyber-terminal__dot--green" />
                  <span className="cyber-terminal__title">NETWATCH v2.077</span>
                </div>
                <div className="cyber-terminal__body">
                  <p>
                    <span className="cyber-terminal__prompt">root@nightcity:~$</span> system
                    --status
                  </p>
                  <p style={{ color: 'var(--cyber-green-500)' }}>[OK] Neural link active</p>
                  <p style={{ color: 'var(--cyber-green-500)' }}>[OK] Firewall operational</p>
                  <p style={{ color: 'var(--cyber-yellow-500)' }}>
                    [WARN] 12 intrusion attempts blocked
                  </p>
                  <p style={{ color: 'var(--cyber-magenta-500)' }}>
                    [ALERT] ICE detected in sector 7G
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span className="cyber-terminal__prompt">root@nightcity:~$</span> scan --deep
                  </p>
                  <p>Scanning network nodes... 847 found</p>
                  <p>Analyzing threat vectors...</p>
                  <p>&nbsp;</p>
                  <p>
                    <span className="cyber-terminal__prompt">root@nightcity:~$</span>{' '}
                    <span className="cyber-terminal__cursor" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Alerts Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// System Alerts</h2>
            <p className="cyber-section__subtitle">Notification styles</p>
          </div>

          <div className="cyber-flex cyber-flex--col cyber-gap-md">
            <div className="cyber-alert">
              <div className="cyber-alert__title">Information</div>
              <p>Neural sync complete. All systems operating within normal parameters.</p>
            </div>

            <div className="cyber-alert cyber-alert--success">
              <div className="cyber-alert__title">Success</div>
              <p>Data transfer complete. 847.3 TB synchronized across all nodes.</p>
            </div>

            <div className="cyber-alert cyber-alert--warning">
              <div className="cyber-alert__title">Warning</div>
              <p>Firewall detected 12 intrusion attempts. Countermeasures deployed.</p>
            </div>

            <div className="cyber-alert cyber-alert--error">
              <div className="cyber-alert__title">Critical</div>
              <p>Hostile ICE breach in sector 7G. Immediate action required.</p>
            </div>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Table Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// Network Nodes</h2>
            <p className="cyber-section__subtitle">Active connections</p>
          </div>

          <div className="cyber-card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="cyber-table">
              <thead>
                <tr>
                  <th>Node ID</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Latency</th>
                  <th>Bandwidth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>NC-7734</code>
                  </td>
                  <td>Watson District</td>
                  <td>
                    <span className="cyber-badge cyber-badge--green">Online</span>
                  </td>
                  <td>12ms</td>
                  <td>847.3 TB/s</td>
                </tr>
                <tr>
                  <td>
                    <code>NC-2891</code>
                  </td>
                  <td>Westbrook</td>
                  <td>
                    <span className="cyber-badge cyber-badge--green">Online</span>
                  </td>
                  <td>8ms</td>
                  <td>623.1 TB/s</td>
                </tr>
                <tr>
                  <td>
                    <code>NC-4456</code>
                  </td>
                  <td>Pacifica</td>
                  <td>
                    <span className="cyber-badge cyber-badge--yellow">Degraded</span>
                  </td>
                  <td>145ms</td>
                  <td>89.2 TB/s</td>
                </tr>
                <tr>
                  <td>
                    <code>NC-9012</code>
                  </td>
                  <td>Santo Domingo</td>
                  <td>
                    <span className="cyber-badge cyber-badge--magenta">Offline</span>
                  </td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <td>
                    <code>NC-5567</code>
                  </td>
                  <td>City Center</td>
                  <td>
                    <span className="cyber-badge cyber-badge--green">Online</span>
                  </td>
                  <td>3ms</td>
                  <td>1.2 PB/s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Tabs Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// Interface Tabs</h2>
            <p className="cyber-section__subtitle">Navigation patterns</p>
          </div>

          <div className="cyber-tabs cyber-tabs--fullwidth">
            <button
              className={`cyber-tab ${activeTab === 0 ? 'cyber-tab--active' : ''}`}
              onClick={() => setActiveTab(0)}
            >
              Overview
            </button>
            <button
              className={`cyber-tab ${activeTab === 1 ? 'cyber-tab--active' : ''}`}
              onClick={() => setActiveTab(1)}
            >
              Analytics
            </button>
            <button
              className={`cyber-tab ${activeTab === 2 ? 'cyber-tab--active' : ''}`}
              onClick={() => setActiveTab(2)}
            >
              Security
            </button>
            <button
              className={`cyber-tab ${activeTab === 3 ? 'cyber-tab--active' : ''}`}
              onClick={() => setActiveTab(3)}
            >
              Settings
            </button>
          </div>

          <div className="cyber-card" style={{ borderTop: 'none', marginTop: '-1px' }}>
            {activeTab === 0 && (
              <div>
                <h4 style={{ color: 'var(--cyber-cyan-500)', marginBottom: 'var(--space-sm)' }}>
                  System Overview
                </h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  All neural pathways operational. Network integrity at 98.7%. Last sync: 2.3
                  seconds ago.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h4 style={{ color: 'var(--cyber-cyan-500)', marginBottom: 'var(--space-sm)' }}>
                  Network Analytics
                </h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  847 nodes scanned. Data throughput: 1.2 PB/s peak. Anomalies detected: 3
                  (resolved).
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h4 style={{ color: 'var(--cyber-magenta-500)', marginBottom: 'var(--space-sm)' }}>
                  Security Status
                </h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Firewall active. 12 intrusion attempts blocked in last 24h. ICE protocols engaged
                  in sector 7G.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h4 style={{ color: 'var(--cyber-cyan-500)', marginBottom: 'var(--space-sm)' }}>
                  Configuration
                </h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Neural interface: v2.077. Auto-sync: enabled. Encryption: AES-512. Theme: Night
                  City Dark.
                </p>
              </div>
            )}
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Loading Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// Loading States</h2>
            <p className="cyber-section__subtitle">Progress indicators</p>
          </div>

          <div className="cyber-grid cyber-grid--2">
            <div className="cyber-card">
              <h4
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--cyber-cyan-500)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                Progress Bars
              </h4>

              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-2xs)',
                }}
              >
                DOWNLOAD PROGRESS
              </p>
              <div
                className="cyber-progress"
                style={{
                  ['--progress-value' as string]: '65%',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <div className="cyber-progress__bar" />
              </div>

              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-2xs)',
                }}
              >
                THREAT ANALYSIS
              </p>
              <div
                className="cyber-progress cyber-progress--magenta"
                style={{
                  ['--progress-value' as string]: '45%',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <div className="cyber-progress__bar" />
              </div>

              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-2xs)',
                }}
              >
                SYSTEM HEALTH
              </p>
              <div
                className="cyber-progress cyber-progress--green"
                style={{ ['--progress-value' as string]: '92%' }}
              >
                <div className="cyber-progress__bar" />
              </div>
            </div>

            <div
              className="cyber-card cyber-flex cyber-flex--col cyber-items-center cyber-justify-center"
              style={{ minHeight: '200px' }}
            >
              <div className="cyber-spinner" />
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  marginTop: 'var(--space-md)',
                }}
              >
                SYNCHRONIZING...
              </p>
            </div>
          </div>
        </section>

        <div className="cyber-divider" />

        {/* Special Effects Section */}
        <section className="cyber-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">// Special Effects</h2>
            <p className="cyber-section__subtitle">Signature cyberpunk aesthetics</p>
          </div>

          <div className="cyber-grid cyber-grid--2">
            <div className="cyber-card cyber-neon-border" style={{ zIndex: 1 }}>
              <h4
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--cyber-cyan-500)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                Neon Border
              </h4>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Animated rainbow neon glow effect that cycles through all accent colors. Perfect for
                highlighting important elements.
              </p>
            </div>

            <div className="cyber-card cyber-datastream">
              <h4
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--cyber-cyan-500)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                Data Stream
              </h4>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Subtle animated gradient that simulates data flowing through the interface. Creates
                depth and movement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
