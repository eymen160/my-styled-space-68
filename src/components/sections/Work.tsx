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
    linkLabel: "View on GitHub",
    meta: "IDRiD · 2026",
  },
  {
    num: "02",
    title: "Optic Disc Segmentation",
    role: "NIH Research · Medical Imaging",
    description: "U-Net with ResNet34 encoder trained on REFUGE2. Rigorous augmentation and combined BCE-Dice loss pushed performance past every comparable published baseline by 2.7 percentage points.",
    highlight: "+2.7% over SOTA · 99.5% precision",
    stack: ["PyTorch", "U-Net", "ResNet34", "REFUGE2"],
    link: "https://github.com/eymen160",
    linkLabel: "View on GitHub",
    meta: "REFUGE2 · 2026",
  },
  {
    num: "03",
    title: "AI Stock Sentiment Trader",
    role: "FinTech · Machine Learning",
    description: "FinBERT reads financial news, an LSTM forecasts price movement, and a Random Forest generates trade signals — all served through a real-time Streamlit dashboard backed by PostgreSQL and AWS.",
    highlight: "3-model ensemble · live dashboard",
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "AWS"],
    link: "https://github.com/eymen160",
    linkLabel: "View on GitHub",
    meta: "FinTech · 2025",
  },
  {
    num: "04",
    title: "Digital Recipe Book API",
    role: "Backend Engineering",
    description: "Production Flask REST API with MySQL storage, replacing a fragile in-memory prototype. Full CRUD, input validation, and clean endpoint design.",
    highlight: "RESTful · MySQL · Flask",
    stack: ["Python", "Flask", "MySQL", "Git"],
    link: "https://github.com/eymen160",
    linkLabel: "View on GitHub",
    meta: "Backend · 2024",
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
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Selected Work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#1B2A4A" }}>
              Projects &amp;<br /><em style={{ color: "rgba(27,42,74,0.28)" }}>Research</em>
            </h2>
          </div>
          <a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#1B2A4A", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "2px solid #C8963E", paddingBottom: "3px", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#C8963E"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#1B2A4A"}>
            All on GitHub ↗
          </a>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((p, i) => {
            const pRef = useRef(null);
            const pIv = useInView(pRef, { once: true, margin: "-40px" });
            return (
              <motion.div key={p.num} ref={pRef}
                initial={{ opacity: 0, y: 28 }} animate={pIv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderTop: "1px solid rgba(27,42,74,0.1)", padding: "clamp(28px,4vw,48px) 0", position: "relative" }}>

                <div style={{ display: "grid", gridTemplateColumns: "72px 1fr auto", gap: "clamp(20px,3vw,48px)", alignItems: "start" }}>

                  <div style={{ paddingTop: "6px" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.15em" }}>{p.num}</span>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(27,42,74,0.5)", letterSpacing: "0.16em", textTransform: "uppercase" }}>{p.role}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.35)", letterSpacing: "0.1em" }}>· {p.meta}</span>
                    </div>

                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.4rem, 2.8vw, 2rem)", lineHeight: 1.1, color: "#1B2A4A", letterSpacing: "-0.01em", marginBottom: "14px" }}>
                      {p.title}
                    </h3>

                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(27,42,74,0.65)", maxWidth: "580px", marginBottom: "18px" }}>
                      {p.description}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "#C8963E", letterSpacing: "0.04em", background: "rgba(200,150,62,0.1)", padding: "4px 12px", borderRadius: "2px", border: "1px solid rgba(200,150,62,0.25)" }}>
                        {p.highlight}
                      </span>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {p.stack.map(t => (
                          <span key={t} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", color: "rgba(27,42,74,0.45)", background: "rgba(27,42,74,0.06)", padding: "3px 9px", borderRadius: "2px", letterSpacing: "0.04em" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingTop: "6px" }}>
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(27,42,74,0.4)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s", whiteSpace: "nowrap" }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#1B2A4A"}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(27,42,74,0.4)"}>
                      {p.linkLabel} ↗
                    </a>
                  </div>
                </div>

                <motion.div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #C8963E, rgba(200,150,62,0.3))", scaleX: 0, transformOrigin: "left" }}
                  whileHover={{ scaleX: 1 }} transition={{ duration: 0.35 }} />
              </motion.div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(27,42,74,0.1)" }} />
        </div>
      </div>
    </section>
  );
}
