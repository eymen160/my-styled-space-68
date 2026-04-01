import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", v => {
    setScrolled(v > 60);
    const ids = ["work", "about", "contact"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) { setActive(id); return; }
      }
    }
    if (v < 200) setActive("");
  });

  const go = (id: string) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [{ l: "Work", h: "work" }, { l: "About", h: "about" }, { l: "Contact", h: "contact" }];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(7,9,15,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(205,214,244,0.07)" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "22px 0",
        transition: "all 0.4s ease",
      }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-14 flex items-center justify-between">

        <motion.button
          onClick={() => go("top")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem",
            color: "#CDD6F4", background: "none", border: "none", letterSpacing: "0.04em",
          }}>
          EK
        </motion.button>

        <nav style={{
          display: "flex", alignItems: "center", gap: "2px",
          padding: "5px", border: "1px solid rgba(205,214,244,0.08)",
          background: "rgba(13,16,23,0.8)", backdropFilter: "blur(12px)",
        }}>
          {navItems.map(item => (
            <motion.button
              key={item.l}
              onClick={() => go(item.h)}
              whileTap={{ scale: 0.97 }}
              style={{
                position: "relative", padding: "7px 16px",
                fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "12px",
                background: "none", border: "none",
                color: active === item.h ? "#07090F" : "rgba(205,214,244,0.5)",
                letterSpacing: "0.06em", textTransform: "lowercase",
                transition: "color 0.2s",
              }}>
              {active === item.h && (
                <motion.span
                  layoutId="pill"
                  style={{ position: "absolute", inset: 0, background: "#00FF94", zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              {item.l.toLowerCase()}
            </motion.button>
          ))}
        </nav>

        <motion.a
          href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          style={{
            padding: "9px 18px",
            border: "1px solid rgba(0,255,148,0.3)",
            color: "#00FF94",
            fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "11px",
            textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
            display: "inline-flex", alignItems: "center", gap: "8px",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,255,148,0.08)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
          Hire Me
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </motion.header>
  );
}
