import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "U-Net Optic Disc Segmentation",
    role: "NIH Research · Medical AI",
    body: "Built a U-Net with a ResNet34 encoder and combined BCE and Dice loss, trained on the REFUGE2 dataset. A comprehensive augmentation pipeline helped the model achieve results no comparable published work has matched.",
    metrics: [
      { v: "99.69%", l: "Dice Score", accent: true },
      { v: "+2.7%", l: "Over SOTA", accent: true },
      { v: "99.5%", l: "Pass Rate" },
    ],
    stack: ["PyTorch", "U-Net", "ResNet34", "Albumentations", "Google Colab"],
    color: "#2563EB",
    wide: true,
  },
  {
    id: "02",
    title: "AI Stock Trading System",
    role: "FinTech · Machine Learning",
    body: "Three models working in concert: FinBERT reads financial news sentiment, an LSTM forecasts price movement, and a Random Forest classifier generates trade signals. All unified in a live Streamlit dashboard.",
    metrics: [
      { v: "FinBERT", l: "NLP Engine" },
      { v: "3", l: "Stacked Models" },
      { v: "Live", l: "Dashboard" },
    ],
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "Streamlit"],
    color: "#16A34A",
    wide: false,
  },
  {
    id: "03",
    title: "Retinal Lesion Segmentation",
    role: "NIH Research · Deep Learning",
    body: "Semantic segmentation across 6,000 retinal images from APTOS and IDRiD. Custom loss functions for imbalanced lesion classes. Currently benchmarking DeepLabV3+ and FPN architectures against the established baseline.",
    metrics: [
      { v: "6,000+", l: "Images" },
      { v: "2", l: "Datasets" },
      { v: "3+", l: "Architectures" },
    ],
    stack: ["PyTorch", "DeepLabV3+", "FPN", "CNNs"],
    color: "#9333EA",
    wide: false,
  },
  {
    id: "04",
    title: "Digital Recipe Book",
    role: "Full Stack · Backend Engineering",
    body: "Production-quality Flask backend with persistent MySQL storage. RESTful API, structured routing, and proper error handling replaced a fragile in-memory prototype that the team had been relying on.",
    metrics: [
      { v: "Flask", l: "Framework" },
      { v: "MySQL", l: "Database" },
      { v: "REST", l: "API Pattern" },
    ],
    stack: ["Python", "Flask", "MySQL", "REST API", "Git"],
    color: "#B45309",
    wide: false,
  },
];

function Card({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl ${p.wide ? "md:col-span-2" : ""}`}
      style={{ background: "#FFFFFF", border: "1.5px solid #E8E4DE", padding: "clamp(24px, 4vw, 36px)" }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      {/* Accent top bar */}
      <motion.div className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{ background: p.color }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }} />

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
        style={{ background: p.color + "18" }} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: p.color, marginBottom: "10px" }}>
              {p.role}
            </p>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)", lineHeight: 1.2, color: "#0D0D0D" }}>
              {p.title}
            </h3>
          </div>
          <div className="ml-4 shrink-0 flex items-center gap-3">
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "3rem", color: "#0D0D0D", opacity: 0.05, lineHeight: 1 }}
              className="group-hover:opacity-10 transition-opacity">
              {p.id}
            </span>
            <a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black/5"
              style={{ border: "1.5px solid #E0DDD7" }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#9B9589" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Body */}
        <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.8, color: "#4A4A4A", marginBottom: "24px" }}>
          {p.body}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-8 pb-5 mb-5" style={{ borderBottom: "1px solid #EDE9E2" }}>
          {p.metrics.map(m => (
            <div key={m.l}>
              <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", lineHeight: 1, color: m.accent ? p.color : "#0D0D0D", letterSpacing: "-0.01em" }}>
                {m.v}
              </p>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0AA9E", marginTop: "5px" }}>
                {m.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack chips */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {p.stack.map(t => (
          <span key={t}
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "11px", color: "#7A7570", background: "#F5F2EC", border: "1px solid #E8E4DE", borderRadius: "100px", padding: "6px 12px" }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ background: "#F2EFE9", paddingTop: "clamp(80px, 12vw, 130px)", paddingBottom: "clamp(80px, 12vw, 130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 28 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B9589", marginBottom: "16px" }}>
              Selected Work
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#0D0D0D" }}>
              Projects &amp;<br />
              <em style={{ color: "#A09484" }}>Research</em>
            </h2>
          </div>
          <motion.a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2, borderColor: "#0D0D0D" }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "100px", border: "1.5px solid #D0CCC4", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "13px", color: "#6B6B6B", textDecoration: "none", transition: "all 0.2s" }}>
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            All Projects on GitHub ↗
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
