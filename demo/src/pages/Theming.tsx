import CodeBlock from '../components/CodeBlock';
import ScrollTable from '../components/ScrollTable';
import ThemeShowcase from '../components/ThemeShowcase';
import { meta, titleCase } from '../lib/meta';
import { THEMES } from '../lib/theme';

import type { TokenMeta } from '../lib/meta-types';
import type { CSSProperties, ReactNode } from 'react';

interface Category {
  id: string;
  title: string;
  text: string;
  test: RegExp;
}

// First match wins, so the catch-all stays last.
const CATEGORIES: Category[] = [
  {
    id: 'palette',
    title: 'Palette',
    text: 'The raw colour scales. Reach for the semantic tokens below first, and for these when you need a specific step.',
    test: /^--cyber-/,
  },
  {
    id: 'semantic',
    title: 'Semantic colours',
    text: 'Surfaces, text and borders by role. These are the tokens a theme usually moves.',
    test: /^--color-/,
  },
  {
    id: 'glow',
    title: 'Glows',
    text: 'Ready-made neon shadows for boxes and text.',
    test: /^--glow-/,
  },
  {
    id: 'type',
    title: 'Type',
    text: 'Font families, the fluid type scale and letter spacing.',
    test: /^--(font|text|tracking|leading)-/,
  },
  {
    id: 'spacing',
    title: 'Spacing',
    text: 'A fluid scale shared by padding, margins and gaps.',
    test: /^--space-/,
  },
  {
    id: 'shape',
    title: 'Borders and radii',
    text: 'Stroke widths and corner shapes.',
    test: /^--(radius|border)-/,
  },
  {
    id: 'motion',
    title: 'Motion',
    text: 'Easing curves and durations behind every transition.',
    test: /^--(ease|duration|transition)-/,
  },
  {
    id: 'other',
    title: 'Everything else',
    text: 'Layering, sizing and effect strength.',
    test: /./,
  },
];

function categorise(tokens: TokenMeta[]): Map<Category, TokenMeta[]> {
  const groups = new Map<Category, TokenMeta[]>(CATEGORIES.map((category) => [category, []]));
  for (const token of tokens) {
    const category = CATEGORIES.find((candidate) => candidate.test.test(token.name));
    if (category) {
      groups.get(category)?.push(token);
    }
  }
  return groups;
}

/** A live sample that reads the token itself, so it follows the active theme. */
function preview(categoryId: string, name: string): ReactNode {
  const value = `var(${name})`;
  const box = (style: CSSProperties) => <span className="site-token__box" style={style} />;

  switch (categoryId) {
    case 'palette':
    case 'semantic':
      return box({ background: value });
    case 'glow':
      return name.includes('text') ? (
        <span className="site-token__sample" style={{ textShadow: value }}>
          Aa
        </span>
      ) : (
        box({ boxShadow: value, background: 'var(--color-bg-elevated)' })
      );
    case 'type':
      if (name.startsWith('--font-')) {
        return (
          <span className="site-token__sample" style={{ fontFamily: value }}>
            Deck 0123
          </span>
        );
      }
      if (name.startsWith('--text-')) {
        return (
          <span className="site-token__sample site-token__sample--clip" style={{ fontSize: value }}>
            Aa
          </span>
        );
      }
      if (name.startsWith('--tracking-')) {
        return (
          <span className="site-token__sample" style={{ letterSpacing: value }}>
            DECK
          </span>
        );
      }
      return null;
    case 'spacing':
      return <span className="site-token__bar" style={{ width: value }} />;
    case 'shape':
      return name.startsWith('--radius-')
        ? box({ borderRadius: value, background: 'var(--color-bg-elevated)' })
        : name.includes('width') || /-(thin|medium|thick)$/.test(name)
          ? box({ borderTop: `${value} solid var(--color-text-primary)`, borderRadius: 0 })
          : null;
    default:
      return null;
  }
}

const OVERRIDE = `/* Loaded after Cybercore. Unlayered, so it wins over the theme layer. */
:root {
  --cyber-cyan-500: #7df9ff;
  --color-bg-primary: #05070d;
  --font-display: "Orbitron", system-ui, sans-serif;
}`;

