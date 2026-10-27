import { useEffect, useState } from 'react';

/**
 * Checks that the resume PDF really exists before showing download buttons.
 * Dev servers and SPA hosts answer missing files with index.html, so the content type is checked too.
 */
export function useResumeAvailable(path: string): boolean {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (!path) return;
    let cancelled = false;

    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') ?? '';
        if (!cancelled) setAvailable(res.ok && type.includes('pdf'));
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return available;
}
