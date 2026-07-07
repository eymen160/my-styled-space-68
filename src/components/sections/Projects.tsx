import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    id: "P-01",
    title: "TariffCheck",
    sub: "AI-powered customs duty auditor",
    badge: "2nd place · Hacklanta Finance track · 50+ teams",
    result: "Cuts audit time from hours to 30 seconds",
    body: "Automated commercial invoice review against a 10,000-page US customs database using Claude API for document parsing and classification. Multi-step pipeline detects HTS tariff code errors and auto-generates official CBP legal protest documents, surfacing thousands of dollars in duty recovery per audit. Led backend and deployment — shipped Flask + React + Docker live to Nexlayer within 12 hours as sole deployment engineer.",
    stack: ["Python", "Flask", "React", "Docker", "Claude API", "Nexlayer"],
    link: "https://github.com/eymen160/tariffcheck",
    date: "Mar 2026",
  },
  {
    id: "P-02",
    title: "FinSight",
    sub: "LLM-powered financial intelligence platform",
    badge: null,
    result: "Multi-turn RAG on SEC filings with streaming responses",
    body: "Built an intent-routing layer that classifies financial queries (earnings, risk, trends) and directs each to the right module. Full RAG pipeline using LangChain + FAISS ingests SEC 10-K/10-Q filings for natural-language Q&A. Multi-turn conversation with streaming via Claude API. Deployed on AWS Lambda with LangGraph handling multi-step agentic flows and CI/CD via GitHub Actions.",
    stack: ["Python", "LangChain", "LangGraph", "FAISS", "Claude API", "AWS Lambda", "Flask"],
    link: "https://github.com/eymen160/finsight",
    date: "Mar 2026",
  },
  {
    id: "P-03",
    title: "NIH Retinal AI Research",
    sub: "End-to-end medical image analysis",
    badge: null,
    result: "84.97% fovea detection — surpasses published benchmark",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) as part of an ongoing NIH-funded study on automated eye disease diagnosis. Improved fovea detection accuracy to 84.97% by redesigning the model training and data processing strategy. Caught and fixed a critical data quality issue with a custom audit script.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
    date: "Sep 2025 – Present",
  },
  {
    id: "P-04",
    title: "U-Net Optic Disc Segmentation",
    sub: "Deep learning · Medical imaging",
    badge: null,
    result: "84.61% Dice score on a clean, leakage-free test split",
    body: "Independently designed a ResNet34-based U-Net for medical image segmentation on the REFUGE2 eye dataset. Reached 84.61% segmentation accuracy on a clean, leakage-free split after discovering and removing contaminated training data that would have inflated results.",
    stack: ["PyTorch", "ResNet34", "Albumentations", "Google Colab Pro"],
    link: "https://github.com/eymen160/unet-optic-disc-segmentation",
    date: "Feb 2026",
  },
];

function ProjectRow({ p, index, reduced }: { p: typeof PROJECTS[0]; index: number; reduced: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease }}
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      <button
        className="w-full text-left flex items-start gap-5 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{ padding: "26px 0" }}
      >
        {/* Record ID */}
        <span className="font-mono text-xs flex-shrink-0 mt-1.5" style={{ color: "var(--dim)", minWidth: 42, letterSpacing: "0.08em" }}>
          {p.id}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              {p.badge && (
                <span className="chip chip-amber mb-3 inline-flex">★ {p.badge}</span>
              )}
              <h3
                className="display font-bold uppercase mb-1.5 transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.25rem, 3vw, 2rem)",
                  lineHeight: 1.1,
                  color: open ? "var(--amber)" : "var(--paper)",
                  letterSpacing: "-0.005em",
                }}
              >
                {p.title}
              </h3>
              <p className="text-sm font-medium mb-1.5" style={{ color: "var(--amber)" }}>{p.sub}</p>
              <p className="font-mono text-xs" style={{ color: "var(--cyan)", letterSpacing: "0.02em" }}>→ {p.result}</p>
            </div>

            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <span className="font-mono text-xs" style={{ color: "var(--dim)", whiteSpace: "nowrap" }}>{p.date}</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  aria-label={`${p.title} on GitHub`}
                  className="w-9 h-9 flex items-center justify-center text-sm no-underline transition-colors duration-200"
                  style={{ background: "var(--ink3)", border: "1px solid var(--line)", borderRadius: 2, color: "var(--body)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.color = "#0A1517"; e.currentTarget.style.borderColor = "var(--amber)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--ink3)"; e.currentTarget.style.color = "var(--body)"; e.currentTarget.style.borderColor = "var(--line)"; }}
                >
                  ↗
                </a>
                <motion.span
                  className="font-mono"
                  style={{ color: "var(--dim)", fontSize: 17, lineHeight: 1 }}
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.3, ease }}
                >
                  +
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-7" style={{ paddingLeft: 62 }}>
              <p className="text-sm leading-[1.9] mb-5" style={{ color: "var(--body)", maxWidth: 680 }}>{p.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const reduced = useReducedMotion() ?? false;
  return (
    <section id="projects" className="section-pad" style={{ background: "var(--ink2)", borderTop: "1px solid var(--line)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader index="02" label="Projects" meta="n = 4 · 2025 – 2026" title="Selected work" />
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {PROJECTS.map((p, i) => <ProjectRow key={p.id} p={p} index={i} reduced={reduced} />)}
        </div>
      </div>
    </section>
  );
}
