import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Fovea Detection — Retinal AI",
    role: "NIH Research · Deep Learning",
    description: "Extended U-Net architecture for fovea localization on the IDRiD dataset. Custom augmentation pipeline and weighted loss strategy that outperforms the published MCAU-Net benchmark — advancing early diabetic retinopathy screening.",
    highlight: "84.97% accuracy, beats MCAU-Net",
    stack: ["PyTorch", "U-Net", "ResNet34", "Albumentations"],
    link: "https://github.com/eymen160/fovea-segmentation",
    meta: "IDRiD · 2026",
    color: "rgba(200,150,62,0.08)",
    accent: "#C8963E",
  },
  {
    num: "02",
    title: "Optic Disc Segmentation",
    role: "NIH Research · Medical Imaging",
    description: "U-Net with ResNet34 encoder trained on REFUGE2. Rigorous augmentation and combined BCE-Dice loss pushed performance past every comparable published baseline by 2.7 percentage points.",
    highlight: "+2.7% over SOTA · 99.5% precision",
    stack: ["PyTorch", "U-Net", "ResNet34", "REFUGE2"],
    link: "https://github.com/eymen160",
    meta: "REFUGE2 · 2026",
    color: "rgba(100,140,220,0.08)",
    accent: "#6B9AE8",
  },
  {
    num: "03",
    title: "AI Stock Sentiment Trader",
    role: "FinTech · Machine Learning",
    description: "FinBERT reads financial news, an LSTM forecasts price movement, and a Random Forest generates trade signals — all served through a real-time Streamlit dashboard backed by PostgreSQL and AWS.",
    highlight: "3-model ensemble · live dashboard",
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "AWS"],
    link: "https://github.com/eymen160",
    meta: "FinTech · 2025",
    color: "rgba(74,222,128,0.06)",
    accent: "#4ade80",
  },
  {
    num: "04",
    title: "Digital Recipe Book API",
    role: "Backend Engineering",
    description: "Production Flask REST API with MySQL storage, replacing a fragile in-memory prototype. Full CRUD, input validation, and clean endpoint design.",
    highlight: "RESTful · MySQL · Flask",
    stack: ["Python", "Flask", "MySQL", "Git"],
    link: "https://github.com/eymen160",
    meta: "Backend · 2024",
    color: "rgba(200,150,62,0.05)",
    accent: "#C8963E",
  },
];

export default function Work() {
  const headRef = useRef(null);
  const headIv = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="work" style={{ background: "#FAF7F2", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(27,42,74,0.1)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <motion.div ref={headRef} initial={{ opacity: 0, y: 22 }} animate={headIv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(48px,7vw,80px)", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Selected Work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#1B2A4A" }}>
              Projects &amp;<br /><em style={{ color: "rgba(27,42,74,0.22)" }}>Research</em>
            </h2>
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#1B2A4A", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "2px solid #C8963E", paddingBottom: "3px", display: "inline-block" }}>
            All on GitHub ↗
          </motion.a>
        </motion.div>

        {/* Project cards — 2026 style with stagger + hover lift */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {projects.map((p, i) => {
            const pRef = useRef(null);
            const pIv = useInView(pRef, { once: true, margin: "-40px" });
            return (
              <motion.div key={p.num} ref={pRef}
                initial={{ opacity: 0, y: 40 }}
                animate={pIv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(27,42,74,0.12)" }}
                style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,74,0.08)", borderRadius: "12px", padding: "clamp(24px,3.5vw,40px)", position: "relative", overflow: "hidden", transition: "box-shadow 0.3s, border-color 0.3s", cursor: "default" }}>

                {/* Colored accent top bar */}
                <motion.div
                  initial={{ scaleX: 0 }} animate={pIv ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${p.accent}, transparent)`, transformOrigin: "left", borderRadius: "12px 12px 0 0" }} />

                {/* Background tint */}
                <div style={{ position: "absolute", inset: 0, background: p.color, borderRadius: "12px", pointerEvents: "none" }} />

                <div style={{ position: "relative", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "clamp(16px,2.5vw,36px)", alignItems: "start" }}>

                  <div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "13px", color: p.accent, letterSpacing: "0.1em" }}>{p.num}</span>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(27,42,74,0.5)", letterSpacing: "0.16em", textTransform: "uppercase" }}>{p.role}</span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(27,42,74,0.25)", display: "inline-block" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.35)" }}>{p.meta}</span>
                    </div>

                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", lineHeight: 1.1, color: "#1B2A4A", letterSpacing: "-0.01em", marginBottom: "12px" }}>
                      {p.title}
                    </h3>

                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(27,42,74,0.6)", maxWidth: "580px", marginBottom: "18px" }}>
                      {p.description}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: p.accent, letterSpacing: "0.05em", background: `${p.color}`, padding: "5px 12px", borderRadius: "4px", border: `1px solid ${p.accent}33` }}>
                        {p.highlight}
                      </span>
                      {p.stack.map(t => (
                        <motion.span key={t}
                          whileHover={{ scale: 1.08, backgroundColor: "rgba(27,42,74,0.1)" }}
                          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", color: "rgba(27,42,74,0.5)", background: "rgba(27,42,74,0.05)", padding: "4px 10px", borderRadius: "4px", cursor: "default", transition: "all 0.18s" }}>
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.a href={p.link} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, color: p.accent }}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(27,42,74,0.35)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}>
                    GitHub ↗
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
