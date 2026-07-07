import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const FINDINGS = [
  {
    id: "R-01",
    title: "NIH Retinal Image AI",
    meta: "Undergraduate research · KSU · Sep 2025 – Present",
    metric: "84.97%",
    metricLabel: "Fovea detection accuracy",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) to automate detection of eye diseases as part of an ongoing NIH-funded study. Improved fovea detection accuracy to 84.97%, surpassing an existing published benchmark, by redesigning the model training approach and data processing strategy. Caught and fixed a data quality issue (duplicate images leaking across train/test splits) using a custom audit script, preventing misleading accuracy results.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
  },
  {
    id: "R-02",
    title: "U-Net Optic Disc Segmentation",
    meta: "Medical image segmentation · Feb 2026",
    metric: "84.61%",
    metricLabel: "Dice score — REFUGE2",
    body: "Independently designed a ResNet34-based U-Net for medical image segmentation on the REFUGE2 eye dataset. Reached 84.61% Dice score on a clean, leakage-free test split after discovering and removing contaminated training data that would have inflated results and misrepresented model capability.",
    stack: ["PyTorch", "ResNet34", "Albumentations", "Google Colab Pro"],
    link: "https://github.com/eymen160/unet-optic-disc-segmentation",
  },
];

export default function Research() {
  const reduced = useReducedMotion() ?? false;
  return (
    <section id="research" className="section-pad" style={{ background: "var(--ink)", borderTop: "1px solid var(--line)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader index="03" label="Research" meta="NIH-funded · 6,000+ images" title="Findings that hold up" />

        <div className="flex flex-col gap-4">
          {FINDINGS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={reduced ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="panel p-8"
            >
              <div className="flex flex-col md:flex-row md:items-stretch gap-8">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                    <div>
                      <p className="font-mono text-xs mb-2" style={{ color: "var(--dim)", letterSpacing: "0.08em" }}>{r.id}</p>
                      <h3
                        className="display font-bold uppercase mb-1.5"
                        style={{ fontSize: "clamp(1.05rem, 1.9vw, 1.35rem)", color: "var(--paper)", letterSpacing: "0" }}
                      >
                        {r.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: "var(--amber)" }}>{r.meta}</p>
                    </div>
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${r.title} on GitHub`}
                      className="w-9 h-9 flex items-center justify-center text-sm no-underline flex-shrink-0 transition-colors duration-200"
                      style={{ background: "var(--ink3)", border: "1px solid var(--line)", borderRadius: 2, color: "var(--body)" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.color = "#0A1517"; e.currentTarget.style.borderColor = "var(--amber)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "var(--ink3)"; e.currentTarget.style.color = "var(--body)"; e.currentTarget.style.borderColor = "var(--line)"; }}
                    >
                      ↗
                    </a>
                  </div>
                  <p className="text-sm leading-[1.9] mb-5" style={{ color: "var(--body)" }}>{r.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.stack.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>

                {/* Metric readout */}
                <div
                  className="flex-shrink-0 p-6 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "var(--amber-dim)",
                    border: "1px solid rgba(232,166,75,0.22)",
                    borderRadius: 2,
                    minWidth: 170,
                  }}
                >
                  <p className="font-mono font-semibold mb-2" style={{ fontSize: "1.9rem", lineHeight: 1, color: "var(--amber)", letterSpacing: "-0.02em" }}>
                    {r.metric}
                  </p>
                  <p className="mono-label" style={{ fontSize: 9, maxWidth: 130, lineHeight: 1.7 }}>
                    {r.metricLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
