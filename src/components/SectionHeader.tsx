import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* Big friendly section heading — eyebrow caps + display title,
   with an optional serif-italic accent word. */
export default function SectionHeader({
  eyebrow,
  title,
  accent,
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  center?: boolean;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2
        className="font-extrabold"
        style={{ fontSize: "clamp(2.3rem, 5.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text)" }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <em className="serif italic font-normal" style={{ color: "var(--warm)" }}>{accent}</em>
          </>
        )}
      </h2>
    </motion.div>
  );
}
