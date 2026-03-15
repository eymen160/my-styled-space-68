import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "Java", "SQL", "HTML/CSS", "R"] },
  { cat: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Albumentations"] },
  { cat: "Architectures", items: ["U-Net", "ResNet", "DeepLabV3+", "FPN", "FinBERT", "LSTM"] },
  { cat: "Tools", items: ["Git", "AWS", "Flask", "MySQL", "Google Colab", "Streamlit", "PostgreSQL"] },
];

const experience = [
  { role: "Undergraduate Research Assistant", org: "KSU — NIH-Funded Lab", period: "Sep 2025 – Present", detail: "U-Net and DeepLabV3+ for retinal disease detection. REFUGE2 and IDRiD datasets. Outperforming published benchmarks." },
  { role: "Vice President", org: "Global Dev & Networking Club, KSU", period: "2024 – Present", detail: "Organized Youth Convention 2025 — 70+ attendees, speakers from Meta, Avanade, Emory University." },
];

const highlights = [
  { icon: "🏆", label: "McKinsey Forward", detail: "Program accepted" },
  { icon: "🏛", label: "Capitol Hill", detail: "AI Demo Day · Feb 2026" },
  { icon: "🤖", label: "ICRA 2025", detail: "Conference attended" },
  { icon: "📊", label: "Active Pipeline", detail: "3+ internships pending" },
];

