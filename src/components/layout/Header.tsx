import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { label: "Profile", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 90 && r.bottom >= 90) { setActive(id); return; }
        }
      }
      if (window.scrollY < 90) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(10, 21, 23, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="max-w-container mx-auto flex items-center justify-between"
        style={{ padding: "0 clamp(20px, 5vw, 56px)", height: 64 }}
      >
        {/* Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs font-semibold tracking-[0.16em] bg-transparent border-none cursor-pointer"
          style={{ color: "var(--paper)" }}
        >
          E.F.KEYVAN<span style={{ color: "var(--amber)" }}>_</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="mono-label bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ color: active === id ? "var(--amber)" : "var(--dim)" }}
              onMouseEnter={e => { if (active !== id) e.currentTarget.style.color = "var(--paper)"; }}
              onMouseLeave={e => { if (active !== id) e.currentTarget.style.color = "var(--dim)"; }}
            >
              {label}
            </button>
          ))}
          <a
            href="/resume/EYMEN_KEYVAN_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label no-underline px-4 py-2 transition-colors duration-200"
            style={{
              color: "var(--amber)",
              border: "1px solid rgba(232,166,75,0.35)",
              borderRadius: 2,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--amber-dim)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden mono-label bg-transparent border-none cursor-pointer"
          style={{ color: "var(--paper)" }}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(10,21,23,0.97)", borderBottom: "1px solid var(--line)" }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => { setMenuOpen(false); scrollTo(id); }}
                  className="mono-label bg-transparent border-none cursor-pointer text-left py-1"
                  style={{ color: active === id ? "var(--amber)" : "var(--body)", fontSize: 12 }}
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label no-underline py-1"
                style={{ color: "var(--amber)", fontSize: 12 }}
              >
                Resume ↗
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
