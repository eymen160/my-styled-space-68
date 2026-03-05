import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-10 border-t border-white/[0.06] bg-[#080808]">
    <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.06 }}
        className="text-base font-black text-white hover:text-white/60 transition-colors"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        EK
      </motion.button>
      <p className="text-[0.78rem] text-white/22" style={{ fontFamily: "'Inter', sans-serif" }}>
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
            className="text-[0.78rem] text-white/30 hover:text-white/60 transition-colors font-medium"
          >
            {l.label}
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
