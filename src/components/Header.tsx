import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { profile } from "../content/site";
import Magnetic from "./motion/Magnetic";

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300"
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--paper) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(1.2)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--rule)" : "transparent"}`,
      }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="display text-[1.35rem] font-medium italic leading-none" aria-label="Eymen Keyvan — back to top">
          Eymen Keyvan<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3 py-2 text-sm text-ink-2 transition-colors hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <Magnetic>
            <a href={profile.resume} target="_blank" rel="noopener" className="pill pill-solid ml-2">
              Resume
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                <path d="M3 9 9 3M4 3h5v5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </a>
          </Magnetic>
        </nav>
      </div>

      {/* scroll progress hairline */}
      <motion.div
        aria-hidden
        className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left"
        style={{ scaleX: progress, backgroundColor: "var(--accent)" }}
      />
    </header>
  );
}
