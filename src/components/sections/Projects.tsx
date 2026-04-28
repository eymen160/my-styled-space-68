import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    num: "01",
    title: "TariffCheck",
    sub: "AI-Powered Customs Duty Auditor",
    badge: "★ 2nd Place · Hacklanta Finance Track · Georgia State · 50+ teams",
    result: "Cuts audit time from hours to 30 seconds",
    body: "Automated commercial invoice review against a 10,000-page US customs database using Claude API for document parsing and classification. Multi-step pipeline detects HTS tariff code errors and auto-generates official CBP legal protest documents, surfacing thousands of dollars in duty recovery per audit. Led backend and deployment — shipped Flask + React + Docker live to Nexlayer within 12 hours as sole deployment engineer.",
    stack: ["Python", "Flask", "React", "Docker", "Claude API", "Nexlayer"],
    link: "https://github.com/eymen160/tariffcheck",
    date: "Mar 2026",
  },
  {
    num: "02",
    title: "FinSight",
    sub: "LLM-Powered Financial Intelligence Platform",
    badge: null,
    result: "Multi-turn RAG on SEC filings with streaming responses",
    body: "Built an intent-routing layer that classifies financial queries (earnings, risk, trends) and directs each to the right module. Full RAG pipeline using LangChain + FAISS ingests SEC 10-K/10-Q filings for natural-language Q&A. Multi-turn conversation with streaming via Claude API. Deployed on AWS Lambda with LangGraph handling multi-step agentic flows and CI/CD via GitHub Actions.",
    stack: ["Python", "LangChain", "LangGraph", "FAISS", "Claude API", "AWS Lambda", "Flask"],
    link: "https://github.com/eymen160/finsight",
    date: "Mar 2026",
  },
  {
    num: "03",
    title: "NIH Retinal AI Research",
    sub: "End-to-End Medical Image Analysis",
    badge: null,
    result: "84.97% fovea detection — surpasses published benchmark",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) as part of an ongoing NIH-funded study on automated eye disease diagnosis. Improved fovea detection accuracy to 84.97% by redesigning the model training and data processing strategy. Caught and fixed a critical data quality issue with a custom audit script.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
    date: "Sep 2025 – Present",
  },
  {
    num: "04",
    title: "U-Net Optic Disc Segmentation",
    sub: "Deep Learning · Medical Imaging",
    badge: null,
    result: "84.61% Dice score on a clean leakage-free test split",
    body: "Independently designed a ResNet34-based U-Net for medical image segmentation on the REFUGE2 eye dataset. Reached 84.61% segmentation accuracy on a clean, leakage-free split after discovering and removing contaminated training data that would have inflated results.",
    stack: ["PyTorch", "ResNet34", "Albumentations", "Google Colab Pro"],
    link: "https://github.com/eymen160/unet-optic-disc-segmentation",
    date: "Feb 2026",
  },
];

function ProjectRow({ p, index }: { p: typeof PROJECTS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Row header — always visible */}
      <button
        className="w-full text-left py-7 flex items-start gap-5 bg-transparent border-none cursor-pointer group"
        onClick={() => setOpen(o => !o)}
        style={{ padding: "28px 0" }}
      >
        {/* Number */}
        <span
          className="display font-extrabold flex-shrink-0 mt-1"
          style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", color: "var(--faint)", letterSpacing: "0.04em", minWidth: 32 }}
        >
          {p.num}
        </span>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              {p.badge && (
                <span className="chip chip-lime text-xs mb-3 inline-block">{p.badge}</span>
              )}
              <h3
                className="display font-extrabold tracking-tight mb-1"
                style={{
                  fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
                  lineHeight: 1.1,
                  color: "var(--text)",
                  letterSpacing: "-0.025em",
                  transition: "color 0.2s ease",
                }}
              >
                {p.title}
              </h3>
              <p className="text-sm font-medium mb-1.5" style={{ color: "var(--lime)" }}>{p.sub}</p>
              <p className="text-sm" style={{ color: "var(--body)" }}>→ {p.result}</p>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <span className="text-xs" style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>{p.date}</span>
              <div className="flex items-center gap-2">
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm no-underline"
                  style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--body)" }}
                  whileHover={{ background: "var(--lime)", color: "#09090B", borderColor: "var(--lime)" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  ↗
                </motion.a>
                <motion.span
                  style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1 }}
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

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-7 pl-[52px]">
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
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section heading */}
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
            }}
          >
            02
          </span>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="eyebrow mb-3">02 — Projects</p>
              <h2
                className="display font-extrabold tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", lineHeight: 1.05, color: "var(--text)", letterSpacing: "-0.03em" }}
              >
                Selected Work
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

        {/* Project list */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {PROJECTS.map((p, i) => <ProjectRow key={p.num} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
