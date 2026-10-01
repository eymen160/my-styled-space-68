import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

const LINES = [
  { text: "One small commit,", strong: false },
  { text: "one big push.", strong: false },
  { text: "Ship, then iterate.", strong: true },
];

function Row({ text, strong, i, progress }: { text: string; strong: boolean; i: number; progress: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const a = i * 0.2;
  const opacity = useTransform(progress, [a, a + 0.12], reduced ? [1, 1] : [0, 1]);
  const y = useTransform(progress, [a, a + 0.12], reduced ? [0, 0] : [14, 0]);
  const blur = useTransform(progress, [a, a + 0.12], reduced ? ["blur(0px)", "blur(0px)"] : ["blur(6px)", "blur(0px)"]);
  return (
    <motion.p className={strong ? "font-[600] text-ink" : "text-ink-3"} style={{ opacity, y, filter: blur }}>
      {text}
    </motion.p>
  );
}

/** A quiet beat in cream: three short lines arrive one at a time, then the room fades in. */
export default function Lines() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const textOut = useTransform(scrollYProgress, [0.78, 0.94], [1, 0]);

  return (
    <section ref={ref} className="relative -mt-[20vh] h-[190vh]" style={{ background: "linear-gradient(var(--cream) 0%, var(--cream) 70%, var(--wall) 100%)" }}>
      <div className="sticky top-0 flex h-[100svh] items-center justify-center">
        <motion.div className="text-center text-[clamp(1.15rem,2vw,1.6rem)] leading-[1.45]" style={{ opacity: textOut }}>
          {LINES.map((l, i) => (
            <Row key={l.text} {...l} i={i} progress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
