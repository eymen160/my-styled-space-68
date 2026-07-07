import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const FINDINGS = [
  {
    title: "NIH Retinal Image AI",
    meta: "Undergraduate research · KSU · Sep 2025 – Present",
    metric: "84.97%",
    metricLabel: "Fovea detection accuracy",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) to automate detection of eye diseases as part of an ongoing NIH-funded study. Improved fovea detection accuracy to 84.97%, surpassing an existing published benchmark, by redesigning the model training approach and data processing strategy. Caught and fixed a data quality issue (duplicate images leaking across train/test splits) using a custom audit script.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
  },
  {
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
    <section id="research" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader eyebrow="Research" title="Findings I can" accent="defend" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {FINDINGS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="card p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  className="rounded-2xl px-6 py-5 text-center"
                  style={{ background: "var(--warm-dim)", border: "1px solid rgba(255,201,107,0.2)" }}
                >
                  <p className="font-extrabold" style={{ fontSize: "1.9rem", lineHeight: 1.1, color: "var(--warm)", letterSpacing: "-0.02em" }}>
                    {r.metric}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{r.metricLabel}</p>
                </div>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${r.title} on GitHub`}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm no-underline flex-shrink-0 transition-all duration-200 hover:scale-110"
                  style={{ background: "var(--card2)", border: "1px solid var(--border)", color: "var(--body)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--text)"; e.currentTarget.style.color = "#04070D"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--card2)"; e.currentTarget.style.color = "var(--body)"; }}
                >
                  ↗
                </a>
              </div>

              <h3 className="font-extrabold mb-1.5" style={{ fontSize: "1.35rem", letterSpacing: "-0.015em", color: "var(--text)" }}>
                {r.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{r.meta}</p>
              <p className="text-[15px] leading-[1.85] mb-6 flex-1" style={{ color: "var(--body)" }}>{r.body}</p>
              <div className="flex flex-wrap gap-2">
                {r.stack.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
