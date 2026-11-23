import { useCopy } from '../lib/useCopy';

interface CopyButtonProps {
  text: string;
  /** What gets copied, for screen readers: "Copy npm install command". */
  label: string;
  className?: string;
}

const VISIBLE = { idle: 'Copy', copied: 'Copied', failed: 'Copy failed' } as const;

function CopyButton({ text, label, className = '' }: CopyButtonProps) {
  const [state, copy] = useCopy(text);
  const announcement =
    state === 'copied' ? 'Copied to clipboard' : state === 'failed' ? 'Copy failed' : '';

  return (
    <>
      <button
        type="button"
        className={`cyber-btn cyber-btn--sm site-copy ${className}`.trim()}
        data-state={state}
        aria-label={label}
        onClick={copy}
      >
        {VISIBLE[state]}
      </button>
      <span className="cyber-sr-only" role="status">
        {announcement}
      </span>
    </>
  );
}

export default CopyButton;
