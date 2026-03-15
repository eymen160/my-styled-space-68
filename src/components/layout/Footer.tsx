export default function Footer() {
  return (
    <footer style={{ background: "#1B2A4A", borderTop: "1px solid rgba(250,247,242,0.08)", padding: "28px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.1rem", color: "rgba(250,247,242,0.4)", letterSpacing: "0.1em" }}>EK</span>
        <div style={{ display: "flex", gap: "28px" }}>
          {[["GitHub", "https://github.com/eymen160"], ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"], ["Email", "mailto:eymenfaruk479@gmail.com"]].map(([l, h]) => (
            <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(250,247,242,0.35)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C8963E")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.35)")}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
