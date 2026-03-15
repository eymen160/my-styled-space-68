import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import Marquee from "@/components/Marquee";

const Index = () => {
  return (
    <div style={{ background: "#FAF7F2" }}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
