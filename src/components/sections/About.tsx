import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const SKILLS = [
  { label: "Languages",       items: ["Python", "JavaScript", "SQL", "R", "Java"] },
  { label: "AI / ML",         items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "FAISS", "RAG", "Hugging Face", "Claude API", "OpenAI API", "CNNs", "U-Net", "Transfer Learning"] },
  { label: "Backend & Cloud", items: ["Flask", "FastAPI", "Docker", "AWS Lambda", "REST APIs", "Git/GitHub", "Streamlit", "Agile/CI-CD"] },
];

const RECOGNITION = [
  { t: "McKinsey Forward Program",    s: "2026 Selectee · Competitive global program" },
  { t: "Hacklanta 2026 — 2nd Place",  s: "Finance Track · Georgia State · 50+ teams" },
  { t: "Presidential Scholarship",    s: "Kennesaw State University" },
];

const EXPERIENCE = [
  {
    role: "Undergraduate Research Assistant",
    org:  "Kennesaw State University — NIH Deep Learning Lab",
    period: "Sep 2025 – Present",
    bullets: [
      "End-to-end retinal image AI across 3 clinical datasets (6,000+ images)",
      "Fovea detection at 84.97% — surpassing a published benchmark",
      "Custom audit script caught & fixed a critical data quality issue",
    ],
  },
  {
    role:   "Vice President",
    org:    "Global Dev & Networking Club · KSU",
    period: "2025 – Present",
    bullets: [
      "Youth Convention 2025 · 60+ students, speakers from Meta, Avanade, Emory",
      "Led technical workshops and industry networking events",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-[1160px] mx-auto">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">01 — About</p>
          <h2
            className="display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}
          >
            Background & Skills
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Bio */}
          <motion.div variants={item} className="card md:col-span-7 p-8 flex flex-col gap-5">
            <p className="eyebrow">Bio</p>
            <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
              CS junior at{" "}
              <strong style={{ color: "var(--navy)", fontWeight: 700 }}>Kennesaw State University</strong>{" "}
              (3.56 GPA, Presidential Scholarship, graduating Dec 2027). I build AI systems that solve hard, meaningful problems — from retinal disease detection to customs fraud detection.
            </p>
            <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
              Currently NIH-funded. McKinsey Forward 2026 selectee. My work sits at the intersection of deep learning research and real-world engineering.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["NIH-Funded Research", "McKinsey Forward 2026", "Presidential Scholar", "Deep Learning", "LLM Systems"].map(t => (
                <span key={t} className="chip chip-gold">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div
            variants={item}
            className="card md:col-span-5 p-8 flex flex-col justify-between"
            style={{ background: "var(--navy)", borderColor: "var(--navy-mid)" }}
          >
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Recognition</p>
            <div className="flex flex-col gap-4 mt-6">
              {RECOGNITION.map(r => (
                <div key={r.t} className="flex gap-3 items-start">
                  <span style={{ color: "var(--gold)", fontSize: 8, marginTop: 6, flexShrink: 0 }}>★</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--cream)" }}>{r.t}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(248,244,236,0.5)" }}>{r.s}</p>
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
              className={`card p-6 ${gi === 1 ? "md:col-span-5" : "md:col-span-4"}`}
            >
              <p className="eyebrow mb-4" style={{ fontSize: 10 }}>0{gi + 1} — {g.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}

          {/* Experience */}
          <motion.div variants={item} className="card md:col-span-7 p-8">
            <p className="eyebrow mb-6" style={{ fontSize: 10 }}>Experience</p>
            {EXPERIENCE.map((exp, ei) => (
              <div
                key={exp.role}
                className="pb-5"
                style={{ borderTop: ei > 0 ? "1px solid var(--border)" : "none", paddingTop: ei > 0 ? 20 : 0 }}
              >
                <div className="flex justify-between flex-wrap gap-1 mb-3">
                  <div>
                    <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>{exp.role}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{exp.org}</p>
                  </div>
                  <span className="text-xs font-medium" style={{ color: "var(--gold)" }}>{exp.period}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map(b => (
                    <li key={b} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ background: "var(--gold)" }} />
                      <span className="text-sm leading-[1.75]" style={{ color: "var(--body)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