const CUSTOM_THEME = `[data-theme="acid"] {
  --cyber-cyan-500: #b6ff00;
  --cyber-magenta-500: #ff5e00;
  --color-bg-primary: #0b0f05;
}`;

const SCOPED = `<!-- Tokens are inherited, so a token set on one element restyles its subtree -->
<button class="cyber-btn" style="--cyber-cyan-500: #b6ff00">Acid</button>`;

function Theming() {
  const groups = categorise(meta.tokens);
  const themeNames = meta.themes.map((theme) => theme.name);

  return (
    <article className="site-page">
      <header className="site-page__header">
        <h1 className="site-page__title">Theming and tokens</h1>
        <p className="site-page__lead">
          Every colour, size and curve in Cybercore is a CSS custom property. Change a token and
          each component that reads it follows. No Sass variables, no rebuild.
        </p>
      </header>

      <section className="site-section" id="themes" aria-labelledby="themes-title">
        <h2 className="site-section__title" id="themes-title">
          Themes
        </h2>
        {THEMES.length > 1 ? (
          <p>
            This build ships {THEMES.length} themes. Set <code>data-theme</code> on the{' '}
            <code>&lt;html&gt;</code> element to switch. Leave it off for the default. The picker
            below changes this site, because the site reads the same tokens.
          </p>
        ) : (
          <p>
            This build ships one theme. The swatches below are its accents and surfaces, read live
            from the stylesheet. Add your own theme with a <code>data-theme</code> block, as shown
            further down.
          </p>
        )}
        <ThemeShowcase />
      </section>

      <section className="site-section" id="override" aria-labelledby="override-title">
        <h2 className="site-section__title" id="override-title">
          Override tokens
        </h2>
        <p>
          Tokens are declared on <code>:root</code> inside the <code>theme</code> cascade layer.
          Redeclare them in your own stylesheet to restyle everything at once.
        </p>
        <CodeBlock code={OVERRIDE} language="css" title="Global override" />
        <p>Group overrides under an attribute to make a theme of your own:</p>
        <CodeBlock code={CUSTOM_THEME} language="css" title="Custom theme" />
        <p>Or set a token on a single element:</p>
        <div
          className="site-example__preview"
          // Markup comes from this file, never from users.
          dangerouslySetInnerHTML={{ __html: SCOPED.split('\n').slice(1).join('\n') }}
        />
        <CodeBlock code={SCOPED} language="html" title="Scoped override" />
      </section>

      <section className="site-section" id="tokens" aria-labelledby="tokens-title">
        <h2 className="site-section__title" id="tokens-title">
          Token reference
        </h2>
        <p>
          All {meta.tokens.length} tokens, read from the compiled stylesheet when this site was
          built. Previews render the live value, so they change with the theme.
        </p>

        {[...groups.entries()]
          .filter(([, tokens]) => tokens.length > 0)
          .map(([category, tokens]) => (
            <section
              key={category.id}
              id={`tokens-${category.id}`}
              className="site-tokens"
              aria-labelledby={`tokens-${category.id}-title`}
            >
              <h3 className="site-tokens__title" id={`tokens-${category.id}-title`}>
                {category.title}
              </h3>
              <p>{category.text}</p>
              <ScrollTable label={`${category.title} tokens`}>
                <thead>
                  <tr>
                    <th scope="col">Token</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Default value</th>
                    {themeNames.length > 0 && <th scope="col">Changes in</th>}
                  </tr>
                </thead>
                <tbody>
                  {tokens.map((token) => (
                    <tr key={token.name}>
                      <th scope="row" className="site-table__key">
                        <code>{token.name}</code>
                      </th>
                      <td className="site-token">{preview(category.id, token.name)}</td>
                      <td className="site-table__value">{token.value || 'Set by themes only'}</td>
                      {themeNames.length > 0 && (
                        <td className="site-table__value">
                          {themeNames
                            .filter((name) => name in token.themes)
                            .map(titleCase)
                            .join(', ')}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </ScrollTable>
            </section>
          ))}
      </section>
    </article>
  );
}

export default Theming;
