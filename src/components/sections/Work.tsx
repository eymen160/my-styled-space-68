import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
    accent: "#C8963E",
    tag: "Research",
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
    accent: "#6B9AE8",
    tag: "Research",
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
    accent: "#4ade80",
    tag: "Engineering",
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
    accent: "#C8963E",
    tag: "Engineering",
  },
];

function ProjectRow({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const isEven = i % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderTop: i === 0 ? "none" : "1px solid rgba(27,42,74,0.08)",
        padding: "clamp(24px,4vw,44px) 0",
        position: "relative",
        cursor: "default",
      }}
      className="group"
    >
      {/* Hover background sweep */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", inset: "-1px 0", background: `linear-gradient(${isEven ? "90deg" : "270deg"}, ${p.accent}06, transparent)`, borderRadius: "6px", transformOrigin: isEven ? "left" : "right", pointerEvents: "none" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "56px 1fr 1fr auto", gap: "clamp(14px,2.5vw,36px)", alignItems: "start", position: "relative" }}>

        {/* Number + accent line */}
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "11px", color: p.accent, letterSpacing: "0.1em", marginBottom: "8px" }}>{p.num}</div>
          <motion.div
            initial={{ scaleY: 0 }} animate={iv ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
            style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, ${p.accent}, transparent)`, transformOrigin: "top" }}
          />
        </div>

        {/* Left: title + meta */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: p.accent, background: `${p.accent}12`, padding: "3px 9px", borderRadius: "3px", letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.tag}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "rgba(27,42,74,0.38)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.type}</span>
          </div>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.4rem,2.5vw,1.95rem)", lineHeight: 1.08, color: "#1B2A4A", letterSpacing: "-0.015em", marginBottom: "8px" }}>
            {p.title}
          </h3>

          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.32)" }}>{p.meta}</span>
        </div>

        {/* Right: description + stack */}
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.85, color: "rgba(27,42,74,0.58)", marginBottom: "16px" }}>
            {p.description}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: p.accent, background: `${p.accent}12`, padding: "4px 11px", borderRadius: "4px", border: `1px solid ${p.accent}28` }}>
              ↑ {p.highlight}
            </span>
          </div>

          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {p.stack.map(t => (
              <motion.span key={t}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(27,42,74,0.1)", color: "#1B2A4A" }}
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "rgba(27,42,74,0.45)", background: "rgba(27,42,74,0.05)", padding: "3px 9px", borderRadius: "3px", border: "1px solid rgba(27,42,74,0.08)", transition: "all 0.16s" }}>
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <motion.a href={p.link} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.08, color: p.accent }}
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "rgba(27,42,74,0.28)", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", transition: "color 0.2s", paddingTop: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
          View ↗
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const headRef = useRef(null);
  const headIv = useInView(headRef, { once: true, margin: "-60px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const labelX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="work" ref={sectionRef} style={{ background: "#FAF7F2", paddingTop: "clamp(72px,10vw,112px)", paddingBottom: "clamp(72px,10vw,112px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(27,42,74,0.12), transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5vw,40px)" }}>

        {/* Section header with parallax label */}
        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(36px,6vw,64px)", flexWrap: "wrap", gap: "20px", overflow: "hidden" }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={headIv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            {/* Parallax section label */}
            <motion.div style={{ x: labelX }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: "14px" }}>Selected Work</p>
            </motion.div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#1B2A4A" }}>
              Projects &amp;<br />
              <em style={{ color: "rgba(27,42,74,0.2)", fontStyle: "italic" }}>Research</em>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={headIv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
            <motion.a whileHover={{ scale: 1.04 }} href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#1B2A4A", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "2px solid #C8963E", paddingBottom: "2px", display: "inline-block" }}>
              All on GitHub ↗
            </motion.a>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.38)" }}>4 projects · 2024–2026</span>
          </motion.div>
        </div>

        {/* Project list with top border */}
        <div style={{ borderTop: "1px solid rgba(27,42,74,0.1)" }}>
          {projects.map((p, i) => <ProjectRow key={p.num} p={p} i={i} />)}
          <div style={{ borderTop: "1px solid rgba(27,42,74,0.08)", paddingTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.35)", letterSpacing: "0.08em" }}>All projects NIH-funded or personal · open source</span>
            <motion.a whileHover={{ scale: 1.04, color: "#C8963E" }} href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(27,42,74,0.4)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}>
              github.com/eymen160 ↗
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
