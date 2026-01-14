import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 w-full pt-20 pb-32">
        {/* Name - Apple style large typography */}
        <div className="space-y-4 md:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="label text-muted-foreground"
          >
            Computer Science • AI/ML Research • Development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="display-xl max-w-4xl"
          >
            Eymen Faruk
            <br />
            Keyvan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="body-xl text-muted-foreground max-w-lg pt-4"
          >
            Building intelligent systems that solve real-world problems.
            Currently researching AI/ML at Kennesaw State University.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-6"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <div className="w-[1px] h-12 bg-border relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-1/2 bg-foreground"
              />
            </div>
            <span className="text-xs uppercase tracking-widest">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
