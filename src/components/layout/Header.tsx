import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "About",    id: "about"    },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Contact",  id: "contact"  },
];

export default function Header() {
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 80 && bottom >= 80) { setActiveId(item.id); return; }
        }
      }
      if (window.scrollY < 80) setActiveId("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(240,236,228,0.06)" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "var(--text)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          EFK
        </button>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{ position: "relative", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 400, color: activeId === item.id ? "var(--text)" : "var(--muted)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 0", transition: "color 0.2s" }}
            >
              {item.label}
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{ position: "absolute", bottom: -1, left: 0, right: 0, height: 1, background: "var(--gold)", borderRadius: 1 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="mailto:eymen@eymenkeyvan.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500, color: "var(--bg)", background: "var(--gold)", padding: "9px 20px", borderRadius: "var(--radius)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "opacity 0.2s" }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.header>
  );
}
