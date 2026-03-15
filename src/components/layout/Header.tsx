import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const NAV = [["Work", "work"], ["About", "about"], ["Contact", "contact"]] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", v => setScrolled(v > 50));

  const go = (id: string) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(27,42,74,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
        borderBottom: scrolled ? "1px solid rgba(250,247,242,0.06)" : "1px solid transparent",
        padding: scrolled ? "13px 0" : "22px 0",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5vw,40px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <motion.button onClick={() => go("top")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.2rem", color: scrolled ? "#FAF7F2" : "#1B2A4A", letterSpacing: "0.15em", transition: "color 0.4s" }}>EK</span>
        </motion.button>

        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {NAV.map(([l, h]) => (
            <motion.button key={l} onClick={() => go(h)}
              whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: scrolled ? "rgba(250,247,242,0.58)" : "rgba(27,42,74,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s", padding: "4px 0", position: "relative" }}
              onMouseEnter={e => (e.currentTarget.style.color = scrolled ? "#FAF7F2" : "#1B2A4A")}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "rgba(250,247,242,0.58)" : "rgba(27,42,74,0.5)")}>
              {l}
            </motion.button>
          ))}
        </nav>

        <motion.a
          href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.06, backgroundColor: "#C8963E" }} whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#FAF7F2", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", padding: "10px 22px", background: scrolled ? "rgba(200,150,62,0.85)" : "#1B2A4A", borderRadius: "4px", transition: "all 0.25s", display: "inline-block" }}>
          Hire Me
        </motion.a>
      </div>
    </motion.header>
  );
}
