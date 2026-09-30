import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "../../lib/motion";

/** Each line slides up from behind its own clip mask, staggered. */
export default function MaskLines({
  lines,
  delay = 0,
  stagger = 0.09,
  className = "",
}: {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        // pb/-mb keeps descenders (g, p, y) from being clipped by the mask
        <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "108%", rotate: 2 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease }}
            style={{ transformOrigin: "0% 100%" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
