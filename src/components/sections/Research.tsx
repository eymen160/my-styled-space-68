import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../Reveal";
import useCounter from "../../hooks/useCounter";

const spring = { type: "spring", stiffness: 260, damping: 22 } as const;

const STUDIES = [
  {
    title: "NIH Retinal Image AI",
    meta: "Undergraduate Research Assistant · KSU Deep Learning Lab · Sep 2025 to present",
    body: "I built the end-to-end retinal analysis system for an ongoing NIH-funded study on automated eye disease diagnosis: 3 clinical datasets, 6,000+ images, PyTorch from data loading to evaluation. Redesigning the training and data strategy pushed fovea detection to 84.97%, past an existing published benchmark. My audit script also caught duplicate images leaking across train and test splits before they could fake the results.",
    metric: "84.97%",
    metricLabel: "fovea detection, above a published benchmark",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python"],
    link: "https://github.com/eymen160/fovea-segmentation",
  },
  {
    title: "U-Net Optic Disc Segmentation",
    meta: "Independent project · REFUGE2 dataset · Feb 2026",
    body: "A ResNet34-backed U-Net for optic disc segmentation, designed and trained solo. I found contaminated training data that would have inflated the score, removed it, and reported 84.61% Dice on a genuinely clean test split. Honest numbers over impressive ones.",
    metric: "84.61%",
    metricLabel: "Dice score on a leakage-free split",
    stack: ["PyTorch", "ResNet34", "Albumentations"],
    link: "https://github.com/eymen160/unet-optic-disc-segmentation",
  },
];

function BigMetric() {
  const [val, ref] = useCounter(84.97, 2);
  return (
    <p
      ref={ref}
      className="font-bold tracking-tight tabular-nums"
      style={{
        fontSize: "clamp(5rem, 14vw, 11rem)",
        lineHeight: 0.95,
        letterSpacing: "-0.05em",
        background: "linear-gradient(180deg, #FFFFFF 30%, rgba(255,255,255,0.25) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {val}%
    </p>
  );
}

export default function Research() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="research" className="relative z-10 section-pad" style={{ background: "var(--dark)" }}>
      <div className="max-w-[1120px] mx-auto">

        <Reveal className="text-center mb-6">
          <p className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Research</p>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "#fff" }}
          >
            Trained on real clinical data.<br />
            <span className="serif" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.04em" }}>Measured honestly.</span>
          </h2>
        </Reveal>

        {/* Hero metric, drifts gently with scroll */}
        <motion.div className="flex flex-col items-center text-center my-16" style={{ y: drift }}>
          <BigMetric />
          <p className="text-sm mt-4 max-w-[320px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fovea detection accuracy in an NIH-funded study, surpassing a published benchmark
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STUDIES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="h-full">
              <motion.a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 h-full rounded-[24px] p-8 no-underline"
                style={{ background: "var(--dark-card)", border: "1px solid var(--dark-line)" }}
                whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.18)" }}
                transition={spring}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold tracking-tight mb-1.5" style={{ fontSize: "1.25rem", letterSpacing: "-0.025em", color: "#fff" }}>
                      {s.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{s.meta}</p>
                  </div>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                  >
                    ↗
                  </span>
                </div>

                <p className="text-sm leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>{s.body}</p>

                <div className="mt-auto pt-2">
                  <p className="font-bold tracking-tight tabular-nums" style={{ fontSize: "1.9rem", color: "#fff", letterSpacing: "-0.04em" }}>
                    {s.metric}
                  </p>
                  <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>{s.metricLabel}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.stack.map(t => <span key={t} className="chip chip-dark">{t}</span>)}
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
