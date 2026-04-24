import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import MarqueeDivider from "../components/sections/Marquee";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Index() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <MarqueeDivider />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
