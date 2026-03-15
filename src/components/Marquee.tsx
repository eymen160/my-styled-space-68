import { motion } from "framer-motion";

const items = ["NIH-Funded Research", "Deep Learning", "PyTorch", "Medical Imaging", "U-Net Architecture", "ResNet34", "SOTA Results", "FinBERT", "AWS", "Python", "Open to Work", "Summer 2026", "AI/ML Engineering", "GPA 3.56"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ background: "#1B2A4A", borderTop: "1px solid rgba(250,247,242,0.07)", borderBottom: "1px solid rgba(250,247,242,0.07)", padding: "13px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #1B2A4A, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #1B2A4A, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ display: "flex", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: item === "Open to Work" ? 700 : 500, fontSize: "11px", color: item === "Open to Work" ? "#C8963E" : "rgba(250,247,242,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", padding: "0 28px" }}>{item}</span>
            <span style={{ color: "rgba(200,150,62,0.35)", fontSize: "5px" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
