import { motion, useReducedMotion } from "framer-motion";

/** Hand-drawn underline that draws itself once the headline has landed. */
export default function Scribble({ delay = 0 }: { delay?: number }) {
  const reduced = useReducedMotion();

  return (
    <svg
      aria-hidden
      viewBox="0 0 320 28"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-[0.14em] left-[-2%] h-[0.28em] w-[104%]"
    >
      <motion.path
        d="M4 18 C 60 8, 120 6, 176 11 S 282 22, 316 9"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduced ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.01, delay } }}
      />
    </svg>
  );
}
