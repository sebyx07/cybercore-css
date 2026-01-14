import { useState, useMemo } from 'react';

import {
  icons,
  getRegisteredIcons,
  getRegisteredByCategory,
  renderIcon,
  getIcon,
  getVariants,
} from '../../../src/icons';
import CodeBlock from '../components/CodeBlock';

import type { IconCategory, IconVariant, IconColor } from '../../../src/icons';

const CATEGORIES: { id: IconCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Icons' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'actions', label: 'Actions' },
  { id: 'media', label: 'Media' },
  { id: 'communication', label: 'Communication' },
  { id: 'data', label: 'Data' },
  { id: 'security', label: 'Security' },
  { id: 'tech', label: 'Tech' },
  { id: 'files', label: 'Files' },
  { id: 'status', label: 'Status' },
  { id: 'social', label: 'Social' },
];

const VARIANTS: { id: IconVariant; label: string }[] = [
  { id: 'outline', label: 'Outline' },
  { id: 'solid', label: 'Solid' },
  { id: 'duotone', label: 'Duotone' },
  { id: 'glitch', label: 'Glitch' },
];

const COLORS: { id: IconColor; label: string; cssVar: string }[] = [
  { id: 'current', label: 'Current', cssVar: 'currentColor' },
  { id: 'cyan', label: 'Cyan', cssVar: 'var(--cyber-cyan-500)' },
  { id: 'magenta', label: 'Magenta', cssVar: 'var(--cyber-magenta-500)' },
  { id: 'yellow', label: 'Yellow', cssVar: 'var(--cyber-yellow-500)' },
  { id: 'green', label: 'Green', cssVar: 'var(--cyber-green-500)' },
];

const SIZES = [16, 20, 24, 32, 48] as const;

