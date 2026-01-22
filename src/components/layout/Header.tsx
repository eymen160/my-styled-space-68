import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "../MagneticButton";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["work", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg shadow-background/5" 
          : "py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo with magnetic effect */}
        <MagneticButton
          onClick={() => scrollToSection("#")}
          className="text-base font-bold tracking-tight hover:text-accent transition-colors duration-300 relative group"
          strength={0.4}
        >
          <span className="relative z-10">EK</span>
          <motion.span 
            className="absolute inset-0 -m-2 rounded-lg bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
            layoutId="logo-hover"
          />
        </MagneticButton>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.href
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-foreground rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* CTA Button with magnetic effect */}
        <MagneticButton
          href="mailto:eymenfaruk479@gmail.com"
          className="relative group px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold shadow-lg shadow-foreground/10 hover:shadow-foreground/20 transition-all duration-300 overflow-hidden inline-flex items-center gap-2"
          strength={0.3}
        >
          <span className="relative z-10 hidden sm:inline">Hire Me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 relative z-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </MagneticButton>
      </div>
    </motion.header>
  );
};

export default Header;
