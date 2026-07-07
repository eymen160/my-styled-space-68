export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)", padding: "36px clamp(24px, 6vw, 64px)" }}
    >
      <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px]" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Eymen Faruk Keyvan
        </p>
        <p className="text-[13px]" style={{ color: "var(--muted)" }}>
          Made with care in Roswell, GA
        </p>
        <div className="flex gap-6">
          {[
            ["GitHub", "https://github.com/eymen160"],
            ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
            ["Email", "mailto:ekeyvan@students.kennesaw.edu"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="link-hover text-[13px]"
              style={{ color: "var(--muted)" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
