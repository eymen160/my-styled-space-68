import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Ticker from "./components/Ticker";
import Cursor from "./components/motion/Cursor";

export default function App() {
  return (
    <>
      <a href="#experience" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Ticker />
        <About />
        <Contact />
      </main>
      <Footer />
      <div aria-hidden className="grain" />
      <Cursor />
    </>
  );
}
