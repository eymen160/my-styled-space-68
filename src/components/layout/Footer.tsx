import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10" style={{ borderTop: "1px solid #E5E2DC", background: "#FAF9F6" }}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.06 }}
          className="text-[1rem] font-bold transition-opacity hover:opacity-50"
          style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}
        >
          EK
        </motion.button>
        <p className="text-[0.76rem]" style={{ color: "#C0BAB0", fontFamily: "'Outfit', sans-serif" }}>
          Eymen Faruk Keyvan · CS @ Kennesaw State · © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          {[
            { l: "GitHub", h: "https://github.com/eymen160" },
            { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
            { l: "Resume", h: "/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map((x) => (
            <motion.a
              key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-[0.76rem] font-medium transition-colors duration-200"
              style={{ color: "#B0AA9E" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B0AA9E")}
            >
              {x.l}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
