import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", transformOrigin: "left", scaleX, background: "linear-gradient(90deg, #2563EB, #9333EA)", zIndex: 60 }} />;
}
