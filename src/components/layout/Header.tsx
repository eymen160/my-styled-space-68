import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { label: "About",    id: "about"    },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Contact",  id: "contact"  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 80 && r.bottom >= 80) { setActive(id); return; }
        }
      }
      if (window.scrollY < 80) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:     scrolled ? "rgba(9,9,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition:     "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      <ScrollProgress />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="display font-extrabold text-lg tracking-tight bg-transparent border-none cursor-pointer"
          style={{ color: "var(--lime)", fontStyle: "italic", letterSpacing: "-0.02em" }}
        >
          EFK
        </button>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative px-4 py-2 text-sm bg-transparent border-none cursor-pointer transition-colors duration-200 rounded-lg"
              style={{ color: active === id ? "var(--text)" : "var(--muted)", fontWeight: active === id ? 500 : 400 }}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-bg"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </nav>

        <motion.a
          href="mailto:ekeyvan@students.kennesaw.edu"
          className="text-sm font-semibold no-underline whitespace-nowrap px-5 py-2.5 rounded-lg"
          style={{ background: "var(--lime)", color: "#09090B" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.header>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const fn = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%`, transition: "width 0.1s linear" }}
    />
  );
}
