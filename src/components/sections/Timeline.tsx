import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2026",
    period: "Feb 2026",
    title: "U-Net SOTA on REFUGE2",
    description: "Achieved 99.69% Dice coefficient — outperforming all comparable published approaches by 2.7%. ResNet34 encoder, combined BCE + Dice loss, mixed-precision GPU training.",
    badge: "99.69% Dice",
    color: "#8b5cf6",
  },
  {
    year: "2025",
    period: "Fall 2025",
    title: "Capitol Hill AI Demo Day",
    description: "Presented AI/ML research to lawmakers and industry leaders in Washington D.C. Connected with engineers at Twilio, SAIC, Cognizant, and Peraton. Received internal referral from Twilio's director.",
    badge: "Washington D.C.",
    color: "#3b82f6",
  },
  {
    year: "2025",
    period: "Sep 2025",
    title: "Joined NIH-Funded Research Lab",
    description: "Began work on retinal lesion segmentation for diabetic retinopathy detection. Built training pipelines across 6,000+ images from APTOS and IDRiD datasets. Currently benchmarking DeepLabV3+ and FPN.",
    badge: "NIH Funded",
    color: "#10b981",
  },
  {
    year: "2025",
    period: "Spring 2025",
    title: "AI Stock Trading System",
    description: "Built end-to-end ML pipeline combining FinBERT sentiment, LSTM price forecasting, and Random Forest classification — unified in a live Streamlit dashboard for real-time signals.",
    badge: "FinTech / AI",
    color: "#f59e0b",
  },
  {
    year: "2024",
    period: "Fall 2024",
    title: "Vice President, GDNC at KSU",
    description: "Led Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory. Coordinated workshops, networking events, and community programming across campus.",
    badge: "70+ Attendees",
    color: "#ec4899",
  },
  {
    year: "2024",
    period: "Spring 2024",
    title: "Enrolled at Kennesaw State",
    description: "Started CS degree with Presidential Academic Hardship Scholarship (GPA 3.56). Self-taught Python and PyTorch from zero to join an NIH research lab within the first year.",
    badge: "Presidential Scholar",
    color: "#06b6d4",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/35 mb-4 block">Journey</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[0.88]">
            Milestones &<br />
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", color: "transparent" }}>Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-white/[0.05] hidden md:block" />
          <motion.div
            className="absolute left-[7.5rem] top-0 w-px hidden md:block origin-top"
            style={{ height: lineHeight, background: "linear-gradient(180deg, #8b5cf6, #3b82f6, #10b981)" }}
          />

          <div className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-0"
              >
                {/* Date */}
                <div className="md:w-[120px] shrink-0 md:pt-6">
                  <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-white/35">{m.period.split(" ")[0]}</p>
                  <p className="text-2xl font-black text-white/15 mt-0.5 group-hover:text-white/25 transition-colors">{m.year}</p>
                </div>

                {/* Node */}
                <div className="hidden md:flex items-start pt-7 w-[60px] justify-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    className="w-3 h-3 rounded-full border-2 border-white/15 bg-[#080808] group-hover:scale-125 transition-transform duration-300"
                    style={{ borderColor: m.color + "60" }}
                  >
                    <motion.div
                      className="absolute inset-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: m.color }}
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-3">
                  <motion.div
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="p-5 md:p-6 rounded-2xl border border-white/[0.07] bg-[#0f0f0f] hover:border-white/[0.13] hover:bg-[#111] transition-all duration-300 cursor-default"
                    style={{ borderLeftColor: m.color + "35", borderLeftWidth: "2px" }}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="text-[1rem] md:text-[1.05rem] font-bold text-white leading-snug">{m.title}</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: m.color + "18", color: m.color }}>
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-[0.875rem] text-white/60 leading-[1.75] mt-2 font-light">{m.description}</p>
                  </motion.div>
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
