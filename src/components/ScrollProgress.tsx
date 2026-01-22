import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-border/30"
      >
        <motion.div
          style={{ scaleX }}
          className="h-full origin-left bg-gradient-to-r from-accent via-blue-500 to-accent"
        />
        {/* Glow effect */}
        <motion.div
          style={{ scaleX, opacity: glowOpacity }}
          className="absolute top-0 h-[6px] w-full origin-left bg-gradient-to-r from-accent via-blue-500 to-accent blur-sm"
        />
      </motion.div>

      {/* Side progress indicator */}
      <motion.div
        style={{ opacity }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="h-24 w-[2px] bg-border/30 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY: scaleX }}
            className="w-full origin-top bg-gradient-to-b from-accent to-blue-500"
          />
        </div>
        <motion.span 
          className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase writing-mode-vertical"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
