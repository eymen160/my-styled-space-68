import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Arrow } from "./FigmaCursor";

export const EYMEN = "#0D99FF";

export type Stop = { x: number; y: number; say: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * "Eymen" is also on the canvas: a second multiplayer cursor that tours the stickers and leaves
 * Figma-style comments. Positions are % of the canvas, so it follows any viewport size.
 */
export default function GhostCursor({ canvasRef, stops }: { canvasRef: RefObject<HTMLElement>; stops: Stop[] }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [say, setSay] = useState<string | null>(null);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (reduced) return;
    let alive = true;
    const toPx = (s: Stop) => {
      const r = canvasRef.current?.getBoundingClientRect();
      return r ? { x: (s.x / 100) * r.width, y: (s.y / 100) * r.height } : { x: 0, y: 0 };
    };
    const start = toPx({ x: 50, y: 110, say: "" });
    x.set(start.x);
    y.set(start.y);

    (async () => {
      await sleep(2200);
      for (let i = 0; alive; i = (i + 1) % stops.length) {
        const p = toPx(stops[i]);
        setSay(null);
        await Promise.all([
          animate(x, p.x, { duration: 1.5, ease: [0.45, 0, 0.2, 1] }),
          animate(y, p.y, { duration: 1.5, ease: [0.3, 0, 0.3, 1] }),
        ]);
        if (!alive) break;
        setFlip(stops[i].x > 66);
        setSay(stops[i].say);
        await sleep(2800);
      }
    })();

    return () => {
      alive = false;
    };
  }, [canvasRef, stops, reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div aria-hidden className="pointer-events-none absolute left-0 top-0 z-[45] hidden md:block" style={{ x, y }}>
      <Arrow color={EYMEN} />
      <div className="relative ml-4 mt-0.5">
        <span className="rounded-full rounded-tl-[4px] px-2.5 py-[5px] text-[12px] font-medium leading-none text-white shadow-lg" style={{ background: EYMEN }}>
          Eymen
        </span>
        <AnimatePresence>
          {say && (
            <motion.span
              key={say}
              className={`absolute top-7 w-max max-w-[230px] rounded-2xl border px-3 py-2 text-[13px] leading-snug shadow-xl ${
                flip ? "right-[calc(100%-3.5rem)] rounded-tr-[4px]" : "left-0 rounded-tl-[4px]"
              }`}
              style={{ background: "var(--paper)", borderColor: "var(--rule)", color: "var(--ink)" }}
              initial={{ opacity: 0, scale: 0.6, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
            >
              {say}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
