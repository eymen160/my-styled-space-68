import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", v => {
    setScrolled(v > 50);
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(250,249,246,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid #E8E4DE" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "22px 0",
        transition: "all 0.4s ease",
      }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-14 flex items-center justify-between">
        <motion.button onClick={() => go("top")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.15rem", color: "#0D0D0D", background: "none", border: "none", cursor: "none", letterSpacing: "-0.02em" }}>
          EK
        </motion.button>

        <nav style={{ display: "flex", alignItems: "center", gap: "2px", padding: "6px", borderRadius: "100px", background: "rgba(242,239,233,0.9)", border: "1px solid #E0DDD7", backdropFilter: "blur(12px)" }}>
          {navItems.map(item => (
            <motion.button key={item.l} onClick={() => go(item.h)}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{ position: "relative", padding: "8px 18px", borderRadius: "100px", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "13px", background: "none", border: "none", cursor: "none", transition: "color 0.2s", color: active === item.h ? "#FAF9F6" : "#7A7570" }}>
              {active === item.h && (
                <motion.span layoutId="pill"
                  style={{ position: "absolute", inset: 0, background: "#0D0D0D", borderRadius: "100px", zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 420, damping: 36 }} />
              )}
              {item.l}
            </motion.button>
          ))}
        </nav>

        <motion.a href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}
          style={{ padding: "10px 20px", borderRadius: "100px", background: "#0D0D0D", color: "#FAF9F6", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "13px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          Hire Me
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </motion.header>
  );
}
