import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2025",
    quarter: "Fall",
    title: "NIH Research — Fovea Detection Breakthrough",
    description:
      "Extended retinal imaging research to fovea localization on the IDRiD dataset. U-Net model achieved 99.69% Dice coefficient — beating published benchmarks by 8+ points.",
    highlight: "99.69% Dice Score",
    color: "#7c3aed",
  },
  {
    year: "2025",
    quarter: "Fall",
    title: "Capitol Hill AI Demo Day",
    description:
      "Presented AI research to lawmakers and industry leaders in Washington D.C. Collected contacts at Twilio, SAIC, Cognizant, and Peraton. Received internal referral at Twilio.",
    highlight: "Washington D.C.",
    color: "#2563eb",
  },
  {
    year: "2025",
    quarter: "Summer",
    title: "AI Stock Trading System",
    description:
      "Built end-to-end FinBERT + LSTM + Random Forest trading signal pipeline with live Streamlit dashboard. Self-taught from long-standing interest in algorithmic trading.",
    highlight: "FinTech / AI",
    color: "#d97706",
  },
  {
    year: "2025",
    quarter: "Spring",
    title: "NIH Research — Optic Disc Segmentation",
    description:
      "First deep learning project from scratch. Built U-Net on REFUGE dataset, achieving 99.69% Dice score. Published results to GitHub, presented findings to PhD mentor.",
    highlight: "First Research Win",
    color: "#059669",
  },
  {
    year: "2024",
    quarter: "Fall",
    title: "VP, Global Development & Networking Club",
    description:
      "Organized KSU Youth Convention 2025 with speakers from Meta, Avanade, and Emory. Led community events including large-scale Ramadan Iftar Dinner at KSU.",
    highlight: "500+ Attendees",
    color: "#db2777",
  },
  {
    year: "2024",
    quarter: "Spring",
    title: "Started at Kennesaw State University",
    description:
      "Began CS degree with Presidential Academic Hardship Scholarship. Learned Python, then PyTorch independently to join NIH-funded research lab within first year.",
    highlight: "Presidential Scholar",
    color: "#0891b2",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7c3aed] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span
            className="text-xs uppercase tracking-widest text-white/30 font-bold mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Journey
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.9]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-white">Milestones &</span>
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                color: "transparent",
              }}
            >
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-0 pb-10 group"
              >
                {/* Date column */}
                <div className="md:w-[200px] md:pr-10 md:text-right shrink-0 pt-1">
                  <p
                    className="text-xs text-white/30 uppercase tracking-widest font-bold"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {m.quarter}
                  </p>
                  <p
                    className="text-xl font-black text-white/20 mt-0.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {m.year}
                  </p>
                </div>

                {/* Node */}
                <div className="hidden md:flex items-start justify-center w-0 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                    className="absolute -left-[5px] top-[6px] w-[10px] h-[10px] rounded-full border-2 border-white/20 bg-[#0a0a0a] group-hover:border-opacity-100 transition-all"
                    style={{ borderColor: m.color + "80" }}
                  >
                    <div
                      className="absolute inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: m.color }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:flex-1 md:pl-10">
                  <div
                    className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 cursor-default"
                    style={{ borderLeftColor: m.color + "40", borderLeftWidth: "2px" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3
                        className="text-lg font-black text-white leading-tight"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {m.title}
                      </h3>
                      <span
                        className="shrink-0 text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          background: m.color + "18",
                          color: m.color,
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {m.highlight}
                      </span>
                    </div>
                    <p
                      className="text-sm text-white/45 leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
