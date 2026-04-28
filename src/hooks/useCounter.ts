import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `target` when the returned ref scrolls into view.
 * Returns [displayValue, ref].
 */
export default function useCounter(target: number, decimals = 0): [string, React.RefObject<HTMLDivElement>] {
  const [val, setVal] = useState("0");
  const ref     = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur   = 1600;

          const tick = (ts: number) => {
            const pct  = Math.min((ts - start) / dur, 1);
            const ease = 1 - Math.pow(1 - pct, 3); // cubic ease-out
            setVal((target * ease).toFixed(decimals));
            if (pct < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return [val, ref as React.RefObject<HTMLDivElement>];
}
