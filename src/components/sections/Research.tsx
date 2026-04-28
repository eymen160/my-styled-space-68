import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const RESEARCH = [
  {
    title: "NIH Retinal Image AI",
    meta:  "Undergraduate Research · KSU · Sep 2025 – Present",
    metric: "84.97%",
    metricLabel: "Fovea Detection",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) to automate detection of eye diseases as part of an ongoing NIH-funded study. Improved fovea detection accuracy to 84.97%, surpassing an existing published benchmark, by redesigning the model training approach and data processing strategy. Caught and fixed a data quality issue (duplicate images leaking across train/test splits) using a custom audit script, preventing misleading accuracy results.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link:  "https://github.com/eymen160/fovea-segmentation",
  },
  {
    title: "U-Net Optic Disc Segmentation",
    meta:  "Medical Image Segmentation · Feb 2026",
    metric: "84.61%",
    metricLabel: "Dice Score — REFUGE2",
    body: "Independently designed a ResNet34-based U-Net for medical image segmentation on the REFUGE2 eye dataset. Reached 84.61% Dice score on a clean, leakage-free test split after discovering and removing contaminated training data that would have inflated results and misrepresented model capability.",
    stack: ["PyTorch", "ResNet34", "Albumentations", "Google Colab Pro"],
    link:  "https://github.com/eymen160/unet-optic-disc-segmentation",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="section-pad"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
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
            03
          </span>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="eyebrow mb-3">03 — Research</p>
              <h2
                className="display font-extrabold tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", lineHeight: 1.05, color: "var(--text)", letterSpacing: "-0.03em" }}
              >
                NIH-Funded AI Research
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

        <div className="flex flex-col gap-4">
          {RESEARCH.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: i * 0.1, ease }}
              className="card p-8"
              whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)", borderColor: "var(--border2)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                    <div>
                      <h3
                        className="display font-bold tracking-tight mb-1.5"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", color: "var(--text)", letterSpacing: "-0.02em" }}
                      >
                        {r.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: "var(--lime)" }}>{r.meta}</p>
                    </div>
                    <motion.a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm no-underline flex-shrink-0"
                      style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--body)" }}
                      whileHover={{ background: "var(--lime)", color: "#09090B", borderColor: "var(--lime)" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      ↗
                    </motion.a>
                  </div>
                  <p className="text-sm leading-[1.9] mb-5" style={{ color: "var(--body)" }}>{r.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.stack.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>

                {/* Metric */}
                <div
                  className="flex-shrink-0 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "var(--lime-dim)",
                    border: "1px solid rgba(200,255,62,0.18)",
                    minWidth: 140,
                  }}
                >
                  <p
                    className="display font-extrabold mb-1.5"
                    style={{ fontSize: "2rem", lineHeight: 1, color: "var(--lime)", letterSpacing: "-0.04em" }}
                  >
                    {r.metric}
                  </p>
                  <p className="text-xs leading-tight text-center" style={{ color: "var(--muted)", maxWidth: 100 }}>
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
