const LINKS = [
  ["GitHub", "https://github.com/eymen160"],
  ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
  ["Email", "mailto:ekeyvan@students.kennesaw.edu"],
] as const;

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid var(--line)", background: "var(--ink)", padding: "32px clamp(20px, 5vw, 56px)" }}
    >
      <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.1em]" style={{ color: "var(--dim)" }}>
          © {new Date().getFullYear()} EYMEN FARUK KEYVAN
        </p>

        <p className="font-mono text-[11px] tracking-[0.1em] hidden sm:block" style={{ color: "var(--dim)" }}>
          ROSWELL, GA · 34.02°N 84.36°W
        </p>

        <div className="flex gap-5">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
              style={{ color: "var(--dim)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--amber)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--dim)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
