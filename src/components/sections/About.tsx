import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const SKILLS = [
  { label: "Languages",       items: ["Python", "JavaScript", "SQL", "R", "Java"] },
  { label: "AI / ML",         items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "FAISS", "RAG", "Hugging Face", "Claude API", "OpenAI API", "CNNs", "U-Net", "Transfer Learning"] },
  { label: "Backend & Cloud", items: ["Flask", "FastAPI", "Docker", "AWS Lambda", "REST APIs", "Git/GitHub", "Streamlit", "Agile/CI-CD"] },
];

const RECOGNITION = [
  { t: "McKinsey Forward Program",   s: "2026 Selectee · Competitive global program" },
  { t: "Hacklanta 2026 — 2nd Place", s: "Finance Track · Georgia State · 50+ teams" },
  { t: "Presidential Scholarship",   s: "Kennesaw State University" },
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

function SectionHeading({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <div className="relative mb-16 overflow-hidden">
      <span
        className="display font-extrabold absolute select-none pointer-events-none"
        style={{
          fontSize: "clamp(8rem, 20vw, 16rem)",
          lineHeight: 1,
          color: "rgba(255,255,255,0.025)",
          top: "-0.18em",
          left: "-0.04em",
          letterSpacing: "-0.05em",
          whiteSpace: "nowrap",
        }}
      >
        {num}
      </span>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2
            className="display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", lineHeight: 1.05, color: "var(--text)", letterSpacing: "-0.03em" }}
          >
            {title}
          </h2>
          <motion.div
            style={{ height: 1, background: "var(--lime)", transformOrigin: "left", marginTop: 20, maxWidth: 240 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading num="01" eyebrow="01 — About" title="Background & Skills" />

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
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>Kennesaw State University</strong>{" "}
              (3.56 GPA, Presidential Scholarship, graduating Dec 2027). I build AI systems that solve hard, meaningful problems — from retinal disease detection to customs fraud detection.
            </p>
            <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
              Currently NIH-funded. McKinsey Forward 2026 selectee. My work sits at the intersection of deep learning research and real-world engineering.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["NIH-Funded Research", "McKinsey Forward 2026", "Presidential Scholar", "Deep Learning", "LLM Systems"].map(t => (
                <span key={t} className="chip chip-lime">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div
            variants={item}
            className="card md:col-span-5 p-8 flex flex-col justify-between"
            style={{ background: "var(--surface2)", borderColor: "var(--border2)" }}
          >
            <p className="eyebrow" style={{ color: "var(--lime)" }}>Recognition</p>
            <div className="flex flex-col gap-5 mt-6">
              {RECOGNITION.map(r => (
                <div key={r.t} className="flex gap-3 items-start">
                  <span style={{ color: "var(--lime)", fontSize: 7, marginTop: 5, flexShrink: 0 }}>★</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{r.t}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{r.s}</p>
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
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{exp.role}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{exp.org}</p>
                  </div>
                  <span className="text-xs font-medium" style={{ color: "var(--lime)" }}>{exp.period}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map(b => (
                    <li key={b} className="flex gap-2.5 items-start">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]"
                        style={{ background: "var(--lime)", opacity: 0.7 }}
                      />
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
