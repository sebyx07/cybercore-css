import { Fragment } from 'react';

/** Renders `backticked` spans as inline code. Everything else is plain text. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('`').map((part, index) =>
        // Odd segments sit between a pair of backticks.
        // eslint-disable-next-line @eslint-react/no-array-index-key -- static text, never reordered
        index % 2 === 1 ? <code key={index}>{part}</code> : <Fragment key={index}>{part}</Fragment>
      )}
    </>
  );
}

export default RichText;
