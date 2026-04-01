import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "U-Net Optic Disc Segmentation",
    badge: "NIH Research",
    badgeColor: "#2563EB",
    badgeBg: "#EFF6FF",
    body: "Built a U-Net with ResNet34 encoder and a combined BCE + Dice loss function, trained on the REFUGE2 dataset. A rigorous augmentation pipeline pushed the model past every comparable published benchmark — making this the current state of the art on this dataset.",
    metrics: [
      { v: "99.69%", l: "Dice Score", hi: true },
      { v: "+2.7%", l: "Over SOTA", hi: true },
      { v: "99.5%", l: "Precision", hi: false },
    ],
    stack: ["PyTorch", "U-Net", "ResNet34", "Albumentations", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
    wide: true,
  },
  {
    id: "02",
    title: "AI Stock Sentiment Trader",
    badge: "FinTech · ML",
    badgeColor: "#16A34A",
    badgeBg: "#DCFCE7",
    body: "Three-model ensemble pipeline: FinBERT processes financial news sentiment, an LSTM predicts price movement, and a Random Forest classifier generates trade signals — all served through a live Streamlit dashboard backed by PostgreSQL and AWS.",
    metrics: [
      { v: "3", l: "Stacked Models", hi: true },
      { v: "Live", l: "Dashboard", hi: false },
      { v: "AWS", l: "Deployed", hi: false },
    ],
    stack: ["Python", "FinBERT", "LSTM", "Scikit-learn", "AWS", "Streamlit"],
    link: "https://github.com/eymen160",
    wide: false,
  },
  {
    id: "03",
    title: "Retinal Lesion Segmentation",
    badge: "NIH Research",
    badgeColor: "#7C3AED",
    badgeBg: "#F5F3FF",
    body: "Semantic segmentation pipeline across 6,000+ retinal images from APTOS and IDRiD. Custom loss functions address class imbalance. Currently benchmarking DeepLabV3+ and FPN architectures against published baselines.",
    metrics: [
      { v: "6,000+", l: "Images", hi: false },
      { v: "2", l: "Datasets", hi: false },
      { v: "3+", l: "Architectures", hi: true },
    ],
    stack: ["PyTorch", "DeepLabV3+", "FPN", "CNNs", "APTOS", "IDRiD"],
    link: "https://github.com/eymen160",
    wide: false,
  },
  {
    id: "04",
    title: "Digital Recipe Book API",
    badge: "Backend Engineering",
    badgeColor: "#EA580C",
    badgeBg: "#FFF7ED",
    body: "Production-quality Flask REST API replacing a fragile in-memory prototype. Full CRUD with MySQL persistence, structured routing, input validation, and clean endpoint design — ready for production traffic.",
    metrics: [
      { v: "REST", l: "API Pattern", hi: false },
      { v: "MySQL", l: "Persistent DB", hi: false },
      { v: "Flask", l: "Framework", hi: false },
    ],
    stack: ["Python", "Flask", "MySQL", "REST API", "Git"],
    link: "https://github.com/eymen160",
    wide: false,
  },
];

function Card({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col justify-between ${p.wide ? "md:col-span-2" : ""}`}
      style={{ background: "#FFFFFF", border: "1.5px solid #E2E8F0", borderRadius: "14px", padding: "clamp(24px, 3vw, 32px)", transition: "all 0.2s" }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(15,23,42,0.08)", borderColor: "#CBD5E1", transition: { duration: 0.2 } }}>

      <div>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: p.badgeColor, background: p.badgeBg, padding: "4px 10px", borderRadius: "6px", letterSpacing: "0.01em" }}>
            {p.badge}
          </span>
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            style={{ width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #E2E8F0", borderRadius: "8px", color: "#94A3B8", textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#94A3B8"; }}>
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(1.15rem, 2vw, 1.4rem)", lineHeight: 1.2, color: "#0F172A", marginBottom: "10px" }}>
          {p.title}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.75, color: "#475569", marginBottom: "22px" }}>
          {p.body}
        </p>

        {/* Metrics */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid #F1F5F9" }}>
          {p.metrics.map(m => (
            <div key={m.l}>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1, color: m.hi ? "#2563EB" : "#0F172A", letterSpacing: "-0.01em", marginBottom: "4px" }}>
                {m.v}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {m.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {p.stack.map(t => (
          <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#475569", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "4px 10px" }}>
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
    <section id="work" style={{ background: "#F8FAFC", paddingTop: "clamp(72px, 10vw, 110px)", paddingBottom: "clamp(72px, 10vw, 110px)", borderTop: "1px solid #E2E8F0" }}>
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "48px" }}
          className="md:flex-row md:items-end md:justify-between">
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#2563EB", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>
              Selected Work
            </p>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em", color: "#0F172A" }}>
              Projects & Research
            </h2>
          </div>
          <a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 18px", border: "1.5px solid #E2E8F0", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#475569", textDecoration: "none", borderRadius: "8px", background: "#FFFFFF", transition: "all 0.15s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#2563EB"; el.style.color = "#2563EB"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E2E8F0"; el.style.color = "#475569"; }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            All on GitHub
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
