import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 100, background: "linear-gradient(90deg, #C8963E, rgba(200,150,62,0.35))", transformOrigin: "left", scaleX }} />
  );
}
