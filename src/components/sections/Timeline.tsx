import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { period: "Feb 2026", title: "U-Net Achieves SOTA on REFUGE2", detail: "99.69% Dice coefficient, surpassing every comparable published baseline by 2.7 percentage points. ResNet34 encoder, combined BCE-Dice loss, mixed-precision training on 400 retinal images.", tag: "99.69% Dice" },
  { period: "Fall 2025", title: "Fovea Detection Beats MCAU-Net", detail: "Extended U-Net research to fovea localization on IDRiD dataset. Custom augmentation and training strategy achieves 84.97% accuracy, outperforming published MCAU-Net benchmark.", tag: "84.97% Acc" },
  { period: "Sep 2025", title: "Joined NIH-Funded Research Lab", detail: "Built training pipelines for retinal lesion segmentation across 6,000 images from APTOS and IDRiD. Benchmarking DeepLabV3+ and FPN architectures with custom loss functions.", tag: "NIH Funded" },
  { period: "Spring 2025", title: "AI Stock Trading System", detail: "End-to-end ML pipeline: FinBERT sentiment analysis, LSTM price forecasting, Random Forest trade signals — served through a real-time Streamlit dashboard backed by PostgreSQL and AWS.", tag: "FinTech" },
  { period: "Fall 2024", title: "VP, Global Dev & Networking Club", detail: "Organized Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory University. Led technical workshops and networking programming across campus.", tag: "Leadership" },
  { period: "Spring 2024", title: "Started at Kennesaw State", detail: "Began CS with Presidential Academic Hardship Scholarship. Self-taught Python then PyTorch, earned a spot in an NIH research lab within one year of enrolling.", tag: "Scholar" },
];

export default function Timeline() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="timeline" ref={ref} style={{ background: "#EEE9E0", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(27,42,74,0.1)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}
          style={{ marginBottom: "clamp(48px,7vw,80px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Journey</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#1B2A4A" }}>
            Milestones
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {milestones.map((m, i) => {
            const mRef = useRef(null);
            const mIv = useInView(mRef, { once: true, margin: "-30px" });
            return (
              <motion.div key={i} ref={mRef}
                initial={{ opacity: 0, y: 20 }} animate={mIv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "grid", gridTemplateColumns: "120px 1px 1fr", gap: "0 clamp(24px,3vw,44px)", borderTop: "1px solid rgba(27,42,74,0.1)", padding: "clamp(24px,3.5vw,36px) 0" }}>

                <div style={{ paddingTop: "3px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(27,42,74,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{m.period}</span>
                </div>

                <div style={{ background: "rgba(27,42,74,0.12)", margin: "4px 0" }} />

                <div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "10px", flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.05rem, 2vw, 1.35rem)", color: "#1B2A4A", lineHeight: 1.2 }}>{m.title}</h3>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", marginTop: "3px", background: "rgba(200,150,62,0.12)", padding: "3px 9px", borderRadius: "2px", border: "1px solid rgba(200,150,62,0.25)" }}>{m.tag}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(27,42,74,0.58)" }}>{m.detail}</p>
                </div>
              </motion.div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(27,42,74,0.1)" }} />
        </div>
      </div>
    </section>
  );
}
