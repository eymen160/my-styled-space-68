import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Shared overlay for every desk object. Blurs the room, closes on Escape or backdrop click,
 * moves focus inside and hands it back on close, and locks page scroll while open.
 */
export default function Modal({
  open,
  onClose,
  label,
  children,
  full = false,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  full?: boolean;
}) {
  const reduced = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    document.documentElement.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("lenis:stop"));
    const t = setTimeout(() => box.current?.focus(), 30);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", key);
      document.documentElement.style.overflow = "";
      window.dispatchEvent(new CustomEvent("lenis:start"));
      prev?.focus?.();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button aria-label="Close" className="absolute inset-0 cursor-default bg-[#0c1530]/45 backdrop-blur-md" onClick={onClose} />
          <motion.div
            ref={box}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            tabIndex={-1}
            data-lenis-prevent
            className={full ? "relative h-full w-full outline-none" : "relative max-h-[92svh] max-w-[96vw] overflow-auto outline-none"}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            {children}
            {!full && (
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-ink/70 backdrop-blur transition hover:bg-black/20"
              >
                ✕
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
