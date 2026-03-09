import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "Java", "SQL", "HTML / CSS", "R"] },
  { cat: "AI / ML Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Albumentations"] },
  { cat: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning", "FinBERT", "LSTM"] },
  { cat: "Tools & Cloud", items: ["Git", "GitHub", "AWS", "Flask", "MySQL", "Google Colab", "Streamlit", "PostgreSQL"] },
];

const experience = [
  {
    role: "Undergraduate Research Assistant",
    org: "Kennesaw State University — NIH-Funded Lab",
    period: "Sep 2025 – Present",
    detail: "Building deep learning models for retinal disease detection. U-Net and DeepLabV3+ architectures on REFUGE2 and IDRiD datasets.",
  },
  {
    role: "Vice President",
    org: "Global Development & Networking Club, KSU",
    period: "2024 – Present",
    detail: "Organized Youth Convention 2025 (70+ attendees, speakers from Meta, Avanade, Emory). Led technical workshops and campus programming.",
  },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} style={{ background: "#111009", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(255,255,255,0.07)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 22 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}
          style={{ marginBottom: "clamp(48px,7vw,80px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(245,240,232,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>About</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#F5F0E8" }}>
            Who I Am
          </h2>
        </motion.div>

        {/* Two-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,100px)", alignItems: "start" }}>

          {/* Left: bio + experience */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.1 }}>

            <div style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.9, color: "rgba(245,240,232,0.55)", marginBottom: "18px" }}>
                CS junior at <span style={{ color: "#F5F0E8", fontWeight: 500 }}>Kennesaw State University</span> — GPA 3.56, Presidential Academic Hardship Scholar, graduating December 2027. I approach computer science the way researchers approach science: with rigor, curiosity, and a drive to push past the baseline.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.9, color: "rgba(245,240,232,0.55)", marginBottom: "18px" }}>
                Inside an NIH-funded lab, I build deep learning models for retinal disease detection that outperform every comparable published benchmark. Outside the lab, I explore the intersection of ML and finance through a stacked trading pipeline.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.9, color: "rgba(245,240,232,0.55)" }}>
                I think AI-natively — tools like Claude and modern LLMs are part of how I research, build, and iterate every day. Seeking <span style={{ color: "#C8A96A" }}>Summer 2026 internships</span> in AI/ML, software engineering, or data science.
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "20px" }}>Education</p>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "20px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.15rem", color: "#F5F0E8", marginBottom: "4px" }}>Kennesaw State University</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(245,240,232,0.45)", marginBottom: "4px" }}>B.S. Computer Science · GPA 3.56</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.08em" }}>2024 – Dec 2027 · Presidential Academic Hardship Scholar</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "20px" }}>Experience</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {experience.map((e, i) => (
                  <motion.div key={e.role}
                    initial={{ opacity: 0, x: -12 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    style={{ borderLeft: "1px solid rgba(200,169,106,0.25)", paddingLeft: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: "#F5F0E8" }}>{e.role}</p>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{e.period}</span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(245,240,232,0.4)", marginBottom: "6px" }}>{e.org}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(245,240,232,0.35)", lineHeight: 1.7 }}>{e.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.2 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(245,240,232,0.25)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "28px" }}>Technical Skills</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {skills.map((g, gi) => (
                <motion.div key={g.cat}
                  initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + gi * 0.08 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(245,240,232,0.3)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "12px" }}>{g.cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {g.items.map(s => (
                      <span key={s}
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(245,240,232,0.55)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "2px", padding: "5px 12px", letterSpacing: "0.04em", transition: "all 0.18s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.color = "#F5F0E8"; (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(200,169,106,0.35)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.color = "rgba(245,240,232,0.55)"; (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(255,255,255,0.09)"; }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.65 }}
              style={{ marginTop: "36px", padding: "24px", border: "1px solid rgba(200,169,106,0.2)", background: "rgba(200,169,106,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A96A", display: "inline-block", boxShadow: "0 0 8px #C8A96A60" }} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(200,169,106,0.8)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Currently Pursuing</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {["AWS Cloud Practitioner", "NeetCode · DSA Patterns", "Claude API Development", "DeepLabV3+ Benchmarking"].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(200,169,106,0.5)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
