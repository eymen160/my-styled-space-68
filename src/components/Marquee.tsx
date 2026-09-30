import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

const ITEMS = ["Ships to production", "NIH-funded AI research", "HackGT 13 winner", "Summer 2027 intern", "Open to relocation", "Laravel · Next.js · PyTorch"];

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/**
 * A tilted sun-yellow band. It drifts on its own and speeds up (or reverses) with your scroll —
 * the page reacts to scrolling, never to the mouse.
 */
export default function Marquee({ tilt = -2.5, baseVelocity = -2.2 }: { tilt?: number; baseVelocity?: number }) {
  const reduced = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(base, (v) => `${wrap(-25, -50, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    const b = boost.get();
    if (b < 0) direction.current = -1;
    else if (b > 0) direction.current = 1;
    move += direction.current * move * b;
    base.set(base.get() + move);
  });

  const row = (
    <span className="flex shrink-0 items-center">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="display whitespace-nowrap px-6 text-[clamp(1.6rem,3.6vw,3rem)] font-[600] italic">{t}</span>
          <span aria-hidden className="text-[clamp(1rem,2vw,1.6rem)]">
            ✺
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="relative z-20 -my-6 overflow-hidden py-6">
      <div className="py-4 shadow-xl" style={{ background: "var(--sun)", color: "var(--ink)", transform: `rotate(${tilt}deg) scale(1.04)` }}>
        <motion.div className="flex w-max" style={{ x }} aria-hidden>
          {row}
          {row}
          {row}
          {row}
        </motion.div>
        <p className="sr-only">{ITEMS.join(" · ")}</p>
      </div>
    </div>
  );
}
