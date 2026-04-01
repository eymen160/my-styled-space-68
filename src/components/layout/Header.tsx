import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", v => {
    setScrolled(v > 40);
    const ids = ["work", "about", "contact"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top <= 100 && r.bottom >= 100) { setActive(id); return; }
      }
    }
    if (v < 100) setActive("");
  });

  const go = (id: string) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [{ l: "Work", h: "work" }, { l: "About", h: "about" }, { l: "Contact", h: "contact" }];

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
        padding: "0",
        transition: "all 0.3s ease",
      }}>
      <div className="max-w-[1160px] mx-auto px-6 md:px-10" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        <button
          onClick={() => go("top")}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#0F172A", background: "none", border: "none", letterSpacing: "-0.01em" }}>
          Eymen Keyvan
        </button>

        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {navItems.map(item => (
            <button
              key={item.l}
              onClick={() => go(item.h)}
              style={{
                padding: "6px 14px",
                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
                background: active === item.h ? "#EFF6FF" : "none",
                border: "none",
                color: active === item.h ? "#2563EB" : "#64748B",
                borderRadius: "6px",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (active !== item.h) (e.currentTarget as HTMLElement).style.color = "#0F172A"; }}
              onMouseLeave={e => { if (active !== item.h) (e.currentTarget as HTMLElement).style.color = "#64748B"; }}>
              {item.l}
            </button>
          ))}
        </nav>

        <motion.a
          href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            padding: "8px 18px",
            background: "#2563EB",
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px",
            textDecoration: "none", borderRadius: "8px",
            display: "inline-flex", alignItems: "center", gap: "6px",
            boxShadow: "0 1px 3px rgba(37,99,235,0.3)",
          }}>
          Hire Me
        </motion.a>
      </div>
    </motion.header>
  );
}
