import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ background: "#07090F", borderTop: "1px solid rgba(205,214,244,0.07)", padding: "36px 0" }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.06 }}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#CDD6F4", background: "none", border: "none", letterSpacing: "0.04em" }}>
          EK
        </motion.button>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 300, fontSize: "11px", color: "rgba(205,214,244,0.25)", letterSpacing: "0.06em" }}>
          // Eymen Faruk Keyvan · CS @ KSU · {new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { l: "GitHub", h: "https://github.com/eymen160" },
            { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
            { l: "Resume", h: "https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map(x => (
            <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px", color: "rgba(205,214,244,0.3)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00FF94"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(205,214,244,0.3)"}>
              {x.l}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
