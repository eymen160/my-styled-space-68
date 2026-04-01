import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BG = "#07090F";
const SURFACE = "#0D1017";
const ACCENT = "#00FF94";
const BLUE = "#4D8EFF";
const TEXT = "#CDD6F4";
const MUTED = "rgba(205,214,244,0.45)";
const BORDER = "rgba(205,214,244,0.07)";

const skills = [
  { cat: "Languages", accent: ACCENT, items: ["Python", "SQL", "Java", "HTML / CSS", "R"] },
  { cat: "AI / ML Frameworks", accent: BLUE, items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Albumentations"] },
  { cat: "Deep Learning", accent: "#9B7FFF", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning"] },
  { cat: "Tools & Platforms", accent: "#FFB347", items: ["Git", "AWS", "Google Colab", "Flask", "MySQL", "Agile"] },
];

const roles = [
  { role: "Undergraduate Research Assistant", org: "Kennesaw State University · NIH-Funded", period: "Sep 2025 – Present", accent: ACCENT, tag: "NIH" },
  { role: "Vice President, GDNC", org: "Global Dev & Networking Club @ KSU", period: "2024 – Present", accent: BLUE, tag: "Leadership" },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ background: BG, paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(80px, 12vw, 120px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)` }} />
      <div style={{ position: "absolute", right: "-2%", bottom: "-5%", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(12rem, 30vw, 28rem)", lineHeight: 1, color: TEXT, opacity: 0.018, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>AB</div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }} style={{ marginBottom: "clamp(40px, 7vw, 64px)" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: ACCENT, letterSpacing: "0.12em", marginBottom: "14px" }}>// about_me</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6.5vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: TEXT }}>
            Built for the<br /><span style={{ color: "rgba(205,214,244,0.15)" }}>intersection of AI</span><br /><span style={{ color: TEXT }}>and medicine.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.1 }} className="lg:col-span-5 space-y-8">
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "1.0rem", lineHeight: 1.85, color: MUTED, marginBottom: "16px" }}>
                CS junior at <strong style={{ fontWeight: 700, color: TEXT }}>Kennesaw State University</strong> with a 3.56 GPA and Presidential Academic Hardship Scholarship, graduating December 2027.
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "1.0rem", lineHeight: 1.85, color: MUTED }}>
                As part of an NIH-funded lab, I build U-Net architectures for retinal disease detection that outperform every comparable published benchmark by 2.7 percentage points.
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: "12px" }}>// experience</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {roles.map((r, i) => (
                  <motion.div key={r.role} initial={{ opacity: 0, x: -14 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.28 + i * 0.1 }}
                    style={{ display: "flex", overflow: "hidden", border: `1px solid ${BORDER}`, background: SURFACE }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = r.accent + "30"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = BORDER}>
                    <div style={{ width: "2px", background: r.accent, flexShrink: 0 }} />
                    <div style={{ padding: "14px 16px", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: TEXT }}>{r.role}</p>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 6px", background: r.accent + "12", color: r.accent }}>{r.tag}</span>
                      </div>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "0.78rem", color: MUTED }}>{r.org}</p>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "10px", color: "rgba(205,214,244,0.25)", marginTop: "3px", letterSpacing: "0.04em" }}>{r.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.55 }}
              style={{ border: "1px solid rgba(0,255,148,0.2)", background: "rgba(0,255,148,0.03)", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT }}>Currently Pursuing</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["AWS Cloud Practitioner", "LeetCode Patterns", "Graph ML", "DeepLabV3+ Benchmarking"].map(item => (
                  <span key={item} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "10px", color: ACCENT, background: "rgba(0,255,148,0.08)", border: "1px solid rgba(0,255,148,0.16)", padding: "4px 10px", letterSpacing: "0.04em" }}>{item}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.2 }} className="lg:col-span-7 space-y-3">
            {skills.map((g, gi) => (
              <motion.div key={g.cat} initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.26 + gi * 0.08 }}
                style={{ padding: "18px", border: `1px solid ${BORDER}`, background: SURFACE }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = g.accent + "25"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = BORDER}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "2px", height: "12px", background: g.accent }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: g.accent }}>{g.cat}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {g.items.map((skill, si) => (
                    <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} animate={iv ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.28, delay: 0.26 + gi * 0.07 + si * 0.022 }}
                      whileHover={{ scale: 1.06, y: -1, transition: { duration: 0.12 } }}
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: MUTED, background: "rgba(205,214,244,0.04)", border: `1px solid ${BORDER}`, padding: "5px 11px", letterSpacing: "0.04em" }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
