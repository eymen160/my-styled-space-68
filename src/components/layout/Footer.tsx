export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(240,236,228,0.06)", padding: "28px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500, color: "rgba(240,236,228,0.4)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.4)")}
        >
          EFK
        </button>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(240,236,228,0.2)", letterSpacing: "0.06em" }}>
          © {new Date().getFullYear()} Eymen Faruk Keyvan · CS @ KSU
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            ["GitHub", "https://github.com/eymen160"],
            ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
            ["Email", "mailto:eymen@eymenkeyvan.com"],
          ].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(240,236,228,0.3)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.3)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
