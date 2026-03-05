import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "U-Net Optic Disc Segmentation",
    category: "NIH Research · Medical AI",
    description: "Designed a U-Net with ResNet34 encoder and combined BCE + Dice loss, trained on REFUGE2 (400 retinal images). Comprehensive augmentation pipeline achieving 99.5% image pass rate. Outperforms every comparable published approach.",
    metrics: [
      { label: "Dice Score", value: "99.69%", highlight: true },
      { label: "vs SOTA", value: "+2.7%", highlight: true },
      { label: "Pass Rate", value: "99.5%" },
    ],
    tags: ["PyTorch", "U-Net", "ResNet34", "Albumentations", "Transfer Learning"],
    link: "https://github.com/eymen160",
    accent: "#8b5cf6",
    wide: true,
  },
  {
    id: "02",
    title: "AI Stock Trading System",
    category: "FinTech · ML Pipeline",
    description: "End-to-end signal pipeline: FinBERT parses financial news sentiment, LSTM forecasts price movement, Random Forest classifies trade signals — all surfaced through a real-time Streamlit dashboard.",
    metrics: [
      { label: "NLP Engine", value: "FinBERT" },
      { label: "Models", value: "3 stacked" },
      { label: "Interface", value: "Streamlit" },
    ],
    tags: ["Python", "FinBERT", "LSTM", "Scikit-learn", "Streamlit"],
    link: "https://github.com/eymen160",
    accent: "#3b82f6",
    wide: false,
  },
  {
    id: "03",
    title: "Retinal Lesion Segmentation",
    category: "NIH Research · Deep Learning",
    description: "Semantic segmentation of diabetic retinopathy lesions using custom loss functions across 6,000+ images from APTOS and IDRiD. Currently benchmarking DeepLabV3+ and FPN architectures against baseline.",
    metrics: [
      { label: "Images", value: "6,000+" },
      { label: "Datasets", value: "2" },
      { label: "Architectures", value: "3+" },
    ],
    tags: ["PyTorch", "CNNs", "DeepLabV3+", "FPN", "Data Augmentation"],
    link: "https://github.com/eymen160",
    accent: "#10b981",
    wide: false,
  },
  {
    id: "04",
    title: "Digital Recipe Book",
    category: "Full-Stack · Backend Engineering",
    description: "Production-quality Flask backend with persistent MySQL storage — RESTful API, structured routing, and error handling. Replaced in-memory prototype with a proper relational schema, adopted by the frontend team.",
    metrics: [
      { label: "Framework", value: "Flask" },
      { label: "Database", value: "MySQL" },
      { label: "API Pattern", value: "REST" },
    ],
    tags: ["Python", "Flask", "MySQL", "REST API", "Git"],
    link: "https://github.com/eymen160",
    accent: "#f59e0b",
    wide: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className={`group relative flex flex-col justify-between p-7 md:p-8 rounded-2xl border border-white/[0.09] bg-[#0f0f0f] hover:bg-[#111] hover:border-white/[0.15] transition-colors duration-300 overflow-hidden cursor-pointer ${project.wide ? "md:col-span-2" : ""}`}
    >
      {/* Top accent line on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Glow blob */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
        style={{ background: project.accent + "20" }} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] block mb-2" style={{ color: project.accent }}>
              {project.category}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:opacity-90 transition-opacity">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <span className="text-5xl font-black opacity-[0.06] group-hover:opacity-[0.12] transition-opacity" style={{ color: project.accent }}>
              {project.id}
            </span>
            <div className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-white/25 group-hover:bg-white/[0.05] transition-all duration-300">
              <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[0.9rem] md:text-[0.95rem] text-white/65 leading-[1.75] mb-6 font-light">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-5 pb-6 mb-6 border-b border-white/[0.07]">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className={`text-lg md:text-xl font-black leading-none ${m.highlight ? "" : "text-white"}`}
                style={m.highlight ? { color: project.accent } : {}}>
                {m.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.1em] text-white/35 font-semibold mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 rounded-full text-[11px] font-medium border border-white/[0.08] text-white/50 bg-white/[0.03] group-hover:border-white/[0.12] group-hover:text-white/60 transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

const Work = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/35 mb-4 block">Selected Work</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[0.88]">
              Projects &<br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", color: "transparent" }}>Research</span>
            </h2>
          </div>
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.12] text-white/60 text-[0.85rem] font-medium hover:border-white/25 hover:text-white/85 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All on GitHub ↗
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Work;
