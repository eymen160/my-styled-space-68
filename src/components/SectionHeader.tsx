import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* Section header — a labeled rule, like a figure caption in a lab report. */
export default function SectionHeader({
  index,
  label,
  meta,
  title,
}: {
  index: string;
  label: string;
  meta: string;
  title: string;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="mb-14"
    >
      <div
        className="flex items-baseline justify-between gap-4 flex-wrap pb-3 mb-8"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <p className="mono-label" style={{ color: "var(--amber)" }}>
          {index} / {label}
        </p>
        <p className="mono-label" style={{ fontSize: 10 }}>{meta}</p>
      </div>
      <h2
        className="display font-extrabold uppercase"
        style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.4rem)", lineHeight: 1.04, letterSpacing: "-0.01em", color: "var(--paper)" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
