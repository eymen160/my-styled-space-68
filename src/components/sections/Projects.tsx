import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    title: "TariffCheck",
    sub: "AI-powered customs duty auditor",
    badge: "🏆 2nd place · Hacklanta Finance track",
    result: "Cuts audit time from hours to 30 seconds",
    body: "Automated commercial invoice review against a 10,000-page US customs database using Claude API for document parsing and classification. Multi-step pipeline detects HTS tariff code errors and auto-generates official CBP legal protest documents, surfacing thousands of dollars in duty recovery per audit. Led backend and deployment — shipped Flask + React + Docker live to Nexlayer within 12 hours as sole deployment engineer.",
    stack: ["Python", "Flask", "React", "Docker", "Claude API", "Nexlayer"],
    link: "https://github.com/eymen160/tariffcheck",
    date: "Mar 2026",
  },
  {
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

function ProjectCard({ p, index, reduced }: { p: typeof PROJECTS[0]; index: number; reduced: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className="card overflow-hidden"
    >
      <button
        className="w-full text-left flex items-start justify-between gap-5 bg-transparent border-none cursor-pointer p-8"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="min-w-0">
          {p.badge && <span className="chip chip-warm mb-4 inline-flex">{p.badge}</span>}
          <h3
            className="font-extrabold mb-2 transition-colors duration-200"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: open ? "var(--warm)" : "var(--text)" }}
          >
            {p.title}
          </h3>
          <p className="text-[15px] font-medium mb-2" style={{ color: "var(--body)" }}>{p.sub}</p>
          <p className="text-sm" style={{ color: "var(--warm)" }}>→ {p.result}</p>
        </div>

        <div className="flex flex-col items-end gap-4 flex-shrink-0">
          <span className="text-xs whitespace-nowrap" style={{ color: "var(--muted)" }}>{p.date}</span>
          <div className="flex items-center gap-3">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              aria-label={`${p.title} on GitHub`}
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm no-underline transition-all duration-200 hover:scale-110"
              style={{ background: "var(--card2)", border: "1px solid var(--border)", color: "var(--body)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--text)"; e.currentTarget.style.color = "#04070D"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--card2)"; e.currentTarget.style.color = "var(--body)"; }}
            >
              ↗
            </a>
            <motion.span
              style={{ color: "var(--muted)", fontSize: 20, lineHeight: 1 }}
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease }}
            >
              +
            </motion.span>
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
            <div className="px-8 pb-8">
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "var(--body)", maxWidth: 700 }}>{p.body}</p>
              <div className="flex flex-wrap gap-2">
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
    <section id="projects" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader eyebrow="Projects" title="Things I’ve" accent="built" />
        <div className="flex flex-col gap-4">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} index={i} reduced={reduced} />)}
        </div>
      </div>
    </section>
  );
}
