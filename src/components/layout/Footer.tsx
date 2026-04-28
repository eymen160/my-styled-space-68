const LINKS = [
  ["GitHub",   "https://github.com/eymen160"],
  ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
  ["Email",    "mailto:ekeyvan@students.kennesaw.edu"],
] as const;

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)" }} className="py-7 px-8">
      <div className="max-w-[1160px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="display font-extrabold text-base italic bg-transparent border-none cursor-pointer transition-colors duration-200"
          style={{ color: "rgba(248,244,236,0.35)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,244,236,0.35)")}
        >
          EFK
        </button>

        <p className="text-xs tracking-wide" style={{ color: "rgba(248,244,236,0.2)" }}>
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
              style={{ color: "rgba(248,244,236,0.28)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,244,236,0.28)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
