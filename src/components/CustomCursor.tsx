import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 220, damping: 28 });
  const sy = useSpring(my, { stiffness: 220, damping: 28 });
  const tx = useSpring(mx, { stiffness: 75, damping: 20 });
  const ty = useSpring(my, { stiffness: 75, damping: 20 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!(t.closest("a") || t.closest("button")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 8 : 5,
          height: hovered ? 8 : 5,
          background: "#00FF94",
          transition: "width 0.18s, height 0.18s",
          boxShadow: "0 0 8px rgba(0,255,148,0.8)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: tx, y: ty,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 40 : 28,
          height: hovered ? 40 : 28,
          border: "1px solid rgba(0,255,148,0.35)",
          transition: "width 0.25s, height 0.25s",
        }}
      />
    </>
  );
}
