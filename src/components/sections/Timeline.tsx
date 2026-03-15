import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { period: "Feb 2026", title: "U-Net Achieves SOTA on REFUGE2", detail: "99.69% Dice, surpassing every comparable published baseline by 2.7pp. ResNet34 encoder, combined BCE-Dice loss, mixed-precision training.", tag: "SOTA", icon: "🔬", featured: true },
  { period: "Fall 2025", title: "Fovea Detection Beats MCAU-Net", detail: "Extended U-Net to fovea localization on IDRiD. 84.97% accuracy, outperforming published MCAU-Net benchmark.", tag: "Research", icon: "👁", featured: false },
  { period: "Sep 2025", title: "Joined NIH-Funded Research Lab", detail: "Built training pipelines for retinal lesion segmentation across 6,000 images. Benchmarking DeepLabV3+ and FPN architectures.", tag: "NIH", icon: "🧪", featured: false },
  { period: "Spring 2025", title: "AI Stock Trading System", detail: "FinBERT + LSTM + Random Forest ensemble — real-time Streamlit dashboard backed by PostgreSQL and AWS.", tag: "FinTech", icon: "📈", featured: false },
  { period: "Fall 2024", title: "VP, Global Dev & Networking Club", detail: "Organized Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory University.", tag: "Leadership", icon: "🌐", featured: false },
  { period: "Spring 2024", title: "Started at Kennesaw State", detail: "Presidential Academic Hardship Scholarship. Self-taught Python then PyTorch, earned NIH lab spot within one year.", tag: "Scholar", icon: "🎓", featured: false },
];

export default function Timeline() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="timeline" ref={sectionRef} style={{ background: "#EDE8DF", paddingTop: "clamp(72px,10vw,112px)", paddingBottom: "clamp(72px,10vw,112px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(27,42,74,0.15), transparent)" }} />

      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5vw,40px)" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "clamp(36px,6vw,60px)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#C8963E", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>Journey</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#1B2A4A" }}>Milestones</h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "rgba(27,42,74,0.4)", maxWidth: "280px", lineHeight: 1.7 }}>From writing my first Python script to outperforming published AI benchmarks — in under two years.</p>
        </motion.div>

        {/* Timeline layout */}
        <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "0 clamp(16px,2.5vw,32px)", position: "relative" }}>

          {/* Animated vertical progress line */}
          <div style={{ position: "relative", gridColumn: 1, gridRow: "1 / span 20" }}>
            <div style={{ position: "absolute", left: "19px", top: 0, bottom: 0, width: "2px", background: "rgba(27,42,74,0.1)", borderRadius: "1px" }} />
            <motion.div style={{ position: "absolute", left: "19px", top: 0, height: lineH, width: "2px", background: "linear-gradient(to bottom, #C8963E, rgba(200,150,62,0.3))", borderRadius: "1px", transformOrigin: "top" }} />
          </div>

          {/* Milestones */}
          <div style={{ gridColumn: 2, display: "flex", flexDirection: "column", gap: "4px" }}>
            {milestones.map((m, i) => {
              const mRef = useRef(null);
              const mIv = useInView(mRef, { once: true, margin: "-30px" });

              return (
                <div key={i} ref={mRef} style={{ display: "flex", gap: "0", alignItems: "flex-start", paddingBottom: "4px" }}>
                  {/* Dot — positioned over the line */}
                  <div style={{ position: "absolute", left: "clamp(20px,5vw,40px)", marginLeft: "10px" }}>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={mIv ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06, type: "spring", stiffness: 260 }}
                      style={{ width: m.featured ? "20px" : "14px", height: m.featured ? "20px" : "14px", borderRadius: "50%", background: m.featured ? "#C8963E" : "#EDE8DF", border: `2px solid ${m.featured ? "#C8963E" : "rgba(27,42,74,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", boxShadow: m.featured ? "0 0 14px rgba(200,150,62,0.45)" : "none" }}>
                      {m.featured && <span style={{ fontSize: "8px", color: "white" }}>★</span>}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={mIv ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 4, boxShadow: "0 8px 30px rgba(27,42,74,0.1)" }}
                    style={{ marginLeft: "clamp(28px,4vw,40px)", marginBottom: "12px", padding: "18px 22px", background: m.featured ? "white" : "rgba(255,255,255,0.7)", border: `1px solid ${m.featured ? "rgba(200,150,62,0.25)" : "rgba(27,42,74,0.07)"}`, borderRadius: "10px", flex: 1, transition: "all 0.25s", backdropFilter: "blur(4px)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "7px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                        <span style={{ fontSize: "15px", lineHeight: 1 }}>{m.icon}</span>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "#1B2A4A", lineHeight: 1.2 }}>{m.title}</h3>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#C8963E", background: "rgba(200,150,62,0.1)", padding: "3px 8px", borderRadius: "3px", border: "1px solid rgba(200,150,62,0.22)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.tag}</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "rgba(27,42,74,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.period}</span>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: 1.75, color: "rgba(27,42,74,0.7)" }}>{m.detail}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
