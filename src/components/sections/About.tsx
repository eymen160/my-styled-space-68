import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const SKILLS = [
  { label: "Languages", items: ["Python", "JavaScript", "SQL", "R", "Java"] },
  { label: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "FAISS", "RAG", "Hugging Face", "Claude API", "OpenAI API", "CNNs", "U-Net", "Transfer Learning"] },
  { label: "Backend & Cloud", items: ["Flask", "FastAPI", "Docker", "AWS Lambda", "REST APIs", "Git/GitHub", "Streamlit", "Agile/CI-CD"] },
];

const RECOGNITION = [
  { t: "McKinsey Forward Program", s: "2026 selectee · Competitive global program" },
  { t: "Hacklanta 2026 — 2nd place", s: "Finance track · Georgia State · 50+ teams" },
  { t: "Presidential Scholarship", s: "Kennesaw State University" },
];

const EXPERIENCE = [
  {
    role: "Undergraduate Research Assistant",
    org: "Kennesaw State University — NIH Deep Learning Lab",
    period: "Sep 2025 – Present",
    bullets: [
      "End-to-end retinal image AI across 3 clinical datasets (6,000+ images)",
      "Fovea detection at 84.97% — surpassing a published benchmark",
      "Custom audit script caught & fixed a critical data quality issue",
    ],
  },
  {
    role: "Vice President",
    org: "Global Dev & Networking Club · KSU",
    period: "2025 – Present",
    bullets: [
      "Youth Convention 2025 · 60+ students, speakers from Meta, Avanade, Emory",
      "Led technical workshops and industry networking events",
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function About() {
  const reduced = useReducedMotion() ?? false;
  return (
    <section id="about" className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader index="01" label="Profile" meta="KSU · Roswell, GA · Grad. Dec 2027" title="Background & skills" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-3"
          variants={reduced ? undefined : container}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Bio */}
          <motion.div variants={item} className="panel md:col-span-7 p-8 flex flex-col gap-5">
            <p className="mono-label">Bio</p>
            <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
              CS student at{" "}
              <strong style={{ color: "var(--paper)", fontWeight: 600 }}>Kennesaw State University</strong>{" "}
              (3.56 GPA, Presidential Scholarship, graduating Dec 2027). I build AI
              systems that solve hard, meaningful problems — from retinal disease
              detection to customs fraud detection.
            </p>
            <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
              Currently NIH-funded. McKinsey Forward 2026 selectee. My work sits at
              the intersection of deep learning research and real-world engineering.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["NIH-funded research", "McKinsey Forward 2026", "Presidential Scholar", "Deep learning", "LLM systems"].map(t => (
                <span key={t} className="chip chip-amber">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div variants={item} className="panel md:col-span-5 p-8" style={{ background: "var(--ink3)" }}>
            <p className="mono-label" style={{ color: "var(--amber)" }}>Recognition</p>
            <div className="flex flex-col gap-5 mt-6">
              {RECOGNITION.map(r => (
                <div key={r.t} className="flex gap-3 items-start pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
                  <span className="font-mono" style={{ color: "var(--amber)", fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--paper)" }}>{r.t}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--dim)" }}>{r.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          {SKILLS.map((g, gi) => (
            <motion.div
              key={g.label}
              variants={item}
              className={`panel p-6 ${gi === 1 ? "md:col-span-5" : gi === 2 ? "md:col-span-4" : "md:col-span-3"}`}
            >
              <p className="mono-label mb-4" style={{ fontSize: 10 }}>{g.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}

          {/* Experience */}
          <motion.div variants={item} className="panel md:col-span-12 p-8">
            <p className="mono-label mb-6" style={{ fontSize: 10 }}>Experience</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EXPERIENCE.map(exp => (
                <div key={exp.role}>
                  <div className="flex justify-between flex-wrap gap-1 mb-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--paper)" }}>{exp.role}</p>
                      <p className="text-xs mt-1" style={{ color: "var(--dim)" }}>{exp.org}</p>
                    </div>
                    <span className="font-mono text-xs" style={{ color: "var(--amber)" }}>{exp.period}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map(b => (
                      <li key={b} className="flex gap-2.5 items-start">
                        <span className="font-mono flex-shrink-0" style={{ color: "var(--cyan)", fontSize: 10, marginTop: 4 }}>—</span>
                        <span className="text-sm leading-[1.7]" style={{ color: "var(--body)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
