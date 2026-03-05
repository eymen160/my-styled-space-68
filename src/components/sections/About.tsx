import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "Java", "HTML/CSS", "R"], color: "#8b5cf6" },
    { category: "AI / ML Frameworks", items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Albumentations"], color: "#3b82f6" },
    { category: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "Transfer Learning", "Image Segmentation", "Data Augmentation"], color: "#10b981" },
    { category: "Tools & Platforms", items: ["Git/GitHub", "AWS", "Google Colab", "Flask", "MySQL", "Agile"], color: "#f59e0b" },
  ];

  const experiences = [
    { title: "Undergraduate Research Assistant", org: "Kennesaw State University — NIH-Funded", period: "Sep 2025 – Present", color: "#8b5cf6", badge: "NIH" },
    { title: "Vice President", org: "Global Dev & Networking Club (GDNC)", period: "2024 – Present", color: "#f59e0b", badge: "Leadership" },
    { title: "Capitol Hill AI Demo Day", org: "Washington D.C.", period: "2025", color: "#3b82f6", badge: "Featured" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden" ref={ref}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-18"
        >
          <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/35 mb-4 block">About Me</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[0.88] max-w-3xl">
            Built for the{" "}
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", color: "transparent" }}>intersection</span>
            {" "}of AI & medicine
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
          {/* Left — Bio + Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[1.05rem] text-white/80 leading-[1.8] font-light">
                I'm a CS junior at <span className="font-semibold text-white">Kennesaw State University</span> (GPA 3.56, Presidential Scholar), graduating December 2027. My work sits at the crossroads of deep learning and clinical medicine.
              </p>
              <p className="text-[1.05rem] text-white/80 leading-[1.8] font-light">
                As an NIH-funded research assistant, I build <span className="font-semibold text-white">U-Net architectures</span> that outperform published SOTA on retinal disease detection. Beyond research, I explore FinTech through algorithmic trading systems and run a small UV printing business.
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/30 mb-4">Experience & Roles</p>
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl border border-white/[0.07] bg-[#0f0f0f] hover:border-white/[0.13] hover:bg-[#111] transition-all duration-300"
                >
                  <div className="w-0.5 rounded-full shrink-0 my-0.5" style={{ background: exp.color, minHeight: "44px" }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[0.9rem] font-bold text-white leading-tight">{exp.title}</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0" style={{ background: exp.color + "1a", color: exp.color }}>
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-[0.8rem] text-white/45 mt-1 font-light">{exp.org}</p>
                    <p className="text-[0.75rem] text-white/30 mt-0.5">{exp.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-7 space-y-4"
          >
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + gi * 0.08 }}
                className="p-5 rounded-2xl border border-white/[0.07] bg-[#0f0f0f] hover:border-white/[0.12] hover:bg-[#111] transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                  <span className="text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: group.color }}>
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + gi * 0.08 + si * 0.03 }}
                      whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.15 } }}
                      className="px-3.5 py-1.5 rounded-full text-[0.82rem] font-medium text-white/70 border border-white/[0.08] bg-white/[0.03] hover:text-white/90 hover:border-white/20 hover:bg-white/[0.06] transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-900/[0.06]"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-emerald-400">Currently Pursuing</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS Cloud Practitioner", "LeetCode Patterns", "Graph ML", "DeepLabV3+ Benchmarking"].map((item) => (
                  <span key={item} className="px-3.5 py-1.5 rounded-full text-[0.82rem] font-medium text-emerald-300/75 border border-emerald-500/20 bg-emerald-500/[0.06]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
