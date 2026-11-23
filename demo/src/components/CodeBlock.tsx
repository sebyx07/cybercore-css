import { highlight } from '../lib/highlight';

import CopyButton from './CopyButton';

import type { Grammar } from '../lib/highlight';

export type CodeLanguage = 'html' | 'css' | 'scss' | 'js' | 'ts' | 'bash' | 'text';

interface CodeBlockProps {
  code: string;
  language?: CodeLanguage;
  /** Short name shown in the header and used to label the copy button. */
  title?: string;
}

const GRAMMAR: Record<CodeLanguage, Grammar> = {
  html: 'markup',
  css: 'style',
  scss: 'style',
  js: 'script',
  ts: 'script',
  bash: 'none',
  text: 'none',
};

function CodeBlock({ code, language = 'html', title }: CodeBlockProps) {
  const source = code.trim();
  const name = title ?? language.toUpperCase();

  return (
    <div className="site-code">
      <div className="site-code__bar">
        <span className="site-code__title">{name}</span>
        <CopyButton text={source} label={`Copy ${name} code`} />
      </div>
      {/* A scrollable region has to be reachable by keyboard. */}
      {/* eslint-disable-next-line jsx-a11y-x/no-noninteractive-tabindex */}
      <pre className="site-code__pre" tabIndex={0} aria-label={`${name} code`}>
        <code>
          {highlight(source, GRAMMAR[language]).map((token, index) => (
            // eslint-disable-next-line @eslint-react/no-array-index-key -- tokens never reorder
            <span key={index} className={`site-tok site-tok--${token.kind}`}>
              {token.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;
