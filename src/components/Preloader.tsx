import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

const GREETINGS = ["Hello", "Merhaba", "Hola", "Bonjour", "こんにちは", "Ciao"];

export default function Preloader({ onStart, onDone }: { onStart: () => void; onDone: () => void }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [greetIdx, setGreetIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Counter 0 → 100 with ease-out
  useEffect(() => {
    if (reduce) { onStart(); onDone(); return; }
    const start = performance.now();
    const dur = 1900;
    let raf: number;
    const tick = (ts: number) => {
      const pct = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setCount(Math.round(eased * 100));
      if (pct < 1) raf = requestAnimationFrame(tick);
      else {
        // Curtain starts lifting — let the page entrance animations begin
        setTimeout(() => { setExiting(true); onStart(); }, 250);
        setTimeout(onDone, 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, onStart, onDone]);

  // Cycle greetings
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setGreetIdx(i => (i + 1) % GREETINGS.length), 320);
    return () => clearInterval(id);
  }, [reduce]);

  // Lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (reduce) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: "var(--bg)" }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      {/* Rounded curtain lip that follows the exit */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: -120, height: 120,
          background: "var(--bg)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
        }}
      />

      <div className="flex flex-col items-center gap-3 relative z-10">
        <span className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--lime)" }} />
          <AnimatePresence mode="wait">
            <motion.span
              key={greetIdx}
              className="display font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text)", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
            >
              {GREETINGS[greetIdx]}
            </motion.span>
          </AnimatePresence>
        </span>
        <p className="eyebrow">Eymen Faruk Keyvan — Portfolio</p>
      </div>

      {/* Counter bottom-right */}
      <span
        className="display font-extrabold absolute select-none"
        style={{
          right: "clamp(20px, 5vw, 56px)",
          bottom: "clamp(16px, 4vw, 40px)",
          fontSize: "clamp(4rem, 12vw, 9rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1px var(--faint)",
        }}
      >
        {count}%
      </span>

      {/* Thin progress line along the bottom */}
      <div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ width: `${count}%`, background: "var(--lime)", transition: "width 0.1s linear" }}
      />
    </motion.div>
  );
}
