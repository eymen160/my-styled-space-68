import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div style={{ background: "#0D0B0A" }}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
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
