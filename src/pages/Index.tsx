import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import Research from "../components/sections/Research";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import useLenis from "../hooks/useLenis";

export default function Index() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Research />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
