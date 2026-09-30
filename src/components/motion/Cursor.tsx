import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "../../lib/motion";

const INTERACTIVE = "a, button, [data-cursor]";

/** Trailing ink ring that swells over anything clickable. Mouse-only; native cursor stays. */
export default function Cursor() {
  const enabled = useFinePointer();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => setActive(!!(e.target as Element)?.closest?.(INTERACTIVE));
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4 h-8 w-8 rounded-full border"
      style={{ x: sx, y: sy, borderColor: "var(--accent)" }}
      animate={{
        scale: active ? 1.7 : 1,
        opacity: visible ? 1 : 0,
        backgroundColor: active ? "var(--accent-soft)" : "rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    />
  );
}
