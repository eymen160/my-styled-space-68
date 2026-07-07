import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import useCounter from "../../hooks/useCounter";

const ease = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: 84.97, suffix: "%", decimals: 2, label: "Fovea detection — beats a published benchmark" },
  { value: 2, suffix: "nd", decimals: 0, label: "Hacklanta Finance track · 50+ teams" },
  { value: 3.56, suffix: "", decimals: 2, label: "GPA · Presidential Scholarship" },
];

const EXPERIENCE = [
  {
    role: "Undergraduate Research Assistant",
    org: "Kennesaw State University — NIH Deep Learning Lab",
    period: "Sep 2025 – Present",
    bullets: [
      "Built an end-to-end retinal image analysis pipeline in PyTorch across 3 clinical datasets (6,000+ images) for an NIH-funded study on automated eye-disease diagnosis",
      "Raised fovea detection accuracy to 84.97% — surpassing a published benchmark — by redesigning the training approach and data processing strategy",
      "Wrote a custom audit script that caught duplicate images leaking across train/test splits, protecting the study’s integrity",
    ],
  },
  {
    role: "Vice President",
    org: "Global Development & Networking Club · KSU",
    period: "2025 – Present",
    bullets: [
      "Organized Youth Convention 2025 for 60+ students, with speakers from Meta, Avanade, and Emory University",
      "Directed panels, a networking fair, and hands-on technical workshops",
    ],
  },
];

const RECOGNITION = ["McKinsey Forward 2026 selectee", "Hacklanta 2026 — 2nd place", "Presidential Scholarship", "NIH-funded research"];

const SKILLS = [
  { label: "Languages", items: ["Python", "JavaScript", "SQL", "R", "Java"] },
  { label: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "FAISS", "RAG", "Hugging Face", "Claude API", "OpenAI API", "CNNs", "U-Net", "Transfer Learning"] },
  { label: "Backend & Cloud", items: ["Flask", "FastAPI", "Docker", "AWS Lambda", "REST APIs", "Git/GitHub", "Streamlit", "Agile/CI-CD"] },
];

function Stat({ s, i, reduced }: { s: typeof STATS[0]; i: number; reduced: boolean }) {
  const [val, ref] = useCounter(s.value, s.decimals);
  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease }}
      className="card px-8 py-7 text-center"
    >
      <p className="font-extrabold mb-2" style={{ fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1, color: "var(--warm)", letterSpacing: "-0.02em" }}>
        {val}{s.suffix}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{s.label}</p>
    </motion.div>
  );
}

export default function About() {
  const reduced = useReducedMotion() ?? false;
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader eyebrow="About" title="Work that holds up to" accent="measurement" />

        {/* Bio */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="text-lg md:text-xl leading-[1.9] mb-16"
          style={{ color: "var(--body)", maxWidth: 760 }}
        >
          I’m a CS student at <strong style={{ color: "var(--text)", fontWeight: 700 }}>Kennesaw State University</strong>{" "}
          (GPA 3.56, Presidential Scholarship, graduating Dec 2027). By day I do NIH-funded
          deep learning research on retinal disease detection; the rest of the time I ship
          full-stack AI products — most recently a customs-duty auditor that placed 2nd of
          50+ teams at Hacklanta 2026. I care about results that survive scrutiny: when my
          own accuracy numbers looked too good, I wrote the audit script that proved them
          wrong, fixed the data leak, and earned them back for real.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {STATS.map((s, i) => <Stat key={s.label} s={s} i={i} reduced={reduced} />)}
        </div>

        {/* Experience */}
        <motion.div
          variants={reduced ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
        >
          {EXPERIENCE.map(exp => (
            <motion.div key={exp.role} variants={item} className="card p-8">
              <div className="flex justify-between flex-wrap gap-2 mb-5">
                <div>
                  <p className="font-bold text-lg" style={{ color: "var(--text)" }}>{exp.role}</p>
                  <p className="text-sm mt-1.5" style={{ color: "var(--muted)" }}>{exp.org}</p>
                </div>
                <span className="chip chip-warm self-start">{exp.period}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map(b => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ background: "var(--warm)", opacity: 0.8 }} />
                    <span className="text-[15px] leading-[1.75]" style={{ color: "var(--body)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Recognition + skills */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex flex-wrap gap-2 mb-12">
            {RECOGNITION.map(r => <span key={r} className="chip chip-warm">★ {r}</span>)}
          </div>

          <div className="flex flex-col gap-7">
            {SKILLS.map(g => (
              <div key={g.label} className="flex flex-col sm:flex-row gap-3 sm:gap-8 sm:items-baseline">
                <p className="eyebrow flex-shrink-0" style={{ minWidth: 170, letterSpacing: "0.18em" }}>{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
