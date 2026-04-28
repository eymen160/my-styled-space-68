import { motion } from "framer-motion";

const RESEARCH = [
  {
    title: "NIH Retinal Image AI",
    meta:  "Undergraduate Research · KSU · Sep 2025 – Present",
    metric: "84.97%",
    metricLabel: "Fovea Detection Accuracy",
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

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Research() {
  return (
    <section
      id="research"
      className="section-pad"
      style={{ background: "var(--cream)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">03 — Research</p>
          <h2
            className="display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}
          >
            NIH-Funded AI Research
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {RESEARCH.map((r, i) => (
            <motion.div
              key={r.title}
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="card p-8"
              whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(12,25,41,0.08)", borderColor: "var(--border2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="display font-bold tracking-tight mb-1.5"
                        style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "var(--navy)", letterSpacing: "-0.02em" }}
                      >
                        {r.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>{r.meta}</p>
                    </div>
                    <motion.a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm no-underline flex-shrink-0"
                      style={{ background: "var(--cream-dark)", border: "1px solid var(--border)", color: "var(--navy)" }}
                      whileHover={{ background: "var(--navy)", color: "var(--cream)", borderColor: "var(--navy)" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      ↗
                    </motion.a>
                  </div>
                  <p className="text-sm leading-[1.85] mb-5" style={{ color: "var(--body)" }}>{r.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.stack.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>

                {/* Metric callout */}
                <div
                  className="flex-shrink-0 rounded-xl p-6 flex flex-col items-center justify-center text-center min-w-[140px]"
                  style={{ background: "var(--navy)", border: "1.5px solid var(--navy-mid)" }}
                >
                  <p
                    className="display font-extrabold"
                    style={{ fontSize: "2rem", lineHeight: 1, color: "var(--gold)", letterSpacing: "-0.03em", marginBottom: 6 }}
                  >
                    {r.metric}
                  </p>
                  <p className="text-xs text-center leading-tight" style={{ color: "rgba(248,244,236,0.5)", maxWidth: 100 }}>
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
