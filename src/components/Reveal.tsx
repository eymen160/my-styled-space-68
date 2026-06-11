import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Apple-style blur-to-sharp reveal. Content rises, sharpens, and fades in
 * when it enters the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
