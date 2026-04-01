import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    period: "Feb 2026", title: "U-Net Achieves SOTA on REFUGE2",
    body: "99.69% Dice coefficient on the REFUGE2 optic disc benchmark — outperforming every comparable published approach by 2.7 percentage points. ResNet34 encoder, combined BCE + Dice loss, mixed-precision training.",
    badge: "99.69% Dice", color: "#2563EB", bg: "#EFF6FF",
  },
  {
    period: "Sep 2025", title: "Joined NIH-Funded Research Lab",
    body: "Selected as Undergraduate Research Assistant in KSU's NIH-funded deep learning lab. Built end-to-end segmentation pipelines across 6,000+ retinal images, developing custom loss functions for class imbalance.",
    badge: "NIH Funded", color: "#16A34A", bg: "#DCFCE7",
  },
  {
    period: "Spring 2025", title: "AI Stock Trading System",
    body: "Built a three-model ensemble pipeline combining FinBERT sentiment analysis, LSTM price forecasting, and Random Forest trade signals — all unified in a live Streamlit dashboard backed by PostgreSQL and AWS.",
    badge: "FinTech", color: "#EA580C", bg: "#FFF7ED",
  },
  {
    period: "Fall 2024", title: "Elected VP of Global Dev & Networking Club",
    body: "Led Youth Convention 2025 with 70+ attendees and speakers from Meta, Avanade, and Emory University. Organized technical workshops, a networking fair, and community programming across the KSU campus.",
    badge: "Leadership", color: "#7C3AED", bg: "#F5F3FF",
  },
  {
    period: "Spring 2024", title: "Started at Kennesaw State University",
    body: "Began Computer Science on a Presidential Academic Hardship Scholarship. Self-taught Python and PyTorch from scratch — and earned a position in an NIH-funded research lab within one year of starting.",
    badge: "Presidential Scholar", color: "#0891B2", bg: "#ECFEFF",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} style={{ background: "#F8FAFC", paddingTop: "clamp(72px, 10vw, 110px)", paddingBottom: "clamp(72px, 10vw, 110px)", borderTop: "1px solid #E2E8F0" }}>
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "52px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#2563EB", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Timeline</p>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em", color: "#0F172A" }}>
            Journey & Milestones
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Line track */}
          <div className="hidden md:block" style={{ position: "absolute", left: "116px", top: 0, bottom: 0, width: "1px", background: "#E2E8F0" }} />
          <motion.div className="hidden md:block"
            style={{ position: "absolute", left: "116px", top: 0, width: "1px", height: lineH, background: "linear-gradient(180deg, #2563EB, #16A34A, #EA580C, #7C3AED, #0891B2)", transformOrigin: "top" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {milestones.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 18 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-4 md:gap-0 group">

                {/* Date */}
                <div className="md:w-[100px] shrink-0 md:pt-5">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#94A3B8", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {m.period.split(" ")[0]}
                  </p>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.5rem", lineHeight: 1, color: "#0F172A", opacity: 0.06, marginTop: "2px" }}
                    className="group-hover:opacity-[0.12] transition-opacity">
                    {m.period.split(" ")[1]}
                  </p>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start justify-center w-[58px] pt-[22px]">
                  <motion.div
                    initial={{ scale: 0 }} animate={iv ? { scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: i * 0.1 + 0.2, type: "spring", stiffness: 350 }}
                    style={{ width: "10px", height: "10px", borderRadius: "50%", background: m.color, flexShrink: 0, boxShadow: `0 0 0 3px #F8FAFC, 0 0 0 4px ${m.color}40` }} />
                </div>

                {/* Card */}
                <div style={{ flex: 1 }}>
                  <motion.div
                    whileHover={{ x: 3, transition: { duration: 0.15 } }}
                    style={{ padding: "18px 22px", background: "#FFFFFF", border: "1.5px solid #E2E8F0", borderRadius: "12px", transition: "border-color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = m.color + "50"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
                      <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.0rem", lineHeight: 1.25, color: "#0F172A" }}>{m.title}</h3>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: m.color, background: m.bg, padding: "3px 9px", borderRadius: "6px", flexShrink: 0 }}>{m.badge}</span>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: 1.75, color: "#64748B" }}>{m.body}</p>
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
