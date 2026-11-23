import { Link } from 'react-router';

import CodeBlock from '../components/CodeBlock';
import InstallTabs from '../components/InstallTabs';
import { meta } from '../lib/meta';
import { CHARTS_URL, FONTS_SNIPPET, starterPage } from '../site';

const BUNDLER_IMPORT = `// main.js, main.ts or any entry your bundler reads
import 'cybercore-css';`;

const SASS_ALL = `// Vite, webpack and other bundlers that read package exports
@use "cybercore-css";`;

const SASS_CLI = `// Plain Sass: run with  sass --pkg-importer=node
@use "pkg:cybercore-css";`;

const SASS_MODULES = `// The core every module builds on
${meta.coreModules.map((id) => `@use "cybercore-css/scss/${id}";`).join('\n')}

// Then only what the page uses
@use "cybercore-css/scss/components/buttons";
@use "cybercore-css/scss/components/cards";
@use "cybercore-css/scss/effects/glitch";`;

const LAYERS = `@layer ${meta.layers.join(', ')};`;

const LAYER_OVERRIDE = `/* Unlayered rules beat every Cybercore layer, whatever their specificity */
.cyber-btn {
  letter-spacing: 0.2em;
}

/* Or join a layer and keep the framework's own ordering */
@layer components {
  .cyber-card {
    padding: var(--space-lg);
  }
}`;

function GettingStarted() {
  return (
    <article className="site-page">
      <header className="site-page__header">
        <h1 className="site-page__title">Getting started</h1>
        <p className="site-page__lead">
          Cybercore CSS is one stylesheet. Load it, load the fonts, and write HTML with{' '}
          <code>cyber-</code> classes.
        </p>
      </header>

      <section className="site-section" id="install" aria-labelledby="install-title">
        <h2 className="site-section__title" id="install-title">
          1. Add the stylesheet
        </h2>
        <InstallTabs />
        <p>With npm, import the built CSS once from your entry file:</p>
        <CodeBlock code={BUNDLER_IMPORT} language="js" title="JavaScript" />
      </section>

      <section className="site-section" id="fonts" aria-labelledby="fonts-title">
        <h2 className="site-section__title" id="fonts-title">
          2. Add the fonts
        </h2>
        <p>
          The framework names four families and does not bundle them: Rajdhani for headings and
          labels, Exo 2 for body text, JetBrains Mono for code and Orbitron for the navigation
          brand. Put this in your <code>&lt;head&gt;</code>. Without it everything still works and
          falls back to system fonts.
        </p>
        <CodeBlock code={FONTS_SNIPPET} language="html" title="Fonts" />
      </section>

      <section className="site-section" id="starter" aria-labelledby="starter-title">
        <h2 className="site-section__title" id="starter-title">
          3. Write a page
        </h2>
        <p>
          A complete file. Save it as <code>index.html</code>, open it in a browser, and you have a
          glitching heading and a button. No install, no build.
        </p>
        <CodeBlock code={starterPage('jsdelivr')} language="html" title="index.html" />
      </section>

      <section className="site-section" id="sass" aria-labelledby="sass-title">
        <h2 className="site-section__title" id="sass-title">
          Build from Sass
        </h2>
        <p>
          The package ships its SCSS source. Import everything, or only the modules a page needs.
        </p>
        <CodeBlock code={SASS_ALL} language="scss" title="Everything, in a bundler" />
        <CodeBlock code={SASS_CLI} language="scss" title="Everything, with the Sass CLI" />
        <CodeBlock code={SASS_MODULES} language="scss" title="Selected modules" />
        <p>
          Each <Link to="/components">component</Link>, <Link to="/effects">effect</Link> and{' '}
          <Link to="/utilities">utility</Link> page shows its own import line. Some utility modules
          are Sass-only and are not part of the CDN build. Their pages say so.
        </p>
      </section>

      <section className="site-section" id="layers" aria-labelledby="layers-title">
        <h2 className="site-section__title" id="layers-title">
          How the cascade is organised
        </h2>
        <p>
          Every rule sits in a cascade layer. Later layers win over earlier ones, and anything you
          write outside a layer wins over all of them.
        </p>
        <CodeBlock code={LAYERS} language="css" title="Layer order" />
        <CodeBlock code={LAYER_OVERRIDE} language="css" title="Overriding" />
        <p>
          Class names follow one pattern: a block (<code>.cyber-card</code>), its parts (
          <code>.cyber-card__header</code>) and its variants (<code>.cyber-card--magenta</code>).
        </p>
      </section>

      <section className="site-section" id="next" aria-labelledby="next-title">
        <h2 className="site-section__title" id="next-title">
          Where to go next
        </h2>
        <ul className="site-list">
          <li>
            <Link to="/docs/theming">Theming and tokens</Link>: change colours, type and spacing.
          </li>
          <li>
            <Link to="/components">Components</Link>: markup, states and ARIA for each one.
          </li>
          <li>
            <Link to="/icons">Icons</Link>: search the set and copy what you need.
          </li>
          <li>
            <a href={CHARTS_URL}>cybercore-charts</a>: SVG charts in the same palette.
          </li>
        </ul>
      </section>
    </article>
  );
}

export default GettingStarted;
