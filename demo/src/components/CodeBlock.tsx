import { useState } from 'react';

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

  return (
    <div className="code-block">
      {title && (
        <div className="code-block__header">
          <span className="code-block__title cyber-label">{title}</span>
          <span className="code-block__lang cyber-mono">{language}</span>
        </div>
      )}
      <div className="code-block__content">
        <pre className="code-block__pre">
          <code className={`code-block__code language-${language}`}>
            {code.trim()}
          </code>
        </pre>
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
