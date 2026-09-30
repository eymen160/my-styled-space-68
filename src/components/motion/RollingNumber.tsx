import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ease } from "../../lib/motion";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Two full turns of the wheel before landing, like an odometer.
const STRIP = [...DIGITS, ...DIGITS];

function Wheel({ digit, delay, run }: { digit: number; delay: number; run: boolean }) {
  const stop = 10 + digit; // land on the second turn
  return (
    <span className="relative inline-block h-[1em] overflow-hidden align-top leading-none">
      <span className="invisible">{digit}</span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col"
        initial={{ y: "0%" }}
        animate={run ? { y: `-${(stop / STRIP.length) * 100}%` } : { y: "0%" }}
        transition={{ duration: 1.6, delay, ease }}
      >
        {STRIP.map((n, i) => (
          <span key={i} className="block h-[1em] leading-none">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/** Rolls every digit of `value` into place when scrolled into view; other characters stay put. */
export default function RollingNumber({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  if (reduced) return <span className={className}>{value}</span>;

  let digitIndex = 0;
  return (
    <span ref={ref} className={`inline-flex whitespace-pre tabular-nums ${className}`} aria-label={value}>
      {value.split("").map((ch, i) => {
        if (/\d/.test(ch)) {
          const delay = 0.08 * digitIndex++;
          return <Wheel key={i} digit={Number(ch)} delay={delay} run={inView} />;
        }
        return (
          <span key={i} aria-hidden className="leading-none">
            {ch}
          </span>
        );
      })}
    </span>
  );
}
