import { Link, Navigate, useParams } from 'react-router';

import CodeBlock from '../components/CodeBlock';
import Example from '../components/Example';
import RichText from '../components/RichText';
import ScrollTable from '../components/ScrollTable';
import { GROUP_LABEL } from '../data/entries';
import { ENTRIES, findEntry } from '../lib/entries';
import { ISSUES_URL, REPO_URL } from '../site';

import NotFound from './NotFound';

import '../styles/all-modules.scss';

import type { ModuleEntry, ModuleGroup } from '../data/types';

// Addresses the previous site used, kept alive.
const ALIASES: Record<ModuleGroup, Record<string, string>> = {
  components: { misc: '', nav: 'nav' },
  effects: { neon: 'neon-border' },
  utilities: {},
};

function Neighbours({ entry }: { entry: ModuleEntry }) {
  const siblings = ENTRIES[entry.group];
  const index = siblings.findIndex((candidate) => candidate.slug === entry.slug);
  const previous = siblings[index - 1];
  const next = siblings[index + 1];

  return (
    <nav className="site-pager" aria-label={`More ${GROUP_LABEL[entry.group].toLowerCase()}`}>
      {previous ? (
        <Link className="site-pager__link" to={`/${entry.group}/${previous.slug}`}>
          <span className="site-pager__hint">Previous</span>
          {previous.name}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          className="site-pager__link site-pager__link--next"
          to={`/${entry.group}/${next.slug}`}
        >
          <span className="site-pager__hint">Next</span>
          {next.name}
        </Link>
      )}
    </nav>
  );
}

function ModulePage({ group }: { group: ModuleGroup }) {
  const { slug = '' } = useParams<{ slug: string }>();
  const alias = ALIASES[group][slug];
  const entry = findEntry(group, slug);

  if (!entry && alias !== undefined) {
    return <Navigate to={alias ? `/${group}/${alias}` : `/${group}`} replace />;
  }
  if (!entry) {
    return <NotFound />;
  }

  const { doc, module } = entry;
  const sourceUrl = module ? `${REPO_URL}/blob/main/src/scss/${group}/_${module.slug}.scss` : null;

  return (
    // Keyed by page, so example previews start clean when the route changes.
    <article className="site-page" key={`${group}/${entry.slug}`}>
      <header className="site-page__header">
        <p className="site-page__crumb">
          <Link to={`/${group}`}>{GROUP_LABEL[group]}</Link>
        </p>
        <h1 className="site-page__title">{entry.name}</h1>
        <p className="site-page__lead">{entry.summary}</p>
        <ul className="site-facts">
          {module && (
            <li>
              {module.inBundle
                ? 'In the default bundle and the CDN build'
                : 'Sass module only, not in the CDN build'}
            </li>
          )}
          {doc?.behaviour === 'no-js' && <li>No JavaScript needed</li>}
          {doc?.behaviour === 'needs-js' && <li>Bring a few lines of JavaScript for state</li>}
          {sourceUrl && (
            <li>
              <a href={sourceUrl}>View source</a>
            </li>
          )}
        </ul>
      </header>

      {module && (
        <section className="site-section" aria-labelledby="import-title">
          <h2 className="site-section__title" id="import-title">
            Import
          </h2>
          <p>
            {module.inBundle
              ? 'Already included when you load the whole framework. To compile only this module with Sass:'
              : 'Compile this module with Sass alongside the framework:'}
          </p>
          <CodeBlock
            language="scss"
            title="SCSS"
            code={`@use "cybercore-css/scss/${module.id}";`}
          />
        </section>
      )}

      {doc && doc.examples.length > 0 && (
        <section className="site-section" aria-labelledby="examples-title">
          <h2 className="site-section__title" id="examples-title">
            Examples
          </h2>
          {doc.examples.map((example) => (
            <Example key={example.id} example={example} />
          ))}
        </section>
      )}

      {!doc && module && (
        <section className="site-section" aria-labelledby="notes-title">
          <h2 className="site-section__title" id="notes-title">
            Source notes
          </h2>
          <p>
            This module is in the framework but its guide is not written yet. Below is what the
            source says about itself, then the class reference read from the compiled CSS.{' '}
            <a href={ISSUES_URL}>Ask for a guide</a>.
          </p>
          {module.notes && <pre className="site-notes">{module.notes}</pre>}
        </section>
      )}

      {doc && (doc.accessibility || doc.aria || doc.keyboard) && (
        <section className="site-section" aria-labelledby="a11y-title">
          <h2 className="site-section__title" id="a11y-title">
            Accessibility
          </h2>
          {doc.accessibility && (
            <ul className="site-list">
              {doc.accessibility.map((note) => (
                <li key={note}>
                  <RichText text={note} />
                </li>
              ))}
            </ul>
          )}
          {doc.aria && (
            <>
              <h3 className="site-subtitle" id="aria-title">
                ARIA to add
              </h3>
              <ScrollTable label="ARIA to add">
                <thead>
                  <tr>
                    <th scope="col">Attribute</th>
                    <th scope="col">On</th>
                    <th scope="col">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.aria.map((row) => (
                    <tr key={`${row.attribute}-${row.on}`}>
                      <td>
                        <code>{row.attribute}</code>
                      </td>
                      <td>
                        <RichText text={row.on} />
                      </td>
                      <td>
                        <RichText text={row.why} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ScrollTable>
            </>
          )}
          {doc.keyboard && (
            <>
              <h3 className="site-subtitle" id="keyboard-title">
                Keyboard
              </h3>
              <ScrollTable label="Keyboard">
                <thead>
                  <tr>
                    <th scope="col">Keys</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.keyboard.map((row) => (
                    <tr key={row.keys}>
                      <td>
                        <kbd className="site-kbd">{row.keys}</kbd>
                      </td>
                      <td>
                        <RichText text={row.action} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ScrollTable>
            </>
          )}
        </section>
      )}

      {module && (
        <section className="site-section" aria-labelledby="classes-title">
          <h2 className="site-section__title" id="classes-title">
            Class reference
          </h2>
          <p>
            Read from the compiled CSS at build time, so this list is the module as it ships:{' '}
            {module.classes.length} classes.
          </p>
          <ul className="site-classes">
            {module.classes.map((name) => (
              <li key={name}>
                <code>.{name}</code>
              </li>
            ))}
          </ul>
        </section>
      )}

      {module && module.customProperties.length > 0 && (
        <section className="site-section" aria-labelledby="props-title">
          <h2 className="site-section__title" id="props-title">
            Custom properties
          </h2>
          <p>Set these on the element, or on any ancestor, to restyle it without new CSS.</p>
          <ScrollTable label="Custom properties table">
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">Default</th>
                <th scope="col">Declared on</th>
              </tr>
            </thead>
            <tbody>
              {module.customProperties.map((property) => (
                <tr key={property.name}>
                  <td>
                    <code>{property.name}</code>
                  </td>
                  <td className="site-table__value">{property.value}</td>
                  <td className="site-table__value">{property.selector}</td>
                </tr>
              ))}
            </tbody>
          </ScrollTable>
        </section>
      )}

      <Neighbours entry={entry} />
    </article>
  );
}

export default ModulePage;
