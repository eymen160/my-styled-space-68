const ITEMS = [
  "TARIFFCHECK", "HACKLANTA 2ND PLACE", "NIH RESEARCH", "FINSIGHT",
  "MCKINSEY FORWARD", "KSU", "AI / ML", "PYTORCH", "FLASK",
  "CLAUDE API", "LANGCHAIN", "DOCKER", "U-NET",
];

export default function MarqueeBanner() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      className="overflow-hidden py-3"
      style={{
        borderTop:    "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background:   "var(--surface)",
      }}
    >
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="px-7"
              style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:       11,
                fontWeight:     600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color:          "var(--faint)",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--lime)", fontSize: 5, opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
