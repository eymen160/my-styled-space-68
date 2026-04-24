import { motion } from "framer-motion";
import { useCounter } from "../../hooks/useCounter";

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function StatBlock({ target, decimals, label, suffix = "" }: { target: number; decimals: number; label: string; suffix?: string }) {
  const { val, ref } = useCounter(target, decimals);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1, color: "var(--text)", letterSpacing: "-0.01em" }}>
        {val.toFixed(decimals)}{suffix}
      </p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</p>
    </div>
  );
}

const skills = [
  { cat: "Languages",       items: ["Python", "JavaScript", "SQL", "R", "Java"] },
  { cat: "AI / ML",         items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "FAISS", "RAG", "Hugging Face", "Claude API", "OpenAI API", "CNNs", "U-Net", "Transfer Learning"] },
  { cat: "Backend & Cloud", items: ["Flask", "FastAPI", "React", "Docker", "AWS Lambda", "REST APIs", "Git/GitHub", "Streamlit", "CI/CD"] },
];

const experience = [
  {
    role: "Undergraduate Research Assistant",
    org: "Kennesaw State University · NIH-Funded Deep Learning Lab",
    period: "Sep 2025 – Present",
    bullets: [
      "End-to-end retinal image AI across 3 clinical datasets (6,000+ images)",
      "Fovea detection at 84.97%, surpassing a published benchmark",
      "Custom audit script caught data quality issues, keeping the pipeline clean",
    ],
  },
  {
    role: "Vice President",
    org: "Global Development & Networking Club · KSU",
    period: "2025 – Present",
    bullets: [
      "Youth Convention 2025: 60+ students, speakers from Meta, Avanade, Emory",
      "Led technical workshops and industry networking events",
    ],
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(80px,12vw,140px) 40px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Label */}
        <motion.p variants={itemVariants} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
          01 — About
        </motion.p>

        {/* Heading */}
        <motion.h2 variants={itemVariants} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)", marginBottom: 56 }}>
          Background &amp; Skills
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "64px 80px" }}>
          {/* Left */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300 }}>
              CS junior at <span style={{ color: "var(--text)", fontWeight: 400 }}>Kennesaw State University</span> (3.56 GPA, Presidential Scholarship, graduating Dec 2027) focused on deep learning, LLM systems, and medical AI. NIH-funded. McKinsey Forward 2026 selectee.
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--border)", paddingTop: 36 }}>
              {[
                { target: 2, decimals: 0, label: "Hacklanta Finance Track", suffix: "nd" },
                { target: 0.8461, decimals: 4, label: "NIH Dice Score" },
                { target: 3.56, decimals: 2, label: "GPA · KSU" },
              ].map((s, i) => (
                <div key={s.label} style={{ paddingRight: i < 2 ? 24 : 0, borderRight: i < 2 ? "1px solid var(--border)" : "none", marginRight: i < 2 ? 24 : 0 }}>
                  <StatBlock {...s} />
                </div>
              ))}
            </div>

            {/* Experience */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 36 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Experience</p>
              {experience.map((e) => (
                <div key={e.role} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 3 }}>{e.role}</p>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", fontWeight: 300 }}>{e.org}</p>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(201,168,76,0.6)", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>{e.period}</span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {e.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--gold)", fontSize: 8, flexShrink: 0, marginTop: 6 }}>▸</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", lineHeight: 1.65, fontWeight: 300 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {skills.map((g, gi) => (
              <div key={g.cat}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
                  {String(gi + 1).padStart(2, "0")} — {g.cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((s) => (
                    <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "4px 12px", transition: "border-color 0.2s, color 0.2s", cursor: "default" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}>
                      {s}
                    </span>
                  ))}
                </div>
                {gi < skills.length - 1 && <div style={{ height: 1, background: "var(--border)", marginTop: 28 }} />}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
