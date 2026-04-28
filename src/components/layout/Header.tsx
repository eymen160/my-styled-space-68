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
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
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
        background:    scrolled ? "rgba(248,244,236,0.93)" : "transparent",
        backdropFilter:scrolled ? "blur(16px) saturate(1.6)" : "none",
        borderBottom:  scrolled ? "1px solid #DDD6C8" : "1px solid transparent",
        transition:    "all 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Scroll progress */}
      <ScrollProgress />

      <div className="max-w-[1160px] mx-auto px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="display font-extrabold text-lg tracking-tight bg-transparent border-none cursor-pointer"
          style={{ color: "var(--navy)", fontStyle: "italic" }}
        >
          EFK
        </button>

        <nav className="hidden md:flex gap-1">
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 rounded-lg text-sm bg-transparent border-none cursor-pointer transition-all duration-200"
              style={{
                color:      active === id ? "var(--navy)" : "var(--muted)",
                fontWeight: active === id ? 600 : 400,
                background: "transparent",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--cream-dark)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {label}
            </button>
          ))}
        </nav>

        <motion.a
          href="mailto:ekeyvan@students.kennesaw.edu"
          className="text-sm font-semibold no-underline whitespace-nowrap px-5 py-2.5 rounded-lg"
          style={{
            background: "var(--navy)",
            color:      "var(--cream)",
          }}
          whileHover={{ scale: 1.03, y: -1, background: "var(--gold)" }}
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
