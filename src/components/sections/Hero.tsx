import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useCounter";

const NAME = "EYMEN FARUK KEYVAN";
const SUBTITLE = "AI Researcher · Software Engineer · Builder";

export default function Hero() {
  const reduced = useReducedMotion();
  const [subtitleChars, setSubtitleChars] = useState(0);
  const [lineDrawn, setLineDrawn] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Start typewriter after name reveal finishes */
  useEffect(() => {
    const nameDur = reduced ? 0 : NAME.length * 0.04 + 0.6; // rough total
    const delay = setTimeout(() => {
      if (reduced) {
        setSubtitleChars(SUBTITLE.length);
        setLineDrawn(true);
        return;
      }
      timerRef.current = setInterval(() => {
        setSubtitleChars((n) => {
          if (n >= SUBTITLE.length) {
            clearInterval(timerRef.current!);
            setTimeout(() => setLineDrawn(true), 200);
            return n;
          }
          return n + 1;
        });
      }, 38);
    }, nameDur * 1000);
    return () => { clearTimeout(delay); if (timerRef.current) clearInterval(timerRef.current); };
  }, [reduced]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.04, delayChildren: 0.3 } },
  };
  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    show:   { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 40px 80px", maxWidth: 1200, margin: "0 auto" }}
    >
      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 52, width: "fit-content" }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0, boxShadow: "0 0 6px #4ade80" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Open to Summer 2026 Internships
        </span>
      </motion.div>

      {/* Name — letter-by-letter */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(3.5rem,10vw,8rem)", lineHeight: 0.9, letterSpacing: "-0.01em", color: "var(--text)", marginBottom: 28, display: "flex", flexWrap: "wrap", columnGap: "0.25em" }}
        aria-label={NAME}
      >
        {NAME.split("").map((char, i) => (
          char === " "
            ? <span key={i} style={{ display: "inline-block", width: "0.3em" }} aria-hidden="true" />
            : (
              <motion.span key={i} variants={letterVariants} style={{ display: "inline-block" }} aria-hidden="true">
                {char}
              </motion.span>
            )
        ))}
      </motion.h1>

      {/* Subtitle — typewriter */}
      <div style={{ marginBottom: 20, minHeight: 28 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontWeight: 300, fontSize: "clamp(0.9rem,1.8vw,1.1rem)", color: "var(--muted)", letterSpacing: "0.04em" }}>
          {SUBTITLE.slice(0, subtitleChars)}
          {subtitleChars < SUBTITLE.length && (
            <span style={{ borderRight: "1.5px solid var(--gold)", marginLeft: 1, animation: "none" }}>‌</span>
          )}
        </p>
      </div>

      {/* Gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: lineDrawn ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: 1, background: "var(--gold)", transformOrigin: "left", width: "min(360px, 60vw)", marginBottom: 56 }}
      />

      {/* CTAs + social */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: lineDrawn ? 1 : 0, y: lineDrawn ? 0 : 16 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 64 }}
      >
        <motion.button
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500, color: "var(--bg)", background: "var(--gold)", padding: "12px 28px", borderRadius: "var(--radius)", border: "none", cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          View Projects
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf"
          target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 400, color: "var(--text)", padding: "12px 28px", borderRadius: "var(--radius)", border: "1px solid rgba(240,236,228,0.2)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "border-color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(240,236,228,0.2)")}
        >
          Resume ↗
        </motion.a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: lineDrawn ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: "flex", gap: 28 }}
      >
        {[
          { l: "GitHub",   h: "https://github.com/eymen160" },
          { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
          { l: "Email",    h: "mailto:eymen@eymenkeyvan.com" },
        ].map((x) => (
          <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
            className="gold-underline-wrap"
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {x.l}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
