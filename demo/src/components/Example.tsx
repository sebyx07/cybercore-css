import { useEffect, useRef } from 'react';

import { auditSnippet } from '../lib/meta';

import CodeBlock from './CodeBlock';
import RichText from './RichText';

import type { Example as ExampleData } from '../data/types';

interface ExampleProps {
  example: ExampleData;
  /** Heading level of the example title. */
  as?: 'h2' | 'h3';
}

/**
 * One example, from one string: the preview is the snippet's own markup, so
 * the code below it is exactly what produced what the reader sees.
 */
function Example({ example, as: Heading = 'h3' }: ExampleProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const { html, js } = example;
  const { optionalModules } = auditSnippet(html);

  useEffect(() => {
    const element = previewRef.current;
    if (!element || !js) return;
    // Fresh nodes each run, so listeners from an earlier run cannot stack up.
    element.innerHTML = html;
    try {
      // The snippet is the docs' own source, shown to the reader verbatim.
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      (new Function(js) as () => void)();
    } catch (error) {
      console.error(`Example "${example.id}" script failed`, error);
    }
  }, [html, js, example.id]);

  return (
    <section className="site-example" id={example.id} aria-labelledby={`${example.id}-title`}>
      <Heading className="site-example__title" id={`${example.id}-title`}>
        <a href={`#${example.id}`}>{example.title}</a>
      </Heading>
      {example.description && (
        <p className="site-example__text">
          <RichText text={example.description} />
        </p>
      )}
      <div
        ref={previewRef}
        className="site-example__preview"
        // Markup comes from the docs data files in this repo, never from users.
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {optionalModules.length > 0 && (
        <p className="site-example__note">
          Not in the CDN bundle. Load{' '}
          {optionalModules.map((id, index) => (
            <span key={id}>
              {index > 0 && ', '}
              <code>cybercore-css/scss/{id}</code>
            </span>
          ))}{' '}
          with Sass.
        </p>
      )}
      <CodeBlock code={html} language="html" title="HTML" />
      {js && <CodeBlock code={js} language="js" title="JavaScript" />}
    </section>
  );
}

export default Example;
