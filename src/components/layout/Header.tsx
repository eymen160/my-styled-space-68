import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["work", "about", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("#")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="text-base font-black text-white tracking-tight hover:text-white/70 transition-colors"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          EK
        </motion.button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === item.href
                  ? "text-[#0a0a0a]"
                  : "text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="mailto:eymenfaruk479@gmail.com"
          whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.9)" }}
          whileTap={{ scale: 0.97 }}
          className="px-5 py-2.5 rounded-full bg-white text-[#0a0a0a] text-sm font-bold transition-colors inline-flex items-center gap-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="hidden sm:inline">Hire Me</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
