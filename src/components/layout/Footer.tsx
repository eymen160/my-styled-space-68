import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer style={{ background: "#1B2A4A", borderTop: "1px solid rgba(250,247,242,0.06)", padding: "26px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.1rem", color: "rgba(250,247,242,0.3)", letterSpacing: "0.1em" }}>EK</span>
        <div style={{ display: "flex", gap: "24px" }}>
          {[["GitHub", "https://github.com/eymen160"], ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"], ["Email", "mailto:eymenfaruk479@gmail.com"]].map(([l, h]) => (
            <motion.a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -2, color: "#C8963E" }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(250,247,242,0.28)", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s" }}>
              {l}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
