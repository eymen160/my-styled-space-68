import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "Java", "SQL", "HTML / CSS", "R"] },
  { cat: "AI / ML Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Albumentations"] },
  { cat: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning", "FinBERT", "LSTM"] },
  { cat: "Tools & Cloud", items: ["Git", "GitHub", "AWS", "Flask", "MySQL", "Google Colab", "Streamlit", "PostgreSQL"] },
];

const experience = [
  { role: "Undergraduate Research Assistant", org: "Kennesaw State University — NIH-Funded Lab", period: "Sep 2025 – Present", detail: "Building deep learning models for retinal disease detection. U-Net and DeepLabV3+ architectures on REFUGE2 and IDRiD datasets." },
  { role: "Vice President", org: "Global Development & Networking Club, KSU", period: "2024 – Present", detail: "Organized Youth Convention 2025 (70+ attendees, speakers from Meta, Avanade, Emory). Led technical workshops and campus programming." },
];

const bentoStats = [
  { label: "GPA", value: "3.56", sub: "Presidential Scholar" },
  { label: "SOTA Gap", value: "+2.7%", sub: "Above baseline" },
  { label: "Research", value: "NIH", sub: "Funded lab" },
  { label: "Images", value: "6K+", sub: "Processed" },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} style={{ background: "#1B2A4A", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative", overflow: "hidden" }}>
      {/* Background accent */}
      <div style={{ position: "absolute", top: "-30%", right: "-15%", width: "60vw", height: "80vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.07) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(250,247,242,0.1)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 22 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}
          style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>About</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#FAF7F2" }}>Who I Am</h2>
        </motion.div>

        {/* Bento grid stats row */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "clamp(40px,5vw,64px)" }}>
          {bentoStats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.07 }}
              whileHover={{ scale: 1.04, borderColor: "rgba(200,150,62,0.4)" }}
              style={{ padding: "20px 22px", background: "rgba(250,247,242,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(250,247,242,0.1)", borderRadius: "10px", transition: "all 0.25s" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#FAF7F2", lineHeight: 1, marginBottom: "4px" }}>{s.value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "#C8963E", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3px" }}>{s.label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.4)" }}>{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(36px,5vw,88px)", alignItems: "start" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.75, delay: 0.2 }}>
            <div style={{ marginBottom: "clamp(32px,4vw,48px)" }}>
              {[
                "CS junior at <strong>Kennesaw State University</strong> — GPA 3.56, Presidential Academic Hardship Scholar, graduating December 2027. I approach computer science the way researchers approach science: with rigor, curiosity, and a drive to push past the baseline.",
                "Inside an NIH-funded lab, I build deep learning models for retinal disease detection that outperform every comparable published benchmark. Outside the lab, I explore the intersection of ML and finance through a stacked trading pipeline.",
                "I think AI-natively — tools like Claude and modern LLMs are part of how I research, build, and iterate every day. Seeking <highlight>Summer 2026 internships</highlight> in AI/ML, software engineering, or data science.",
              ].map((text, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.25 + i * 0.1 }}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.92rem,1.5vw,1.02rem)", lineHeight: 1.9, color: "rgba(250,247,242,0.7)", marginBottom: "16px" }}
                  dangerouslySetInnerHTML={{ __html: text.replace("<strong>", "<strong style='color:#FAF7F2;font-weight:600'>").replace("<highlight>", "<span style='color:#C8963E;font-weight:600'>").replace("</highlight>", "</span>") }} />
              ))}
            </div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }}
              style={{ marginBottom: "clamp(28px,4vw,44px)", padding: "20px 24px", background: "rgba(250,247,242,0.04)", border: "1px solid rgba(250,247,242,0.08)", borderRadius: "8px", borderLeft: "3px solid #C8963E" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>Education</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "#FAF7F2", marginBottom: "4px" }}>Kennesaw State University</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "rgba(250,247,242,0.55)", marginBottom: "3px" }}>B.S. Computer Science · GPA 3.56</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(250,247,242,0.35)" }}>2024 – Dec 2027 · Presidential Academic Hardship Scholar</p>
            </motion.div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "16px" }}>Experience</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {experience.map((e, i) => (
                  <motion.div key={e.role}
                    initial={{ opacity: 0, x: -16 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.5 + i * 0.1 }}
                    whileHover={{ borderColor: "rgba(200,150,62,0.5)", backgroundColor: "rgba(250,247,242,0.06)" }}
                    style={{ padding: "16px 20px", background: "rgba(250,247,242,0.03)", border: "1px solid rgba(250,247,242,0.07)", borderRadius: "8px", borderLeft: "2px solid rgba(200,150,62,0.3)", transition: "all 0.25s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: "#FAF7F2" }}>{e.role}</p>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.3)", whiteSpace: "nowrap" }}>{e.period}</span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(250,247,242,0.45)", marginBottom: "5px" }}>{e.org}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(250,247,242,0.4)", lineHeight: 1.7 }}>{e.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.75, delay: 0.25 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "24px" }}>Technical Skills</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {skills.map((g, gi) => (
                <motion.div key={g.cat}
                  initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + gi * 0.07 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(250,247,242,0.4)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "10px" }}>{g.cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    {g.items.map((s, si) => (
                      <motion.span key={s}
                        initial={{ opacity: 0, scale: 0.85 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.35, delay: 0.35 + gi * 0.07 + si * 0.03 }}
                        whileHover={{ scale: 1.08, borderColor: "rgba(200,150,62,0.6)", color: "#FAF7F2", backgroundColor: "rgba(200,150,62,0.1)" }}
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(250,247,242,0.65)", background: "rgba(250,247,242,0.06)", border: "1px solid rgba(250,247,242,0.1)", borderRadius: "5px", padding: "5px 12px", letterSpacing: "0.04em", transition: "all 0.18s", cursor: "default" }}>
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Pursuing — glassmorphism card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ marginTop: "32px", padding: "24px 28px", border: "1px solid rgba(200,150,62,0.3)", background: "rgba(200,150,62,0.06)", backdropFilter: "blur(12px)", borderRadius: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <motion.span animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C8963E", display: "inline-block" }} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.2em", textTransform: "uppercase" }}>Currently Pursuing</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["AWS Cloud Practitioner", "NeetCode · DSA Patterns", "Claude API Development", "DeepLabV3+ Benchmarking"].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -10 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.75 + i * 0.07 }}
                    style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C8963E", opacity: 0.7, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(250,247,242,0.65)" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
