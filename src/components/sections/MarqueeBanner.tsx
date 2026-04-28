const ITEMS = [
  "TARIFFCHECK", "HACKLANTA 2ND PLACE", "NIH RESEARCH", "FINSIGHT",
  "MCKINSEY FORWARD", "KSU", "AI / ML", "PYTORCH", "FLASK",
  "CLAUDE API", "LANGCHAIN", "DOCKER", "U-NET",
];

export default function MarqueeBanner() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--cream-dark)",
      }}
    >
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="px-7"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--gold)", fontSize: 6, opacity: 0.6 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
