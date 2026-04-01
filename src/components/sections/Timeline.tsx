import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BG = "#07090F";
const SURFACE = "#0D1017";
const ACCENT = "#00FF94";
const TEXT = "#CDD6F4";
const MUTED = "rgba(205,214,244,0.45)";
const BORDER = "rgba(205,214,244,0.07)";

const milestones = [
  { period: "Feb 2026", year: "2026", title: "U-Net Achieves SOTA on REFUGE2", body: "99.69% Dice coefficient, outperforming every comparable published approach by 2.7 percentage points. ResNet34 encoder, combined BCE + Dice loss, mixed-precision GPU training on 400 retinal images.", badge: "99.69% DICE", accent: ACCENT, featured: true },
  { period: "Sep 2025", year: "2025", title: "Joined NIH-Funded Research Lab", body: "Built training pipelines for retinal lesion segmentation across 6,000 images from APTOS and IDRiD. Currently benchmarking DeepLabV3+ and FPN architectures with custom loss functions.", badge: "NIH FUNDED", accent: "#4D8EFF", featured: false },
  { period: "Spring 2025", year: "2025", title: "AI Stock Trading System", body: "End-to-end ML pipeline combining FinBERT sentiment analysis, LSTM price forecasting, and Random Forest trade signals — served through a real-time Streamlit dashboard.", badge: "FINTECH", accent: "#FFB347", featured: false },
  { period: "Fall 2024", year: "2024", title: "Vice President, GDNC at KSU", body: "Organized Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory University. Led technical workshops, networking fair, and community programming.", badge: "70+ ATTENDEES", accent: "#FF6B8A", featured: false },
  { period: "Spring 2024", year: "2024", title: "Started at Kennesaw State", body: "Began Computer Science with Presidential Academic Hardship Scholarship and a 3.56 GPA. Self-taught Python then PyTorch from zero, and earned a spot in an NIH research lab within one year.", badge: "PRES. SCHOLAR", accent: "#9B7FFF", featured: false },
];

export default function Timeline() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} style={{ background: BG, paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(80px, 12vw, 120px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)` }} />
      <div style={{ position: "absolute", left: "-2%", top: "50%", transform: "translateY(-50%)", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(14rem, 35vw, 32rem)", lineHeight: 1, color: TEXT, opacity: 0.016, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>26</div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }} style={{ marginBottom: "clamp(40px, 7vw, 60px)" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: ACCENT, letterSpacing: "0.12em", marginBottom: "14px" }}>// milestones</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: TEXT }}>
            Journey &amp;<br /><span style={{ color: "rgba(205,214,244,0.15)" }}>Achievements</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "108px", top: 0, bottom: 0, width: "1px", background: BORDER }} className="hidden md:block" />
          <motion.div style={{ position: "absolute", left: "108px", top: 0, width: "1px", height: lineH, background: `linear-gradient(180deg, ${ACCENT}, #4D8EFF, #9B7FFF, #FF6B8A, #FFB347)`, transformOrigin: "top" }} className="hidden md:block" />

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row gap-4 md:gap-0">
                <div style={{ minWidth: "80px", flexShrink: 0 }} className="md:pt-5">
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED }}>{m.period.split(" ")[0]}</p>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1, color: TEXT, opacity: 0.05, marginTop: "2px", letterSpacing: "-0.02em" }}
                    className="group-hover:opacity-[0.12] transition-opacity duration-300">{m.year}</p>
                </div>
                <div style={{ display: "none", alignItems: "flex-start", width: "56px", justifyContent: "center", paddingTop: "22px" }} className="md:flex">
                  <motion.div initial={{ scale: 0 }} animate={iv ? { scale: 1 } : {}} transition={{ duration: 0.35, delay: i * 0.1 + 0.25, type: "spring", stiffness: 320 }}
                    style={{ width: m.featured ? "10px" : "7px", height: m.featured ? "10px" : "7px", background: m.featured ? m.accent : "transparent", border: `1px solid ${m.accent}50`, flexShrink: 0, boxShadow: m.featured ? `0 0 10px ${m.accent}60` : "none" }} />
                </div>
                <div style={{ flex: 1, paddingBottom: "4px" }}>
                  <motion.div whileHover={{ x: 4, transition: { duration: 0.18 } }}
                    style={{ padding: "18px 20px", border: `1px solid ${BORDER}`, borderLeft: `2px solid ${m.accent}35`, background: m.featured ? "rgba(0,255,148,0.03)" : SURFACE, transition: "border-color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = m.accent + "25"}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = BORDER; el.style.borderLeftColor = m.accent + "35"; }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.3, color: TEXT }}>{m.title}</h3>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", background: m.accent + "12", color: m.accent, flexShrink: 0 }}>{m.badge}</span>
                    </div>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "0.85rem", lineHeight: 1.78, color: MUTED }}>{m.body}</p>
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
