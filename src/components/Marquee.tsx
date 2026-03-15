import { motion } from "framer-motion";

const items = [
  "NIH-Funded Research",
  "Deep Learning",
  "PyTorch",
  "Medical Imaging",
  "U-Net Architecture",
  "ResNet34",
  "SOTA Performance",
  "FinBERT",
  "AWS",
  "Python",
  "Open to Work",
  "Summer 2026",
  "AI/ML Engineering",
  "KSU · GPA 3.56",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div style={{
      background: "#1B2A4A",
      borderTop: "1px solid rgba(250,247,242,0.08)",
      borderBottom: "1px solid rgba(250,247,242,0.08)",
      padding: "14px 0",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* fade edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #1B2A4A, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #1B2A4A, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "0", whiteSpace: "nowrap" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: item === "Open to Work" ? 700 : 500,
              fontSize: "12px",
              color: item === "Open to Work" ? "#C8963E" : "rgba(250,247,242,0.55)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0 28px",
            }}>
              {item}
            </span>
            <span style={{ color: "rgba(200,150,62,0.4)", fontSize: "6px" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
