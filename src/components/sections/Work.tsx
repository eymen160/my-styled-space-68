import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Fovea Detection",
    subtitle: "Retinal AI",
    role: "NIH Research · Deep Learning",
    body: "Extended U-Net research to fovea localization on the IDRiD dataset. A custom augmentation pipeline and training strategy that outperforms the published MCAU-Net benchmark — directly advancing early diabetic retinopathy screening.",
    metrics: [
      { v: "84.97%", l: "Model Accuracy", accent: true },
      { v: "MCAU-Net", l: "Benchmark Beat", accent: true },
      { v: "IDRiD", l: "Dataset" },
    ],
    stack: ["PyTorch", "U-Net", "ResNet34", "Albumentations", "Google Colab"],
    color: "#2563EB",
    colorBg: "#EFF6FF",
    span: "lg:col-span-2",
    link: "https://github.com/eymen160/fovea-segmentation",
  },
  {
    id: "02",
    title: "AI Stock Sentiment",
    subtitle: "Trading System",
    role: "FinTech · Machine Learning",
    body: "FinBERT reads financial news, an LSTM forecasts price movement, and a Random Forest generates trade signals — all unified in a live Streamlit dashboard.",
    metrics: [
      { v: "3", l: "Stacked Models" },
      { v: "Live", l: "Dashboard" },
    ],
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "Streamlit"],
    color: "#16A34A",
    colorBg: "#F0FDF4",
    span: "lg:col-span-1",
    link: "https://github.com/eymen160",
  },
  {
    id: "03",
    title: "Optic Disc Seg.",
    subtitle: "U-Net Medical AI",
    role: "NIH Research · Medical AI",
    body: "U-Net with ResNet34 encoder trained on REFUGE2. Rigorous augmentation pushed performance past every comparable published baseline by 2.7 percentage points.",
    metrics: [
      { v: "+2.7%", l: "Over Baseline", accent: true },
      { v: "99.5%", l: "Precision" },
    ],
    stack: ["PyTorch", "U-Net", "ResNet34", "REFUGE2"],
    color: "#9333EA",
    colorBg: "#FAF5FF",
    span: "lg:col-span-1",
    link: "https://github.com/eymen160",
  },
  {
    id: "04",
    title: "Digital Recipe Book",
    subtitle: "Full Stack API",
    role: "Backend Engineering",
    body: "Production Flask backend with MySQL storage and a clean RESTful API that replaced a fragile in-memory prototype.",
    metrics: [
      { v: "REST", l: "API" },
      { v: "MySQL", l: "Database" },
    ],
    stack: ["Python", "Flask", "MySQL", "Git"],
    color: "#B45309",
    colorBg: "#FFFBEB",
    span: "lg:col-span-1",
    link: "https://github.com/eymen160",
  },
];

function BentoCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-50px" });
  const isWide = p.span.includes("col-span-2");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl flex flex-col ${p.span}`}
      style={{
        background: "#FFFFFF",
        border: "1.5px solid #E8E4DE",
        padding: isWide ? "clamp(28px,4vw,40px)" : "clamp(24px,3vw,32px)",
        minHeight: isWide ? "280px" : "260px",
        cursor: "default",
      }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
    >
      {/* Color accent bar */}
      <motion.div className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}88)` }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.38, ease: "easeOut" }} />

      {/* Background tint on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: p.colorBg }} />

      {/* Glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
        style={{ background: p.color + "20" }} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: p.color, marginBottom: "8px" }}>
              {p.role}
            </p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: isWide ? "clamp(1.4rem, 2.4vw, 1.9rem)" : "clamp(1.1rem, 1.8vw, 1.4rem)", lineHeight: 1.1, color: "#0D0D0D", letterSpacing: "-0.02em" }}>
                {p.title}
              </h3>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontStyle: "italic", fontSize: isWide ? "1.1rem" : "0.9rem", color: "#A09484" }}>
                {p.subtitle}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-3 shrink-0">
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2.4rem", color: "#0D0D0D", opacity: 0.04, lineHeight: 1 }}
              className="group-hover:opacity-[0.07] transition-opacity">{p.id}</span>
            <a href={p.link} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/8 cursor-none"
              style={{ border: "1.5px solid #E0DDD7" }}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#9B9589" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Body */}
        <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.78, color: "#4A4A4A", marginBottom: "20px", flex: isWide ? "1" : "0" }}>
          {p.body}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-6 pb-4 mb-4" style={{ borderBottom: "1px solid #EDE9E2" }}>
          {p.metrics.map(m => (
            <div key={m.l}>
              <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: m.v.length > 5 ? "1rem" : "1.25rem", lineHeight: 1, color: m.accent ? p.color : "#0D0D0D", letterSpacing: "-0.01em" }}>
                {m.v}
              </p>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0AA9E", marginTop: "4px" }}>
                {m.l}
              </p>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.stack.map(t => (
            <span key={t}
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "10.5px", color: "#7A7570", background: "#F5F2EC", border: "1px solid #E8E4DE", borderRadius: "100px", padding: "4px 10px" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ background: "#F2EFE9", paddingTop: "clamp(80px, 12vw, 130px)", paddingBottom: "clamp(80px, 12vw, 130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B9589", marginBottom: "14px" }}>
              Selected Work
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#0D0D0D" }}>
              Projects &amp;<br />
              <em style={{ color: "#A09484" }}>Research</em>
            </h2>
          </div>
          <motion.a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2, borderColor: "#0D0D0D" }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "100px", border: "1.5px solid #D0CCC4", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "13px", color: "#6B6B6B", textDecoration: "none", transition: "all 0.2s", cursor: "none" }}>
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            All Projects on GitHub ↗
          </motion.a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => <BentoCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
