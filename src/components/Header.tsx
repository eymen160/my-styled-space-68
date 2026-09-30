import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "../content/site";

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** Cream over the cobalt cover, ink once you're on paper. */
export default function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const [onPaper, setOnPaper] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    const cover = document.getElementById("top");
    setOnPaper(v > (cover ? cover.offsetHeight - 80 : window.innerHeight));
  });

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        color: onPaper ? "var(--ink)" : "var(--paper)",
        backgroundColor: onPaper ? "color-mix(in srgb, var(--paper) 88%, transparent)" : "transparent",
        backdropFilter: onPaper ? "blur(10px)" : "none",
        WebkitBackdropFilter: onPaper ? "blur(10px)" : "none",
      }}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="display text-[1.3rem] font-semibold italic leading-none">
          ek<span style={{ color: onPaper ? "var(--cobalt)" : "var(--sun)" }}>.</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden items-center md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3 py-2 text-sm opacity-80 transition-opacity hover:opacity-100">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="pill ml-2 px-4 py-2"
            style={{ background: onPaper ? "var(--ink)" : "var(--sun)", color: onPaper ? "var(--paper)" : "var(--ink)" }}
          >
            Resume ↗
          </a>
        </nav>
      </div>
      <motion.div aria-hidden className="h-[2px] origin-left" style={{ scaleX: scrollYProgress, background: onPaper ? "var(--cobalt)" : "var(--sun)" }} />
    </header>
  );
}
