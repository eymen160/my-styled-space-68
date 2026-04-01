import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BG = "#07090F";
const SURFACE = "#0D1017";
const ACCENT = "#00FF94";
const BLUE = "#4D8EFF";
const TEXT = "#CDD6F4";
const MUTED = "rgba(205,214,244,0.45)";
const BORDER = "rgba(205,214,244,0.07)";

const projects = [
  {
    id: "01", title: "U-Net Optic Disc Segmentation", role: "NIH Research · Medical AI",
    body: "Built a U-Net with a ResNet34 encoder and combined BCE + Dice loss, trained on the REFUGE2 dataset. A comprehensive augmentation pipeline helped the model achieve results no comparable published work has matched.",
    metrics: [{ v: "99.69%", l: "Dice Score", hi: true }, { v: "+2.7%", l: "Over SOTA", hi: true }, { v: "99.5%", l: "Precision", hi: false }],
    stack: ["PyTorch", "U-Net", "ResNet34", "Albumentations", "Google Colab"],
    accent: ACCENT, tag: "RESEARCH", wide: true,
  },
  {
    id: "02", title: "AI Stock Trading System", role: "FinTech · Machine Learning",
    body: "Three models in concert: FinBERT reads financial news, an LSTM forecasts price movement, and a Random Forest generates trade signals — all unified in a live Streamlit dashboard.",
    metrics: [{ v: "FinBERT", l: "NLP Engine", hi: false }, { v: "3", l: "Stacked Models", hi: true }, { v: "Live", l: "Dashboard", hi: false }],
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "Streamlit"],
    accent: BLUE, tag: "ENGINEERING", wide: false,
  },
  {
    id: "03", title: "Retinal Lesion Segmentation", role: "NIH Research · Deep Learning",
    body: "Semantic segmentation across 6,000 retinal images from APTOS and IDRiD. Custom loss functions for imbalanced lesion classes. Benchmarking DeepLabV3+ and FPN architectures.",
    metrics: [{ v: "6,000+", l: "Images", hi: false }, { v: "2", l: "Datasets", hi: false }, { v: "3+", l: "Architectures", hi: true }],
    stack: ["PyTorch", "DeepLabV3+", "FPN", "CNNs"],
    accent: "#9B7FFF", tag: "RESEARCH", wide: false,
  },
  {
    id: "04", title: "Digital Recipe Book API", role: "Full Stack · Backend Engineering",
    body: "Production Flask backend with persistent MySQL storage. RESTful API with structured routing and proper error handling — replaced a fragile in-memory prototype the team had relied on.",
    metrics: [{ v: "Flask", l: "Framework", hi: false }, { v: "MySQL", l: "Database", hi: false }, { v: "REST", l: "API Pattern", hi: false }],
    stack: ["Python", "Flask", "MySQL", "REST API", "Git"],
    accent: "#FFB347", tag: "ENGINEERING", wide: false,
  },
];

function Card({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col justify-between overflow-hidden ${p.wide ? "md:col-span-2" : ""}`}
      style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: "clamp(24px, 3.5vw, 32px)" }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}>

      <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: p.accent, transformOrigin: "left", scaleX: 0 }}
        whileHover={{ scaleX: 1 }} transition={{ duration: 0.35 }} />
      <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: p.accent + "10", filter: "blur(32px)" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "9px", color: p.accent, background: p.accent + "12", padding: "3px 8px", letterSpacing: "0.14em" }}>{p.tag}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "10px", color: MUTED, letterSpacing: "0.08em" }}>{p.role.split(" · ")[1] || p.role}</span>
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.15, color: TEXT, letterSpacing: "-0.01em" }}>{p.title}</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, marginLeft: "16px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "2.4rem", color: TEXT, opacity: 0.04, lineHeight: 1 }}
              className="group-hover:opacity-[0.08] transition-opacity">{p.id}</span>
            <a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
              style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = p.accent; (e.currentTarget as HTMLElement).style.color = p.accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = MUTED; }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.8, color: MUTED, marginBottom: "22px" }}>{p.body}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", paddingBottom: "18px", marginBottom: "18px", borderBottom: `1px solid ${BORDER}` }}>
          {p.metrics.map(m => (
            <div key={m.l}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "1.15rem", lineHeight: 1, color: m.hi ? p.accent : TEXT, letterSpacing: "-0.01em" }}>{m.v}</p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginTop: "5px" }}>{m.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {p.stack.map(t => (
          <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "10px", color: MUTED, background: "rgba(205,214,244,0.04)", border: `1px solid ${BORDER}`, padding: "4px 10px", letterSpacing: "0.04em" }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ background: BG, paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(80px, 12vw, 120px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)` }} />
      <div className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "clamp(36px, 6vw, 56px)" }}
          className="md:flex-row md:items-end md:justify-between">
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: ACCENT, letterSpacing: "0.12em", marginBottom: "14px" }}>// selected_work</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: TEXT }}>
              Projects &amp;<br /><span style={{ color: "rgba(205,214,244,0.15)" }}>Research</span>
            </h2>
          </div>
          <motion.a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", border: `1px solid ${BORDER}`, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "11px", color: MUTED, textDecoration: "none", letterSpacing: "0.08em", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(205,214,244,0.2)"; el.style.color = TEXT; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = BORDER; el.style.color = MUTED; }}>
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            All on GitHub ↗
          </motion.a>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
