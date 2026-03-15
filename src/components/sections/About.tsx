import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "Java", "SQL", "HTML/CSS", "R"] },
  { cat: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Albumentations"] },
  { cat: "Architectures", items: ["U-Net", "ResNet", "DeepLabV3+", "FPN", "FinBERT", "LSTM"] },
  { cat: "Tools", items: ["Git", "AWS", "Flask", "MySQL", "Google Colab", "Streamlit", "PostgreSQL"] },
];

const experience = [
  { role: "Undergraduate Research Assistant", org: "KSU — NIH-Funded Lab", period: "Sep 2025 – Present", detail: "U-Net and DeepLabV3+ for retinal disease detection on REFUGE2 and IDRiD. Outperforming published benchmarks." },
  { role: "Vice President", org: "Global Dev & Networking Club, KSU", period: "2024 – Present", detail: "Organized Youth Convention 2025 — 70+ attendees, speakers from Meta, Avanade, Emory." },
];

const bentoItems = [
  { label: "GPA", value: "3.56", sub: "Presidential Scholar", accent: "#C8963E" },
  { label: "SOTA Gap", value: "+2.7%", sub: "Published baseline", accent: "#6B9AE8" },
  { label: "Lab", value: "NIH", sub: "Funded research", accent: "#4ade80" },
  { label: "Data", value: "6K+", sub: "Images processed", accent: "#C8963E" },
];

