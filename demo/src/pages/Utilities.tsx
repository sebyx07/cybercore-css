import { Link, useParams } from 'react-router-dom';

import CodeBlock from '../components/CodeBlock';

const TABS = [
  { id: 'display', label: 'Display' },
  { id: 'flex', label: 'Flexbox' },
  { id: 'grid', label: 'Grid' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'text', label: 'Text' },
  { id: 'backgrounds', label: 'Backgrounds' },
  { id: 'borders', label: 'Borders' },
  { id: 'shadows', label: 'Shadows' },
  { id: 'transforms', label: 'Transforms' },
  { id: 'animation', label: 'Animation' },
  { id: 'accessibility', label: 'Accessibility' },
] as const;

type TabType = (typeof TABS)[number]['id'];

function Utilities() {
  const { tab } = useParams<{ tab?: string }>();
  const validIds = TABS.map((t) => t.id);
  const activeTab: TabType = validIds.includes(tab as TabType) ? (tab as TabType) : 'display';

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">
            &gt; UTILITY_CLASSES<span className="cursor">_</span>
          </p>
          <h1 className="cyber-h1 cyber-text-glow">Utilities</h1>
          <p className="cyber-lead">
            Low-level utility classes for rapid UI development. Compose layouts, spacing, colors, and effects.
          </p>
        </div>
      </header>

      <div className="demo-container">
        {/* Tabs Navigation */}
        <nav
          className="cyber-tabs cyber-tabs--fullwidth"
          style={{ marginBottom: 'var(--space-xl)' }}
        >
          {TABS.map((tabItem) => (
            <Link
              key={tabItem.id}
              to={`/utilities/${tabItem.id}`}
              className={`cyber-tab ${activeTab === tabItem.id ? 'cyber-tab--active' : ''}`}
            >
              {tabItem.label}
            </Link>
          ))}
        </nav>

        {/* Display Section */}
        {activeTab === 'display' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Display
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Control the display type of elements. All classes use the <code>cyber-</code> prefix.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div className="cyber-block cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  <code>.cyber-block</code> - Full width block
                </div>
                <span className="cyber-inline cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  <code>.cyber-inline</code>
                </span>
                <span className="cyber-inline cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  - Inline elements
                </span>
                <div className="cyber-inline-block cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  <code>.cyber-inline-block</code> - Inline with block props
                </div>
              </div>
              <CodeBlock
                title="Display Classes"
                language="html"
                code={`<div class="cyber-block">Block element</div>
<span class="cyber-inline">Inline element</span>
<div class="cyber-inline-block">Inline block</div>
<div class="cyber-hidden">Hidden element</div>`}
              />
            </div>

            <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
              <div className="demo-preview">
                <div className="cyber-flex cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                  <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Flex 1</div>
                  <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Flex 2</div>
                  <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Flex 3</div>
                </div>
              </div>
              <CodeBlock
                title="Flex & Grid Display"
                language="html"
                code={`<div class="cyber-flex">Flex container</div>
<div class="cyber-inline-flex">Inline flex</div>
<div class="cyber-grid">Grid container</div>`}
              />
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              All Display Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-hidden</code></td><td>display: none</td></tr>
                  <tr><td><code>.cyber-block</code></td><td>display: block</td></tr>
                  <tr><td><code>.cyber-inline</code></td><td>display: inline</td></tr>
                  <tr><td><code>.cyber-inline-block</code></td><td>display: inline-block</td></tr>
                  <tr><td><code>.cyber-flex</code></td><td>display: flex</td></tr>
                  <tr><td><code>.cyber-inline-flex</code></td><td>display: inline-flex</td></tr>
                  <tr><td><code>.cyber-grid</code></td><td>display: grid</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Flex Section */}
        {activeTab === 'flex' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Flexbox
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Flexbox utilities for controlling flex container behavior, item alignment, and spacing. Combine with <code>.cyber-flex</code> from display utilities.
            </p>

            {/* Direction */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Direction
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-row</code>
                  <div className="cyber-flex cyber-flex-row cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>1</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>2</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>3</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-col</code>
                  <div className="cyber-flex cyber-flex-col cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>1</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>2</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>3</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Flex Direction"
                language="html"
                code={`<!-- Row (horizontal) -->
<div class="cyber-flex cyber-flex-row cyber-gap-sm">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Column (vertical) -->
<div class="cyber-flex cyber-flex-col cyber-gap-sm">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
              />
            </div>

            {/* Wrap */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Wrap
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-wrap</code>
                  <div className="cyber-flex cyber-flex-wrap cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', maxWidth: '280px' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Item 1</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Item 2</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Item 3</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Item 4</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>Item 5</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-nowrap</code>
                  <div className="cyber-flex cyber-flex-nowrap cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', maxWidth: '280px', overflow: 'auto' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', flexShrink: 0 }}>Item 1</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', flexShrink: 0 }}>Item 2</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', flexShrink: 0 }}>Item 3</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', flexShrink: 0 }}>Item 4</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', flexShrink: 0 }}>Item 5</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Flex Wrap"
                language="html"
                code={`<!-- Wrap items to next line -->
<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Prevent wrapping (default) -->
<div class="cyber-flex cyber-flex-nowrap cyber-gap-sm">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              />
            </div>

            {/* Align Items */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Align Items
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-items-start</code>
                  <div className="cyber-flex cyber-items-start cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', minHeight: '80px' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-items-center</code>
                  <div className="cyber-flex cyber-items-center cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', minHeight: '80px' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-items-end</code>
                  <div className="cyber-flex cyber-items-end cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', minHeight: '80px' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-items-stretch</code>
                  <div className="cyber-flex cyber-items-stretch cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', minHeight: '80px' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Align Items"
                language="html"
                code={`<!-- Align to start (top) -->
<div class="cyber-flex cyber-items-start">...</div>

<!-- Align to center -->
<div class="cyber-flex cyber-items-center">...</div>

<!-- Align to end (bottom) -->
<div class="cyber-flex cyber-items-end">...</div>

<!-- Stretch to fill (default) -->
<div class="cyber-flex cyber-items-stretch">...</div>`}
              />
            </div>

            {/* Justify Content */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Justify Content
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-justify-start</code>
                  <div className="cyber-flex cyber-justify-start cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-justify-center</code>
                  <div className="cyber-flex cyber-justify-center cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-justify-end</code>
                  <div className="cyber-flex cyber-justify-end cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-justify-between</code>
                  <div className="cyber-flex cyber-justify-between" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-justify-around</code>
                  <div className="cyber-flex cyber-justify-around" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Justify Content"
                language="html"
                code={`<!-- Pack items to start (left) -->
<div class="cyber-flex cyber-justify-start">...</div>

<!-- Center items -->
<div class="cyber-flex cyber-justify-center">...</div>

<!-- Pack items to end (right) -->
<div class="cyber-flex cyber-justify-end">...</div>

<!-- Distribute with space between -->
<div class="cyber-flex cyber-justify-between">...</div>

<!-- Distribute with space around -->
<div class="cyber-flex cyber-justify-around">...</div>`}
              />
            </div>

            {/* Gap */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Gap
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-gap-xs</code>
                  <div className="cyber-flex cyber-gap-xs" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-gap-sm</code>
                  <div className="cyber-flex cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-gap-md</code>
                  <div className="cyber-flex cyber-gap-md" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-gap-lg</code>
                  <div className="cyber-flex cyber-gap-lg" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-gap-xl</code>
                  <div className="cyber-flex cyber-gap-xl" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>C</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Gap Spacing"
                language="html"
                code={`<div class="cyber-flex cyber-gap-xs">...</div>  <!-- Extra small -->
<div class="cyber-flex cyber-gap-sm">...</div>  <!-- Small -->
<div class="cyber-flex cyber-gap-md">...</div>  <!-- Medium -->
<div class="cyber-flex cyber-gap-lg">...</div>  <!-- Large -->
<div class="cyber-flex cyber-gap-xl">...</div>  <!-- Extra large -->`}
              />
            </div>

            {/* Flex Grow/Shrink */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Flex Grow / Shrink
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-1</code>
                  <div className="cyber-flex cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-flex-1 cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', textAlign: 'center' }}>flex-1</div>
                    <div className="cyber-flex-1 cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', textAlign: 'center' }}>flex-1</div>
                    <div className="cyber-flex-1 cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', textAlign: 'center' }}>flex-1</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-auto</code>
                  <div className="cyber-flex cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-flex-auto cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', textAlign: 'center' }}>auto (short)</div>
                    <div className="cyber-flex-auto cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', textAlign: 'center' }}>auto (longer content)</div>
                  </div>
                </div>
                <div>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-flex-none</code>
                  <div className="cyber-flex cyber-gap-sm" style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                    <div className="cyber-flex-none cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)' }}>none</div>
                    <div className="cyber-flex-1 cyber-p-sm" style={{ background: 'var(--cyber-cyan-900)', textAlign: 'center' }}>flex-1 fills remaining space</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Flex Grow/Shrink"
                language="html"
                code={`<!-- Equal width items (ignores content size) -->
<div class="cyber-flex cyber-gap-sm">
  <div class="cyber-flex-1">Equal</div>
  <div class="cyber-flex-1">Equal</div>
  <div class="cyber-flex-1">Equal</div>
</div>

<!-- Size based on content, grow equally -->
<div class="cyber-flex cyber-gap-sm">
  <div class="cyber-flex-auto">Short</div>
  <div class="cyber-flex-auto">Longer content</div>
</div>

<!-- Fixed size item + flexible item -->
<div class="cyber-flex cyber-gap-sm">
  <div class="cyber-flex-none">Fixed</div>
  <div class="cyber-flex-1">Takes remaining space</div>
</div>`}
              />
            </div>

            {/* Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              All Flexbox Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={2} style={{ background: 'var(--color-bg-elevated)', fontWeight: 'bold' }}>Direction</td></tr>
                  <tr><td><code>.cyber-flex-row</code></td><td>flex-direction: row</td></tr>
                  <tr><td><code>.cyber-flex-col</code></td><td>flex-direction: column</td></tr>
                  <tr><td colSpan={2} style={{ background: 'var(--color-bg-elevated)', fontWeight: 'bold' }}>Wrap</td></tr>
                  <tr><td><code>.cyber-flex-wrap</code></td><td>flex-wrap: wrap</td></tr>
                  <tr><td><code>.cyber-flex-nowrap</code></td><td>flex-wrap: nowrap</td></tr>
                  <tr><td colSpan={2} style={{ background: 'var(--color-bg-elevated)', fontWeight: 'bold' }}>Align Items</td></tr>
                  <tr><td><code>.cyber-items-start</code></td><td>align-items: flex-start</td></tr>
                  <tr><td><code>.cyber-items-center</code></td><td>align-items: center</td></tr>
                  <tr><td><code>.cyber-items-end</code></td><td>align-items: flex-end</td></tr>
                  <tr><td><code>.cyber-items-stretch</code></td><td>align-items: stretch</td></tr>
                  <tr><td colSpan={2} style={{ background: 'var(--color-bg-elevated)', fontWeight: 'bold' }}>Justify Content</td></tr>
                  <tr><td><code>.cyber-justify-start</code></td><td>justify-content: flex-start</td></tr>
                  <tr><td><code>.cyber-justify-center</code></td><td>justify-content: center</td></tr>
                  <tr><td><code>.cyber-justify-end</code></td><td>justify-content: flex-end</td></tr>
                  <tr><td><code>.cyber-justify-between</code></td><td>justify-content: space-between</td></tr>
                  <tr><td><code>.cyber-justify-around</code></td><td>justify-content: space-around</td></tr>
                  <tr><td colSpan={2} style={{ background: 'var(--color-bg-elevated)', fontWeight: 'bold' }}>Gap</td></tr>
                  <tr><td><code>.cyber-gap-xs</code></td><td>gap: var(--space-xs)</td></tr>
                  <tr><td><code>.cyber-gap-sm</code></td><td>gap: var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-gap-md</code></td><td>gap: var(--space-md)</td></tr>
                  <tr><td><code>.cyber-gap-lg</code></td><td>gap: var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-gap-xl</code></td><td>gap: var(--space-xl)</td></tr>
                  <tr><td colSpan={2} style={{ background: 'var(--color-bg-elevated)', fontWeight: 'bold' }}>Flex Sizing</td></tr>
                  <tr><td><code>.cyber-flex-1</code></td><td>flex: 1 1 0%</td></tr>
                  <tr><td><code>.cyber-flex-auto</code></td><td>flex: 1 1 auto</td></tr>
                  <tr><td><code>.cyber-flex-none</code></td><td>flex: none</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Grid Section */}
        {activeTab === 'grid' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Grid
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Build responsive grid layouts with minimal markup. Fixed column grids automatically
              stack on smaller screens, while auto-fit grids dynamically adjust based on available space.
            </p>

            {/* Fixed Column Grids */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Fixed Column Grids
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              These grids maintain a fixed number of columns on larger screens but automatically
              stack on mobile using <code>auto-fit</code> with responsive breakpoints.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-grid--2</code> (2 columns at 640px+)
                  </p>
                  <div className="cyber-grid--2">
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)', border: '1px solid var(--cyber-cyan-500)' }}>1</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)', border: '1px solid var(--cyber-cyan-500)' }}>2</div>
                  </div>
                </div>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-grid--3</code> (3 columns at 768px+)
                  </p>
                  <div className="cyber-grid--3">
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-magenta-900)', border: '1px solid var(--cyber-magenta-500)' }}>1</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-magenta-900)', border: '1px solid var(--cyber-magenta-500)' }}>2</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-magenta-900)', border: '1px solid var(--cyber-magenta-500)' }}>3</div>
                  </div>
                </div>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-grid--4</code> (4 columns at 1024px+)
                  </p>
                  <div className="cyber-grid--4">
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-yellow-900)', border: '1px solid var(--cyber-yellow-500)' }}>1</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-yellow-900)', border: '1px solid var(--cyber-yellow-500)' }}>2</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-yellow-900)', border: '1px solid var(--cyber-yellow-500)' }}>3</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-yellow-900)', border: '1px solid var(--cyber-yellow-500)' }}>4</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Fixed Column Grids"
                language="html"
                code={`<!-- 2-column grid -->
<div class="cyber-grid--2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3-column grid -->
<div class="cyber-grid--3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 4-column grid -->
<div class="cyber-grid--4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>`}
              />
            </div>

            {/* Auto-fit Grids */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Auto-fit Grids
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Fully fluid grids that automatically adjust column count based on container width.
              Items wrap naturally without fixed breakpoints.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-grid--auto-sm</code> (min 150px columns)
                  </p>
                  <div className="cyber-grid--auto-sm">
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-green-900)', border: '1px solid var(--cyber-green-500)', textAlign: 'center' }}>A</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-green-900)', border: '1px solid var(--cyber-green-500)', textAlign: 'center' }}>B</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-green-900)', border: '1px solid var(--cyber-green-500)', textAlign: 'center' }}>C</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-green-900)', border: '1px solid var(--cyber-green-500)', textAlign: 'center' }}>D</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-green-900)', border: '1px solid var(--cyber-green-500)', textAlign: 'center' }}>E</div>
                    <div className="cyber-p-sm" style={{ background: 'var(--cyber-green-900)', border: '1px solid var(--cyber-green-500)', textAlign: 'center' }}>F</div>
                  </div>
                </div>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-grid--auto-md</code> (min 250px columns)
                  </p>
                  <div className="cyber-grid--auto-md">
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)', border: '1px solid var(--cyber-cyan-500)', textAlign: 'center' }}>Item 1</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)', border: '1px solid var(--cyber-cyan-500)', textAlign: 'center' }}>Item 2</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)', border: '1px solid var(--cyber-cyan-500)', textAlign: 'center' }}>Item 3</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-900)', border: '1px solid var(--cyber-cyan-500)', textAlign: 'center' }}>Item 4</div>
                  </div>
                </div>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-grid--auto-lg</code> (min 350px columns)
                  </p>
                  <div className="cyber-grid--auto-lg">
                    <div className="cyber-p-lg" style={{ background: 'var(--cyber-magenta-900)', border: '1px solid var(--cyber-magenta-500)', textAlign: 'center' }}>Large A</div>
                    <div className="cyber-p-lg" style={{ background: 'var(--cyber-magenta-900)', border: '1px solid var(--cyber-magenta-500)', textAlign: 'center' }}>Large B</div>
                    <div className="cyber-p-lg" style={{ background: 'var(--cyber-magenta-900)', border: '1px solid var(--cyber-magenta-500)', textAlign: 'center' }}>Large C</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Auto-fit Grids"
                language="html"
                code={`<!-- Small items (150px min) -->
<div class="cyber-grid--auto-sm">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <!-- Columns wrap automatically -->
</div>

<!-- Medium items (250px min) -->
<div class="cyber-grid--auto-md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Large items (350px min) -->
<div class="cyber-grid--auto-lg">
  <div>Large A</div>
  <div>Large B</div>
</div>`}
              />
            </div>

            {/* Column Span Utilities */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Column Span Utilities
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Control how many columns an item spans within a grid layout. Useful for featured items
              or creating visual hierarchy.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-col-span-2</code> in a 4-column grid
                  </p>
                  <div className="cyber-grid--4">
                    <div className="cyber-col-span-2 cyber-p-md" style={{ background: 'var(--cyber-cyan-700)', border: '1px solid var(--cyber-cyan-400)' }}>Span 2</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-void-700)', border: '1px solid var(--cyber-chrome-600)' }}>1</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-void-700)', border: '1px solid var(--cyber-chrome-600)' }}>1</div>
                  </div>
                </div>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-col-span-3</code> in a 4-column grid
                  </p>
                  <div className="cyber-grid--4">
                    <div className="cyber-col-span-3 cyber-p-md" style={{ background: 'var(--cyber-magenta-700)', border: '1px solid var(--cyber-magenta-400)' }}>Span 3</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-void-700)', border: '1px solid var(--cyber-chrome-600)' }}>1</div>
                  </div>
                </div>
                <div>
                  <p className="cyber-text-sm cyber-text-muted" style={{ marginBottom: 'var(--space-xs)' }}>
                    <code>.cyber-col-span-full</code> spans entire row
                  </p>
                  <div className="cyber-grid--3">
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-void-700)', border: '1px solid var(--cyber-chrome-600)' }}>1</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-void-700)', border: '1px solid var(--cyber-chrome-600)' }}>2</div>
                    <div className="cyber-p-md" style={{ background: 'var(--cyber-void-700)', border: '1px solid var(--cyber-chrome-600)' }}>3</div>
                    <div className="cyber-col-span-full cyber-p-md" style={{ background: 'var(--cyber-yellow-700)', border: '1px solid var(--cyber-yellow-400)' }}>Full Width Row</div>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Column Span Utilities"
                language="html"
                code={`<div class="cyber-grid--4">
  <!-- Spans 2 columns -->
  <div class="cyber-col-span-2">Featured</div>
  <div>Normal</div>
  <div>Normal</div>
</div>

<div class="cyber-grid--4">
  <!-- Spans 3 columns -->
  <div class="cyber-col-span-3">Wide item</div>
  <div>Narrow</div>
</div>

<div class="cyber-grid--3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <!-- Spans all columns -->
  <div class="cyber-col-span-full">Full width</div>
</div>`}
              />
            </div>

            {/* Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              All Grid Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                    <th>Breakpoint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.cyber-grid--2</code></td>
                    <td>2-column grid with auto-fit fallback</td>
                    <td>640px+</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-grid--3</code></td>
                    <td>3-column grid with auto-fit fallback</td>
                    <td>768px+</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-grid--4</code></td>
                    <td>4-column grid with auto-fit fallback</td>
                    <td>1024px+</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-grid--auto-sm</code></td>
                    <td>Auto-fit grid, 150px minimum columns</td>
                    <td>Fluid</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-grid--auto-md</code></td>
                    <td>Auto-fit grid, 250px minimum columns</td>
                    <td>Fluid</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-grid--auto-lg</code></td>
                    <td>Auto-fit grid, 350px minimum columns</td>
                    <td>Fluid</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-col-span-2</code></td>
                    <td>Item spans 2 columns</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-col-span-3</code></td>
                    <td>Item spans 3 columns</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-col-span-full</code></td>
                    <td>Item spans all columns (1 / -1)</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Spacing Section */}
        {activeTab === 'spacing' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Spacing
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Control margin and padding with utility classes. The spacing scale uses fluid values that adapt to viewport size: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
            </p>

            {/* Margin All Sides */}
            <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
              Margin (All Sides)
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-sm)' }}>
                <div style={{ background: 'var(--cyber-magenta-800)', padding: '2px' }}>
                  <div className="cyber-m-0" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-m-0</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)', padding: '2px' }}>
                  <div className="cyber-m-xs" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-m-xs</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)', padding: '2px' }}>
                  <div className="cyber-m-sm" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-m-sm</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)', padding: '2px' }}>
                  <div className="cyber-m-md" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-m-md</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)', padding: '2px' }}>
                  <div className="cyber-m-lg" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-m-lg</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Margin All Sides"
                language="html"
                code={`<div class="cyber-m-0">No margin</div>
<div class="cyber-m-auto">Auto margin (centering)</div>
<div class="cyber-m-xs">Extra small margin</div>
<div class="cyber-m-sm">Small margin</div>
<div class="cyber-m-md">Medium margin</div>
<div class="cyber-m-lg">Large margin</div>`}
              />
            </div>

            {/* Horizontal Margin */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Horizontal Margin (mx)
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mx-auto" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)', width: 'fit-content' }}>
                    <code>.cyber-mx-auto</code> (centered)
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mx-sm" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)', display: 'inline-block' }}>
                    <code>.cyber-mx-sm</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mx-md" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)', display: 'inline-block' }}>
                    <code>.cyber-mx-md</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mx-lg" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)', display: 'inline-block' }}>
                    <code>.cyber-mx-lg</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Horizontal Margin"
                language="html"
                code={`<div class="cyber-mx-auto">Auto horizontal (center)</div>
<div class="cyber-mx-sm">Small horizontal margin</div>
<div class="cyber-mx-md">Medium horizontal margin</div>
<div class="cyber-mx-lg">Large horizontal margin</div>`}
              />
            </div>

            {/* Vertical Margin */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Vertical Margin (my)
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0' }}>
                <div style={{ background: 'var(--cyber-magenta-800)', marginBottom: 'var(--space-xs)' }}>
                  <div className="cyber-my-sm" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-my-sm</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)', marginBottom: 'var(--space-xs)' }}>
                  <div className="cyber-my-md" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-my-md</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)', marginBottom: 'var(--space-xs)' }}>
                  <div className="cyber-my-lg" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-my-lg</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-my-xl" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-my-xl</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Vertical Margin"
                language="html"
                code={`<div class="cyber-my-sm">Small vertical margin</div>
<div class="cyber-my-md">Medium vertical margin</div>
<div class="cyber-my-lg">Large vertical margin</div>
<div class="cyber-my-xl">Extra large vertical margin</div>`}
              />
            </div>

            {/* Top/Bottom Margin */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Top and Bottom Margin (mt, mb)
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mt-md" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-mt-md</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mb-md" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-mb-md</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mt-lg" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-mt-lg</code>
                  </div>
                </div>
                <div style={{ background: 'var(--cyber-magenta-800)' }}>
                  <div className="cyber-mb-lg" style={{ background: 'var(--cyber-cyan-800)', padding: 'var(--space-xs)' }}>
                    <code>.cyber-mb-lg</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Top/Bottom Margin"
                language="html"
                code={`<!-- Top margin -->
<div class="cyber-mt-0">No top margin</div>
<div class="cyber-mt-xs">Extra small top margin</div>
<div class="cyber-mt-sm">Small top margin</div>
<div class="cyber-mt-md">Medium top margin</div>
<div class="cyber-mt-lg">Large top margin</div>
<div class="cyber-mt-xl">Extra large top margin</div>

<!-- Bottom margin -->
<div class="cyber-mb-0">No bottom margin</div>
<div class="cyber-mb-xs">Extra small bottom margin</div>
<div class="cyber-mb-sm">Small bottom margin</div>
<div class="cyber-mb-md">Medium bottom margin</div>
<div class="cyber-mb-lg">Large bottom margin</div>
<div class="cyber-mb-xl">Extra large bottom margin</div>`}
              />
            </div>

            {/* Padding All Sides */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Padding (All Sides)
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
                <div className="cyber-p-0" style={{ background: 'var(--cyber-cyan-800)', border: '1px solid var(--cyber-cyan-500)' }}>
                  <code>.cyber-p-0</code>
                </div>
                <div className="cyber-p-xs" style={{ background: 'var(--cyber-cyan-800)', border: '1px solid var(--cyber-cyan-500)' }}>
                  <code>.cyber-p-xs</code>
                </div>
                <div className="cyber-p-sm" style={{ background: 'var(--cyber-cyan-800)', border: '1px solid var(--cyber-cyan-500)' }}>
                  <code>.cyber-p-sm</code>
                </div>
                <div className="cyber-p-md" style={{ background: 'var(--cyber-cyan-800)', border: '1px solid var(--cyber-cyan-500)' }}>
                  <code>.cyber-p-md</code>
                </div>
                <div className="cyber-p-lg" style={{ background: 'var(--cyber-cyan-800)', border: '1px solid var(--cyber-cyan-500)' }}>
                  <code>.cyber-p-lg</code>
                </div>
                <div className="cyber-p-xl" style={{ background: 'var(--cyber-cyan-800)', border: '1px solid var(--cyber-cyan-500)' }}>
                  <code>.cyber-p-xl</code>
                </div>
              </div>
              <CodeBlock
                title="Padding All Sides"
                language="html"
                code={`<div class="cyber-p-0">No padding</div>
<div class="cyber-p-xs">Extra small padding</div>
<div class="cyber-p-sm">Small padding</div>
<div class="cyber-p-md">Medium padding</div>
<div class="cyber-p-lg">Large padding</div>
<div class="cyber-p-xl">Extra large padding</div>`}
              />
            </div>

            {/* Horizontal/Vertical Padding */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Horizontal and Vertical Padding (px, py)
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
                <div className="cyber-px-lg cyber-py-xs" style={{ background: 'var(--cyber-green-800)', border: '1px solid var(--cyber-green-500)' }}>
                  <code>.cyber-px-lg .cyber-py-xs</code>
                </div>
                <div className="cyber-px-sm cyber-py-lg" style={{ background: 'var(--cyber-yellow-800)', border: '1px solid var(--cyber-yellow-500)' }}>
                  <code>.cyber-px-sm .cyber-py-lg</code>
                </div>
                <div className="cyber-px-md cyber-py-md" style={{ background: 'var(--cyber-magenta-800)', border: '1px solid var(--cyber-magenta-500)' }}>
                  <code>.cyber-px-md .cyber-py-md</code>
                </div>
              </div>
              <CodeBlock
                title="Horizontal/Vertical Padding"
                language="html"
                code={`<!-- Horizontal padding (left + right) -->
<div class="cyber-px-0">No horizontal padding</div>
<div class="cyber-px-sm">Small horizontal padding</div>
<div class="cyber-px-md">Medium horizontal padding</div>
<div class="cyber-px-lg">Large horizontal padding</div>

<!-- Vertical padding (top + bottom) -->
<div class="cyber-py-0">No vertical padding</div>
<div class="cyber-py-sm">Small vertical padding</div>
<div class="cyber-py-md">Medium vertical padding</div>
<div class="cyber-py-lg">Large vertical padding</div>
<div class="cyber-py-xl">Extra large vertical padding</div>

<!-- Combined -->
<div class="cyber-px-lg cyber-py-sm">Wide button style</div>`}
              />
            </div>

            {/* Margin Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Margin Classes Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-m-0</code></td><td>margin</td><td>0</td></tr>
                  <tr><td><code>.cyber-m-auto</code></td><td>margin</td><td>auto</td></tr>
                  <tr><td><code>.cyber-m-xs</code></td><td>margin</td><td>var(--space-xs)</td></tr>
                  <tr><td><code>.cyber-m-sm</code></td><td>margin</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-m-md</code></td><td>margin</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-m-lg</code></td><td>margin</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-mx-auto</code></td><td>margin-inline</td><td>auto</td></tr>
                  <tr><td><code>.cyber-mx-sm</code></td><td>margin-inline</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-mx-md</code></td><td>margin-inline</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-mx-lg</code></td><td>margin-inline</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-my-sm</code></td><td>margin-block</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-my-md</code></td><td>margin-block</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-my-lg</code></td><td>margin-block</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-my-xl</code></td><td>margin-block</td><td>var(--space-xl)</td></tr>
                  <tr><td><code>.cyber-mt-0</code></td><td>margin-top</td><td>0</td></tr>
                  <tr><td><code>.cyber-mt-xs</code></td><td>margin-top</td><td>var(--space-xs)</td></tr>
                  <tr><td><code>.cyber-mt-sm</code></td><td>margin-top</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-mt-md</code></td><td>margin-top</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-mt-lg</code></td><td>margin-top</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-mt-xl</code></td><td>margin-top</td><td>var(--space-xl)</td></tr>
                  <tr><td><code>.cyber-mb-0</code></td><td>margin-bottom</td><td>0</td></tr>
                  <tr><td><code>.cyber-mb-xs</code></td><td>margin-bottom</td><td>var(--space-xs)</td></tr>
                  <tr><td><code>.cyber-mb-sm</code></td><td>margin-bottom</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-mb-md</code></td><td>margin-bottom</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-mb-lg</code></td><td>margin-bottom</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-mb-xl</code></td><td>margin-bottom</td><td>var(--space-xl)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Padding Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Padding Classes Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-p-0</code></td><td>padding</td><td>0</td></tr>
                  <tr><td><code>.cyber-p-xs</code></td><td>padding</td><td>var(--space-xs)</td></tr>
                  <tr><td><code>.cyber-p-sm</code></td><td>padding</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-p-md</code></td><td>padding</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-p-lg</code></td><td>padding</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-p-xl</code></td><td>padding</td><td>var(--space-xl)</td></tr>
                  <tr><td><code>.cyber-px-0</code></td><td>padding-inline</td><td>0</td></tr>
                  <tr><td><code>.cyber-px-sm</code></td><td>padding-inline</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-px-md</code></td><td>padding-inline</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-px-lg</code></td><td>padding-inline</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-py-0</code></td><td>padding-block</td><td>0</td></tr>
                  <tr><td><code>.cyber-py-sm</code></td><td>padding-block</td><td>var(--space-sm)</td></tr>
                  <tr><td><code>.cyber-py-md</code></td><td>padding-block</td><td>var(--space-md)</td></tr>
                  <tr><td><code>.cyber-py-lg</code></td><td>padding-block</td><td>var(--space-lg)</td></tr>
                  <tr><td><code>.cyber-py-xl</code></td><td>padding-block</td><td>var(--space-xl)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Spacing Scale Reference */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Spacing Scale
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              The spacing utilities use CSS custom properties with fluid values that scale with viewport width:
            </p>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Min Value</th>
                    <th>Max Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>--space-xs</code></td><td>0.75rem (12px)</td><td>0.94rem (15px)</td></tr>
                  <tr><td><code>--space-sm</code></td><td>1rem (16px)</td><td>1.25rem (20px)</td></tr>
                  <tr><td><code>--space-md</code></td><td>1.5rem (24px)</td><td>1.88rem (30px)</td></tr>
                  <tr><td><code>--space-lg</code></td><td>2rem (32px)</td><td>2.5rem (40px)</td></tr>
                  <tr><td><code>--space-xl</code></td><td>3rem (48px)</td><td>3.75rem (60px)</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Text Section */}
        {activeTab === 'text' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Text
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Control text appearance including alignment, colors, glow effects, font weights, families, transforms, and overflow behavior. These utilities help style typography without writing custom CSS.
            </p>

            {/* Text Alignment */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Text Alignment
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div className="cyber-text-left cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  <code>.cyber-text-left</code> - Left aligned text
                </div>
                <div className="cyber-text-center cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  <code>.cyber-text-center</code> - Center aligned text
                </div>
                <div className="cyber-text-right cyber-p-sm" style={{ background: 'var(--color-bg-elevated)' }}>
                  <code>.cyber-text-right</code> - Right aligned text
                </div>
              </div>
              <CodeBlock
                title="Text Alignment"
                language="html"
                code={`<p class="cyber-text-left">Left aligned text</p>
<p class="cyber-text-center">Center aligned text</p>
<p class="cyber-text-right">Right aligned text</p>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-text-left</code></td><td>text-align: left</td></tr>
                  <tr><td><code>.cyber-text-center</code></td><td>text-align: center</td></tr>
                  <tr><td><code>.cyber-text-right</code></td><td>text-align: right</td></tr>
                </tbody>
              </table>
            </div>

            {/* Text Colors */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Text Colors
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <p className="cyber-text-primary cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-primary</code> - Primary text color
                </p>
                <p className="cyber-text-secondary cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-secondary</code> - Secondary text color
                </p>
                <p className="cyber-text-muted cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-muted</code> - Muted text color
                </p>
                <p className="cyber-text-cyan cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-cyan</code> - Cyan accent
                </p>
                <p className="cyber-text-magenta cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-magenta</code> - Magenta accent
                </p>
                <p className="cyber-text-yellow cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-yellow</code> - Yellow accent
                </p>
                <p className="cyber-text-green cyber-p-sm" style={{ margin: 0 }}>
                  <code>.cyber-text-green</code> - Green accent
                </p>
              </div>
              <CodeBlock
                title="Text Colors"
                language="html"
                code={`<p class="cyber-text-primary">Primary text</p>
<p class="cyber-text-secondary">Secondary text</p>
<p class="cyber-text-muted">Muted text</p>
<p class="cyber-text-cyan">Cyan accent text</p>
<p class="cyber-text-magenta">Magenta accent text</p>
<p class="cyber-text-yellow">Yellow accent text</p>
<p class="cyber-text-green">Green accent text</p>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-text-primary</code></td><td>color: var(--color-text-primary)</td></tr>
                  <tr><td><code>.cyber-text-secondary</code></td><td>color: var(--color-text-secondary)</td></tr>
                  <tr><td><code>.cyber-text-muted</code></td><td>color: var(--color-text-muted)</td></tr>
                  <tr><td><code>.cyber-text-cyan</code></td><td>color: var(--cyber-cyan-500)</td></tr>
                  <tr><td><code>.cyber-text-magenta</code></td><td>color: var(--cyber-magenta-500)</td></tr>
                  <tr><td><code>.cyber-text-yellow</code></td><td>color: var(--cyber-yellow-500)</td></tr>
                  <tr><td><code>.cyber-text-green</code></td><td>color: var(--cyber-green-500)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Text Glow */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Text Glow
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <p className="cyber-text-glow cyber-h3" style={{ margin: 0 }}>
                  Cyan Glow Effect
                </p>
                <p className="cyber-text-glow--magenta cyber-h3" style={{ margin: 0 }}>
                  Magenta Glow Effect
                </p>
                <p className="cyber-text-glow--yellow cyber-h3" style={{ margin: 0 }}>
                  Yellow Glow Effect
                </p>
                <p className="cyber-text-glow--green cyber-h3" style={{ margin: 0 }}>
                  Green Glow Effect
                </p>
              </div>
              <CodeBlock
                title="Text Glow"
                language="html"
                code={`<h2 class="cyber-text-glow">Cyan Glow Effect</h2>
<h2 class="cyber-text-glow--magenta">Magenta Glow Effect</h2>
<h2 class="cyber-text-glow--yellow">Yellow Glow Effect</h2>
<h2 class="cyber-text-glow--green">Green Glow Effect</h2>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Color</th>
                    <th>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-text-glow</code></td><td>Cyan</td><td>text-shadow: var(--glow-text-cyan)</td></tr>
                  <tr><td><code>.cyber-text-glow--magenta</code></td><td>Magenta</td><td>text-shadow: var(--glow-text-magenta)</td></tr>
                  <tr><td><code>.cyber-text-glow--yellow</code></td><td>Yellow</td><td>text-shadow: var(--glow-text-yellow)</td></tr>
                  <tr><td><code>.cyber-text-glow--green</code></td><td>Green</td><td>text-shadow: var(--glow-text-green)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Font Weights */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Font Weights
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <p className="cyber-font-normal" style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                  <code>.cyber-font-normal</code> - Normal weight (400)
                </p>
                <p className="cyber-font-medium" style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                  <code>.cyber-font-medium</code> - Medium weight (500)
                </p>
                <p className="cyber-font-semibold" style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                  <code>.cyber-font-semibold</code> - Semibold weight (600)
                </p>
                <p className="cyber-font-bold" style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                  <code>.cyber-font-bold</code> - Bold weight (700)
                </p>
              </div>
              <CodeBlock
                title="Font Weights"
                language="html"
                code={`<p class="cyber-font-normal">Normal weight (400)</p>
<p class="cyber-font-medium">Medium weight (500)</p>
<p class="cyber-font-semibold">Semibold weight (600)</p>
<p class="cyber-font-bold">Bold weight (700)</p>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-font-normal</code></td><td>font-weight: 400</td></tr>
                  <tr><td><code>.cyber-font-medium</code></td><td>font-weight: 500</td></tr>
                  <tr><td><code>.cyber-font-semibold</code></td><td>font-weight: 600</td></tr>
                  <tr><td><code>.cyber-font-bold</code></td><td>font-weight: 700</td></tr>
                </tbody>
              </table>
            </div>

            {/* Font Families */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Font Families
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <p className="cyber-font-display" style={{ margin: 0, fontSize: 'var(--text-xl)' }}>
                  Display font for headings and emphasis
                </p>
                <p className="cyber-font-body" style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                  Body font for readable content and paragraphs
                </p>
                <p className="cyber-font-mono" style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                  Monospace font for code and technical text
                </p>
              </div>
              <CodeBlock
                title="Font Families"
                language="html"
                code={`<h2 class="cyber-font-display">Display font</h2>
<p class="cyber-font-body">Body font for content</p>
<code class="cyber-font-mono">Monospace for code</code>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-font-display</code></td><td>font-family: var(--font-display)</td></tr>
                  <tr><td><code>.cyber-font-body</code></td><td>font-family: var(--font-body)</td></tr>
                  <tr><td><code>.cyber-font-mono</code></td><td>font-family: var(--font-mono)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Text Transform */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Text Transform
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <p className="cyber-uppercase cyber-p-sm" style={{ margin: 0, background: 'var(--color-bg-elevated)' }}>
                  Uppercase text with wider tracking
                </p>
                <p className="cyber-lowercase cyber-p-sm" style={{ margin: 0, background: 'var(--color-bg-elevated)' }}>
                  LOWERCASE TEXT CONVERSION
                </p>
                <p className="cyber-capitalize cyber-p-sm" style={{ margin: 0, background: 'var(--color-bg-elevated)' }}>
                  capitalize each word in sentence
                </p>
              </div>
              <CodeBlock
                title="Text Transform"
                language="html"
                code={`<p class="cyber-uppercase">Uppercase with tracking</p>
<p class="cyber-lowercase">Lowercase text</p>
<p class="cyber-capitalize">Capitalize each word</p>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-uppercase</code></td><td>text-transform: uppercase; letter-spacing: var(--tracking-wider)</td></tr>
                  <tr><td><code>.cyber-lowercase</code></td><td>text-transform: lowercase</td></tr>
                  <tr><td><code>.cyber-capitalize</code></td><td>text-transform: capitalize</td></tr>
                </tbody>
              </table>
            </div>

            {/* Text Overflow */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Text Overflow
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div style={{ maxWidth: '300px', background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                  <p className="cyber-truncate" style={{ margin: 0 }}>
                    This is a very long line of text that will be truncated with an ellipsis when it overflows the container width.
                  </p>
                  <code style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>.cyber-truncate</code>
                </div>
                <div style={{ maxWidth: '300px', background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                  <p className="cyber-line-clamp-2" style={{ margin: 0 }}>
                    This is a multi-line text that will be clamped to two lines. Any content beyond the second line will be hidden and an ellipsis will appear at the end of the visible text.
                  </p>
                  <code style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>.cyber-line-clamp-2</code>
                </div>
                <div style={{ maxWidth: '300px', background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)' }}>
                  <p className="cyber-line-clamp-3" style={{ margin: 0 }}>
                    This is a multi-line text that will be clamped to three lines. Any content beyond the third line will be hidden and an ellipsis will appear. This is useful for card descriptions and preview text where you want consistent heights.
                  </p>
                  <code style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>.cyber-line-clamp-3</code>
                </div>
              </div>
              <CodeBlock
                title="Text Overflow"
                language="html"
                code={`<!-- Single line truncation -->
<p class="cyber-truncate">Long text truncated...</p>

<!-- Multi-line clamping -->
<p class="cyber-line-clamp-2">Text clamped to 2 lines...</p>
<p class="cyber-line-clamp-3">Text clamped to 3 lines...</p>`}
              />
            </div>

            <div className="cyber-table-wrapper" style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-truncate</code></td><td>overflow: hidden; white-space: nowrap; text-overflow: ellipsis</td></tr>
                  <tr><td><code>.cyber-line-clamp-2</code></td><td>display: -webkit-box; -webkit-line-clamp: 2; overflow: hidden</td></tr>
                  <tr><td><code>.cyber-line-clamp-3</code></td><td>display: -webkit-box; -webkit-line-clamp: 3; overflow: hidden</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Backgrounds Section */}
        {activeTab === 'backgrounds' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Backgrounds
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Control background colors, gradients, and image properties. From themed surfaces to vibrant accent colors and gradient effects.
            </p>

            {/* Theme Backgrounds */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Theme Backgrounds
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Semantic background colors that adapt to the theme. Use these for layered UI surfaces.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div className="cyber-bg-transparent cyber-p-md" style={{ border: '1px dashed var(--cyber-chrome-600)' }}>
                  <code>.cyber-bg-transparent</code>
                </div>
                <div className="cyber-bg-primary cyber-p-md">
                  <code>.cyber-bg-primary</code>
                </div>
                <div className="cyber-bg-secondary cyber-p-md">
                  <code>.cyber-bg-secondary</code>
                </div>
                <div className="cyber-bg-tertiary cyber-p-md">
                  <code>.cyber-bg-tertiary</code>
                </div>
                <div className="cyber-bg-elevated cyber-p-md">
                  <code>.cyber-bg-elevated</code>
                </div>
              </div>
              <CodeBlock
                title="Theme Backgrounds"
                language="html"
                code={`<div class="cyber-bg-transparent">Transparent</div>
<div class="cyber-bg-primary">Primary surface</div>
<div class="cyber-bg-secondary">Secondary surface</div>
<div class="cyber-bg-tertiary">Tertiary surface</div>
<div class="cyber-bg-elevated">Elevated surface</div>`}
              />
            </div>

            {/* Accent Backgrounds */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Accent Backgrounds
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Vibrant accent colors for highlighting content. Subtle variants use 15% opacity for softer emphasis.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-cyan cyber-p-md" style={{ minWidth: '140px', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-cyan</code>
                  </div>
                  <div className="cyber-bg-cyan-subtle cyber-p-md" style={{ minWidth: '140px' }}>
                    <code>.cyber-bg-cyan-subtle</code>
                  </div>
                </div>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-magenta cyber-p-md" style={{ minWidth: '140px', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-magenta</code>
                  </div>
                  <div className="cyber-bg-magenta-subtle cyber-p-md" style={{ minWidth: '140px' }}>
                    <code>.cyber-bg-magenta-subtle</code>
                  </div>
                </div>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-yellow cyber-p-md" style={{ minWidth: '140px', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-yellow</code>
                  </div>
                  <div className="cyber-bg-yellow-subtle cyber-p-md" style={{ minWidth: '140px' }}>
                    <code>.cyber-bg-yellow-subtle</code>
                  </div>
                </div>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-green cyber-p-md" style={{ minWidth: '140px', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-green</code>
                  </div>
                  <div className="cyber-bg-green-subtle cyber-p-md" style={{ minWidth: '140px' }}>
                    <code>.cyber-bg-green-subtle</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Accent Backgrounds"
                language="html"
                code={`<!-- Solid accent colors -->
<div class="cyber-bg-cyan">Cyan background</div>
<div class="cyber-bg-magenta">Magenta background</div>
<div class="cyber-bg-yellow">Yellow background</div>
<div class="cyber-bg-green">Green background</div>

<!-- Subtle variants (15% opacity) -->
<div class="cyber-bg-cyan-subtle">Subtle cyan</div>
<div class="cyber-bg-magenta-subtle">Subtle magenta</div>
<div class="cyber-bg-yellow-subtle">Subtle yellow</div>
<div class="cyber-bg-green-subtle">Subtle green</div>`}
              />
            </div>

            {/* Void Scale */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Void Scale
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Deep dark backgrounds from the void color palette. Perfect for creating depth and contrast.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div className="cyber-bg-void-900 cyber-p-md" style={{ border: '1px solid var(--cyber-chrome-700)' }}>
                  <code>.cyber-bg-void-900</code> - Deepest void
                </div>
                <div className="cyber-bg-void-800 cyber-p-md">
                  <code>.cyber-bg-void-800</code> - Dark void
                </div>
                <div className="cyber-bg-void-700 cyber-p-md">
                  <code>.cyber-bg-void-700</code> - Medium void
                </div>
              </div>
              <CodeBlock
                title="Void Scale"
                language="html"
                code={`<div class="cyber-bg-void-900">Deepest void</div>
<div class="cyber-bg-void-800">Dark void</div>
<div class="cyber-bg-void-700">Medium void</div>`}
              />
            </div>

            {/* Gradients */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Gradients
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Pre-built gradient backgrounds using the accent color palette. All gradients flow at 135 degrees.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-sm)' }}>
                <div className="cyber-bg-gradient-cyan cyber-p-lg" style={{ color: 'var(--cyber-void-900)' }}>
                  <code>.cyber-bg-gradient-cyan</code>
                </div>
                <div className="cyber-bg-gradient-magenta cyber-p-lg" style={{ color: 'var(--cyber-void-900)' }}>
                  <code>.cyber-bg-gradient-magenta</code>
                </div>
                <div className="cyber-bg-gradient-yellow cyber-p-lg" style={{ color: 'var(--cyber-void-900)' }}>
                  <code>.cyber-bg-gradient-yellow</code>
                </div>
                <div className="cyber-bg-gradient-green cyber-p-lg" style={{ color: 'var(--cyber-void-900)' }}>
                  <code>.cyber-bg-gradient-green</code>
                </div>
                <div className="cyber-bg-gradient-cyber cyber-p-lg" style={{ color: 'var(--cyber-void-900)' }}>
                  <code>.cyber-bg-gradient-cyber</code> - Cyan to Magenta
                </div>
              </div>
              <CodeBlock
                title="Background Gradients"
                language="html"
                code={`<div class="cyber-bg-gradient-cyan">Cyan gradient</div>
<div class="cyber-bg-gradient-magenta">Magenta gradient</div>
<div class="cyber-bg-gradient-yellow">Yellow gradient</div>
<div class="cyber-bg-gradient-green">Green gradient</div>
<div class="cyber-bg-gradient-cyber">Cyan-to-Magenta gradient</div>`}
              />
            </div>

            {/* Background Properties */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Background Properties
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Utilities for controlling background size, position, repeat, and attachment. Use with background images.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-cover</code>
                  </div>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-contain</code>
                  </div>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-auto</code>
                  </div>
                </div>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-center</code>
                  </div>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-top</code>
                  </div>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-bottom</code>
                  </div>
                </div>
                <div className="cyber-flex cyber-gap-sm" style={{ flexWrap: 'wrap' }}>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-no-repeat</code>
                  </div>
                  <div className="cyber-bg-elevated cyber-p-sm" style={{ minWidth: '120px', textAlign: 'center' }}>
                    <code>.cyber-bg-fixed</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Background Properties"
                language="html"
                code={`<!-- Size -->
<div class="cyber-bg-cover">Cover entire area</div>
<div class="cyber-bg-contain">Contain within area</div>
<div class="cyber-bg-auto">Auto size</div>

<!-- Position -->
<div class="cyber-bg-center">Center position</div>
<div class="cyber-bg-top">Top position</div>
<div class="cyber-bg-bottom">Bottom position</div>
<div class="cyber-bg-left">Left position</div>
<div class="cyber-bg-right">Right position</div>

<!-- Repeat -->
<div class="cyber-bg-repeat">Repeat both axes</div>
<div class="cyber-bg-no-repeat">No repeat</div>
<div class="cyber-bg-repeat-x">Repeat horizontally</div>
<div class="cyber-bg-repeat-y">Repeat vertically</div>

<!-- Attachment -->
<div class="cyber-bg-fixed">Fixed background</div>
<div class="cyber-bg-scroll">Scroll with content</div>
<div class="cyber-bg-local">Scroll with element</div>`}
              />
            </div>

            {/* Background Clip */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Background Clip
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Control how backgrounds are clipped. The <code>cyber-bg-clip-text</code> class enables gradient text effects.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                  <div className="cyber-bg-gradient-cyan cyber-bg-clip-border cyber-p-md" style={{ border: '4px dashed var(--cyber-void-900)', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-clip-border</code>
                  </div>
                  <div className="cyber-bg-gradient-magenta cyber-bg-clip-padding cyber-p-md" style={{ border: '4px dashed var(--cyber-void-900)', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-clip-padding</code>
                  </div>
                  <div className="cyber-bg-gradient-yellow cyber-bg-clip-content cyber-p-md" style={{ border: '4px dashed var(--cyber-void-900)', color: 'var(--cyber-void-900)' }}>
                    <code>.cyber-bg-clip-content</code>
                  </div>
                </div>
                <div
                  className="cyber-bg-gradient-cyber cyber-bg-clip-text cyber-p-md"
                  style={{ fontSize: '2rem', fontWeight: 'bold', color: 'transparent' }}
                >
                  Gradient Text with .cyber-bg-clip-text
                </div>
              </div>
              <CodeBlock
                title="Background Clip"
                language="html"
                code={`<!-- Clip to box model areas -->
<div class="cyber-bg-clip-border">Clip to border</div>
<div class="cyber-bg-clip-padding">Clip to padding</div>
<div class="cyber-bg-clip-content">Clip to content</div>

<!-- Gradient text effect -->
<h2 class="cyber-bg-gradient-cyber cyber-bg-clip-text" style="color: transparent;">
  Gradient Text
</h2>`}
              />
            </div>

            {/* Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              All Background Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={2}><strong>Theme Backgrounds</strong></td></tr>
                  <tr><td><code>.cyber-bg-transparent</code></td><td>background-color: transparent</td></tr>
                  <tr><td><code>.cyber-bg-current</code></td><td>background-color: currentcolor</td></tr>
                  <tr><td><code>.cyber-bg-primary</code></td><td>background-color: var(--color-bg-primary)</td></tr>
                  <tr><td><code>.cyber-bg-secondary</code></td><td>background-color: var(--color-bg-secondary)</td></tr>
                  <tr><td><code>.cyber-bg-tertiary</code></td><td>background-color: var(--color-bg-tertiary)</td></tr>
                  <tr><td><code>.cyber-bg-elevated</code></td><td>background-color: var(--color-bg-elevated)</td></tr>
                  <tr><td colSpan={2}><strong>Accent Backgrounds</strong></td></tr>
                  <tr><td><code>.cyber-bg-cyan</code></td><td>background-color: var(--cyber-cyan-500)</td></tr>
                  <tr><td><code>.cyber-bg-cyan-subtle</code></td><td>background-color: cyan @ 15% opacity</td></tr>
                  <tr><td><code>.cyber-bg-magenta</code></td><td>background-color: var(--cyber-magenta-500)</td></tr>
                  <tr><td><code>.cyber-bg-magenta-subtle</code></td><td>background-color: magenta @ 15% opacity</td></tr>
                  <tr><td><code>.cyber-bg-yellow</code></td><td>background-color: var(--cyber-yellow-500)</td></tr>
                  <tr><td><code>.cyber-bg-yellow-subtle</code></td><td>background-color: yellow @ 15% opacity</td></tr>
                  <tr><td><code>.cyber-bg-green</code></td><td>background-color: var(--cyber-green-500)</td></tr>
                  <tr><td><code>.cyber-bg-green-subtle</code></td><td>background-color: green @ 15% opacity</td></tr>
                  <tr><td colSpan={2}><strong>Void Scale</strong></td></tr>
                  <tr><td><code>.cyber-bg-void-900</code></td><td>background-color: var(--cyber-void-900)</td></tr>
                  <tr><td><code>.cyber-bg-void-800</code></td><td>background-color: var(--cyber-void-800)</td></tr>
                  <tr><td><code>.cyber-bg-void-700</code></td><td>background-color: var(--cyber-void-700)</td></tr>
                  <tr><td colSpan={2}><strong>Gradients</strong></td></tr>
                  <tr><td><code>.cyber-bg-gradient-cyan</code></td><td>linear-gradient(135deg, cyan-700, cyan-500)</td></tr>
                  <tr><td><code>.cyber-bg-gradient-magenta</code></td><td>linear-gradient(135deg, magenta-700, magenta-500)</td></tr>
                  <tr><td><code>.cyber-bg-gradient-yellow</code></td><td>linear-gradient(135deg, yellow-700, yellow-500)</td></tr>
                  <tr><td><code>.cyber-bg-gradient-green</code></td><td>linear-gradient(135deg, green-700, green-500)</td></tr>
                  <tr><td><code>.cyber-bg-gradient-cyber</code></td><td>linear-gradient(135deg, cyan-500, magenta-500)</td></tr>
                  <tr><td colSpan={2}><strong>Background Size</strong></td></tr>
                  <tr><td><code>.cyber-bg-auto</code></td><td>background-size: auto</td></tr>
                  <tr><td><code>.cyber-bg-cover</code></td><td>background-size: cover</td></tr>
                  <tr><td><code>.cyber-bg-contain</code></td><td>background-size: contain</td></tr>
                  <tr><td colSpan={2}><strong>Background Position</strong></td></tr>
                  <tr><td><code>.cyber-bg-center</code></td><td>background-position: center</td></tr>
                  <tr><td><code>.cyber-bg-top</code></td><td>background-position: top</td></tr>
                  <tr><td><code>.cyber-bg-bottom</code></td><td>background-position: bottom</td></tr>
                  <tr><td><code>.cyber-bg-left</code></td><td>background-position: left</td></tr>
                  <tr><td><code>.cyber-bg-right</code></td><td>background-position: right</td></tr>
                  <tr><td colSpan={2}><strong>Background Repeat</strong></td></tr>
                  <tr><td><code>.cyber-bg-repeat</code></td><td>background-repeat: repeat</td></tr>
                  <tr><td><code>.cyber-bg-no-repeat</code></td><td>background-repeat: no-repeat</td></tr>
                  <tr><td><code>.cyber-bg-repeat-x</code></td><td>background-repeat: repeat-x</td></tr>
                  <tr><td><code>.cyber-bg-repeat-y</code></td><td>background-repeat: repeat-y</td></tr>
                  <tr><td colSpan={2}><strong>Background Attachment</strong></td></tr>
                  <tr><td><code>.cyber-bg-fixed</code></td><td>background-attachment: fixed</td></tr>
                  <tr><td><code>.cyber-bg-local</code></td><td>background-attachment: local</td></tr>
                  <tr><td><code>.cyber-bg-scroll</code></td><td>background-attachment: scroll</td></tr>
                  <tr><td colSpan={2}><strong>Background Clip</strong></td></tr>
                  <tr><td><code>.cyber-bg-clip-border</code></td><td>background-clip: border-box</td></tr>
                  <tr><td><code>.cyber-bg-clip-padding</code></td><td>background-clip: padding-box</td></tr>
                  <tr><td><code>.cyber-bg-clip-content</code></td><td>background-clip: content-box</td></tr>
                  <tr><td><code>.cyber-bg-clip-text</code></td><td>background-clip: text</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Borders Section */}
        {activeTab === 'borders' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Borders
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Control border width, style, color, and radius. Combine utilities to create custom border treatments for cards, buttons, and containers.
            </p>

            {/* Border Width */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Width
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)' }}>
                <div
                  className="cyber-border-0 cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>0</code>
                </div>
                <div
                  className="cyber-border cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>1px</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>2px</code>
                </div>
                <div
                  className="cyber-border-4 cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>4px</code>
                </div>
              </div>
              <CodeBlock
                title="Border Width"
                language="html"
                code={`<div class="cyber-border-0">No border</div>
<div class="cyber-border">1px border</div>
<div class="cyber-border-2">2px border</div>
<div class="cyber-border-4">4px border</div>`}
              />
            </div>

            {/* Directional Borders */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Directional Borders
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)' }}>
                <div
                  className="cyber-border-t cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>top</code>
                </div>
                <div
                  className="cyber-border-r cyber-border-solid cyber-border-magenta cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>right</code>
                </div>
                <div
                  className="cyber-border-b cyber-border-solid cyber-border-yellow cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>bottom</code>
                </div>
                <div
                  className="cyber-border-l cyber-border-solid cyber-border-green cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>left</code>
                </div>
              </div>
              <CodeBlock
                title="Directional Borders"
                language="html"
                code={`<div class="cyber-border-t">Top border</div>
<div class="cyber-border-r">Right border</div>
<div class="cyber-border-b">Bottom border</div>
<div class="cyber-border-l">Left border</div>

<!-- Remove specific borders -->
<div class="cyber-border cyber-border-t-0">No top</div>
<div class="cyber-border cyber-border-r-0">No right</div>
<div class="cyber-border cyber-border-b-0">No bottom</div>
<div class="cyber-border cyber-border-l-0">No left</div>`}
              />
            </div>

            {/* Border Style */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Style
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)' }}>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>solid</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-dashed cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>dashed</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-dotted cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>dotted</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-none cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>none</code>
                </div>
              </div>
              <CodeBlock
                title="Border Style"
                language="html"
                code={`<div class="cyber-border-2 cyber-border-solid">Solid</div>
<div class="cyber-border-2 cyber-border-dashed">Dashed</div>
<div class="cyber-border-2 cyber-border-dotted">Dotted</div>
<div class="cyber-border-none">No border</div>`}
              />
            </div>

            {/* Border Color */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Color
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-default cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>default</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-subtle cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>subtle</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>cyan</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-magenta cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>magenta</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-yellow cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>yellow</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-green cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>green</code>
                </div>
              </div>
              <CodeBlock
                title="Border Color"
                language="html"
                code={`<div class="cyber-border cyber-border-solid cyber-border-default">Default</div>
<div class="cyber-border cyber-border-solid cyber-border-subtle">Subtle</div>
<div class="cyber-border cyber-border-solid cyber-border-cyan">Cyan</div>
<div class="cyber-border cyber-border-solid cyber-border-magenta">Magenta</div>
<div class="cyber-border cyber-border-solid cyber-border-yellow">Yellow</div>
<div class="cyber-border cyber-border-solid cyber-border-green">Green</div>
<div class="cyber-border cyber-border-solid cyber-border-transparent">Transparent</div>`}
              />
            </div>

            {/* Border Radius */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Radius
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-none cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>none</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-sm cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>sm</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>default</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-md cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>md</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-lg cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>lg</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-xl cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>xl</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-full cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>full</code>
                </div>
              </div>
              <CodeBlock
                title="Border Radius"
                language="html"
                code={`<div class="cyber-rounded-none">No radius</div>
<div class="cyber-rounded-sm">Small radius</div>
<div class="cyber-rounded">Default radius</div>
<div class="cyber-rounded-md">Medium radius</div>
<div class="cyber-rounded-lg">Large radius</div>
<div class="cyber-rounded-xl">Extra large radius</div>
<div class="cyber-rounded-full">Full/pill radius</div>`}
              />
            </div>

            {/* Directional Radius */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Directional Radius
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)' }}>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-cyan cyber-rounded-t cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>top</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-magenta cyber-rounded-r cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>right</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-yellow cyber-rounded-b cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>bottom</code>
                </div>
                <div
                  className="cyber-border-2 cyber-border-solid cyber-border-green cyber-rounded-l cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>left</code>
                </div>
              </div>
              <CodeBlock
                title="Directional Radius"
                language="html"
                code={`<div class="cyber-rounded-t">Top corners rounded</div>
<div class="cyber-rounded-r">Right corners rounded</div>
<div class="cyber-rounded-b">Bottom corners rounded</div>
<div class="cyber-rounded-l">Left corners rounded</div>

<!-- Remove specific corners -->
<div class="cyber-rounded cyber-rounded-t-none">No top radius</div>
<div class="cyber-rounded cyber-rounded-b-none">No bottom radius</div>`}
              />
            </div>

            {/* Ring Utilities */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Ring Utilities
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Ring utilities create focus-ring-like outlines using box-shadow, allowing them to work alongside borders without affecting layout.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-ring cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>ring (cyan)</code>
                </div>
                <div
                  className="cyber-ring-magenta cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>magenta</code>
                </div>
                <div
                  className="cyber-ring-yellow cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>yellow</code>
                </div>
                <div
                  className="cyber-ring-green cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>green</code>
                </div>
                <div
                  className="cyber-ring-0 cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code>ring-0</code>
                </div>
              </div>
              <CodeBlock
                title="Ring Utilities"
                language="html"
                code={`<div class="cyber-ring">Cyan ring (default)</div>
<div class="cyber-ring-magenta">Magenta ring</div>
<div class="cyber-ring-yellow">Yellow ring</div>
<div class="cyber-ring-green">Green ring</div>
<div class="cyber-ring-0">No ring</div>`}
              />
            </div>

            {/* Reference Tables */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Border Width Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-border-0</code></td><td>border-width: 0</td></tr>
                  <tr><td><code>.cyber-border</code></td><td>border-width: 1px</td></tr>
                  <tr><td><code>.cyber-border-2</code></td><td>border-width: 2px</td></tr>
                  <tr><td><code>.cyber-border-4</code></td><td>border-width: 4px</td></tr>
                  <tr><td><code>.cyber-border-t</code></td><td>border-top-width: 1px</td></tr>
                  <tr><td><code>.cyber-border-r</code></td><td>border-right-width: 1px</td></tr>
                  <tr><td><code>.cyber-border-b</code></td><td>border-bottom-width: 1px</td></tr>
                  <tr><td><code>.cyber-border-l</code></td><td>border-left-width: 1px</td></tr>
                  <tr><td><code>.cyber-border-t-0</code></td><td>border-top-width: 0</td></tr>
                  <tr><td><code>.cyber-border-r-0</code></td><td>border-right-width: 0</td></tr>
                  <tr><td><code>.cyber-border-b-0</code></td><td>border-bottom-width: 0</td></tr>
                  <tr><td><code>.cyber-border-l-0</code></td><td>border-left-width: 0</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Style Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-border-solid</code></td><td>border-style: solid</td></tr>
                  <tr><td><code>.cyber-border-dashed</code></td><td>border-style: dashed</td></tr>
                  <tr><td><code>.cyber-border-dotted</code></td><td>border-style: dotted</td></tr>
                  <tr><td><code>.cyber-border-none</code></td><td>border-style: none</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Color Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-border-default</code></td><td>border-color: var(--color-border-default)</td></tr>
                  <tr><td><code>.cyber-border-subtle</code></td><td>border-color: var(--color-border-subtle)</td></tr>
                  <tr><td><code>.cyber-border-cyan</code></td><td>border-color: var(--cyber-cyan-500)</td></tr>
                  <tr><td><code>.cyber-border-magenta</code></td><td>border-color: var(--cyber-magenta-500)</td></tr>
                  <tr><td><code>.cyber-border-yellow</code></td><td>border-color: var(--cyber-yellow-500)</td></tr>
                  <tr><td><code>.cyber-border-green</code></td><td>border-color: var(--cyber-green-500)</td></tr>
                  <tr><td><code>.cyber-border-transparent</code></td><td>border-color: transparent</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Border Radius Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-rounded-none</code></td><td>border-radius: 0</td></tr>
                  <tr><td><code>.cyber-rounded-sm</code></td><td>border-radius: var(--radius-sm)</td></tr>
                  <tr><td><code>.cyber-rounded</code></td><td>border-radius: var(--radius-md)</td></tr>
                  <tr><td><code>.cyber-rounded-md</code></td><td>border-radius: var(--radius-md)</td></tr>
                  <tr><td><code>.cyber-rounded-lg</code></td><td>border-radius: var(--radius-lg)</td></tr>
                  <tr><td><code>.cyber-rounded-xl</code></td><td>border-radius: var(--radius-xl)</td></tr>
                  <tr><td><code>.cyber-rounded-full</code></td><td>border-radius: 9999px</td></tr>
                  <tr><td><code>.cyber-rounded-t</code></td><td>border-top-left/right-radius: var(--radius-md)</td></tr>
                  <tr><td><code>.cyber-rounded-r</code></td><td>border-top/bottom-right-radius: var(--radius-md)</td></tr>
                  <tr><td><code>.cyber-rounded-b</code></td><td>border-bottom-left/right-radius: var(--radius-md)</td></tr>
                  <tr><td><code>.cyber-rounded-l</code></td><td>border-top/bottom-left-radius: var(--radius-md)</td></tr>
                  <tr><td><code>.cyber-rounded-t-none</code></td><td>border-top-left/right-radius: 0</td></tr>
                  <tr><td><code>.cyber-rounded-b-none</code></td><td>border-bottom-left/right-radius: 0</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Ring Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-ring</code></td><td>box-shadow: 0 0 0 2px var(--cyber-cyan-500)</td></tr>
                  <tr><td><code>.cyber-ring-magenta</code></td><td>box-shadow: 0 0 0 2px var(--cyber-magenta-500)</td></tr>
                  <tr><td><code>.cyber-ring-yellow</code></td><td>box-shadow: 0 0 0 2px var(--cyber-yellow-500)</td></tr>
                  <tr><td><code>.cyber-ring-green</code></td><td>box-shadow: 0 0 0 2px var(--cyber-green-500)</td></tr>
                  <tr><td><code>.cyber-ring-0</code></td><td>box-shadow: none</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Shadows Section */}
        {activeTab === 'shadows' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Shadows
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Control box shadows, glow effects, opacity, and backdrop blur. Use standard shadows for subtle depth or cyber glow effects for that signature neon aesthetic.
            </p>

            {/* Box Shadows */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Box Shadows
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-shadow-none cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>none</code>
                </div>
                <div
                  className="cyber-shadow-sm cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>sm</code>
                </div>
                <div
                  className="cyber-shadow cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>default</code>
                </div>
                <div
                  className="cyber-shadow-md cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>md</code>
                </div>
                <div
                  className="cyber-shadow-lg cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>lg</code>
                </div>
                <div
                  className="cyber-shadow-xl cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>xl</code>
                </div>
                <div
                  className="cyber-shadow-2xl cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>2xl</code>
                </div>
                <div
                  className="cyber-shadow-inner cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>inner</code>
                </div>
              </div>
              <CodeBlock
                title="Box Shadows"
                language="html"
                code={`<div class="cyber-shadow-none">No shadow</div>
<div class="cyber-shadow-sm">Small shadow</div>
<div class="cyber-shadow">Default shadow</div>
<div class="cyber-shadow-md">Medium shadow</div>
<div class="cyber-shadow-lg">Large shadow</div>
<div class="cyber-shadow-xl">Extra large shadow</div>
<div class="cyber-shadow-2xl">2x large shadow</div>
<div class="cyber-shadow-inner">Inner shadow</div>`}
              />
            </div>

            {/* Glow Shadows */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Glow Shadows
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-shadow-glow cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code className="cyber-text-cyan">glow</code>
                </div>
                <div
                  className="cyber-shadow-glow-magenta cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code className="cyber-text-magenta">magenta</code>
                </div>
                <div
                  className="cyber-shadow-glow-yellow cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code className="cyber-text-yellow">yellow</code>
                </div>
                <div
                  className="cyber-shadow-glow-green cyber-p-md"
                  style={{ background: 'var(--color-bg-elevated)', minWidth: '100px', textAlign: 'center' }}
                >
                  <code className="cyber-text-green">green</code>
                </div>
              </div>
              <CodeBlock
                title="Glow Shadows"
                language="html"
                code={`<!-- Cyber-themed glow effects -->
<div class="cyber-shadow-glow">Cyan glow (default)</div>
<div class="cyber-shadow-glow-magenta">Magenta glow</div>
<div class="cyber-shadow-glow-yellow">Yellow glow</div>
<div class="cyber-shadow-glow-green">Green glow</div>`}
              />
            </div>

            {/* Opacity */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Opacity
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-opacity-0 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-500)', minWidth: '70px', textAlign: 'center' }}
                >
                  <code>0</code>
                </div>
                <div
                  className="cyber-opacity-25 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-500)', minWidth: '70px', textAlign: 'center' }}
                >
                  <code>25</code>
                </div>
                <div
                  className="cyber-opacity-50 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-500)', minWidth: '70px', textAlign: 'center' }}
                >
                  <code>50</code>
                </div>
                <div
                  className="cyber-opacity-75 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-500)', minWidth: '70px', textAlign: 'center' }}
                >
                  <code>75</code>
                </div>
                <div
                  className="cyber-opacity-100 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-500)', minWidth: '70px', textAlign: 'center' }}
                >
                  <code>100</code>
                </div>
              </div>
              <CodeBlock
                title="Opacity"
                language="html"
                code={`<div class="cyber-opacity-0">Invisible (0%)</div>
<div class="cyber-opacity-25">25% opacity</div>
<div class="cyber-opacity-50">50% opacity</div>
<div class="cyber-opacity-75">75% opacity</div>
<div class="cyber-opacity-100">Fully visible (100%)</div>`}
              />
            </div>

            {/* Backdrop Blur */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Backdrop Blur
            </h3>
            <div className="demo-code-preview">
              <div
                className="demo-preview"
                style={{
                  gap: 'var(--space-md)',
                  flexWrap: 'wrap',
                  background: 'linear-gradient(135deg, var(--cyber-cyan-500), var(--cyber-magenta-500))',
                  padding: 'var(--space-lg)',
                }}
              >
                <div
                  className="cyber-backdrop-blur-none cyber-p-md"
                  style={{ background: 'rgb(0 0 0 / 30%)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>none</code>
                </div>
                <div
                  className="cyber-backdrop-blur-sm cyber-p-md"
                  style={{ background: 'rgb(0 0 0 / 30%)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>sm</code>
                </div>
                <div
                  className="cyber-backdrop-blur cyber-p-md"
                  style={{ background: 'rgb(0 0 0 / 30%)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>default</code>
                </div>
                <div
                  className="cyber-backdrop-blur-md cyber-p-md"
                  style={{ background: 'rgb(0 0 0 / 30%)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>md</code>
                </div>
                <div
                  className="cyber-backdrop-blur-lg cyber-p-md"
                  style={{ background: 'rgb(0 0 0 / 30%)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>lg</code>
                </div>
                <div
                  className="cyber-backdrop-blur-xl cyber-p-md"
                  style={{ background: 'rgb(0 0 0 / 30%)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>xl</code>
                </div>
              </div>
              <CodeBlock
                title="Backdrop Blur"
                language="html"
                code={`<!-- Blur content behind the element -->
<div class="cyber-backdrop-blur-none">No blur (0)</div>
<div class="cyber-backdrop-blur-sm">Small blur (4px)</div>
<div class="cyber-backdrop-blur">Default blur (8px)</div>
<div class="cyber-backdrop-blur-md">Medium blur (12px)</div>
<div class="cyber-backdrop-blur-lg">Large blur (16px)</div>
<div class="cyber-backdrop-blur-xl">Extra large blur (24px)</div>`}
              />
            </div>

            {/* Box Shadow Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Box Shadow Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-shadow-none</code></td><td>box-shadow: none</td></tr>
                  <tr><td><code>.cyber-shadow-sm</code></td><td>box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 3px 0 rgb(0 0 0 / 10%)</td></tr>
                  <tr><td><code>.cyber-shadow</code></td><td>box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%)</td></tr>
                  <tr><td><code>.cyber-shadow-md</code></td><td>box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%)</td></tr>
                  <tr><td><code>.cyber-shadow-lg</code></td><td>box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%)</td></tr>
                  <tr><td><code>.cyber-shadow-xl</code></td><td>box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%)</td></tr>
                  <tr><td><code>.cyber-shadow-2xl</code></td><td>box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%)</td></tr>
                  <tr><td><code>.cyber-shadow-inner</code></td><td>box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 5%)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Glow Shadow Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Glow Shadow Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-shadow-glow</code></td><td>box-shadow: var(--glow-cyan)</td></tr>
                  <tr><td><code>.cyber-shadow-glow-magenta</code></td><td>box-shadow: var(--glow-magenta)</td></tr>
                  <tr><td><code>.cyber-shadow-glow-yellow</code></td><td>box-shadow: var(--glow-yellow)</td></tr>
                  <tr><td><code>.cyber-shadow-glow-green</code></td><td>box-shadow: var(--glow-green)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Opacity Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Opacity Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-opacity-0</code></td><td>opacity: 0%</td></tr>
                  <tr><td><code>.cyber-opacity-5</code></td><td>opacity: 5%</td></tr>
                  <tr><td><code>.cyber-opacity-10</code></td><td>opacity: 10%</td></tr>
                  <tr><td><code>.cyber-opacity-20</code></td><td>opacity: 20%</td></tr>
                  <tr><td><code>.cyber-opacity-25</code></td><td>opacity: 25%</td></tr>
                  <tr><td><code>.cyber-opacity-30</code></td><td>opacity: 30%</td></tr>
                  <tr><td><code>.cyber-opacity-40</code></td><td>opacity: 40%</td></tr>
                  <tr><td><code>.cyber-opacity-50</code></td><td>opacity: 50%</td></tr>
                  <tr><td><code>.cyber-opacity-60</code></td><td>opacity: 60%</td></tr>
                  <tr><td><code>.cyber-opacity-70</code></td><td>opacity: 70%</td></tr>
                  <tr><td><code>.cyber-opacity-75</code></td><td>opacity: 75%</td></tr>
                  <tr><td><code>.cyber-opacity-80</code></td><td>opacity: 80%</td></tr>
                  <tr><td><code>.cyber-opacity-90</code></td><td>opacity: 90%</td></tr>
                  <tr><td><code>.cyber-opacity-95</code></td><td>opacity: 95%</td></tr>
                  <tr><td><code>.cyber-opacity-100</code></td><td>opacity: 100%</td></tr>
                </tbody>
              </table>
            </div>

            {/* Backdrop Blur Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Backdrop Blur Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-backdrop-blur-none</code></td><td>backdrop-filter: blur(0)</td></tr>
                  <tr><td><code>.cyber-backdrop-blur-sm</code></td><td>backdrop-filter: blur(4px)</td></tr>
                  <tr><td><code>.cyber-backdrop-blur</code></td><td>backdrop-filter: blur(8px)</td></tr>
                  <tr><td><code>.cyber-backdrop-blur-md</code></td><td>backdrop-filter: blur(12px)</td></tr>
                  <tr><td><code>.cyber-backdrop-blur-lg</code></td><td>backdrop-filter: blur(16px)</td></tr>
                  <tr><td><code>.cyber-backdrop-blur-xl</code></td><td>backdrop-filter: blur(24px)</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Transforms Section */}
        {activeTab === 'transforms' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Transforms
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              CSS transform utilities for scaling, rotating, translating, and skewing elements. Combine with transitions for smooth animations.
            </p>

            {/* Scale */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Scale
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
                <div
                  className="cyber-scale-50 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>50</code>
                </div>
                <div
                  className="cyber-scale-75 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>75</code>
                </div>
                <div
                  className="cyber-scale-100 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>100</code>
                </div>
                <div
                  className="cyber-scale-110 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>110</code>
                </div>
                <div
                  className="cyber-scale-125 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>125</code>
                </div>
                <div
                  className="cyber-scale-150 cyber-p-md"
                  style={{ background: 'var(--cyber-cyan-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>150</code>
                </div>
              </div>
              <CodeBlock
                title="Scale"
                language="html"
                code={`<!-- Scale down -->
<div class="cyber-scale-0">Scale 0 (invisible)</div>
<div class="cyber-scale-50">Scale 50%</div>
<div class="cyber-scale-75">Scale 75%</div>
<div class="cyber-scale-90">Scale 90%</div>
<div class="cyber-scale-95">Scale 95%</div>

<!-- No scale -->
<div class="cyber-scale-100">Scale 100% (default)</div>

<!-- Scale up -->
<div class="cyber-scale-105">Scale 105%</div>
<div class="cyber-scale-110">Scale 110%</div>
<div class="cyber-scale-125">Scale 125%</div>
<div class="cyber-scale-150">Scale 150%</div>`}
              />
            </div>

            {/* Rotate */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Rotate
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
                <div
                  className="cyber--rotate-90 cyber-p-md"
                  style={{ background: 'var(--cyber-magenta-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>-90</code>
                </div>
                <div
                  className="cyber--rotate-45 cyber-p-md"
                  style={{ background: 'var(--cyber-magenta-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>-45</code>
                </div>
                <div
                  className="cyber-rotate-0 cyber-p-md"
                  style={{ background: 'var(--cyber-magenta-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>0</code>
                </div>
                <div
                  className="cyber-rotate-45 cyber-p-md"
                  style={{ background: 'var(--cyber-magenta-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>45</code>
                </div>
                <div
                  className="cyber-rotate-90 cyber-p-md"
                  style={{ background: 'var(--cyber-magenta-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>90</code>
                </div>
                <div
                  className="cyber-rotate-180 cyber-p-md"
                  style={{ background: 'var(--cyber-magenta-800)', minWidth: '60px', textAlign: 'center' }}
                >
                  <code>180</code>
                </div>
              </div>
              <CodeBlock
                title="Rotate"
                language="html"
                code={`<!-- Positive rotation (clockwise) -->
<div class="cyber-rotate-0">No rotation</div>
<div class="cyber-rotate-45">Rotate 45deg</div>
<div class="cyber-rotate-90">Rotate 90deg</div>
<div class="cyber-rotate-180">Rotate 180deg</div>

<!-- Negative rotation (counter-clockwise) -->
<div class="cyber--rotate-45">Rotate -45deg</div>
<div class="cyber--rotate-90">Rotate -90deg</div>`}
              />
            </div>

            {/* Translate */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Translate
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'stretch' }}>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', position: 'relative', height: '60px' }}>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-translate-x-0</code>
                  <div
                    className="cyber-translate-x-0 cyber-p-sm"
                    style={{ background: 'var(--cyber-yellow-800)', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    X: 0
                  </div>
                </div>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', position: 'relative', height: '60px', overflow: 'hidden' }}>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber-translate-x-full</code>
                  <div
                    className="cyber-p-sm"
                    style={{ background: 'var(--cyber-yellow-800)', position: 'absolute', top: '50%', left: '50%', transform: 'translateX(100%) translateY(-50%)' }}
                  >
                    X: 100%
                  </div>
                </div>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm)', position: 'relative', height: '60px', overflow: 'hidden' }}>
                  <code style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>.cyber--translate-x-full</code>
                  <div
                    className="cyber-p-sm"
                    style={{ background: 'var(--cyber-yellow-800)', position: 'absolute', top: '50%', right: '0', transform: 'translateX(-100%) translateY(-50%)' }}
                  >
                    X: -100%
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Translate"
                language="html"
                code={`<!-- Translate X -->
<div class="cyber-translate-x-0">No X translation</div>
<div class="cyber-translate-x-full">Move right 100%</div>
<div class="cyber--translate-x-full">Move left 100%</div>

<!-- Translate Y -->
<div class="cyber-translate-y-0">No Y translation</div>
<div class="cyber-translate-y-full">Move down 100%</div>
<div class="cyber--translate-y-full">Move up 100%</div>`}
              />
            </div>

            {/* Skew */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Skew
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
                <div
                  className="cyber--skew-x-3 cyber-p-md"
                  style={{ background: 'var(--cyber-green-800)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>-x-3</code>
                </div>
                <div
                  className="cyber-skew-x-3 cyber-p-md"
                  style={{ background: 'var(--cyber-green-800)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>x-3</code>
                </div>
                <div
                  className="cyber-skew-x-6 cyber-p-md"
                  style={{ background: 'var(--cyber-green-800)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>x-6</code>
                </div>
                <div
                  className="cyber-skew-x-12 cyber-p-md"
                  style={{ background: 'var(--cyber-green-800)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>x-12</code>
                </div>
                <div
                  className="cyber-skew-y-3 cyber-p-md"
                  style={{ background: 'var(--cyber-green-800)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>y-3</code>
                </div>
                <div
                  className="cyber-skew-y-6 cyber-p-md"
                  style={{ background: 'var(--cyber-green-800)', minWidth: '80px', textAlign: 'center' }}
                >
                  <code>y-6</code>
                </div>
              </div>
              <CodeBlock
                title="Skew"
                language="html"
                code={`<!-- Skew X (horizontal) -->
<div class="cyber-skew-x-3">Skew X 3deg</div>
<div class="cyber-skew-x-6">Skew X 6deg</div>
<div class="cyber-skew-x-12">Skew X 12deg</div>
<div class="cyber--skew-x-3">Skew X -3deg</div>

<!-- Skew Y (vertical) -->
<div class="cyber-skew-y-3">Skew Y 3deg</div>
<div class="cyber-skew-y-6">Skew Y 6deg</div>`}
              />
            </div>

            {/* Transform Origin */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Transform Origin
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '80px', height: '80px', background: 'var(--color-bg-elevated)' }}>
                  <div
                    className="cyber-origin-top-left cyber-rotate-45 cyber-p-sm"
                    style={{ background: 'var(--cyber-cyan-800)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <code style={{ fontSize: '0.7rem' }}>top-left</code>
                  </div>
                </div>
                <div style={{ position: 'relative', width: '80px', height: '80px', background: 'var(--color-bg-elevated)' }}>
                  <div
                    className="cyber-origin-center cyber-rotate-45 cyber-p-sm"
                    style={{ background: 'var(--cyber-cyan-800)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <code style={{ fontSize: '0.7rem' }}>center</code>
                  </div>
                </div>
                <div style={{ position: 'relative', width: '80px', height: '80px', background: 'var(--color-bg-elevated)' }}>
                  <div
                    className="cyber-origin-bottom-right cyber-rotate-45 cyber-p-sm"
                    style={{ background: 'var(--cyber-cyan-800)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <code style={{ fontSize: '0.7rem' }}>btm-right</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Transform Origin"
                language="html"
                code={`<!-- Set the point from which transforms are applied -->
<div class="cyber-origin-center cyber-rotate-45">Center origin</div>
<div class="cyber-origin-top cyber-rotate-45">Top origin</div>
<div class="cyber-origin-top-right cyber-rotate-45">Top right</div>
<div class="cyber-origin-right cyber-rotate-45">Right origin</div>
<div class="cyber-origin-bottom-right cyber-rotate-45">Bottom right</div>
<div class="cyber-origin-bottom cyber-rotate-45">Bottom origin</div>
<div class="cyber-origin-bottom-left cyber-rotate-45">Bottom left</div>
<div class="cyber-origin-left cyber-rotate-45">Left origin</div>
<div class="cyber-origin-top-left cyber-rotate-45">Top left</div>`}
              />
            </div>

            {/* Scale Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Scale Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-scale-0</code></td><td>transform: scale(0)</td></tr>
                  <tr><td><code>.cyber-scale-50</code></td><td>transform: scale(0.5)</td></tr>
                  <tr><td><code>.cyber-scale-75</code></td><td>transform: scale(0.75)</td></tr>
                  <tr><td><code>.cyber-scale-90</code></td><td>transform: scale(0.9)</td></tr>
                  <tr><td><code>.cyber-scale-95</code></td><td>transform: scale(0.95)</td></tr>
                  <tr><td><code>.cyber-scale-100</code></td><td>transform: scale(1)</td></tr>
                  <tr><td><code>.cyber-scale-105</code></td><td>transform: scale(1.05)</td></tr>
                  <tr><td><code>.cyber-scale-110</code></td><td>transform: scale(1.1)</td></tr>
                  <tr><td><code>.cyber-scale-125</code></td><td>transform: scale(1.25)</td></tr>
                  <tr><td><code>.cyber-scale-150</code></td><td>transform: scale(1.5)</td></tr>
                  <tr><td><code>.cyber-scale-x-0</code></td><td>transform: scaleX(0)</td></tr>
                  <tr><td><code>.cyber-scale-x-100</code></td><td>transform: scaleX(1)</td></tr>
                  <tr><td><code>.cyber-scale-y-0</code></td><td>transform: scaleY(0)</td></tr>
                  <tr><td><code>.cyber-scale-y-100</code></td><td>transform: scaleY(1)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Rotate Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Rotate Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-rotate-0</code></td><td>transform: rotate(0deg)</td></tr>
                  <tr><td><code>.cyber-rotate-45</code></td><td>transform: rotate(45deg)</td></tr>
                  <tr><td><code>.cyber-rotate-90</code></td><td>transform: rotate(90deg)</td></tr>
                  <tr><td><code>.cyber-rotate-180</code></td><td>transform: rotate(180deg)</td></tr>
                  <tr><td><code>.cyber--rotate-45</code></td><td>transform: rotate(-45deg)</td></tr>
                  <tr><td><code>.cyber--rotate-90</code></td><td>transform: rotate(-90deg)</td></tr>
                  <tr><td><code>.cyber--rotate-180</code></td><td>transform: rotate(-180deg)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Translate Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Translate Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-translate-x-0</code></td><td>transform: translateX(0)</td></tr>
                  <tr><td><code>.cyber-translate-x-full</code></td><td>transform: translateX(100%)</td></tr>
                  <tr><td><code>.cyber--translate-x-full</code></td><td>transform: translateX(-100%)</td></tr>
                  <tr><td><code>.cyber-translate-y-0</code></td><td>transform: translateY(0)</td></tr>
                  <tr><td><code>.cyber-translate-y-full</code></td><td>transform: translateY(100%)</td></tr>
                  <tr><td><code>.cyber--translate-y-full</code></td><td>transform: translateY(-100%)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Skew Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Skew Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-skew-x-0</code></td><td>transform: skewX(0deg)</td></tr>
                  <tr><td><code>.cyber-skew-x-3</code></td><td>transform: skewX(3deg)</td></tr>
                  <tr><td><code>.cyber-skew-x-6</code></td><td>transform: skewX(6deg)</td></tr>
                  <tr><td><code>.cyber-skew-x-12</code></td><td>transform: skewX(12deg)</td></tr>
                  <tr><td><code>.cyber--skew-x-3</code></td><td>transform: skewX(-3deg)</td></tr>
                  <tr><td><code>.cyber--skew-x-6</code></td><td>transform: skewX(-6deg)</td></tr>
                  <tr><td><code>.cyber--skew-x-12</code></td><td>transform: skewX(-12deg)</td></tr>
                  <tr><td><code>.cyber-skew-y-0</code></td><td>transform: skewY(0deg)</td></tr>
                  <tr><td><code>.cyber-skew-y-3</code></td><td>transform: skewY(3deg)</td></tr>
                  <tr><td><code>.cyber-skew-y-6</code></td><td>transform: skewY(6deg)</td></tr>
                </tbody>
              </table>
            </div>

            {/* Transform Origin Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Transform Origin Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-origin-center</code></td><td>transform-origin: center</td></tr>
                  <tr><td><code>.cyber-origin-top</code></td><td>transform-origin: top</td></tr>
                  <tr><td><code>.cyber-origin-top-right</code></td><td>transform-origin: top right</td></tr>
                  <tr><td><code>.cyber-origin-right</code></td><td>transform-origin: right</td></tr>
                  <tr><td><code>.cyber-origin-bottom-right</code></td><td>transform-origin: bottom right</td></tr>
                  <tr><td><code>.cyber-origin-bottom</code></td><td>transform-origin: bottom</td></tr>
                  <tr><td><code>.cyber-origin-bottom-left</code></td><td>transform-origin: bottom left</td></tr>
                  <tr><td><code>.cyber-origin-left</code></td><td>transform-origin: left</td></tr>
                  <tr><td><code>.cyber-origin-top-left</code></td><td>transform-origin: top left</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Animation Section */}
        {activeTab === 'animation' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Animation
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Animation and transition utilities for adding motion to your interface. These utilities provide
              pre-built animations, timing controls, and smooth transitions. All animations respect
              the <code>prefers-reduced-motion</code> media query for accessibility.
            </p>

            {/* Preset Animations */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Preset Animations
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Ready-to-use animation classes for common effects. Simply add the class to any element.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div className="cyber-flex cyber-flex-wrap cyber-gap-lg cyber-items-end">
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-p-md"
                      style={{ background: 'var(--cyber-cyan-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Pulse
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-pulse</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-float cyber-p-md"
                      style={{ background: 'var(--cyber-magenta-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Float
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-float</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-glow cyber-p-md"
                      style={{ background: 'var(--cyber-yellow-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Glow
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-glow</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-bounce cyber-p-md"
                      style={{ background: 'var(--cyber-green-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Bounce
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-bounce</code>
                  </div>
                </div>
                <div className="cyber-flex cyber-flex-wrap cyber-gap-lg cyber-items-center">
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-spin cyber-p-md"
                      style={{ background: 'var(--cyber-cyan-500)', color: 'var(--cyber-void-900)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      &#x21BB;
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-spin</code>
                  </div>
                  <div style={{ textAlign: 'center', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                      <div
                        className="cyber-animate-ping"
                        style={{ position: 'absolute', inset: 0, background: 'var(--cyber-magenta-500)', borderRadius: '50%', opacity: 0.75 }}
                      />
                      <div
                        style={{ position: 'relative', background: 'var(--cyber-magenta-500)', width: '50px', height: '50px', borderRadius: '50%' }}
                      />
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-ping</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-boot cyber-p-md"
                      style={{ background: 'var(--cyber-green-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Boot
                    </div>
                    <code className="cyber-text-xs">.cyber-boot</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Preset Animations"
                language="html"
                code={`<!-- Opacity pulse effect -->
<div class="cyber-animate-pulse">Pulsing element</div>

<!-- Floating up and down -->
<div class="cyber-animate-float">Floating element</div>

<!-- Glow pulse with box-shadow -->
<div class="cyber-animate-glow">Glowing element</div>

<!-- Bouncing animation -->
<div class="cyber-animate-bounce">Bouncing element</div>

<!-- Continuous rotation -->
<div class="cyber-animate-spin">Spinning element</div>

<!-- Radar/ping effect (use with layered elements) -->
<div class="cyber-animate-ping">Ping effect</div>

<!-- Cyberpunk boot/flicker-in effect -->
<div class="cyber-boot">Boot sequence</div>`}
              />
            </div>

            {/* Animation Control */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Animation Control
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Control animation playback state programmatically. Useful for pausing animations on hover
              or based on user interaction.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="cyber-flex cyber-flex-wrap cyber-gap-lg cyber-items-center">
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-animate-paused cyber-p-md"
                      style={{ background: 'var(--cyber-cyan-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Paused
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-paused</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-animate-running cyber-p-md"
                      style={{ background: 'var(--cyber-magenta-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Running
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-running</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-none cyber-p-md"
                      style={{ background: 'var(--cyber-yellow-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      None
                    </div>
                    <code className="cyber-text-xs">.cyber-animate-none</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Animation Control"
                language="html"
                code={`<!-- Pause an animation -->
<div class="cyber-animate-pulse cyber-animate-paused">
  Animation paused
</div>

<!-- Resume a paused animation -->
<div class="cyber-animate-pulse cyber-animate-running">
  Animation running
</div>

<!-- Remove all animations -->
<div class="cyber-animate-none">No animation</div>

<!-- Pause on hover example -->
<style>
  .pause-on-hover:hover {
    animation-play-state: paused;
  }
</style>`}
              />
            </div>

            {/* Animation Delay */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Animation Delay
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Stagger animations by adding delays. Great for creating sequential entrance effects.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="cyber-flex cyber-flex-wrap cyber-gap-md">
                  <div
                    className="cyber-animate-float cyber-delay-100 cyber-p-md"
                    style={{ background: 'var(--cyber-cyan-500)', color: 'var(--cyber-void-900)', minWidth: '70px', textAlign: 'center' }}
                  >
                    100ms
                  </div>
                  <div
                    className="cyber-animate-float cyber-delay-200 cyber-p-md"
                    style={{ background: 'var(--cyber-cyan-600)', color: 'var(--cyber-void-900)', minWidth: '70px', textAlign: 'center' }}
                  >
                    200ms
                  </div>
                  <div
                    className="cyber-animate-float cyber-delay-300 cyber-p-md"
                    style={{ background: 'var(--cyber-cyan-700)', color: 'white', minWidth: '70px', textAlign: 'center' }}
                  >
                    300ms
                  </div>
                  <div
                    className="cyber-animate-float cyber-delay-500 cyber-p-md"
                    style={{ background: 'var(--cyber-cyan-800)', color: 'white', minWidth: '70px', textAlign: 'center' }}
                  >
                    500ms
                  </div>
                  <div
                    className="cyber-animate-float cyber-delay-1000 cyber-p-md"
                    style={{ background: 'var(--cyber-cyan-900)', color: 'white', minWidth: '70px', textAlign: 'center' }}
                  >
                    1000ms
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Animation Delay"
                language="html"
                code={`<!-- Staggered animation sequence -->
<div class="cyber-animate-float cyber-delay-100">First</div>
<div class="cyber-animate-float cyber-delay-200">Second</div>
<div class="cyber-animate-float cyber-delay-300">Third</div>
<div class="cyber-animate-float cyber-delay-500">Fourth</div>
<div class="cyber-animate-float cyber-delay-1000">Fifth</div>`}
              />
            </div>

            {/* Animation Duration */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Animation Duration
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Override the default duration of animations. Combine with any animation class.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="cyber-flex cyber-flex-wrap cyber-gap-md cyber-items-center">
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-duration-fast cyber-p-md"
                      style={{ background: 'var(--cyber-magenta-500)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Fast
                    </div>
                    <code className="cyber-text-xs">150ms</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-duration-normal cyber-p-md"
                      style={{ background: 'var(--cyber-magenta-600)', color: 'var(--cyber-void-900)', minWidth: '80px' }}
                    >
                      Normal
                    </div>
                    <code className="cyber-text-xs">300ms</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-duration-slow cyber-p-md"
                      style={{ background: 'var(--cyber-magenta-700)', color: 'white', minWidth: '80px' }}
                    >
                      Slow
                    </div>
                    <code className="cyber-text-xs">500ms</code>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      className="cyber-animate-pulse cyber-duration-slower cyber-p-md"
                      style={{ background: 'var(--cyber-magenta-800)', color: 'white', minWidth: '80px' }}
                    >
                      Slower
                    </div>
                    <code className="cyber-text-xs">1000ms</code>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Animation Duration"
                language="html"
                code={`<!-- Fast animation (150ms) -->
<div class="cyber-animate-pulse cyber-duration-fast">Fast pulse</div>

<!-- Normal animation (300ms) -->
<div class="cyber-animate-pulse cyber-duration-normal">Normal pulse</div>

<!-- Slow animation (500ms) -->
<div class="cyber-animate-pulse cyber-duration-slow">Slow pulse</div>

<!-- Slower animation (1000ms) -->
<div class="cyber-animate-pulse cyber-duration-slower">Slower pulse</div>`}
              />
            </div>

            {/* Transitions */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Transitions
            </h3>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Smooth property transitions for hover states, focus states, and interactive elements.
              The base <code>.cyber-transition</code> class includes common properties.
            </p>

            <div className="demo-code-preview">
              <div className="demo-preview">
                <div className="cyber-flex cyber-flex-wrap cyber-gap-md">
                  <button
                    className="cyber-btn cyber-transition"
                    style={{ cursor: 'pointer' }}
                  >
                    .cyber-transition
                  </button>
                  <button
                    className="cyber-btn cyber-transition-fast"
                    style={{ cursor: 'pointer' }}
                  >
                    .cyber-transition-fast
                  </button>
                  <button
                    className="cyber-btn cyber-transition-slow"
                    style={{ cursor: 'pointer' }}
                  >
                    .cyber-transition-slow
                  </button>
                  <button
                    className="cyber-btn cyber-transition-none"
                    style={{ cursor: 'pointer' }}
                  >
                    .cyber-transition-none
                  </button>
                </div>
              </div>
              <CodeBlock
                title="Transition Classes"
                language="html"
                code={`<!-- Base transition (color, bg, border, shadow, transform, opacity) -->
<div class="cyber-transition">Hover me</div>

<!-- Fast transition speed -->
<div class="cyber-transition-fast">Quick transition</div>

<!-- Slow transition speed -->
<div class="cyber-transition-slow">Slow transition</div>

<!-- Disable transitions -->
<div class="cyber-transition-none">No transition</div>`}
              />
            </div>

            {/* Reduced Motion Support */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Reduced Motion Support
            </h3>
            <div
              className="cyber-card cyber-p-lg"
              style={{ background: 'var(--color-bg-elevated)', borderLeft: '4px solid var(--cyber-green-500)' }}
            >
              <p style={{ margin: 0 }}>
                <strong>Accessibility Note:</strong> All animation utilities automatically respect the
                <code> prefers-reduced-motion: reduce</code> media query. When users have reduced motion
                enabled in their system preferences, animations are disabled and transitions are removed.
                This ensures your interface remains accessible to users who are sensitive to motion.
              </p>
            </div>
            <CodeBlock
              title="Reduced Motion CSS"
              language="css"
              code={`/* Automatically applied when user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .cyber-animate-pulse,
  .cyber-animate-float,
  .cyber-boot,
  .cyber-animate-glow,
  .cyber-animate-spin,
  .cyber-animate-ping,
  .cyber-animate-bounce {
    animation: none;
  }

  .cyber-transition {
    transition: none;
  }
}`}
            />

            {/* Reference Tables */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Animation Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-animate-pulse</code></td><td>Fades opacity between 100% and 50% (2s cycle)</td></tr>
                  <tr><td><code>.cyber-animate-float</code></td><td>Floats up and down by 10px (3s cycle)</td></tr>
                  <tr><td><code>.cyber-boot</code></td><td>Cyberpunk flicker-in boot sequence (0.8s, forwards)</td></tr>
                  <tr><td><code>.cyber-animate-glow</code></td><td>Pulsing glow with box-shadow (2s cycle)</td></tr>
                  <tr><td><code>.cyber-animate-spin</code></td><td>Continuous 360-degree rotation (1s cycle)</td></tr>
                  <tr><td><code>.cyber-animate-ping</code></td><td>Radar ping/ripple effect (1s cycle)</td></tr>
                  <tr><td><code>.cyber-animate-bounce</code></td><td>Bouncing up and down (1s cycle)</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Animation Control Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-animate-none</code></td><td>animation: none</td></tr>
                  <tr><td><code>.cyber-animate-paused</code></td><td>animation-play-state: paused</td></tr>
                  <tr><td><code>.cyber-animate-running</code></td><td>animation-play-state: running</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Animation Delay Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-delay-100</code></td><td>animation-delay: 100ms</td></tr>
                  <tr><td><code>.cyber-delay-200</code></td><td>animation-delay: 200ms</td></tr>
                  <tr><td><code>.cyber-delay-300</code></td><td>animation-delay: 300ms</td></tr>
                  <tr><td><code>.cyber-delay-500</code></td><td>animation-delay: 500ms</td></tr>
                  <tr><td><code>.cyber-delay-1000</code></td><td>animation-delay: 1000ms</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Animation Duration Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-duration-fast</code></td><td>animation-duration: 150ms</td></tr>
                  <tr><td><code>.cyber-duration-normal</code></td><td>animation-duration: 300ms</td></tr>
                  <tr><td><code>.cyber-duration-slow</code></td><td>animation-duration: 500ms</td></tr>
                  <tr><td><code>.cyber-duration-slower</code></td><td>animation-duration: 1000ms</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Transition Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>.cyber-transition</code></td><td>Base transition (color, background, border, shadow, transform, opacity)</td></tr>
                  <tr><td><code>.cyber-transition-fast</code></td><td>Fast transition duration</td></tr>
                  <tr><td><code>.cyber-transition-slow</code></td><td>Slow transition duration</td></tr>
                  <tr><td><code>.cyber-transition-none</code></td><td>Disable all transitions</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Accessibility Section */}
        {activeTab === 'accessibility' && (
          <section className="demo-section">
            <h2 className="section-title">
              <span className="cyber-text-cyan">//</span> Accessibility
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Accessibility utilities ensure your interfaces work for all users, including those using assistive technologies.
              These classes help manage screen reader visibility, keyboard focus states, and motion preferences.
            </p>

            {/* Screen Reader Only */}
            <h3 className="cyber-h4" style={{ marginBottom: 'var(--space-md)' }}>
              Screen Reader Only
            </h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
              Visually hide content while keeping it accessible to screen readers. Essential for providing context that sighted users can infer visually.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)', position: 'relative' }}>
                  <button className="cyber-btn cyber-btn--cyan">
                    <span className="cyber-sr-only">Close dialog</span>
                    <span aria-hidden="true">X</span>
                  </button>
                  <span style={{ marginLeft: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
                    Button has hidden "Close dialog" text for screen readers
                  </span>
                </div>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <span className="cyber-text-cyan" style={{ fontSize: '1.5rem' }}>$99.99</span>
                  <span className="cyber-sr-only">Price: 99 dollars and 99 cents</span>
                  <span style={{ marginLeft: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
                    Screen readers announce "Price: 99 dollars and 99 cents"
                  </span>
                </div>
              </div>
              <CodeBlock
                title="Screen Reader Only"
                language="html"
                code={`<!-- Icon button with accessible label -->
<button class="cyber-btn cyber-btn--cyan">
  <span class="cyber-sr-only">Close dialog</span>
  <span aria-hidden="true">X</span>
</button>

<!-- Price with screen reader friendly text -->
<span class="cyber-text-cyan">$99.99</span>
<span class="cyber-sr-only">Price: 99 dollars and 99 cents</span>

<!-- Hidden heading for page structure -->
<h2 class="cyber-sr-only">Main Navigation</h2>
<nav>...</nav>`}
              />
            </div>

            {/* Focusable SR Only (Skip Links) */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Focusable Screen Reader Only
            </h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
              Hidden until focused - perfect for skip links that allow keyboard users to bypass navigation and jump to main content.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)', position: 'relative' }}>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>
                    Press Tab to reveal skip link:
                  </p>
                  <a
                    href="#main-content-demo"
                    className="cyber-sr-only cyber-sr-only-focusable cyber-btn cyber-btn--cyan"
                    style={{ position: 'relative' }}
                  >
                    Skip to main content
                  </a>
                  <div id="main-content-demo" tabIndex={-1} style={{ marginTop: 'var(--space-md)', padding: 'var(--space-sm)', border: '1px dashed var(--color-border-subtle)' }}>
                    <code>#main-content</code> target area
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Skip Link Pattern"
                language="html"
                code={`<!-- Skip link at the very start of the page -->
<body>
  <a href="#main-content"
     class="cyber-sr-only cyber-sr-only-focusable cyber-btn cyber-btn--cyan">
    Skip to main content
  </a>

  <header>
    <!-- Navigation that keyboard users can skip -->
  </header>

  <main id="main-content" tabindex="-1">
    <!-- Main content -->
  </main>
</body>`}
              />
            </div>

            {/* Not Screen Reader */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Hide from Screen Readers
            </h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
              Hide decorative or redundant content from screen readers while keeping it visible. Use sparingly - most decorative content should use <code>aria-hidden="true"</code> instead.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <span className="cyber-not-sr cyber-text-cyan" style={{ marginRight: 'var(--space-sm)' }}>///</span>
                  <span>Decorative slashes hidden from screen readers</span>
                </div>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <span className="cyber-not-sr">|</span>
                  <span style={{ margin: '0 var(--space-sm)' }}>Breadcrumb</span>
                  <span className="cyber-not-sr">|</span>
                  <span style={{ margin: '0 var(--space-sm)' }}>Path</span>
                  <span className="cyber-not-sr">|</span>
                </div>
              </div>
              <CodeBlock
                title="Hide from Screen Readers"
                language="html"
                code={`<!-- Decorative separators -->
<span class="cyber-not-sr">///</span>
<span>Section Title</span>

<!-- Visual-only dividers in breadcrumbs -->
<nav aria-label="Breadcrumb">
  <span class="cyber-not-sr">/</span>
  <a href="/">Home</a>
  <span class="cyber-not-sr">/</span>
  <a href="/docs">Docs</a>
</nav>

<!-- Note: For most cases, use aria-hidden instead -->
<span aria-hidden="true">Decorative</span>`}
              />
            </div>

            {/* Focus Visible */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Enhanced Focus Indicators
            </h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
              Provide clear, visible focus indicators for keyboard navigation. The <code>cyber-focus-visible</code> class adds a prominent cyan outline only when focus is from keyboard (not mouse clicks).
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <button className="cyber-btn cyber-focus-visible">
                  Tab to focus me
                </button>
                <input
                  type="text"
                  className="cyber-input cyber-focus-visible"
                  placeholder="Focus visible input"
                  style={{ width: '200px' }}
                />
                <a href="#focus-demo" className="cyber-focus-visible" style={{ padding: 'var(--space-sm)' }}>
                  Focusable link
                </a>
              </div>
              <CodeBlock
                title="Focus Visible"
                language="html"
                code={`<!-- Enhanced focus outline for buttons -->
<button class="cyber-btn cyber-focus-visible">
  Interactive Button
</button>

<!-- Focus visible on inputs -->
<input type="text"
       class="cyber-input cyber-focus-visible"
       placeholder="Search...">

<!-- Custom interactive elements -->
<div class="cyber-card cyber-focus-visible"
     tabindex="0"
     role="button">
  Clickable card
</div>`}
              />
            </div>

            {/* Motion Preferences */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              Motion Preferences
            </h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
              Respect user motion preferences for animations and transitions. Some users experience motion sickness or have vestibular disorders that make animations problematic.
            </p>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-lg)' }}>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <p style={{ marginBottom: 'var(--space-sm)' }}><code>.cyber-motion-safe</code></p>
                  <div
                    className="cyber-motion-safe cyber-p-md"
                    style={{
                      background: 'var(--cyber-cyan-900)',
                      animation: 'pulse 2s infinite',
                      display: 'inline-block',
                    }}
                  >
                    Animations disabled if user prefers reduced motion
                  </div>
                </div>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <p style={{ marginBottom: 'var(--space-sm)' }}><code>.cyber-motion-reduce</code></p>
                  <div
                    className="cyber-motion-reduce cyber-p-md"
                    style={{
                      background: 'var(--cyber-magenta-900)',
                      animation: 'pulse 2s infinite',
                      display: 'inline-block',
                    }}
                  >
                    Animations only when user prefers reduced motion
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Motion Preferences"
                language="html"
                code={`<!-- Disable animation for users who prefer reduced motion -->
<div class="cyber-motion-safe animated-element">
  This won't animate if prefers-reduced-motion is set
</div>

<!-- Only animate for users who prefer reduced motion -->
<!-- (rarely used - for subtle alternatives) -->
<div class="cyber-motion-reduce subtle-indicator">
  This only animates when reduced motion is preferred
</div>

<!-- Practical example: Loading spinner -->
<div class="cyber-motion-safe loading-spinner">
  <span class="cyber-sr-only">Loading...</span>
</div>
<!-- Fallback for reduced motion users -->
<div class="cyber-motion-reduce">
  Loading...
</div>`}
              />
            </div>

            {/* Practical Examples */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              Practical Usage Examples
            </h3>
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-md)' }}>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <p style={{ marginBottom: 'var(--space-sm)', fontWeight: 'bold' }}>Accessible Icon Button</p>
                  <button className="cyber-btn cyber-btn--ghost cyber-focus-visible" aria-label="Settings">
                    <span aria-hidden="true">&#9881;</span>
                    <span className="cyber-sr-only">Settings</span>
                  </button>
                </div>
                <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-md)' }}>
                  <p style={{ marginBottom: 'var(--space-sm)', fontWeight: 'bold' }}>Form with Accessible Error</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                    <label htmlFor="email-demo" className="cyber-label">Email</label>
                    <input
                      id="email-demo"
                      type="email"
                      className="cyber-input cyber-focus-visible"
                      aria-describedby="email-error-demo"
                      aria-invalid="true"
                      defaultValue="invalid-email"
                      style={{ maxWidth: '300px' }}
                    />
                    <span id="email-error-demo" className="cyber-text-magenta" role="alert">
                      Please enter a valid email address
                    </span>
                  </div>
                </div>
              </div>
              <CodeBlock
                title="Complete Accessibility Patterns"
                language="html"
                code={`<!-- Skip link at page start -->
<a href="#main" class="cyber-sr-only cyber-sr-only-focusable cyber-btn">
  Skip to main content
</a>

<!-- Accessible icon button -->
<button class="cyber-btn cyber-btn--ghost cyber-focus-visible"
        aria-label="Settings">
  <span aria-hidden="true">&#9881;</span>
  <span class="cyber-sr-only">Settings</span>
</button>

<!-- Form with accessible error messages -->
<label for="email">Email</label>
<input id="email"
       type="email"
       class="cyber-input cyber-focus-visible"
       aria-describedby="email-error"
       aria-invalid="true">
<span id="email-error" class="cyber-text-magenta" role="alert">
  Please enter a valid email address
</span>

<!-- Loading state with motion preference -->
<div class="cyber-motion-safe spinner" aria-hidden="true"></div>
<span class="cyber-sr-only" role="status" aria-live="polite">
  Loading content...
</span>`}
              />
            </div>

            {/* Reference Table */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
              All Accessibility Classes
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.cyber-sr-only</code></td>
                    <td>Visually hidden, accessible to screen readers</td>
                    <td>Labels for icon buttons, additional context</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-sr-only-focusable</code></td>
                    <td>Hidden until focused (use with sr-only)</td>
                    <td>Skip links, focusable hidden content</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-not-sr</code></td>
                    <td>Hide from screen readers (speak: none)</td>
                    <td>Decorative separators, visual-only elements</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-focus-visible</code></td>
                    <td>Enhanced focus outline on :focus-visible</td>
                    <td>Custom interactive elements, focus management</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-motion-safe</code></td>
                    <td>Disable transitions/animations when reduced motion preferred</td>
                    <td>Animated elements, loading spinners</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-motion-reduce</code></td>
                    <td>Disable transitions/animations when motion is NOT reduced</td>
                    <td>Alternative subtle indicators (rare)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CSS Properties Reference */}
            <h3 className="cyber-h4" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
              CSS Properties Reference
            </h3>
            <div className="cyber-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>CSS Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.cyber-sr-only</code></td>
                    <td>position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; border: 0; overflow: hidden; white-space: nowrap; clip: rect(0,0,0,0)</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-sr-only-focusable:focus</code></td>
                    <td>position: static; width: auto; height: auto; margin: inherit; padding: inherit; overflow: visible; white-space: normal; clip: auto</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-not-sr</code></td>
                    <td>speak: none</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-focus-visible:focus-visible</code></td>
                    <td>outline: 2px solid var(--cyber-cyan-500); outline-offset: 2px</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-motion-safe</code></td>
                    <td>@media (prefers-reduced-motion: reduce) transition: none; animation: none</td>
                  </tr>
                  <tr>
                    <td><code>.cyber-motion-reduce</code></td>
                    <td>@media (prefers-reduced-motion: no-preference) transition: none; animation: none</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Utilities;
