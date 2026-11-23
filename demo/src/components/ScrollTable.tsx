import type { ReactNode } from 'react';

interface ScrollTableProps {
  /** Names the scroll area. Must be unique on the page. */
  label: string;
  children: ReactNode;
}

/**
 * A `.cyber-table` that scrolls sideways on narrow screens. The wrapper is
 * focusable and named so the keyboard can scroll it too.
 */
function ScrollTable({ label, children }: ScrollTableProps) {
  return (
    <div
      className="cyber-table-wrapper site-table"
      role="region"
      aria-label={label}
      // A scrollable region has to be reachable by keyboard.
      // eslint-disable-next-line jsx-a11y-x/no-noninteractive-tabindex
      tabIndex={0}
    >
      <table className="cyber-table">{children}</table>
    </div>
  );
}

export default ScrollTable;
