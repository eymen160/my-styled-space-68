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
        background: scrolled ? "rgba(13,11,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        padding: scrolled ? "14px 0" : "24px 0",
        transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => go("top")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.25rem", color: "#F5F0E8", letterSpacing: "0.12em", textTransform: "uppercase" }}>EK</span>
        </button>

        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {[["Work", "work"], ["About", "about"], ["Contact", "contact"]].map(([l, h]) => (
            <button key={l} onClick={() => go(h)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(245,240,232,0.55)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s", padding: "4px 0" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.55)")}>
              {l}
            </button>
          ))}
        </nav>

        <a href="mailto:eymenfaruk479@gmail.com"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "#F5F0E8", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", padding: "9px 22px", border: "1px solid rgba(245,240,232,0.25)", borderRadius: "2px", transition: "all 0.2s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,240,232,0.6)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,240,232,0.06)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,240,232,0.25)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}
