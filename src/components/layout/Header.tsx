import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", v => setScrolled(v > 60));

  const go = (id: string) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(27,42,74,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        padding: scrolled ? "14px 0" : "24px 0",
        transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => go("top")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.25rem",
            color: scrolled ? "#FAF7F2" : "#1B2A4A",
            letterSpacing: "0.12em", textTransform: "uppercase",
            transition: "color 0.45s"
          }}>EK</span>
        </button>

        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {[["Work", "work"], ["About", "about"], ["Contact", "contact"]].map(([l, h]) => (
            <button key={l} onClick={() => go(h)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "13px",
              color: scrolled ? "rgba(250,247,242,0.6)" : "rgba(27,42,74,0.55)",
              letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s", padding: "4px 0"
            }}
              onMouseEnter={e => (e.currentTarget.style.color = scrolled ? "#FAF7F2" : "#1B2A4A")}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "rgba(250,247,242,0.6)" : "rgba(27,42,74,0.55)")}>
              {l}
            </button>
          ))}
        </nav>

        <a href="mailto:eymenfaruk479@gmail.com"
          style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "12px",
            color: scrolled ? "#FAF7F2" : "#FAF7F2",
            textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "10px 24px",
            background: scrolled ? "rgba(200,150,62,0.9)" : "#1B2A4A",
            borderRadius: "3px", transition: "all 0.2s"
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}>
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}
