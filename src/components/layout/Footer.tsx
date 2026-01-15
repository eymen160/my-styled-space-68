import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-2 md:gap-6"
          >
            <p className="text-sm font-medium">
              Eymen Faruk Keyvan
            </p>
            <span className="hidden md:inline text-muted-foreground">·</span>
            <p className="text-sm text-muted-foreground">
              Computer Science @ KSU
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} — Built with purpose
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
