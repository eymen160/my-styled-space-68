import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 w-full pt-20 pb-32">
        {/* Intro Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="label text-muted-foreground mb-6"
        >
          AI/ML Research • Software Development • Data Analytics
        </motion.p>

        {/* Name - Massive typography like Julia's */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="display-xl max-w-5xl mb-8"
        >
          Eymen Faruk
          <br />
          <span className="text-muted-foreground">Keyvan</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="body-xl text-muted-foreground max-w-xl"
        >
          Computer Science student & Undergraduate Research Assistant at Kennesaw State University, 
          working on NIH-funded AI/ML research in medical imaging.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border"
        >
          <div>
            <p className="text-3xl font-semibold tracking-tight">3.56</p>
            <p className="text-sm text-muted-foreground mt-1">GPA</p>
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight">NIH</p>
            <p className="text-sm text-muted-foreground mt-1">Funded Research</p>
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight">2027</p>
            <p className="text-sm text-muted-foreground mt-1">Graduation</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 text-muted-foreground"
        >
          <div className="w-[1px] h-16 bg-border relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-foreground"
            />
          </div>
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