export default function About() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="about" ref={sectionRef} style={{ background: "#1B2A4A", paddingTop: "clamp(72px,10vw,112px)", paddingBottom: "clamp(72px,10vw,112px)", position: "relative", overflow: "hidden" }}>
      {/* Parallax ambient blob */}
      <motion.div style={{ y: bgY, position: "absolute", top: "-30%", right: "-12%", width: "65vw", height: "80vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.12) 0%, transparent 62%)", pointerEvents: "none", filter: "blur(60px)" }} />
      <motion.div style={{ y: bgY, position: "absolute", bottom: "-20%", left: "-15%", width: "55vw", height: "70vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(80,120,220,0.1) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(55px)" }} />

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,150,62,0.3), transparent)" }} />

      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5vw,40px)", position: "relative" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "clamp(32px,5vw,52px)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: "12px" }}>About</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#FAF7F2" }}>Who I Am</h2>
          </div>
          {/* Mini stat row */}
          <div style={{ display: "flex", gap: "16px" }}>
            {[{ v: "3.56", l: "GPA" }, { v: "+2.7%", l: "SOTA" }, { v: "NIH", l: "Funded" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.4rem", color: "#C8963E", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "9px", color: "rgba(250,247,242,0.38)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "3px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,5vw,80px)", alignItems: "start" }}>

          {/* Left col */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.12 }}>

            {/* Bio */}
            <div style={{ marginBottom: "28px" }}>
              {[
                <> CS junior at <strong style={{ color: "#FAF7F2", fontWeight: 600 }}>Kennesaw State University</strong> — GPA 3.56, Presidential Academic Hardship Scholar. I approach computer science with the rigor of a researcher and the instincts of a builder.</>,
                <>Inside an NIH-funded lab I build deep learning models for retinal disease detection that outperform every comparable published benchmark. Outside, I explore ML-finance intersections through a stacked trading pipeline.</>,
                <>I work AI-natively — Claude and modern LLMs are part of how I research, iterate, and ship daily. Seeking <span style={{ color: "#C8963E", fontWeight: 600 }}>Summer 2026 internships</span> in AI/ML or software engineering.</>,
              ].map((t, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, y: 12 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.22 + i * 0.1 }}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.88rem,1.4vw,0.98rem)", lineHeight: 1.9, color: "rgba(250,247,242,0.68)", marginBottom: "14px" }}>
                  {t}
                </motion.p>
              ))}
            </div>

            {/* Highlights 2x2 */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.52 }}
              style={{ marginBottom: "24px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(250,247,242,0.32)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Highlights</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {highlights.map((h, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.9 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.38, delay: 0.58 + i * 0.05, type: "spring", stiffness: 180 }}
                    whileHover={{ scale: 1.04, borderColor: "rgba(200,150,62,0.35)", backgroundColor: "rgba(200,150,62,0.07)" }}
                    style={{ display: "flex", alignItems: "flex-start", gap: "9px", padding: "10px 13px", background: "rgba(250,247,242,0.04)", border: "1px solid rgba(250,247,242,0.07)", borderRadius: "8px", transition: "all 0.2s" }}>
                    <span style={{ fontSize: "14px", lineHeight: 1.4 }}>{h.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(250,247,242,0.75)", marginBottom: "1px" }}>{h.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(250,247,242,0.38)" }}>{h.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(250,247,242,0.32)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Experience</p>
              {experience.map((e, i) => (
                <motion.div key={e.role}
                  initial={{ opacity: 0, x: -14 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ borderLeftColor: "rgba(200,150,62,0.7)", backgroundColor: "rgba(250,247,242,0.04)" }}
                  style={{ padding: "14px 16px", background: "rgba(250,247,242,0.025)", border: "1px solid rgba(250,247,242,0.06)", borderLeft: "2px solid rgba(200,150,62,0.3)", borderRadius: "0 7px 7px 0", marginBottom: "9px", transition: "all 0.22s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", marginBottom: "3px" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", color: "#FAF7F2" }}>{e.role}</p>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(250,247,242,0.28)", whiteSpace: "nowrap" }}>{e.period}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(250,247,242,0.42)", marginBottom: "4px" }}>{e.org}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.38)", lineHeight: 1.65 }}>{e.detail}</p>
                </motion.div>
              ))}
              {/* Education inline */}
              <motion.div initial={{ opacity: 0, x: -14 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.72 }}
                style={{ padding: "14px 16px", background: "rgba(250,247,242,0.025)", border: "1px solid rgba(250,247,242,0.06)", borderLeft: "2px solid rgba(200,150,62,0.3)", borderRadius: "0 7px 7px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", marginBottom: "3px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", color: "#FAF7F2" }}>B.S. Computer Science</p>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(250,247,242,0.28)" }}>2024 – Dec 2027</span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(250,247,242,0.42)", marginBottom: "2px" }}>Kennesaw State University</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.38)" }}>GPA 3.56 · Presidential Academic Hardship Scholar</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right col — skills */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.18 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(250,247,242,0.32)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>Technical Skills</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "24px" }}>
              {skills.map((g, gi) => (
                <motion.div key={g.cat}
                  initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.28 + gi * 0.07 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(250,247,242,0.36)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "9px" }}>{g.cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {g.items.map((s, si) => (
                      <motion.span key={s}
                        initial={{ opacity: 0, scale: 0.82 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.33 + gi * 0.06 + si * 0.025 }}
                        whileHover={{ scale: 1.1, borderColor: "rgba(200,150,62,0.55)", color: "#FAF7F2", backgroundColor: "rgba(200,150,62,0.1)" }}
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", color: "rgba(250,247,242,0.62)", background: "rgba(250,247,242,0.06)", border: "1px solid rgba(250,247,242,0.09)", borderRadius: "4px", padding: "4px 11px", transition: "all 0.16s", cursor: "default" }}>
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Pursuing */}
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.72 }}
              whileHover={{ borderColor: "rgba(200,150,62,0.4)" }}
              style={{ padding: "20px 24px", border: "1px solid rgba(200,150,62,0.22)", background: "rgba(200,150,62,0.055)", backdropFilter: "blur(12px)", borderRadius: "10px", transition: "border-color 0.25s", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
                <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.4, 0.9] }} transition={{ duration: 2.4, repeat: Infinity }}
                  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8963E", display: "inline-block" }} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase" }}>Currently Pursuing</p>
              </div>
              {["AWS Cloud Practitioner", "NeetCode · DSA Patterns", "Claude API Development", "DeepLabV3+ Benchmarking"].map((item, i) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: -8 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.78 + i * 0.065 }}
                  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(200,150,62,0.65)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(250,247,242,0.6)" }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Mentor note — shows credibility */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.88 }}
              style={{ padding: "14px 18px", background: "rgba(250,247,242,0.03)", border: "1px solid rgba(250,247,242,0.07)", borderRadius: "8px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ fontSize: "16px" }}>💬</span>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.5)", lineHeight: 1.6, fontStyle: "italic" }}>
                  "Build LeetCode skills, focus on AI/CS, and ship more projects."
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "rgba(200,150,62,0.7)", marginTop: "5px", letterSpacing: "0.06em" }}>Prateik Mahendra — Data Engineer, Meta</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
