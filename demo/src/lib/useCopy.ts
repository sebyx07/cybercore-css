import { useCallback, useEffect, useRef, useState } from 'react';

type CopyState = 'idle' | 'copied' | 'failed';

/** Copies text and reports the outcome for two seconds. */
export function useCopy(text: string): [CopyState, () => void] {
  const [state, setState] = useState<CopyState>('idle');
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const copy = useCallback(() => {
    const settle = (next: CopyState) => {
      setState(next);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setState('idle'), 2000);
    };
    navigator.clipboard.writeText(text).then(
      () => settle('copied'),
      () => settle('failed')
    );
  }, [text]);

  return [state, copy];
}
