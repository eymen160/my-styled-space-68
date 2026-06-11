const ITEMS = [
  "TARIFFCHECK", "HACKLANTA 2ND PLACE", "NIH RESEARCH", "FINSIGHT",
  "MCKINSEY FORWARD", "AI / ML", "PYTORCH", "CLAUDE API", "LANGCHAIN", "U-NET",
];

const CTA_ITEMS = ["LET'S WORK TOGETHER", "AVAILABLE SUMMER 2026", "AI / ML ENGINEERING"];

/**
 * Kinetic type band. Default: big alternating filled/outlined words on dark.
 * `variant="cta"`: tilted lime ribbon with dark text, scrolling the other way.
 */
export default function MarqueeBanner({ variant = "default" }: { variant?: "default" | "cta" }) {
  if (variant === "cta") {
    const doubled = [...CTA_ITEMS, ...CTA_ITEMS, ...CTA_ITEMS, ...CTA_ITEMS];
    return (
      <div className="overflow-hidden py-10" style={{ background: "var(--bg)" }}>
        <div
          className="overflow-hidden py-4 marquee-pause"
          style={{ background: "var(--lime)", transform: "rotate(-1.5deg) scale(1.04)" }}
        >
          <div className="flex whitespace-nowrap marquee-track-reverse">
            {doubled.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span
                  className="display font-extrabold px-6"
                  style={{
                    fontSize: "clamp(1.4rem, 3.2vw, 2.4rem)",
                    letterSpacing: "-0.02em",
                    color: "#09090B",
                  }}
                >
                  {item}
                </span>
                <span style={{ color: "#09090B", fontSize: 14 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      className="overflow-hidden py-6 marquee-pause"
      style={{
        borderTop:    "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background:   "var(--surface)",
      }}
    >
      <div className="flex whitespace-nowrap items-center marquee-track-slow">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className={`display font-extrabold px-8 ${i % 2 === 0 ? "" : "text-outline"}`}
              style={{
                fontSize: "clamp(1.6rem, 3.6vw, 2.8rem)",
                letterSpacing: "-0.02em",
                color: i % 2 === 0 ? "var(--text)" : undefined,
                opacity: i % 2 === 0 ? 0.9 : 1,
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--lime)", fontSize: 10, opacity: 0.8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
