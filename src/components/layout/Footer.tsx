const LINKS = [
  ["GitHub",   "https://github.com/eymen160"],
  ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
  ["Email",    "mailto:ekeyvan@students.kennesaw.edu"],
] as const;

export default function Footer() {
  return (
    <footer
      className="py-8 px-5 sm:px-8"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="display font-extrabold text-base bg-transparent border-none cursor-pointer transition-colors duration-200"
          style={{ color: "var(--faint)", fontStyle: "italic", letterSpacing: "-0.02em" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--lime)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--faint)")}
        >
          EFK
        </button>

        <p className="text-xs tracking-wide" style={{ color: "var(--faint)" }}>
          © {new Date().getFullYear()} Eymen Faruk Keyvan · CS @ KSU
        </p>

        <div className="flex gap-6">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs no-underline transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--lime)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
