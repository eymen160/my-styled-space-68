import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
    const sections = ["work", "about", "contact"];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) { setActiveSection(id); return; }
      }
    }
    if (v < 200) setActiveSection("");
  });

  const scrollTo = (id: string) => {
    if (id === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Work", href: "work" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#080808]/88 backdrop-blur-2xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("#")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-base font-black text-white hover:text-white/70 transition-colors tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          EK
        </motion.button>

        {/* Nav pill */}
        <nav className="hidden md:flex items-center gap-0.5 p-1.5 rounded-full bg-white/[0.05] border border-white/[0.09] backdrop-blur-sm">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2 text-[0.83rem] font-semibold rounded-full transition-all duration-300 ${
                activeSection === item.href ? "text-[#080808]" : "text-white/55 hover:text-white/85"
              }`}
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Hire CTA */}
        <motion.a
          href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.92)" }}
          whileTap={{ scale: 0.96 }}
          className="px-5 py-2.5 rounded-full bg-white text-[#080808] text-[0.83rem] font-bold transition-all duration-200 inline-flex items-center gap-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="hidden sm:inline">Hire Me</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
