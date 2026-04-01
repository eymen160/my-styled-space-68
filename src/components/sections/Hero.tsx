import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BG = "#07090F";
const ACCENT = "#00FF94";
const TEXT = "#CDD6F4";
const MUTED = "rgba(205,214,244,0.45)";
const BORDER = "rgba(205,214,244,0.07)";

function Counter({ to, decimals = 2 }: { to: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const ctrl = animate(0, to, {
      duration: 2.4, delay: 1.0, ease: "easeOut",
      onUpdate: v => setVal(parseFloat(v.toFixed(decimals))),
    });
    return ctrl.stop;
  }, [to, decimals]);
  return <>{val.toFixed(decimals)}</>;
}

const stats = [
  { key: "DICE_SCORE", val: 99.69, suffix: "%", dec: 2 },
  { key: "SOTA_DELTA", val: 2.7, suffix: "pp", dec: 1 },
  { key: "GPA", val: 3.56, suffix: "", dec: 2 },
];

const roles = ["AI/ML Researcher", "Deep Learning Eng", "NIH Research Asst", "CS Junior @ KSU"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPara = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [roleIdx, setRoleIdx] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} style={{ background: BG, minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "100px" }}>

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />
      {/* Glows */}
      <div style={{ position: "absolute", top: "-10%", left: "55%", width: "50vw", height: "70vh", background: "radial-gradient(ellipse, rgba(0,255,148,0.05) 0%, transparent 68%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "40vw", height: "40vh", background: "radial-gradient(ellipse, rgba(77,142,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div style={{ y: yPara, opacity: fade }} className="relative z-10 flex-1 max-w-[1320px] mx-auto w-full px-6 md:px-14">

        {/* Status bar */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(48px, 8vw, 80px)", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: ACCENT, letterSpacing: "0.1em" }}>
              STATUS: OPEN_TO_INTERNSHIP
            </span>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "10px", color: MUTED, letterSpacing: "0.08em" }}>
            LAT: 34.02°N · LON: 84.36°W · KSU · ROSWELL, GA
          </span>
        </motion.div>

        {/* Name */}
        <div style={{ marginBottom: "clamp(28px, 4vw, 48px)" }}>
          {["EYMEN", "KEYVAN."].map((word, wi) => (
            <div key={word} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "108%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.2 + wi * 0.13, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(4.2rem, 13.5vw, 12.5rem)", lineHeight: 0.88, letterSpacing: "-0.02em", color: wi === 0 ? TEXT : "rgba(205,214,244,0.14)", paddingBottom: "0.1em" }}>
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Role + Stats */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 40px)" }} className="lg:flex-row lg:items-start lg:justify-between">

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "12px", color: MUTED }}>//</span>
              <div style={{ overflow: "hidden", height: "20px" }}>
                <motion.span key={roleIdx} initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "13px", color: TEXT, letterSpacing: "0.04em" }}>
                  {roles[roleIdx]}
                </motion.span>
              </div>
              <span style={{ display: "inline-block", width: "2px", height: "14px", background: ACCENT, opacity: blink ? 1 : 0, transition: "opacity 0.1s" }} />
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "1.0rem", lineHeight: 1.82, color: MUTED, maxWidth: "440px" }}>
              CS junior at <strong style={{ fontWeight: 700, color: TEXT }}>Kennesaw State University</strong> conducting NIH-funded deep learning research in medical imaging. My models beat every comparable published benchmark.
            </p>
          </div>

          {/* Stats terminal */}
          <div style={{ border: `1px solid ${BORDER}`, background: "rgba(13,16,23,0.7)", backdropFilter: "blur(8px)", padding: "20px 24px", minWidth: "300px", flexShrink: 0 }}>
            <div style={{ marginBottom: "14px", paddingBottom: "10px", borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "10px", color: MUTED, letterSpacing: "0.1em" }}>SYSTEM · METRICS · LIVE</span>
            </div>
            {stats.map((s, i) => (
              <motion.div key={s.key} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", marginBottom: i < stats.length - 1 ? "10px" : 0 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "11px", color: MUTED, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{s.key}</span>
                <span style={{ flex: 1, borderBottom: "1px dotted rgba(205,214,244,0.12)", height: "1px", marginBottom: "3px" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "13px", color: ACCENT, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  <Counter to={s.val} decimals={s.dec} />{s.suffix}
                </span>
              </motion.div>
            ))}
            <div style={{ marginTop: "14px", paddingTop: "10px", borderTop: `1px solid ${BORDER}` }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "9px", color: "rgba(205,214,244,0.2)", letterSpacing: "0.08em" }}>NIH-FUNDED · KENNESAW STATE UNIVERSITY · 2025–2026</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }}
        className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-14 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <motion.button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ background: ACCENT, color: "#07090F", padding: "12px 26px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "12px", border: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 0 20px rgba(0,255,148,0.2)" }}>
            [ SEE WORK ]
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M21 12H3" />
            </svg>
          </motion.button>
          <motion.a href="mailto:eymenfaruk479@gmail.com" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ padding: "12px 26px", border: `1px solid ${BORDER}`, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "12px", color: MUTED, textDecoration: "none", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(205,214,244,0.25)"; el.style.color = TEXT; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = BORDER; el.style.color = MUTED; }}>
            Get in Touch
          </motion.a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {[{ l: "GitHub ↗", h: "https://github.com/eymen160" }, { l: "LinkedIn ↗", h: "https://linkedin.com/in/eymenkeyvan" }, { l: "Resume ↗", h: "https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" }].map(x => (
            <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: "rgba(205,214,244,0.28)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = ACCENT}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(205,214,244,0.28)"}>
              {x.l}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
