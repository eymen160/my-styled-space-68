import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "U-Net Optic Disc Segmentation",
    category: "NIH Research · Medical AI",
    description: "ResNet34-encoder U-Net trained on REFUGE2 with combined BCE + Dice loss. Mixed-precision GPU training, comprehensive augmentation pipeline. Every comparable published approach beaten.",
    metrics: [{ l: "Dice Score", v: "99.69%", hi: true }, { l: "vs SOTA", v: "+2.7%", hi: true }, { l: "Pass Rate", v: "99.5%" }],
    tags: ["PyTorch", "U-Net", "ResNet34", "Albumentations"],
    wide: true,
    accent: "#2563EB",
  },
  {
    id: "02",
    title: "AI Stock Trading System",
    category: "FinTech · ML Pipeline",
    description: "FinBERT sentiment analysis stacked with LSTM price forecasting and Random Forest classification — surfaced through a live Streamlit dashboard.",
    metrics: [{ l: "NLP", v: "FinBERT" }, { l: "Models", v: "3 stacked" }, { l: "Interface", v: "Streamlit" }],
    tags: ["Python", "FinBERT", "LSTM", "Scikit-learn"],
    wide: false,
    accent: "#16A34A",
  },
  {
    id: "03",
    title: "Retinal Lesion Segmentation",
    category: "NIH Research · Deep Learning",
    description: "Diabetic retinopathy detection across 6,000+ images from APTOS and IDRiD. Benchmarking DeepLabV3+ and FPN architectures with custom loss functions.",
    metrics: [{ l: "Images", v: "6,000+" }, { l: "Datasets", v: "2" }, { l: "Architectures", v: "3+" }],
    tags: ["PyTorch", "DeepLabV3+", "FPN", "CNNs"],
    wide: false,
    accent: "#9333EA",
  },
  {
    id: "04",
    title: "Digital Recipe Book",
    category: "Full-Stack · Backend",
    description: "Production Flask backend with MySQL persistence. RESTful routing, structured error handling, and a relational schema that replaced an in-memory prototype for the full team.",
    metrics: [{ l: "Framework", v: "Flask" }, { l: "Database", v: "MySQL" }, { l: "Pattern", v: "REST" }],
    tags: ["Python", "Flask", "MySQL", "REST API"],
    wide: false,
    accent: "#B45309",
  },
];

function Card({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href="https://github.com/eymen160"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 44 }}
      animate={iv ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      className={`group relative flex flex-col justify-between p-7 md:p-8 rounded-2xl border cursor-pointer overflow-hidden ${p.wide ? "md:col-span-2" : ""}`}
      style={{ background: "#FFFFFF", borderColor: "#E5E2DC" }}
    >
      {/* Bottom accent bar on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
        style={{ background: p.accent }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] block mb-2.5" style={{ color: p.accent }}>{p.category}</span>
            <h3 className="text-[1.15rem] md:text-[1.3rem] font-bold leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>
              {p.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 ml-4 shrink-0">
            <span className="text-[2.8rem] font-black opacity-[0.05] group-hover:opacity-[0.09] transition-opacity" style={{ color: "#0D0D0D", fontFamily: "'Playfair Display',serif" }}>{p.id}</span>
            <div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-opacity-100"
              style={{ borderColor: "#E0DDD6" }}
            >
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="#9B9589" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        <p className="text-[0.88rem] leading-[1.8] mb-6 font-light" style={{ color: "#5A5A5A" }}>{p.description}</p>

        <div className="flex flex-wrap gap-6 pb-6 mb-5" style={{ borderBottom: "1px solid #EDE9E2" }}>
          {p.metrics.map((m) => (
            <div key={m.l}>
              <p className="text-[1.15rem] md:text-[1.3rem] font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", color: m.hi ? p.accent : "#0D0D0D" }}>{m.v}</p>
              <p className="text-[9px] uppercase tracking-[0.12em] font-semibold mt-1" style={{ color: "#B0AA9E" }}>{m.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors duration-300"
            style={{ borderColor: "#E5E2DC", color: "#7A7570", background: "#F8F6F1" }}>
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Work() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative py-24 md:py-32" style={{ background: "#F5F3EE" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px" style={{ background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1360px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-4" style={{ color: "#9B9589" }}>Selected Work</span>
            <h2 className="leading-[0.9] tracking-[-0.025em]" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>
              Projects &amp;<br />
              <em style={{ color: "#6B6B6B" }}>Research</em>
            </h2>
          </div>
          <motion.a
            href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-[0.82rem] font-medium transition-all duration-300"
            style={{ borderColor: "#D0CCC4", color: "#6B6B6B" }}
          >
            View GitHub ↗
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
