import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0", padding: "40px 0" }}>
      <div className="max-w-[1160px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0F172A", background: "none", border: "none", letterSpacing: "-0.01em" }}>
          Eymen Keyvan
        </button>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#94A3B8" }}>
          © {new Date().getFullYear()} Eymen Faruk Keyvan · CS @ KSU
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { l: "GitHub", h: "https://github.com/eymen160" },
            { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
            { l: "Resume", h: "https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map(x => (
            <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px", color: "#64748B", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#2563EB"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
              {x.l}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
