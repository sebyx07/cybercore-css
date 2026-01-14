import { useState } from 'react';

import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

function CodeBlock({ code, language = 'html', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Map our language names to Prism language names
  const prismLanguage = language === 'bash' ? 'bash' : language;

  return (
    <div className="code-block">
      {title && (
        <div className="code-block__header">
          <span className="code-block__title cyber-label">{title}</span>
          <span className="code-block__lang cyber-mono">{language}</span>
        </div>
      )}
      <div className="code-block__content">
        <Highlight theme={themes.nightOwl} code={code.trim()} language={prismLanguage}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`code-block__pre ${className}`}
              style={{ ...style, background: 'transparent', margin: 0 }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <button
          className="code-block__copy cyber-btn cyber-btn--ghost cyber-btn--sm"
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default CodeBlock;
