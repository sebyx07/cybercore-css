import { useId, useMemo, useState } from 'react';

import { icons } from '../../../src/icons/registry';
import { getVariants, renderIcon } from '../../../src/icons/utils';
import CodeBlock from '../components/CodeBlock';
import { titleCase } from '../lib/meta';

import type { IconDefinition, IconVariant } from '../../../src/icons/types';

const ALL_ICONS: IconDefinition[] = Object.values(icons).sort((a, b) =>
  a.name.localeCompare(b.name)
);
const CATEGORIES = [...new Set(ALL_ICONS.map((icon) => icon.category))].sort();
const VARIANTS: IconVariant[] = ['outline', 'solid', 'duotone', 'glitch'];

const USAGE_RENDER = `import { renderIcon } from 'cybercore-css/icons';

// Returns an SVG string with size, colour and ARIA attributes applied
const svg = renderIcon('terminal', {
  size: 24,
  color: 'cyan',
  variant: 'outline',
  'aria-label': 'Open terminal',
});

document.querySelector('#slot').innerHTML = svg;`;

const USAGE_CATEGORY = `// Import from one category to keep the rest of the set out of your bundle
import { terminal } from 'cybercore-css/icons/defs/tech';

// A definition carries the outline SVG and any extra variants
const outline = terminal.svg;
const solid = terminal.variants?.solid ?? terminal.svg;`;

const USAGE_BUTTON = `<button class="cyber-btn" type="button">
  ${renderIcon('download', { size: 16 }).replace(/\s*\n\s*/g, '')}
  Download
</button>

<button class="cyber-btn" type="button" aria-label="Search">
  ${renderIcon('search', { size: 16 }).replace(/\s*\n\s*/g, '')}
</button>`;

function matches(icon: IconDefinition, query: string): boolean {
  return (
    icon.name.includes(query) ||
    icon.description.toLowerCase().includes(query) ||
    icon.tags.some((tag) => tag.toLowerCase().includes(query))
  );
}

function Icons() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [variant, setVariant] = useState<IconVariant>('outline');
  const [copied, setCopied] = useState('');
  const id = useId();

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return ALL_ICONS.filter(
      (icon) =>
        (category === 'all' || icon.category === category) && (!needle || matches(icon, needle))
    );
  }, [query, category]);

  const copy = (icon: IconDefinition) => {
    const actual = getVariants(icon.name).includes(variant) ? variant : 'outline';
    const svg = renderIcon(icon.name, { size: 24, variant: actual });
    navigator.clipboard.writeText(svg).then(
      () => setCopied(`Copied the ${icon.name} SVG`),
      () => setCopied('Copy failed. Your browser blocked clipboard access.')
    );
  };

  return (
    <article className="site-page">
      <header className="site-page__header">
        <h1 className="site-page__title">Icons</h1>
        <p className="site-page__lead">
          {ALL_ICONS.length} SVG icons drawn for the framework. They inherit{' '}
          <code>currentColor</code>, so they take the colour of the text around them. Select an icon
          to copy its SVG.
        </p>
      </header>

      <section className="site-section" aria-labelledby="browse-title">
        <h2 className="site-section__title" id="browse-title">
          Browse
        </h2>
        <div className="site-filters">
          <div className="cyber-field site-filters__search">
            <label className="cyber-field__label" htmlFor={`${id}-search`}>
              Search
            </label>
            <input
              id={`${id}-search`}
              type="search"
              className="cyber-input"
              placeholder="terminal, lock, arrow"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="cyber-field">
            <label className="cyber-field__label" htmlFor={`${id}-category`}>
              Category
            </label>
            <select
              id={`${id}-category`}
              className="cyber-select"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="all">All categories</option>
              {CATEGORIES.map((name) => (
                <option key={name} value={name}>
                  {titleCase(name)}
                </option>
              ))}
            </select>
          </div>
          <div className="cyber-field">
            <label className="cyber-field__label" htmlFor={`${id}-variant`}>
              Variant
            </label>
            <select
              id={`${id}-variant`}
              className="cyber-select"
              value={variant}
              onChange={(event) => setVariant(event.target.value as IconVariant)}
            >
              {VARIANTS.map((name) => (
                <option key={name} value={name}>
                  {titleCase(name)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="site-filters__status" role="status">
          {copied || `${visible.length} of ${ALL_ICONS.length} icons`}
        </p>

        {visible.length === 0 ? (
          <div className="site-empty">
            <p>No icon matches "{query}". Try a shorter word, or another category.</p>
            <button
              type="button"
              className="cyber-btn"
              onClick={() => {
                setQuery('');
                setCategory('all');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <ul className="site-icons">
            {visible.map((icon) => {
              const hasVariant = getVariants(icon.name).includes(variant);
              return (
                <li key={icon.name}>
                  <button
                    type="button"
                    className="site-icons__item"
                    title={icon.description}
                    onClick={() => copy(icon)}
                  >
                    <span
                      className="site-icons__glyph"
                      aria-hidden="true"
                      // SVGs come from the framework's own registry.
                      dangerouslySetInnerHTML={{
                        __html: renderIcon(icon.name, {
                          size: 32,
                          variant: hasVariant ? variant : 'outline',
                        }),
                      }}
                    />
                    <span className="site-icons__name">{icon.name}</span>
                    {!hasVariant && <span className="site-icons__hint">outline only</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="site-section" aria-labelledby="use-title">
        <h2 className="site-section__title" id="use-title">
          Use them
        </h2>
        <p>
          Paste a copied SVG straight into your HTML. An icon next to a text label is decoration and
          stays hidden from screen readers. An icon that is the only content of a control needs a
          name on that control.
        </p>
        <div
          className="site-example__preview"
          // Markup comes from this file, never from users.
          dangerouslySetInnerHTML={{
            __html: `<div class="cyber-flex cyber-flex-wrap cyber-gap-sm">${USAGE_BUTTON}</div>`,
          }}
        />
        <CodeBlock code={USAGE_BUTTON} language="html" title="HTML" />
        <p>
          From JavaScript, render by name. The icon modules ship as TypeScript source, so import
          them through a bundler that compiles TypeScript, such as Vite or esbuild.
        </p>
        <CodeBlock code={USAGE_RENDER} language="ts" title="Render by name" />
        <CodeBlock code={USAGE_CATEGORY} language="ts" title="One category" />
      </section>
    </article>
  );
}

export default Icons;
