import { Link } from 'react-router';

import CodeBlock from '../components/CodeBlock';
import CopyButton from '../components/CopyButton';
import InstallTabs from '../components/InstallTabs';
import ModuleGallery from '../components/ModuleGallery';
import ThemeShowcase from '../components/ThemeShowcase';
import { docsBundle } from '../lib/docs';
import { ENTRIES } from '../lib/entries';
import { formatBytes, meta } from '../lib/meta';
import { THEMES } from '../lib/theme';
import { CHARTS_URL, FONTS_SNIPPET, NPM_INSTALL } from '../site';

const { heroPanel, iconCount, iconSample, chartSample } = docsBundle;

const FACTS: { term: string; value: string }[] = [
  { term: 'JavaScript shipped', value: '0 bytes' },
  { term: 'Stylesheet, gzipped', value: formatBytes(meta.css.gzipBytes) },
  { term: 'Components', value: String(ENTRIES.components.length) },
  { term: 'Icons', value: String(iconCount) },
  { term: 'Cascade layers', value: meta.layers.join(' › ') },
];

function Home() {
  // The home page runs on the default bundle alone, so it shows what that bundle styles.
  const documented = ENTRIES.components.filter((entry) => entry.doc && entry.module?.inBundle);

  return (
    <>
      <section className="site-hero" aria-labelledby="hero-title">
        <div className="site-wrap site-hero__grid">
          <div className="site-hero__copy">
            <h1 id="hero-title" className="site-hero__title">
              Cyberpunk interfaces in{' '}
              <span
                className="cyber-glitch cyber-inline-block cyber-text-cyan"
                data-text="pure CSS"
              >
                pure CSS
              </span>
            </h1>
            <p className="site-hero__lead">
              Neon components, glitch effects and design tokens in one stylesheet. No JavaScript, no
              build step, any framework.
            </p>
            <div className="cyber-flex cyber-flex-wrap cyber-gap-sm">
              <Link to="/docs" className="cyber-btn cyber-btn--filled cyber-btn--lg">
                Get started
              </Link>
              <Link to="/components" className="cyber-btn cyber-btn--lg">
                Browse components
              </Link>
            </div>
            <div className="site-hero__install">
              <code className="site-hero__command">{NPM_INSTALL}</code>
              <CopyButton text={NPM_INSTALL} label="Copy npm install command" />
            </div>
          </div>

          <div className="site-hero__panel">
            {/* Markup comes from the docs data files in this repo, never from users. */}
            <div dangerouslySetInnerHTML={{ __html: heroPanel }} />
            <details className="site-hero__source">
              <summary>This panel is 100% Cybercore. See the markup</summary>
              <CodeBlock code={heroPanel} language="html" title="Deck status panel" />
            </details>
          </div>
        </div>
      </section>

      <section className="site-band" aria-labelledby="install-title">
        <div className="site-wrap site-split">
          <div>
            <h2 id="install-title" className="site-band__title">
              Install in one line
            </h2>
            <p className="site-band__lead">
              Pull it from npm or link the CDN build. Add the fonts and every class on this site
              works in your page.
            </p>
            <Link to="/docs" className="site-more">
              Read the full setup guide
            </Link>
          </div>
          <div className="site-stack">
            <InstallTabs />
            <CodeBlock code={FONTS_SNIPPET} language="html" title="Fonts" />
          </div>
        </div>
      </section>

      <section className="site-band" aria-labelledby="gallery-title">
        <div className="site-wrap">
          <div className="site-band__head">
            <h2 id="gallery-title" className="site-band__title">
              Components, running live
            </h2>
            <p className="site-band__lead">
              Nothing below is a screenshot. Each tile renders the same markup its page lets you
              copy.
            </p>
          </div>
          <ModuleGallery entries={documented} as="h3" />
          <p className="site-band__foot">
            <Link to="/components" className="site-more">
              See all {ENTRIES.components.length} components
            </Link>
          </p>
        </div>
      </section>

      <section className="site-band" aria-labelledby="themes-title">
        <div className="site-wrap">
          <div className="site-band__head">
            <h2 id="themes-title" className="site-band__title">
              {THEMES.length > 1 ? 'One attribute changes the city' : 'Retune it with tokens'}
            </h2>
            <p className="site-band__lead">
              {THEMES.length > 1
                ? 'Themes are sets of custom properties. Pick one and this whole site follows, because it reads the same tokens you will.'
                : 'Every colour, font and space is a custom property. Override a token and each component that reads it follows.'}
            </p>
          </div>
          <ThemeShowcase />
          <p className="site-band__foot">
            <Link to="/docs/theming" className="site-more">
              Browse every token
            </Link>
          </p>
        </div>
      </section>

      <section className="site-band" aria-labelledby="facts-title">
        <div className="site-wrap site-split">
          <div>
            <h2 id="facts-title" className="site-band__title">
              Small, layered, honest about motion
            </h2>
            <p className="site-band__lead">
              Styles live in cascade layers, so your own CSS wins without specificity fights.
              Animated effects stop when the visitor asks for reduced motion.
            </p>
          </div>
          <dl className="site-specs">
            {FACTS.map((fact) => (
              <div key={fact.term} className="site-specs__row">
                <dt>{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="site-band" aria-labelledby="more-title">
        <div className="site-wrap">
          <h2 id="more-title" className="site-band__title">
            Icons and charts in the same skin
          </h2>
          <div className="site-duo">
            <div className="site-duo__item">
              <div
                className="site-duo__icons cyber-text-cyan"
                aria-hidden="true"
                // Icon SVGs come from the framework's own registry.
                dangerouslySetInnerHTML={{ __html: iconSample }}
              />
              <h3 className="site-duo__title">{iconCount} SVG icons</h3>
              <p>
                Outline, solid, duotone and glitch variants. Import one icon or the whole set, with
                types.
              </p>
              <Link to="/icons" className="site-more">
                Search the icons
              </Link>
            </div>
            <div className="site-duo__item">
              <div
                className="site-duo__icons cyber-text-magenta"
                aria-hidden="true"
                // Icon SVGs come from the framework's own registry.
                dangerouslySetInnerHTML={{ __html: chartSample }}
              />
              <h3 className="site-duo__title">cybercore-charts</h3>
              <p>
                A zero-dependency SVG chart library in the same neon palette, for the dashboards
                these components end up in.
              </p>
              <a href={CHARTS_URL} className="site-more">
                Open cybercore-charts
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-band site-close" aria-labelledby="close-title">
        <div className="site-wrap">
          <h2 id="close-title" className="site-close__title">
            Start with one link tag
          </h2>
          <div className="cyber-flex cyber-flex-wrap cyber-gap-sm cyber-justify-center">
            <Link to="/docs" className="cyber-btn cyber-btn--filled cyber-btn--lg">
              Get started
            </Link>
            <Link to="/components" className="cyber-btn cyber-btn--lg">
              Browse components
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
