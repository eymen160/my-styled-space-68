import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Fovea Detection — Retinal AI",
    role: "NIH Research",
    type: "Deep Learning",
    description: "Extended U-Net architecture for fovea localization on the IDRiD dataset. Custom augmentation pipeline and weighted loss strategy that outperforms the published MCAU-Net benchmark — advancing early diabetic retinopathy screening.",
    highlight: "84.97% accuracy, beats MCAU-Net",
    stack: ["PyTorch", "U-Net", "ResNet34", "Albumentations"],
    link: "https://github.com/eymen160/fovea-segmentation",
    meta: "IDRiD · 2026",
    accentColor: "#C8963E",
    bgTint: "rgba(200,150,62,0.04)",
  },
  {
    num: "02",
    title: "Optic Disc Segmentation",
    role: "NIH Research",
    type: "Medical Imaging",
    description: "U-Net with ResNet34 encoder trained on REFUGE2. Rigorous augmentation and combined BCE-Dice loss pushed performance past every comparable published baseline by 2.7 percentage points.",
    highlight: "+2.7% over SOTA · 99.5% precision",
    stack: ["PyTorch", "U-Net", "ResNet34", "REFUGE2"],
    link: "https://github.com/eymen160",
    meta: "REFUGE2 · 2026",
    accentColor: "#6B9AE8",
    bgTint: "rgba(107,154,232,0.04)",
  },
  {
    num: "03",
    title: "AI Stock Sentiment Trader",
    role: "FinTech",
    type: "Machine Learning",
    description: "FinBERT reads financial news, an LSTM forecasts price movement, and a Random Forest generates trade signals — all served through a real-time Streamlit dashboard backed by PostgreSQL and AWS.",
    highlight: "3-model ensemble · live dashboard",
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "AWS"],
    link: "https://github.com/eymen160",
    meta: "FinTech · 2025",
    accentColor: "#4ade80",
    bgTint: "rgba(74,222,128,0.03)",
  },
  {
    num: "04",
    title: "Digital Recipe Book API",
    role: "Backend",
    type: "Engineering",
    description: "Production Flask REST API with MySQL storage, replacing a fragile in-memory prototype. Full CRUD, input validation, and clean endpoint design.",
    highlight: "RESTful · MySQL · Flask",
    stack: ["Python", "Flask", "MySQL", "Git"],
    link: "https://github.com/eymen160",
    meta: "Backend · 2024",
    accentColor: "#C8963E",
    bgTint: "rgba(200,150,62,0.03)",
  },
];

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(27,42,74,0.08)",
        borderRadius: "14px",
        padding: "clamp(22px, 3vw, 36px)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "box-shadow 0.3s ease",
        boxShadow: "0 2px 12px rgba(27,42,74,0.04)",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 50px rgba(27,42,74,0.11)"; (e.currentTarget as HTMLDivElement).style.borderColor = `${p.accentColor}30`; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(27,42,74,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(27,42,74,0.08)"; }}
    >
      {/* Bg tint */}
      <div style={{ position: "absolute", inset: 0, background: p.bgTint, borderRadius: "14px", pointerEvents: "none" }} />

      {/* Accent top bar — sweep in */}
      <motion.div
        initial={{ scaleX: 0 }} animate={iv ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${p.accentColor}, ${p.accentColor}44, transparent)`, transformOrigin: "left", borderRadius: "14px 14px 0 0" }}
      />

      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "52px 1fr auto", gap: "clamp(14px, 2vw, 32px)", alignItems: "start" }}>

        {/* Number */}
        <div style={{ paddingTop: "2px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: p.accentColor, letterSpacing: "0.1em", display: "block" }}>{p.num}</span>
          <div style={{ width: "20px", height: "1px", background: `${p.accentColor}40`, marginTop: "6px" }} />
        </div>

        {/* Content */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "9px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: p.accentColor, letterSpacing: "0.16em", textTransform: "uppercase", background: `${p.accentColor}14`, padding: "3px 9px", borderRadius: "3px" }}>{p.role}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "rgba(27,42,74,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.type}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(27,42,74,0.3)", marginLeft: "auto" }}>{p.meta}</span>
          </div>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)", lineHeight: 1.1, color: "#1B2A4A", letterSpacing: "-0.01em", marginBottom: "11px" }}>
            {p.title}
          </h3>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.89rem", lineHeight: 1.82, color: "rgba(27,42,74,0.58)", maxWidth: "560px", marginBottom: "16px" }}>
            {p.description}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: p.accentColor, background: `${p.accentColor}12`, padding: "4px 11px", borderRadius: "4px", border: `1px solid ${p.accentColor}30`, letterSpacing: "0.03em" }}>
              {p.highlight}
            </span>
            {p.stack.map(t => (
              <motion.span key={t}
                whileHover={{ scale: 1.07, backgroundColor: "rgba(27,42,74,0.09)" }}
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", color: "rgba(27,42,74,0.45)", background: "rgba(27,42,74,0.05)", padding: "3px 9px", borderRadius: "3px", transition: "all 0.16s", cursor: "default" }}>
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Link */}
        <motion.a href={p.link} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.08, color: p.accentColor }}
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "rgba(27,42,74,0.3)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", transition: "color 0.2s", paddingTop: "2px" }}>
          GitHub ↗
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const headRef = useRef(null);
  const headIv = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="work" style={{ background: "#FAF7F2", paddingTop: "clamp(80px,10vw,120px)", paddingBottom: "clamp(80px,10vw,120px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(27,42,74,0.08)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <motion.div ref={headRef} initial={{ opacity: 0, y: 22 }} animate={headIv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(40px,6vw,72px)", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "14px" }}>Selected Work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.6rem, 6.5vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#1B2A4A" }}>
              Projects &amp;<br /><em style={{ color: "rgba(27,42,74,0.2)" }}>Research</em>
            </h2>
          </div>
          <motion.a whileHover={{ scale: 1.05 }} href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "12px", color: "#1B2A4A", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "2px solid #C8963E", paddingBottom: "2px", display: "inline-block" }}>
            All on GitHub ↗
          </motion.a>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {projects.map((p, i) => <ProjectCard key={p.num} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
