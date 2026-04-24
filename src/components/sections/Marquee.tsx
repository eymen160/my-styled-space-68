const ITEMS = [
  "TARIFFCHECK",
  "HACKLANTA 2ND PLACE",
  "NIH RESEARCH",
  "FINSIGHT",
  "MCKINSEY FORWARD",
  "KSU",
  "AI/ML",
  "PYTORCH",
  "FLASK",
  "CLAUDE API",
  "LANGCHAIN",
  "DOCKER",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]; // doubled for seamless loop

  return (
    <div style={{ borderTop: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)", padding: "14px 0", overflow: "hidden", background: "rgba(201,168,76,0.03)" }}>
      <div className="marquee-track" style={{ display: "flex", gap: 0, whiteSpace: "nowrap", willChange: "transform" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.16em", textTransform: "uppercase", padding: "0 28px" }}>
              {item}
            </span>
            <span style={{ color: "rgba(201,168,76,0.4)", fontSize: 8 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