const achievements = [
  { icon: "🏆", text: "McKinsey Forward Program — Accepted" },
  { icon: "🏛", text: "Capitol Hill AI Demo Day — Feb 2026" },
  { icon: "🤖", text: "ICRA 2025 Conference — Attended" },
  { icon: "📊", text: "3 internships in active pipeline" },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" ref={ref} style={{ background: "#1B2A4A", paddingTop: "clamp(80px,10vw,120px)", paddingBottom: "clamp(80px,10vw,120px)", position: "relative", overflow: "hidden" }}>
      {/* Ambient blobs */}
      <motion.div animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }}
        style={{ position: "absolute", top: "-20%", right: "-10%", width: "55vw", height: "70vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.2) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(55px)" }} />
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(250,247,242,0.09)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "14px" }}>About</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.6rem, 6.5vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#FAF7F2" }}>Who I Am</h2>
        </motion.div>

        {/* Bento stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "clamp(36px,5vw,56px)" }}>
          {bentoItems.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, scale: 0.9 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, type: "spring", stiffness: 160 }}
              whileHover={{ scale: 1.05, borderColor: `${s.accent}50` }}
              style={{ padding: "18px 20px", background: "rgba(250,247,242,0.05)", backdropFilter: "blur(10px)", border: `1px solid ${s.accent}20`, borderRadius: "10px", transition: "all 0.22s" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(1.5rem,2.8vw,2rem)", color: "#FAF7F2", lineHeight: 1, marginBottom: "4px" }}>{s.value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: s.accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "2px" }}>{s.label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(250,247,242,0.38)" }}>{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main two-col */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div style={{ marginBottom: "28px" }}>
              {[
                <>CS junior at <strong style={{ color: "#FAF7F2", fontWeight: 600 }}>Kennesaw State University</strong> — GPA 3.56, Presidential Academic Hardship Scholar. I approach computer science with the rigor of a researcher and the instincts of a builder.</>,
                <>Inside an NIH-funded lab, I build deep learning models for retinal disease detection that outperform every comparable published benchmark. Outside the lab, I explore ML and finance through a stacked trading pipeline.</>,
                <>I think AI-natively — Claude and modern LLMs are part of how I research, build, and iterate daily. Seeking <span style={{ color: "#C8963E", fontWeight: 600 }}>Summer 2026 internships</span> in AI/ML or software engineering.</>,
              ].map((text, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, y: 12 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.9rem,1.5vw,1rem)", lineHeight: 1.88, color: "rgba(250,247,242,0.68)", marginBottom: "14px" }}>
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Achievements — new section senior devs notice */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ marginBottom: "28px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>Highlights</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {achievements.map((a, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.92 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                    whileHover={{ borderColor: "rgba(200,150,62,0.35)", backgroundColor: "rgba(200,150,62,0.06)" }}
                    style={{ display: "flex", alignItems: "flex-start", gap: "9px", padding: "10px 13px", background: "rgba(250,247,242,0.04)", border: "1px solid rgba(250,247,242,0.07)", borderRadius: "7px", transition: "all 0.2s" }}>
                    <span style={{ fontSize: "14px", lineHeight: 1.3 }}>{a.icon}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.58)", lineHeight: 1.5 }}>{a.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>Experience</p>
              {experience.map((e, i) => (
                <motion.div key={e.role}
                  initial={{ opacity: 0, x: -12 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ borderColor: "rgba(200,150,62,0.45)", backgroundColor: "rgba(250,247,242,0.05)" }}
                  style={{ padding: "14px 18px", background: "rgba(250,247,242,0.03)", border: "1px solid rgba(250,247,242,0.07)", borderRadius: "8px", borderLeft: "2px solid rgba(200,150,62,0.35)", marginBottom: "10px", transition: "all 0.22s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", flexWrap: "wrap", marginBottom: "3px" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: "#FAF7F2" }}>{e.role}</p>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(250,247,242,0.3)", whiteSpace: "nowrap" }}>{e.period}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(250,247,242,0.45)", marginBottom: "4px" }}>{e.org}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.4)", lineHeight: 1.65 }}>{e.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.25 }}>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "20px" }}>Technical Skills</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
              {skills.map((g, gi) => (
                <motion.div key={g.cat}
                  initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + gi * 0.07 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(250,247,242,0.38)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "9px" }}>{g.cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {g.items.map((s, si) => (
                      <motion.span key={s}
                        initial={{ opacity: 0, scale: 0.8 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.35 + gi * 0.07 + si * 0.025 }}
                        whileHover={{ scale: 1.09, borderColor: "rgba(200,150,62,0.55)", color: "#FAF7F2", backgroundColor: "rgba(200,150,62,0.09)" }}
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", color: "rgba(250,247,242,0.62)", background: "rgba(250,247,242,0.06)", border: "1px solid rgba(250,247,242,0.1)", borderRadius: "5px", padding: "4px 11px", transition: "all 0.16s", cursor: "default" }}>
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently pursuing — glassy card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.72 }}
              whileHover={{ borderColor: "rgba(200,150,62,0.45)" }}
              style={{ padding: "22px 26px", border: "1px solid rgba(200,150,62,0.25)", background: "rgba(200,150,62,0.05)", backdropFilter: "blur(14px)", borderRadius: "12px", transition: "border-color 0.25s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
                <motion.span animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2.2, repeat: Infinity }}
                  style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C8963E", display: "inline-block", flexShrink: 0 }} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.2em", textTransform: "uppercase" }}>Currently Pursuing</p>
              </div>
              {["AWS Cloud Practitioner", "NeetCode · DSA Patterns", "Claude API Development", "DeepLabV3+ Benchmarking"].map((item, i) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: -8 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.78 + i * 0.065 }}
                  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "9px" }}>
                  <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#C8963E", opacity: 0.7, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(250,247,242,0.62)" }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.82 }}
              style={{ marginTop: "12px", padding: "18px 22px", background: "rgba(250,247,242,0.04)", border: "1px solid rgba(250,247,242,0.08)", borderRadius: "10px", borderLeft: "3px solid #C8963E" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "8px" }}>Education</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.15rem", color: "#FAF7F2", marginBottom: "3px" }}>Kennesaw State University</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(250,247,242,0.5)", marginBottom: "2px" }}>B.S. Computer Science · GPA 3.56</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.32)" }}>2024 – Dec 2027 · Presidential Academic Hardship Scholar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
