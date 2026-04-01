import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "SQL", "Java", "HTML/CSS", "R"], color: "#2563EB", bg: "#EFF6FF" },
  { cat: "AI & ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Albumentations"], color: "#7C3AED", bg: "#F5F3FF" },
  { cat: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning"], color: "#0891B2", bg: "#ECFEFF" },
  { cat: "Tools & Cloud", items: ["Git", "AWS", "Google Colab", "Flask", "MySQL", "Agile"], color: "#EA580C", bg: "#FFF7ED" },
];

const experience = [
  {
    role: "Undergraduate Research Assistant",
    org: "Kennesaw State University",
    detail: "NIH-Funded Deep Learning Lab",
    period: "Sep 2025 – Present",
    color: "#2563EB",
    bg: "#EFF6FF",
    bullets: [
      "Built U-Net segmentation models achieving SOTA on REFUGE2 (99.69% Dice)",
      "Benchmarking DeepLabV3+ & FPN on 6,000+ retinal images from APTOS & IDRiD",
      "Custom loss functions for severe class imbalance in lesion detection",
    ],
  },
  {
    role: "Vice President",
    org: "Global Dev & Networking Club",
    detail: "KSU — Student Leadership",
    period: "2024 – Present",
    color: "#16A34A",
    bg: "#DCFCE7",
    bullets: [
      "Organized Youth Convention 2025 with 70+ attendees, speakers from Meta & Emory",
      "Led technical workshops and industry networking events across campus",
    ],
  },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ background: "#FFFFFF", paddingTop: "clamp(72px, 10vw, 110px)", paddingBottom: "clamp(72px, 10vw, 110px)", borderTop: "1px solid #E2E8F0" }}>
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "56px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#2563EB", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>About</p>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.02em", color: "#0F172A" }}>
            Background & Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left: Bio + Experience */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.0rem", lineHeight: 1.8, color: "#475569", marginBottom: "14px" }}>
                I'm a Computer Science junior at <strong style={{ fontWeight: 600, color: "#0F172A" }}>Kennesaw State University</strong> (3.56 GPA, Presidential Hardship Scholar, graduating Dec 2027) focused on deep learning and medical AI.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.0rem", lineHeight: 1.8, color: "#475569" }}>
                My NIH-funded research produces segmentation models that exceed every comparable published benchmark. Outside the lab, I've built a full ML trading pipeline, REST APIs, and lead technical programming as VP of our dev club.
              </p>
            </div>

            {/* Education card */}
            <div style={{ padding: "20px", border: "1.5px solid #E2E8F0", borderRadius: "12px", background: "#F8FAFC" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Education</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0F172A", marginBottom: "2px" }}>B.S. Computer Science</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "#64748B" }}>Kennesaw State University</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#2563EB", background: "#EFF6FF", padding: "3px 10px", borderRadius: "6px" }}>GPA: 3.56</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#94A3B8", marginTop: "4px" }}>Expected Dec 2027</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>Experience</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {experience.map((e, i) => (
                  <motion.div key={e.role}
                    initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                    style={{ padding: "18px 20px", border: "1.5px solid #E2E8F0", borderRadius: "12px", background: "#FFFFFF" }}
                    onMouseEnter={el => (el.currentTarget as HTMLElement).style.borderColor = e.color + "60"}
                    onMouseLeave={el => (el.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#0F172A", marginBottom: "2px" }}>{e.role}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#64748B" }}>{e.org} · <span style={{ color: "#94A3B8" }}>{e.detail}</span></p>
                      </div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: e.color, background: e.bg, padding: "3px 9px", borderRadius: "6px", whiteSpace: "nowrap" }}>{e.period}</span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "5px", paddingLeft: "0", margin: 0, listStyle: "none" }}>
                      {e.bullets.map(b => (
                        <li key={b} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ width: "4px", height: "4px", background: e.color, borderRadius: "50%", flexShrink: 0, marginTop: "8px" }} />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.18 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>Technical Skills</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {skills.map((g, gi) => (
                <motion.div key={g.cat}
                  initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + gi * 0.07 }}
                  style={{ padding: "18px", border: "1.5px solid #E2E8F0", borderRadius: "12px", background: "#FAFAFA" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = g.color + "50"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "12px", color: g.color, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "12px" }}>{g.cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {g.items.map(skill => (
                      <span key={skill} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px", color: "#374151", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "4px 12px" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Currently learning */}
              <div style={{ padding: "16px 18px", border: "1.5px solid #BBF7D0", borderRadius: "12px", background: "#F0FDF4", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16A34A", flexShrink: 0, marginTop: "5px" }} className="animate-pulse" />
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "12px", color: "#15803D", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "8px" }}>Currently Pursuing</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {["AWS Cloud Practitioner", "Graph ML", "LeetCode Patterns", "DeepLabV3+ Benchmarking"].map(item => (
                      <span key={item} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#166534", background: "#DCFCE7", border: "1px solid #86EFAC", borderRadius: "6px", padding: "4px 10px" }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
