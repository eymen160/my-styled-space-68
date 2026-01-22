import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <CursorFollower />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
