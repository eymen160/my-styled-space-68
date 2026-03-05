import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "U-Net Optic Disc Segmentation",
    category: "NIH Research · Medical AI",
    description:
      "Designed a U-Net with ImageNet pre-trained ResNet34 encoder and combined BCE + Dice loss. Trained on REFUGE2 dataset (400 retinal images) with a comprehensive augmentation pipeline — outperforming state-of-the-art published benchmarks by 2.7%.",
    metrics: [
      { label: "Dice Score", value: "99.69%" },
      { label: "vs SOTA", value: "+2.7%" },
      { label: "Image Pass Rate", value: "99.5%" },
    ],
    tags: ["PyTorch", "U-Net", "ResNet34", "Albumentations", "Google Colab", "Transfer Learning"],
    link: "https://github.com/eymen160",
    accent: "#7c3aed",
    wide: true,
  },
  {
    id: "02",
    title: "AI Stock Trading System",
    category: "FinTech · ML Pipeline",
    description:
      "End-to-end trading signal pipeline combining FinBERT sentiment analysis on financial news, LSTM price prediction, and Random Forest classification — unified in a live Streamlit dashboard.",
    metrics: [
      { label: "Models", value: "3" },
      { label: "NLP", value: "FinBERT" },
      { label: "Dashboard", value: "Streamlit" },
    ],
    tags: ["Python", "FinBERT", "LSTM", "Random Forest", "Streamlit", "Pandas"],
    link: "https://github.com/eymen160",
    accent: "#2563eb",
    wide: false,
  },
  {
    id: "03",
    title: "Digital Recipe Book",
    category: "Full-Stack · Backend",
    description:
      "Built a complete Flask backend for a recipe management app — RESTful API endpoints replacing in-memory storage with persistent MySQL, structured routing, error handling, and Git-based team collaboration.",
    metrics: [
      { label: "Backend", value: "Flask" },
      { label: "Database", value: "MySQL" },
      { label: "Pattern", value: "REST" },
    ],
    tags: ["Python", "Flask", "MySQL", "REST API", "Git"],
    link: "https://github.com/eymen160",
    accent: "#059669",
    wide: false,
  },
  {
    id: "04",
    title: "Retinal Lesion Segmentation",
    category: "NIH Research · Deep Learning",
    description:
      "Semantic segmentation of retinal lesions for diabetic retinopathy detection using custom loss functions and augmentation pipelines. Trained across 6,000+ images from APTOS and IDRiD datasets. Currently benchmarking DeepLabV3+ and FPN architectures.",
    metrics: [
      { label: "Images", value: "6,000+" },
      { label: "Datasets", value: "APTOS + IDRiD" },
      { label: "Funding", value: "NIH" },
    ],
    tags: ["PyTorch", "CNNs", "DeepLabV3+", "FPN", "Data Augmentation", "Scikit-learn"],
    link: "https://github.com/eymen160",
    accent: "#d97706",
    wide: false,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
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
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col justify-between p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer ${
        project.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accent}15, transparent 40%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
      />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-2 block"
              style={{ color: project.accent, fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.category}
            </span>
            <h3
              className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-white transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ fontFamily: "'Syne', sans-serif", color: project.accent }}
            >
              {project.id}
            </span>
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        <p
          className="text-white/50 leading-relaxed text-sm md:text-base mb-6"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex gap-6 mb-6 pb-6 border-b border-white/[0.06]">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p
                className="text-lg font-black text-white"
                style={{ fontFamily: "'Syne', sans-serif", color: m.label === "Dice Score" || m.label === "vs Benchmark" ? project.accent : undefined }}
              >
                {m.value}
              </p>
              <p className="text-xs text-white/30 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.08] text-white/40 bg-white/[0.03]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
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
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span
              className="text-xs uppercase tracking-widest text-white/30 font-bold mb-4 block"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Selected Work
            </span>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[0.9]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Projects &<br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                  color: "transparent",
                }}
              >
                Research
              </span>
            </h2>
          </div>
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:border-white/30 hover:text-white/80 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            All Projects on GitHub ↗
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
