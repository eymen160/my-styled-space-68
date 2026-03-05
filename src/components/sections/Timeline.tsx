import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { period: "Feb 2026", year: "2026", title: "U-Net SOTA on REFUGE2", description: "99.69% Dice coefficient — outperforming every comparable published approach by 2.7 percentage points. ResNet34 encoder, combined BCE + Dice loss, mixed-precision GPU training.", badge: "99.69% Dice", dot: "#2563EB" },
  { period: "Fall 2025", year: "2025", title: "Capitol Hill AI Demo Day", description: "Presented AI/ML research to lawmakers and industry leaders in Washington D.C. Collected contacts at Twilio, SAIC, Cognizant, and Peraton. Received internal referral from Twilio's government relations director.", badge: "Washington D.C.", dot: "#9333EA" },
  { period: "Sep 2025", year: "2025", title: "Joined NIH-Funded Research Lab", description: "Built U-Net pipelines for retinal lesion segmentation across 6,000+ images from APTOS and IDRiD datasets. Currently benchmarking DeepLabV3+ and FPN architectures.", badge: "NIH Funded", dot: "#16A34A" },
  { period: "Spring 2025", year: "2025", title: "AI Stock Trading System", description: "End-to-end ML pipeline: FinBERT sentiment, LSTM price forecasting, Random Forest signals — unified in a real-time Streamlit dashboard.", badge: "FinTech / AI", dot: "#B45309" },
  { period: "Fall 2024", year: "2024", title: "Vice President, GDNC at KSU", description: "Led Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory. Coordinated workshops, networking events, and community programming.", badge: "70+ Attendees", dot: "#DB2777" },
  { period: "Spring 2024", year: "2024", title: "Enrolled at Kennesaw State", description: "Began CS (GPA 3.56) with Presidential Academic Hardship Scholarship. Self-taught Python then PyTorch from zero to qualify for an NIH research lab within one year.", badge: "Presidential Scholar", dot: "#0891B2" },
];

export default function Timeline() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32" style={{ background: "#F5F3EE" }} ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px" style={{ background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1360px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={iv ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72 }}
          className="mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-4" style={{ color: "#9B9589" }}>Journey</span>
          <h2 className="leading-[0.9] tracking-[-0.025em]" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>
            Milestones &amp;<br />
            <em style={{ color: "#6B6B6B" }}>Achievements</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line track */}
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px hidden md:block" style={{ background: "#E5E2DC" }} />
          <motion.div
            className="absolute left-[7.5rem] top-0 w-px hidden md:block origin-top"
            style={{ height: lineH, background: "linear-gradient(180deg, #2563EB, #9333EA, #16A34A, #B45309)" }}
          />

          <div className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={iv ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row gap-5 md:gap-0"
              >
                {/* Date */}
                <div className="md:w-[120px] shrink-0 md:pt-5 pt-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.13em]" style={{ color: "#B0AA9E" }}>{m.period.split(" ")[0]}</p>
                  <p className="text-[1.6rem] font-bold leading-none mt-0.5 transition-opacity duration-300 opacity-10 group-hover:opacity-20" style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>{m.year}</p>
                </div>

                {/* Node */}
                <div className="hidden md:flex items-start w-[60px] justify-center pt-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={iv ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    className="w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: m.dot, background: "#FAF9F6" }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <motion.div
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="p-5 md:p-6 rounded-2xl border transition-all duration-300"
                    style={{ borderColor: "#E5E2DC", background: "#FFFFFF", borderLeftWidth: "2px", borderLeftColor: m.dot + "50" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#D0CCC4"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E2DC"}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="text-[0.95rem] md:text-[1rem] font-semibold leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>{m.title}</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: m.dot + "15", color: m.dot }}>
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-[0.855rem] leading-[1.78] mt-2 font-light" style={{ color: "#5A5A5A" }}>{m.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
