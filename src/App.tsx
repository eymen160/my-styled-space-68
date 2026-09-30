import { useEffect } from "react";
import Lenis from "lenis";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Photos from "./components/Photos";
import Projects from "./components/Projects";
import Statement from "./components/Statement";

export default function App() {
  // Smooth, inertial scrolling so the scroll-driven scenes feel continuous. Skipped for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -64 }, lerp: 0.1 });
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <a href="#experience" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Photos />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
