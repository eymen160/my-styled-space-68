import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer style={{ background: "#FAF9F6", borderTop: "1px solid #E8E4DE", padding: "40px 0" }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} whileHover={{ scale: 1.06 }}
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1rem", color: "#0D0D0D", background: "none", border: "none", cursor: "none" }}>
          EK
        </motion.button>
        <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "12px", color: "#C0BAB0" }}>
          Eymen Faruk Keyvan · CS at Kennesaw State · {new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {[{ l: "GitHub", h: "https://github.com/eymen160" }, { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" }, { l: "Resume", h: "https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" }].map(x => (
            <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "12px", color: "#B0AA9E", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#0D0D0D"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0AA9E"}>
              {x.l}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
