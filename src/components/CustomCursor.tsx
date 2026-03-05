import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 200, damping: 28 });
  const sy = useSpring(my, { stiffness: 200, damping: 28 });
  const tx = useSpring(mx, { stiffness: 80, damping: 20 });
  const ty = useSpring(my, { stiffness: 80, damping: 20 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!(t.closest("a") || t.closest("button")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [mx, my]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 10 : 6, height: hovered ? 10 : 6,
          background: "#0D0D0D",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          x: tx, y: ty,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 44 : 32, height: hovered ? 44 : 32,
          borderColor: "rgba(13,13,13,0.25)",
          transition: "width 0.25s, height 0.25s",
        }}
      />
    </>
  );
}
