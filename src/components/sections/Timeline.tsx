import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { period: "Feb 2026", year: "2026", title: "U-Net Achieves SOTA on REFUGE2", body: "99.69% Dice coefficient, outperforming every comparable published approach by 2.7 percentage points. ResNet34 encoder, combined BCE and Dice loss, mixed-precision GPU training on 400 retinal images.", badge: "99.69% Dice", color: "#2563EB" },
  { period: "Sep 2025", year: "2025", title: "Joined NIH-Funded Research Lab", body: "Built training pipelines for retinal lesion segmentation across 6,000 images from APTOS and IDRiD. Currently benchmarking DeepLabV3+ and FPN architectures with custom loss functions for imbalanced classes.", badge: "NIH Funded", color: "#16A34A" },
  { period: "Spring 2025", year: "2025", title: "AI Stock Trading System", body: "End-to-end ML pipeline combining FinBERT sentiment analysis, LSTM price forecasting, and Random Forest trade signals, all served through a real-time Streamlit dashboard.", badge: "FinTech", color: "#B45309" },
  { period: "Fall 2024", year: "2024", title: "Vice President, GDNC at KSU", body: "Organized Youth Convention 2025 with 70 plus attendees and speakers from Meta, Avanade, and Emory University. Led technical workshops, a networking fair, and community programming across campus.", badge: "70+ Attendees", color: "#DB2777" },
  { period: "Spring 2024", year: "2024", title: "Started at Kennesaw State", body: "Began Computer Science with Presidential Academic Hardship Scholarship and a 3.56 GPA. Self-taught Python, then PyTorch from zero, and earned a spot in an NIH research lab within one year of enrolling.", badge: "Presidential Scholar", color: "#0891B2" },
];

export default function Timeline() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} style={{ background: "#F2EFE9", paddingTop: "clamp(80px, 12vw, 130px)", paddingBottom: "clamp(80px, 12vw, 130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }} className="mb-16">
          <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B9589", marginBottom: "16px" }}>
            Journey
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#0D0D0D" }}>
            Milestones &amp;<br /><em style={{ color: "#A09484" }}>Achievements</em>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px hidden md:block" style={{ background: "#E8E4DE" }} />
          <motion.div className="absolute left-[7.5rem] top-0 w-px hidden md:block origin-top"
            style={{ height: lineH, background: "linear-gradient(180deg, #2563EB, #16A34A, #B45309, #DB2777, #0891B2)" }} />

          <div className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row gap-5 md:gap-0">
                <div className="md:w-[120px] shrink-0 md:pt-6">
                  <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#B0AA9E" }}>
                    {m.period.split(" ")[0]}
                  </p>
                  <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.8rem", lineHeight: 1, color: "#0D0D0D", opacity: 0.08, marginTop: "2px" }}
                    className="group-hover:opacity-20 transition-opacity duration-300">
                    {m.year}
                  </p>
                </div>

                <div className="hidden md:flex items-start w-[60px] justify-center pt-7">
                  <motion.div
                    initial={{ scale: 0 }} animate={iv ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    style={{ width: "10px", height: "10px", borderRadius: "50%", border: `2px solid ${m.color}60`, background: "#F2EFE9", flexShrink: 0 }}
                    className="group-hover:scale-125 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 pb-2">
                  <motion.div
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    style={{ padding: "20px 24px", borderRadius: "16px", border: `1.5px solid #E8E4DE`, borderLeftColor: m.color + "45", borderLeftWidth: "2px", background: "#FFFFFF" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#C8C2B8"}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E8E4DE"; el.style.borderLeftColor = m.color + "45"; }}>
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3, color: "#0D0D0D" }}>{m.title}</h3>
                      <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "100px", background: m.color + "18", color: m.color, flexShrink: 0 }}>
                        {m.badge}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.88rem", lineHeight: 1.78, color: "#5A5A5A" }}>{m.body}</p>
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
