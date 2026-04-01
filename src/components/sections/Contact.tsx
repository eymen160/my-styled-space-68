import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BG = "#07090F";
const SURFACE = "#0D1017";
const ACCENT = "#00FF94";
const TEXT = "#CDD6F4";
const MUTED = "rgba(205,214,244,0.45)";
const BORDER = "rgba(205,214,244,0.07)";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const up = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section id="contact" ref={ref} style={{ background: BG, paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(80px, 12vw, 120px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)` }} />
      <div style={{ position: "absolute", right: "-3%", bottom: "-8%", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(14rem, 40vw, 38rem)", lineHeight: 0.85, color: TEXT, opacity: 0.02, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>K</div>
      <div style={{ position: "absolute", top: "20%", left: "40%", width: "40vw", height: "40vw", background: "radial-gradient(ellipse, rgba(0,255,148,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div variants={container} initial="hidden" animate={iv ? "show" : "hidden"}
        className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">

        <motion.div variants={up} style={{ marginBottom: "clamp(36px, 7vw, 60px)" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: ACCENT, letterSpacing: "0.12em", marginBottom: "14px" }}>// get_in_touch</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.86, letterSpacing: "-0.03em", color: TEXT }}>
            Open to<br /><span style={{ color: "rgba(205,214,244,0.15)" }}>internships</span><br />and collabs.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div variants={up} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "1.0rem", lineHeight: 1.85, color: MUTED, maxWidth: "400px" }}>
              Actively seeking <strong style={{ fontWeight: 700, color: TEXT }}>Summer 2026 internships</strong> in AI/ML, software engineering, and data analytics. Always open to conversations about research or new ideas.
            </p>
            <motion.a href="mailto:eymenfaruk479@gmail.com" whileHover={{ scale: 1.02, y: -3 }} whileTap={{ scale: 0.98 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "14px", padding: "16px 24px", background: ACCENT, color: "#07090F", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "12px", textDecoration: "none", letterSpacing: "0.06em", boxShadow: "0 0 24px rgba(0,255,148,0.18)", alignSelf: "flex-start" }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              eymenfaruk479@gmail.com
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[{ l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" }, { l: "GitHub", h: "https://github.com/eymen160" }].map(x => (
                <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "9px 18px", border: `1px solid ${BORDER}`, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "11px", color: MUTED, textDecoration: "none", letterSpacing: "0.08em", transition: "all 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(205,214,244,0.2)"; el.style.color = TEXT; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = BORDER; el.style.color = MUTED; }}>
                  {x.l} ↗
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={up} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{ padding: "24px", border: "1px solid rgba(0,255,148,0.2)", background: "rgba(0,255,148,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: ACCENT, boxShadow: `0 0 10px ${ACCENT}80` }} className="animate-ping" />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT }}>AVAILABLE_NOW</span>
              </div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.1, color: TEXT, marginBottom: "6px" }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "11px", color: MUTED, letterSpacing: "0.04em" }}>AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <motion.div whileHover={{ y: -3 }} style={{ padding: "20px", border: `1px solid ${BORDER}`, background: SURFACE }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: "10px" }}>LOCATION</p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.1, color: TEXT }}>Roswell, GA</p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "10px", color: MUTED, marginTop: "3px", letterSpacing: "0.04em" }}>United States</p>
              </motion.div>
              <motion.a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                style={{ padding: "20px", border: `1px solid ${BORDER}`, background: SURFACE, textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,148,0.3)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = BORDER}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: "10px" }}>RESUME</p>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.1, color: TEXT }}>View PDF</p>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            </div>

            <div style={{ padding: "14px 20px", border: `1px solid ${BORDER}`, background: SURFACE, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "10px", letterSpacing: "0.08em", color: MUTED }}>AVG_RESPONSE_TIME</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "11px", color: ACCENT, letterSpacing: "0.06em" }}>&lt; 24h</span>
            </div>
          </motion.div>
        </div>

        <motion.p variants={up} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "10px", color: "rgba(205,214,244,0.18)", textAlign: "center", marginTop: "80px", paddingTop: "28px", borderTop: `1px solid ${BORDER}`, letterSpacing: "0.08em" }}>
          // Designed and built by Eymen Faruk Keyvan · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
}
