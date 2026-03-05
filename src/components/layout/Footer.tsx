import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          className="text-lg font-black text-white hover:text-white/60 transition-colors"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          EK
        </motion.button>
        <p className="text-xs text-white/25" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Eymen Faruk Keyvan · CS @ Kennesaw State · © {new Date().getFullYear()}
        </p>
        <div className="flex gap-5">
          {[
            { label: "GitHub", href: "https://github.com/eymen160" },
            { label: "LinkedIn", href: "https://linkedin.com/in/eymenkeyvan" },
            { label: "Resume", href: "/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
