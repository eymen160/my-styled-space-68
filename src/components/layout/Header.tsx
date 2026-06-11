import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "../../lib/scrollTo";

const NAV = [
  { label: "Work",     id: "work"     },
  { label: "Research", id: "research" },
  { label: "About",    id: "about"    },
  { label: "Contact",  id: "contact"  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <motion.header
        className="pointer-events-auto flex items-center gap-1 rounded-full pl-5 pr-1.5 py-1.5"
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{
          background: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.5)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.08)" : "0 2px 12px rgba(0,0,0,0.04)",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <button
          onClick={() => smoothScrollTo(null)}
          className="text-sm font-bold tracking-tight bg-transparent border-none cursor-pointer mr-2"
          style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
        >
          Eymen Keyvan
        </button>

        <nav className="hidden md:flex items-center">
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => smoothScrollTo(id, -88)}
              className="px-3.5 py-2 text-[13.5px] font-medium bg-transparent border-none cursor-pointer rounded-full transition-colors duration-200 hover:text-[--ink]"
              style={{ color: "var(--body)" }}
            >
              {label}
            </button>
          ))}
        </nav>

        <motion.a
          href="mailto:ekeyvan@students.kennesaw.edu"
          className="ml-1 text-[13.5px] font-semibold no-underline whitespace-nowrap px-4.5 py-2 rounded-full"
          style={{ background: "var(--accent)", color: "#fff", padding: "8px 18px" }}
          whileHover={{ scale: 1.04, backgroundColor: "#0077ED" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          Get in touch
        </motion.a>
      </motion.header>
    </div>
  );
}
