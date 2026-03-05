import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "Java", "HTML/CSS", "R"], color: "#7c3aed" },
    { category: "AI / ML", items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "U-Net", "ResNet", "Albumentations"], color: "#2563eb" },
    { category: "Tools & Platforms", items: ["Git/GitHub", "AWS", "Google Colab", "Flask", "MySQL", "Agile"], color: "#059669" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-[#7c3aed] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <span
              className="text-xs uppercase tracking-widest text-white/30 font-bold mb-4 block"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About Me
            </span>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.9]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-white">Building at the</span>
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                  color: "transparent",
                }}
              >
                intersection
              </span>
              <br />
              <span className="text-white">of AI & healthcare</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — Bio */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              <div
                className="text-white/55 text-lg leading-[1.8] space-y-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p>
                  I'm a Computer Science junior at{" "}
                  <span className="text-white font-semibold">Kennesaw State University</span> (GPA 3.56) on a Presidential Academic Hardship Scholarship, graduating December 2027.
                </p>
                <p>
                  As an{" "}
                  <span className="text-white font-semibold">NIH-funded Research Assistant</span>, I develop U-Net architectures for retinal disease detection — achieving state-of-the-art results that beat published benchmarks on the IDRiD dataset.
                </p>
                <p>
                  Beyond research, I explore FinTech through algorithmic trading systems, and run a small UV printing business. On an F-1 visa, actively seeking Summer 2026 internships in AI/ML and software engineering.
                </p>
              </div>

              {/* Experience timeline */}
              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Undergraduate Research Assistant",
                    org: "Kennesaw State University",
                    period: "Sep 2025 – Present",
                    tag: "NIH Funded",
                    color: "#7c3aed",
                  },
                  {
                    title: "Vice President",
                    org: "Global Dev & Networking Club (GDNC)",
                    period: "2024 – Present",
                    tag: "Leadership",
                    color: "#d97706",
                  },
                  {
                    title: "Capitol Hill AI Demo Day",
                    org: "Washington D.C.",
                    period: "2025",
                    tag: "Event",
                    color: "#2563eb",
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="flex gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div
                      className="w-1 rounded-full shrink-0 mt-1"
                      style={{ background: exp.color, minHeight: "40px" }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className="text-sm font-bold text-white leading-tight"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {exp.title}
                        </p>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full shrink-0 font-bold"
                          style={{
                            background: exp.color + "20",
                            color: exp.color,
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {exp.tag}
                        </span>
                      </div>
                      <p
                        className="text-xs text-white/40 mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {exp.org} · {exp.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-5">
              {skills.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + gi * 0.1 }}
                  className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: group.color }}
                    />
                    <span
                      className="text-xs uppercase tracking-widest font-bold"
                      style={{ color: group.color, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + gi * 0.1 + si * 0.03 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-4 py-2 rounded-full text-sm font-medium text-white/60 border border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/20 transition-all cursor-default"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Currently learning row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest font-bold text-emerald-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Currently Pursuing
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS Cloud Practitioner", "LeetCode Patterns", "Graph ML", "React / TypeScript"].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full text-sm font-medium text-emerald-400/70 border border-emerald-500/20 bg-emerald-500/5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
