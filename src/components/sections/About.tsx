import { motion } from "framer-motion";
import Reveal from "../Reveal";

const spring = { type: "spring", stiffness: 260, damping: 22 } as const;

const SKILLS = [
  { label: "Languages", items: ["Python", "JavaScript", "SQL", "R", "Java"] },
  { label: "AI & ML",   items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "FAISS", "RAG", "Hugging Face", "Claude API", "CNNs", "U-Net", "Transfer Learning"] },
  { label: "Backend & Cloud", items: ["Flask", "FastAPI", "Docker", "AWS Lambda", "REST APIs", "Git", "Streamlit", "CI/CD"] },
];

const FACTS = [
  { k: "McKinsey Forward",        v: "2026 selectee of the competitive global program" },
  { k: "Presidential Scholarship", v: "Kennesaw State University, 3.56 GPA" },
  { k: "Hacklanta 2026",          v: "2nd place, Finance Track, 50+ teams at Georgia State" },
  { k: "Vice President",          v: "Global Dev & Networking Club at KSU. Ran Youth Convention 2025 with 60+ students and speakers from Meta, Avanade, and Emory" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 section-pad" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Sticky heading column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow mb-4">About</p>
                <h2
                  className="font-bold tracking-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", lineHeight: 1.08, letterSpacing: "-0.04em", color: "var(--ink)" }}
                >
                  Curious by default.<br />
                  <span className="serif" style={{ color: "var(--accent)", fontSize: "1.04em" }}>Rigorous</span> by habit.
                </h2>
                <p className="text-[15px] leading-[1.75]" style={{ color: "var(--body)" }}>
                  CS junior at Kennesaw State, graduating December 2027.
                  I work where deep learning research meets real engineering:
                  models that hold up to scrutiny, wrapped in software people can actually use.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-8 flex flex-col gap-5">

            {/* Facts */}
            <Reveal>
              <div className="rounded-[24px] overflow-hidden" style={{ background: "var(--card)", border: "1px solid var(--line)" }}>
                {FACTS.map((f, i) => (
                  <div
                    key={f.k}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-7 py-5"
                    style={{ borderTop: i > 0 ? "1px solid var(--line)" : "none" }}
                  >
                    <p className="text-sm font-bold flex-shrink-0 sm:w-[190px]" style={{ color: "var(--ink)" }}>{f.k}</p>
                    <p className="text-sm leading-[1.7]" style={{ color: "var(--body)" }}>{f.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Skills */}
            {SKILLS.map((g, gi) => (
              <Reveal key={g.label} delay={0.08 * gi}>
                <motion.div
                  className="rounded-[24px] p-7"
                  style={{ background: "var(--card)", border: "1px solid var(--line)" }}
                  whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(0,0,0,0.06)" }}
                  transition={spring}
                >
                  <p className="eyebrow mb-4" style={{ fontSize: 11 }}>{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
