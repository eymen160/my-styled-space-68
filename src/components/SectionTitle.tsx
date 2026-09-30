import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ease } from "../lib/motion";
import Reveal from "./motion/Reveal";

/** Oversized outlined numeral (gentle parallax) + small label + display heading that rises from a mask. */
export default function SectionTitle({ num, label, title }: { num: string; label: string; title: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60]);

  return (
    <div ref={ref} className="relative mb-14 grid gap-6 sm:mb-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div className="relative z-10">
        <Reveal y={10}>
          <p className="label mb-5">
            <span className="text-accent">{num}</span> — {label}
          </p>
        </Reveal>
        <h2 className="display text-[clamp(2.3rem,5.6vw,4.6rem)] font-[380] leading-[0.98]">
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "108%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease }}
            >
              {title}
            </motion.span>
          </span>
        </h2>
      </div>
      <motion.span
        aria-hidden
        className="outline-num pointer-events-none absolute -top-12 right-0 select-none text-[clamp(7rem,20vw,16rem)] md:static"
        style={{ y }}
      >
        {num}
      </motion.span>
    </div>
  );
}
