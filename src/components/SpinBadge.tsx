/** A round sticker with text running around its edge, slowly turning. Links somewhere. */
export default function SpinBadge({ href, text, dark = false }: { href: string; text: string; dark?: boolean }) {
  const bg = dark ? "var(--ink)" : "var(--sun)";
  const fg = dark ? "var(--sun)" : "var(--ink)";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Open resume (PDF)"
      className="group relative block h-36 w-36 rounded-full shadow-2xl transition-transform duration-500 hover:scale-105"
      style={{ background: bg, color: fg }}
    >
      <svg viewBox="0 0 144 144" className="absolute inset-0 h-full w-full" style={{ animation: "spin 18s linear infinite" }} aria-hidden>
        <defs>
          <path id="badge-circle" d="M72 72 m-52 0 a52 52 0 1 1 104 0 a52 52 0 1 1 -104 0" />
        </defs>
        <text fontFamily="Geist Mono, monospace" fontSize="10.5" letterSpacing="2.2" fill="currentColor" style={{ textTransform: "uppercase" }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="display absolute inset-0 flex items-center justify-center text-3xl italic transition-transform duration-500 group-hover:rotate-45">
        ↗
      </span>
    </a>
  );
}
