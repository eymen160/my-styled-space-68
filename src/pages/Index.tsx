import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import MarqueeBanner from "../components/sections/MarqueeBanner";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Research from "../components/sections/Research";
import Contact from "../components/sections/Contact";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
