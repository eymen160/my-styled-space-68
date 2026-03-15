import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { period: "Feb 2026", title: "U-Net Achieves SOTA on REFUGE2", detail: "99.69% Dice coefficient, surpassing every comparable published baseline by 2.7 percentage points. ResNet34 encoder, combined BCE-Dice loss, mixed-precision training on 400 retinal images.", tag: "99.69% Dice", icon: "🔬" },
  { period: "Fall 2025", title: "Fovea Detection Beats MCAU-Net", detail: "Extended U-Net research to fovea localization on IDRiD dataset. Custom augmentation and training strategy achieves 84.97% accuracy, outperforming published MCAU-Net benchmark.", tag: "84.97% Acc", icon: "👁" },
  { period: "Sep 2025", title: "Joined NIH-Funded Research Lab", detail: "Built training pipelines for retinal lesion segmentation across 6,000 images from APTOS and IDRiD. Benchmarking DeepLabV3+ and FPN architectures with custom loss functions.", tag: "NIH Funded", icon: "🧪" },
  { period: "Spring 2025", title: "AI Stock Trading System", detail: "End-to-end ML pipeline: FinBERT sentiment analysis, LSTM price forecasting, Random Forest trade signals — served through a real-time Streamlit dashboard backed by PostgreSQL and AWS.", tag: "FinTech", icon: "📈" },
  { period: "Fall 2024", title: "VP, Global Dev & Networking Club", detail: "Organized Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory University. Led technical workshops and networking programming across campus.", tag: "Leadership", icon: "🌐" },
  { period: "Spring 2024", title: "Started at Kennesaw State", detail: "Began CS with Presidential Academic Hardship Scholarship. Self-taught Python then PyTorch, earned a spot in an NIH research lab within one year of enrolling.", tag: "Scholar", icon: "🎓" },
];

export default function Timeline() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="timeline" ref={ref} style={{ background: "#EEE9E0", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(27,42,74,0.1)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}
          style={{ marginBottom: "clamp(48px,7vw,72px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Journey</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#1B2A4A" }}>Milestones</h2>
        </motion.div>

        {/* Timeline with connecting line */}
        <div style={{ position: "relative" }}>
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }} animate={iv ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "absolute", left: "20px", top: "8px", bottom: "8px", width: "2px", background: "linear-gradient(to bottom, #C8963E, rgba(200,150,62,0.15))", transformOrigin: "top", borderRadius: "2px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {milestones.map((m, i) => {
              const mRef = useRef(null);
              const mIv = useInView(mRef, { once: true, margin: "-30px" });
              return (
                <motion.div key={i} ref={mRef}
                  initial={{ opacity: 0, x: 30 }} animate={mIv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "clamp(16px,2.5vw,32px)", padding: "clamp(20px,3vw,32px) 0", position: "relative" }}>

                  {/* Dot on line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px" }}>
                    <motion.div
                      initial={{ scale: 0 }} animate={mIv ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08, type: "spring", stiffness: 300 }}
                      style={{ width: "18px", height: "18px", borderRadius: "50%", background: i === 0 ? "#C8963E" : "#FAF7F2", border: `2px solid ${i === 0 ? "#C8963E" : "rgba(27,42,74,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", boxShadow: i === 0 ? "0 0 12px rgba(200,150,62,0.4)" : "none", zIndex: 1 }}>
                      {i === 0 && <span style={{ fontSize: "7px" }}>★</span>}
                    </motion.div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "rgba(27,42,74,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "8px", writingMode: "vertical-lr", transform: "rotate(180deg)", lineHeight: 1.2 }}>{m.period}</span>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 4, boxShadow: "0 8px 32px rgba(27,42,74,0.1)" }}
                    style={{ background: "#FDFAF5", border: "1px solid rgba(27,42,74,0.08)", borderRadius: "10px", padding: "20px 24px", transition: "all 0.25s" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "16px" }}>{m.icon}</span>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", color: "#1B2A4A", lineHeight: 1.2 }}>{m.title}</h3>
                      </div>
                      <motion.span whileHover={{ scale: 1.05 }}
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", background: "rgba(200,150,62,0.1)", padding: "4px 10px", borderRadius: "4px", border: "1px solid rgba(200,150,62,0.25)" }}>
                        {m.tag}
                      </motion.span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.88rem", lineHeight: 1.78, color: "rgba(27,42,74,0.55)" }}>{m.detail}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
