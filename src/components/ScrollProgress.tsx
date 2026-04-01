import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "1px",
        transformOrigin: "left", scaleX,
        background: "linear-gradient(90deg, #00FF94, #4D8EFF)",
        zIndex: 60,
        boxShadow: "0 0 8px rgba(0,255,148,0.5)",
      }}
    />
  );
}
