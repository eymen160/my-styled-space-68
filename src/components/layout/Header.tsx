import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
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
    if (id === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { l: "Work", h: "work" },
    { l: "About", h: "about" },
    { l: "Contact", h: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,249,246,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E2DC" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-14 flex items-center justify-between">
        <motion.button
          onClick={() => go("#")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="text-[1.1rem] font-bold tracking-[-0.02em] transition-opacity hover:opacity-60"
          style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}
        >
          EK
        </motion.button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-0.5 p-1.5 rounded-full border"
          style={{ background: "rgba(250,249,246,0.8)", borderColor: "#E5E2DC", backdropFilter: "blur(12px)" }}>
          {navItems.map((item) => (
            <motion.button
              key={item.l}
              onClick={() => go(item.h)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-5 py-2 text-[0.83rem] font-medium rounded-full transition-all duration-300"
              style={{ color: active === item.h ? "#0D0D0D" : "#7A7570" }}
            >
              {active === item.h && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "#0D0D0D" }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative z-10" style={{ color: active === item.h ? "#FAF9F6" : "#7A7570" }}>{item.l}</span>
            </motion.button>
          ))}
        </nav>

        <motion.a
          href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="px-5 py-2.5 rounded-full text-[0.83rem] font-semibold transition-all duration-200 inline-flex items-center gap-2"
          style={{ background: "#0D0D0D", color: "#FAF9F6", fontFamily: "'Outfit', sans-serif" }}
        >
          Hire Me
          <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </motion.header>
  );
}
