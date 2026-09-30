import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "../../lib/motion";

export const YOU = "#A259FF";

/** The Figma multiplayer arrow. Shared by the visitor's cursor and Eymen's ghost cursor. */
export function Arrow({ color }: { color: string }) {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,.25))" }}>
      <path d="M2 2 L19.5 10.4 L11.6 12.6 L8.2 20.6 Z" fill={color} stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/** Label for whatever the pointer is over: explicit data-cursor wins, then sensible defaults. */
function labelFor(el: Element | null): string {
  const tagged = el?.closest?.("[data-cursor]");
  if (tagged) return tagged.getAttribute("data-cursor") || "You";
  const a = el?.closest?.("a");
  if (a) {
    const href = a.getAttribute("href") || "";
    if (href.endsWith(".pdf")) return "Resume ↗";
    if (href.startsWith("mailto:")) return "Say hi ✉";
    if (href.startsWith("#")) return "Jump ↓";
    return "Open ↗";
  }
  if (el?.closest?.("button")) return "Click";
  return "You";
}

/**
 * Replaces the native cursor on mouse devices with a Figma-style arrow + name tag.
 * The arrow tracks the pointer 1:1 (never laggy); the tag trails on a spring and
 * swaps its text to describe what's under the pointer.
 */
export default function FigmaCursor() {
  const enabled = useFinePointer();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const tx = useSpring(x, { stiffness: 380, damping: 28, mass: 0.6 });
  const ty = useSpring(y, { stiffness: 380, damping: 28, mass: 0.6 });
  const [label, setLabel] = useState("You");
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("figma-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => setLabel(labelFor(e.target as Element));
    const leave = () => setVisible(false);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    root.addEventListener("pointerleave", leave);
    return () => {
      root.classList.remove("figma-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      root.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90]" style={{ opacity: visible ? 1 : 0, transition: "opacity .2s" }}>
      <motion.div className="absolute left-0 top-0 -ml-[2px] -mt-[2px]" style={{ x, y }} animate={{ scale: down ? 0.82 : 1 }}>
        <Arrow color={YOU} />
      </motion.div>
      <motion.div className="absolute left-0 top-0 ml-[16px] mt-[20px]" style={{ x: tx, y: ty }}>
        <motion.div
          layout
          className="overflow-hidden whitespace-nowrap rounded-full rounded-tl-[4px] px-2.5 py-[5px] text-[12px] font-medium leading-none text-white shadow-lg"
          style={{ background: YOU }}
          transition={{ layout: { type: "spring", stiffness: 500, damping: 34 } }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={label}
              className="inline-block"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
