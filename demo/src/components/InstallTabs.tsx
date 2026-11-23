import { useId, useRef, useState } from 'react';

import { CDN_VERSION, cdnSnippet, NPM_INSTALL } from '../site';

import CodeBlock from './CodeBlock';

import type { CodeLanguage } from './CodeBlock';
import type { KeyboardEvent } from 'react';

interface InstallOption {
  id: string;
  label: string;
  language: CodeLanguage;
  code: string;
  note: string;
}

const OPTIONS: InstallOption[] = [
  {
    id: 'npm',
    label: 'npm',
    language: 'bash',
    code: NPM_INSTALL,
    note: 'Then import "cybercore-css" from your bundler entry, or @use it from Sass.',
  },
  {
    id: 'jsdelivr',
    label: 'jsDelivr',
    language: 'html',
    code: cdnSnippet('jsdelivr'),
    note: `Pinned to ${CDN_VERSION} with a Subresource Integrity hash, so the file cannot change under you.`,
  },
  {
    id: 'unpkg',
    label: 'unpkg',
    language: 'html',
    code: cdnSnippet('unpkg'),
    note: `Same ${CDN_VERSION} file and the same integrity hash, served by unpkg.`,
  },
];

/** Install commands as tabs, built from the framework's own tab classes. */
function InstallTabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  const select = (index: number) => {
    const next = (index + OPTIONS.length) % OPTIONS.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: OPTIONS.length - 1,
    };
    const target = moves[event.key];
    if (target !== undefined) {
      event.preventDefault();
      select(target);
    }
  };

  return (
    <div className="site-install">
      <div className="cyber-tabs" role="tablist" aria-label="Install method">
        {OPTIONS.map((option, index) => (
          <button
            key={option.id}
            ref={(element) => {
              tabsRef.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${option.id}`}
            className={index === active ? 'cyber-tab cyber-tab--active' : 'cyber-tab'}
            aria-selected={index === active}
            aria-controls={`${id}-panel-${option.id}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onKeyDown}
          >
            {option.label}
          </button>
        ))}
      </div>
      {OPTIONS.map((option, index) => (
        <div
          key={option.id}
          role="tabpanel"
          id={`${id}-panel-${option.id}`}
          aria-labelledby={`${id}-tab-${option.id}`}
          hidden={index !== active}
          className="site-install__panel"
        >
          <CodeBlock code={option.code} language={option.language} title={option.label} />
          <p className="site-install__note">{option.note}</p>
        </div>
      ))}
    </div>
  );
}

export default InstallTabs;
