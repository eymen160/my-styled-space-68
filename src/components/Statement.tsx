import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { metrics, statement } from "../content/site";
import RollingNumber from "./motion/RollingNumber";
import { ease } from "../lib/motion";

// Words that carry the proof get the cobalt highlight once lit.
const EMPHASIS = new Set(["production", "12,000+", "NIH-funded", "leaked", "win."]);

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const clean = word.replace(/[“”".,]/g, "");
  const hot = EMPHASIS.has(word) || EMPHASIS.has(clean);
  return (
    <motion.span style={{ opacity, color: hot ? "var(--cobalt)" : undefined }} className={hot ? "italic" : undefined}>
      {word}{" "}
    </motion.span>
  );
}

/** The intro paragraph lights up word by word as you scroll through it. */
export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = statement.split(" ");

  return (
    <section className="pt-32 sm:pt-44">
      <div className="wrap">
        <p className="label mb-8 text-ink-3">Hi, I'm Eymen —</p>
        <p ref={ref} className="display max-w-[62rem] text-[clamp(1.9rem,4.4vw,3.9rem)] font-[400] leading-[1.12]">
          {reduced
            ? statement
            : words.map((w, i) => <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />)}
        </p>

        <dl className="mt-24 grid grid-cols-2 gap-y-10 border-t border-ink/15 pt-10 lg:grid-cols-4">
          {metrics.map((mt, i) => (
            <motion.div
              key={mt.label}
              className="pr-4"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease }}
            >
              <dt className="label mb-3 text-ink-3">{mt.source}</dt>
              <dd>
                <RollingNumber value={mt.value} className="display text-[clamp(2.6rem,5vw,4.2rem)] font-[600] text-cobalt" />
                <p className="mt-2 max-w-[14rem] text-sm leading-snug text-ink-2">{mt.label}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
