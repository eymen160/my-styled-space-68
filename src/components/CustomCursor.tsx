import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Lime dot + trailing ring cursor. Only renders on fine-pointer devices.
 * Grows over interactive elements; shows a "View" label over project rows
 * (any element with [data-cursor="view"]).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 400, damping: 35 });
  const sy = useSpring(my, { stiffness: 400, damping: 35 });
  const tx = useSpring(mx, { stiffness: 120, damping: 18 });
  const ty = useSpring(my, { stiffness: 120, damping: 18 });
  const [mode, setMode] = useState<"default" | "hover" | "view">("default");

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('[data-cursor="view"]')) setMode("view");
      else if (t.closest("a, button")) setMode("hover");
      else setMode("default");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: 6, height: 6,
          background: "var(--lime)",
          opacity: mode === "view" ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      />
      {/* Trailing ring / view bubble */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full flex items-center justify-center"
        style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:  mode === "view" ? 72 : mode === "hover" ? 48 : 32,
          height: mode === "view" ? 72 : mode === "hover" ? 48 : 32,
          backgroundColor: mode === "view" ? "rgba(200,255,62,1)" : "rgba(200,255,62,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(200,255,62,0.4)",
            opacity: mode === "view" ? 0 : 1,
            transition: "opacity 0.2s",
          }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-wider select-none"
          style={{
            color: "#09090B",
            opacity: mode === "view" ? 1 : 0,
            transition: "opacity 0.15s",
          }}
        >
          Open
        </span>
      </motion.div>
    </>
  );
}