function Icons() {
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>('all');
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>('outline');
  const [selectedColor, setSelectedColor] = useState<IconColor>('cyan');
  const [selectedSize, setSelectedSize] = useState<number>(32);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Get filtered icons
  const filteredIcons = useMemo(() => {
    let iconList: string[];

    if (selectedCategory === 'all') {
      iconList = getRegisteredIcons();
    } else {
      // getRegisteredByCategory returns IconDefinition[], extract names
      iconList = getRegisteredByCategory(selectedCategory).map((icon) => icon.name);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      iconList = iconList.filter((name) => {
        const icon = icons[name];
        if (!icon) {
          return false;
        }
        return (
          name.toLowerCase().includes(query) ||
          icon.description.toLowerCase().includes(query) ||
          icon.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
    }

    return iconList;
  }, [selectedCategory, searchQuery]);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: getRegisteredIcons().length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = getRegisteredByCategory(cat.id).length;
      }
    });
    return counts;
  }, []);

  // Handle copy to clipboard
  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(type);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Generate code examples for selected icon
  const getCodeExamples = (iconName: string) => {
    const svg = getIcon(iconName, selectedVariant);
    const variants = getVariants(iconName);

    return {
      import: `import { renderIcon, getIcon } from 'cybercore-css/icons';`,
      render: `// Render with options
const html = renderIcon('${iconName}', {
  size: ${selectedSize},
  color: '${selectedColor}',
  variant: '${selectedVariant}',
});`,
      getSvg: `// Get raw SVG string
const svg = getIcon('${iconName}'${selectedVariant !== 'outline' ? `, '${selectedVariant}'` : ''});`,
      html: `<!-- Direct HTML usage -->
<span class="cyber-icon cyber-icon--${iconName}" style="color: ${COLORS.find((c) => c.id === selectedColor)?.cssVar}">
  ${svg?.replace(/\n/g, '\n  ') || '<!-- SVG here -->'}
</span>`,
      variants: variants,
      svg: svg,
    };
  };

  const selectedIconData = selectedIcon ? icons[selectedIcon] : null;
  const codeExamples = selectedIcon ? getCodeExamples(selectedIcon) : null;

  return (
    <div>
      <header className="page-header">
        <div className="demo-container">
          <p className="demo-subtitle">
            &gt; CYBER_ICONS<span className="cursor">_</span>
          </p>
          <h1 className="cyber-h1 cyber-text-glow">Icons</h1>
          <p className="cyber-lead">
            Cyberpunk-themed SVG icon system. {getRegisteredIcons().length} icons across 10
            categories.
          </p>
        </div>
      </header>

      <div className="demo-container">
        {/* Controls Section */}
        <section className="demo-section">
          <div className="cyber-card">
            <div className="cyber-grid cyber-grid--2" style={{ gap: 'var(--space-lg)' }}>
              {/* Search */}
              <div className="cyber-field">
                <label className="cyber-field__label" htmlFor="icon-search">
                  Search Icons
                </label>
                <input
                  type="text"
                  id="icon-search"
                  className="cyber-input"
                  placeholder="Search by name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Size Selector */}
              <div className="cyber-field">
                <span className="cyber-field__label">Icon Size</span>
                <div className="cyber-flex cyber-gap-sm" role="group" aria-label="Icon size selector">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      className={`cyber-btn cyber-btn--sm ${selectedSize === size ? '' : 'cyber-btn--ghost'}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}px
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Variant Selector */}
            <div className="cyber-field" style={{ marginTop: 'var(--space-md)' }}>
              <span className="cyber-field__label">Variant</span>
              <div className="cyber-flex cyber-gap-sm cyber-flex--wrap" role="group" aria-label="Icon variant selector">
                {VARIANTS.map((variant) => (
                  <button
                    key={variant.id}
                    className={`cyber-btn cyber-btn--sm ${selectedVariant === variant.id ? '' : 'cyber-btn--ghost'}`}
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="cyber-field" style={{ marginTop: 'var(--space-md)' }}>
              <span className="cyber-field__label">Color Theme</span>
              <div className="cyber-flex cyber-gap-sm cyber-flex--wrap" role="group" aria-label="Icon color selector">
                {COLORS.map((color) => (
                  <button
                    key={color.id}
                    className={`cyber-btn cyber-btn--sm ${
                      color.id === 'magenta'
                        ? 'cyber-btn--magenta'
                        : color.id === 'yellow'
                          ? 'cyber-btn--yellow'
                          : color.id === 'green'
                            ? 'cyber-btn--green'
                            : ''
                    } ${selectedColor === color.id ? '' : 'cyber-btn--ghost'}`}
                    onClick={() => setSelectedColor(color.id)}
                    style={color.id === 'current' ? { borderColor: 'var(--cyber-chrome-400)' } : {}}
                  >
                    {color.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <nav className="cyber-tabs" style={{ marginBottom: 'var(--space-lg)', overflowX: 'auto' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cyber-tab ${selectedCategory === cat.id ? 'cyber-tab--active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
              <span
                className="cyber-badge cyber-badge--sm"
                style={{ marginLeft: 'var(--space-xs)' }}
              >
                {categoryCounts[cat.id] || 0}
              </span>
            </button>
          ))}
        </nav>

        {/* Icons Grid */}
        <section className="demo-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">
              <span className="cyber-text-cyan">//</span>{' '}
              {selectedCategory === 'all'
                ? 'All Icons'
                : CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className="cyber-section__subtitle">
              {filteredIcons.length} icon{filteredIcons.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredIcons.length === 0 ? (
            <div
              className="cyber-card"
              style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}
            >
              <p style={{ color: 'var(--color-text-muted)' }}>
                No icons found matching "{searchQuery}"
              </p>
            </div>
          ) : (
            <div
              className="icons-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: 'var(--space-sm)',
              }}
            >
              {filteredIcons.map((name) => {
                const availableVariants = getVariants(name);
                const hasSelectedVariant = availableVariants.includes(selectedVariant);
                const variantToUse = hasSelectedVariant ? selectedVariant : 'outline';

                return (
                  <button
                    key={name}
                    className={`icon-card cyber-card cyber-card--interactive ${selectedIcon === name ? 'icon-card--selected' : ''}`}
                    onClick={() => setSelectedIcon(selectedIcon === name ? null : name)}
                    style={{
                      padding: 'var(--space-md)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      cursor: 'pointer',
                      border: selectedIcon === name ? '1px solid var(--cyber-cyan-500)' : undefined,
                      boxShadow:
                        selectedIcon === name
                          ? '0 0 20px var(--cyber-cyan-500-alpha-30)'
                          : undefined,
                    }}
                  >
                    <div
                      className="icon-card__icon"
                      style={{
                        color: COLORS.find((c) => c.id === selectedColor)?.cssVar,
                        filter:
                          selectedColor !== 'current'
                            ? `drop-shadow(0 0 4px ${COLORS.find((c) => c.id === selectedColor)?.cssVar})`
                            : undefined,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: renderIcon(name, {
                          size: selectedSize as 16 | 20 | 24 | 32 | 48 | 64,
                          variant: variantToUse,
                          color: 'current',
                        }),
                      }}
                    />
                    <span
                      className="icon-card__name cyber-mono"
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-secondary)',
                        textAlign: 'center',
                        wordBreak: 'break-word',
                      }}
                    >
                      {name}
                    </span>
                    {!hasSelectedVariant && selectedVariant !== 'outline' && (
                      <span
                        className="cyber-badge cyber-badge--sm"
                        style={{ fontSize: '9px', opacity: 0.7 }}
                      >
                        outline only
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </section>

        {/* Selected Icon Details */}
        {selectedIcon && selectedIconData && codeExamples && (
          <section className="demo-section" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="cyber-card cyber-neon-border" style={{ zIndex: 1 }}>
              <div className="cyber-card__header">
                <h3 className="cyber-h4" style={{ color: 'var(--cyber-cyan-500)' }}>
                  {selectedIcon}
                </h3>
                <button
                  className="cyber-btn cyber-btn--ghost cyber-btn--sm"
                  onClick={() => setSelectedIcon(null)}
                >
                  Close
                </button>
              </div>

              <div
                className="cyber-grid cyber-grid--2"
                style={{ gap: 'var(--space-xl)', marginTop: 'var(--space-md)' }}
              >
                {/* Icon Preview */}
                <div>
                  <div
                    className="icon-preview"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'var(--space-2xl)',
                      background: 'var(--cyber-void-950)',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    <div
                      style={{
                        color: COLORS.find((c) => c.id === selectedColor)?.cssVar,
                        filter: `drop-shadow(0 0 10px ${COLORS.find((c) => c.id === selectedColor)?.cssVar})`,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: renderIcon(selectedIcon, {
                          size: 64,
                          variant: codeExamples.variants.includes(selectedVariant)
                            ? selectedVariant
                            : 'outline',
                          color: 'current',
                        }),
                      }}
                    />
                  </div>

                  {/* Icon Info */}
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <p className="cyber-label" style={{ marginBottom: 'var(--space-2xs)' }}>
                      Description
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      {selectedIconData.description}
                    </p>
                  </div>

                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <p className="cyber-label" style={{ marginBottom: 'var(--space-2xs)' }}>
                      Category
                    </p>
                    <span className="cyber-badge">{selectedIconData.category}</span>
                  </div>

                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <p className="cyber-label" style={{ marginBottom: 'var(--space-2xs)' }}>
                      Tags
                    </p>
                    <div className="cyber-flex cyber-gap-xs cyber-flex--wrap">
                      {selectedIconData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="cyber-badge cyber-badge--sm"
                          style={{ opacity: 0.7 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="cyber-label" style={{ marginBottom: 'var(--space-2xs)' }}>
                      Available Variants
                    </p>
                    <div className="cyber-flex cyber-gap-xs cyber-flex--wrap">
                      {codeExamples.variants.map((variant) => (
                        <span
                          key={variant}
                          className={`cyber-badge cyber-badge--sm ${variant === selectedVariant ? 'cyber-badge--green' : ''}`}
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code Examples */}
                <div>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <div
                      className="cyber-flex cyber-justify-between cyber-items-center"
                      style={{ marginBottom: 'var(--space-xs)' }}
                    >
                      <p className="cyber-label">Copy SVG</p>
                      <button
                        className={`cyber-btn cyber-btn--sm ${copiedCode === 'svg' ? 'cyber-btn--green' : 'cyber-btn--ghost'}`}
                        onClick={() => handleCopy(codeExamples.svg || '', 'svg')}
                      >
                        {copiedCode === 'svg' ? 'Copied!' : 'Copy SVG'}
                      </button>
                    </div>
                  </div>

                  <CodeBlock title="Import" language="typescript" code={codeExamples.import} />

                  <div style={{ marginTop: 'var(--space-md)' }}>
                    <CodeBlock
                      title="Render with Options"
                      language="typescript"
                      code={codeExamples.render}
                    />
                  </div>

                  <div style={{ marginTop: 'var(--space-md)' }}>
                    <CodeBlock
                      title="Get Raw SVG"
                      language="typescript"
                      code={codeExamples.getSvg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="cyber-divider" style={{ margin: 'var(--space-2xl) 0' }} />

        {/* Usage Examples Section */}
        <section className="demo-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">
              <span className="cyber-text-cyan">//</span> Usage Examples
            </h2>
            <p className="cyber-section__subtitle">Different ways to use Cyber Icons</p>
          </div>

          <div className="cyber-grid cyber-grid--2" style={{ gap: 'var(--space-xl)' }}>
            {/* Size Examples */}
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ padding: 'var(--space-lg)' }}>
                <div className="cyber-flex cyber-gap-lg cyber-items-end">
                  {[16, 20, 24, 32, 48].map((size) => (
                    <div key={size} style={{ textAlign: 'center' }}>
                      <div
                        style={{ color: 'var(--cyber-cyan-500)' }}
                        dangerouslySetInnerHTML={{
                          __html: renderIcon('terminal', {
                            size: size as 16 | 20 | 24 | 32 | 48 | 64,
                          }),
                        }}
                      />
                      <span
                        className="cyber-mono"
                        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}
                      >
                        {size}px
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <CodeBlock
                title="Different Sizes"
                language="typescript"
                code={`renderIcon('terminal', { size: 16 });
renderIcon('terminal', { size: 24 });
renderIcon('terminal', { size: 32 });
renderIcon('terminal', { size: 48 });`}
              />
            </div>

            {/* Color Examples */}
            <div className="demo-code-preview">
              <div className="demo-preview" style={{ padding: 'var(--space-lg)' }}>
                <div className="cyber-flex cyber-gap-lg cyber-items-center">
                  {(['cyan', 'magenta', 'yellow', 'green'] as const).map((color) => (
                    <div
                      key={color}
                      style={{
                        color: COLORS.find((c) => c.id === color)?.cssVar,
                        filter: `drop-shadow(0 0 6px ${COLORS.find((c) => c.id === color)?.cssVar})`,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: renderIcon('chip', { size: 32 }),
                      }}
                    />
                  ))}
                </div>
              </div>
              <CodeBlock
                title="Color Themes"
                language="typescript"
                code={`renderIcon('chip', { color: 'cyan' });
renderIcon('chip', { color: 'magenta' });
renderIcon('chip', { color: 'yellow' });
renderIcon('chip', { color: 'green' });`}
              />
            </div>
          </div>

          {/* Button with Icons */}
          <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="demo-preview">
              <div className="cyber-flex cyber-gap-md cyber-flex--wrap">
                <button className="cyber-btn cyber-flex cyber-gap-sm cyber-items-center">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderIcon('download', { size: 20 }),
                    }}
                  />
                  Download
                </button>
                <button className="cyber-btn cyber-btn--magenta cyber-flex cyber-gap-sm cyber-items-center">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderIcon('shield', { size: 20 }),
                    }}
                  />
                  Security
                </button>
                <button className="cyber-btn cyber-btn--green cyber-flex cyber-gap-sm cyber-items-center">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderIcon('check', { size: 20 }),
                    }}
                  />
                  Confirm
                </button>
                <button className="cyber-btn cyber-btn--ghost cyber-flex cyber-gap-sm cyber-items-center">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderIcon('settings', { size: 20 }),
                    }}
                  />
                  Settings
                </button>
              </div>
            </div>
            <CodeBlock
              title="Buttons with Icons"
              language="html"
              code={`<button class="cyber-btn cyber-flex cyber-gap-sm cyber-items-center">
  <span><!-- renderIcon('download', { size: 20 }) --></span>
  Download
</button>`}
            />
          </div>

          {/* Icon in Cards */}
          <div className="demo-code-preview" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="demo-preview" style={{ alignItems: 'stretch' }}>
              <div
                className="cyber-grid cyber-grid--3"
                style={{ width: '100%', gap: 'var(--space-md)' }}
              >
                <div className="cyber-card cyber-card--interactive">
                  <div
                    className="cyber-flex cyber-items-center cyber-gap-sm"
                    style={{ marginBottom: 'var(--space-sm)' }}
                  >
                    <span
                      style={{ color: 'var(--cyber-cyan-500)' }}
                      dangerouslySetInnerHTML={{
                        __html: renderIcon('terminal', { size: 24 }),
                      }}
                    />
                    <span className="cyber-h5">Terminal</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Command line interface
                  </p>
                </div>
                <div className="cyber-card cyber-card--magenta cyber-card--interactive">
                  <div
                    className="cyber-flex cyber-items-center cyber-gap-sm"
                    style={{ marginBottom: 'var(--space-sm)' }}
                  >
                    <span
                      style={{ color: 'var(--cyber-magenta-500)' }}
                      dangerouslySetInnerHTML={{
                        __html: renderIcon('shield', { size: 24 }),
                      }}
                    />
                    <span className="cyber-h5">Security</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                    System protection
                  </p>
                </div>
                <div className="cyber-card cyber-card--green cyber-card--interactive">
                  <div
                    className="cyber-flex cyber-items-center cyber-gap-sm"
                    style={{ marginBottom: 'var(--space-sm)' }}
                  >
                    <span
                      style={{ color: 'var(--cyber-green-500)' }}
                      dangerouslySetInnerHTML={{
                        __html: renderIcon('online', { size: 24 }),
                      }}
                    />
                    <span className="cyber-h5">Status</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                    System online
                  </p>
                </div>
              </div>
            </div>
            <CodeBlock
              title="Icons in Cards"
              language="html"
              code={`<div class="cyber-card">
  <div class="cyber-flex cyber-items-center cyber-gap-sm">
    <span style="color: var(--cyber-cyan-500)">
      <!-- renderIcon('terminal', { size: 24 }) -->
    </span>
    <span class="cyber-h5">Terminal</span>
  </div>
</div>`}
            />
          </div>
        </section>

        <div className="cyber-divider" style={{ margin: 'var(--space-2xl) 0' }} />

        {/* Installation Section */}
        <section className="demo-section">
          <div className="cyber-section__header">
            <h2 className="cyber-section__title">
              <span className="cyber-text-cyan">//</span> Installation
            </h2>
            <p className="cyber-section__subtitle">Get started with Cyber Icons</p>
          </div>

          <div className="cyber-grid cyber-grid--2" style={{ gap: 'var(--space-xl)' }}>
            <div>
              <CodeBlock
                title="Import the Icon System"
                language="typescript"
                code={`// Import utilities
import { renderIcon, getIcon, icons } from 'cybercore-css/icons';

// Render an icon with options
const html = renderIcon('terminal', {
  size: 24,
  color: 'cyan',
  variant: 'outline',
});

// Get raw SVG string
const svg = getIcon('terminal');

// Access icon registry directly
const chipIcon = icons.chip;`}
              />
            </div>

            <div>
              <CodeBlock
                title="Tree-Shakeable Imports"
                language="typescript"
                code={`// Import individual icons for smaller bundles
import {
  TerminalIcon,
  ChipIcon,
  SignalIcon,
} from 'cybercore-css/icons/individual';

// Each export is the IconDefinition
console.log(TerminalIcon.svg);
console.log(TerminalIcon.category); // 'tech'
console.log(TerminalIcon.tags); // ['cli', 'command', ...]`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Icons;
