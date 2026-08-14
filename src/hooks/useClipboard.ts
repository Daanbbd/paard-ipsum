import { useCallback, useEffect, useRef, useState } from 'react';

const FEEDBACK_DUUR_MS = 2000;

export function useClipboard() {
  const [gekopieerd, setGekopieerd] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const kopieer = useCallback(async (tekst: string) => {
    try {
      await navigator.clipboard.writeText(tekst);
      setGekopieerd(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setGekopieerd(false), FEEDBACK_DUUR_MS);
      return true;
    } catch {
      return false;
    }
  }, []);

  return { gekopieerd, kopieer };
}
