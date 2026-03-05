import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a] pt-24 pb-12"
    >
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#7c3aed] opacity-[0.07] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#2563eb] opacity-[0.06] blur-[120px]" />
      </motion.div>

      {/* Top bar */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 max-w-[1400px] mx-auto w-full px-6 md:px-10"
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/60 mb-16 tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open for Summer 2026 Internships
        </motion.div>

        {/* Giant name block */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.88] tracking-[-0.04em] text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            EYMEN
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.88] tracking-[-0.04em]"
            style={{
              fontFamily: "'Syne', sans-serif",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
              color: "transparent",
            }}
          >
            KEYVAN
          </motion.h1>
        </div>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p
            className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            CS Junior @ KSU · NIH-funded AI/ML researcher building{" "}
            <span className="text-white/80">deep learning solutions</span> for
            retinal disease detection.
          </p>

          {/* Stats inline */}
          <div className="flex gap-8 md:gap-12 shrink-0">
            {[
              { val: "99.69%", lbl: "Dice Score" },
              { val: "3.56", lbl: "GPA" },
              { val: "NIH", lbl: "Funded" },
            ].map((s, i) => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
                className="text-right"
              >
                <p
                  className="text-2xl md:text-3xl font-black text-white tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {s.val}
                </p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-0.5">
                  {s.lbl}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-20 max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16 pt-8 border-t border-white/10"
      >
        <div className="flex gap-4">
          <motion.button
            onClick={() => scrollToSection("work")}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full bg-white text-[#0a0a0a] font-bold text-sm tracking-wide transition-colors duration-200"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            View Work ↓
          </motion.button>
          <motion.a
            href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm tracking-wide transition-colors duration-200"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get in touch
          </motion.a>
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="text-white/40 hover:text-white/80 transition-colors text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            GitHub ↗
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/eymenkeyvan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="text-white/40 hover:text-white/80 transition-colors text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            LinkedIn ↗
          </motion.a>
          <motion.a
            href="/resume/EYMEN_KEYVAN_RESUME.pdf"
            target="_blank"
            whileHover={{ y: -2 }}
            className="text-white/40 hover:text-white/80 transition-colors text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Resume ↗
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
