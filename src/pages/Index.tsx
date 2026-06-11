import { useState, useCallback } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import MarqueeBanner from "../components/sections/MarqueeBanner";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Research from "../components/sections/Research";
import Contact from "../components/sections/Contact";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import useLenis from "../hooks/useLenis";

export default function Index() {
  // started: curtain is lifting → entrance animations begin
  // done: preloader fully gone → unmount it
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const onStart = useCallback(() => setStarted(true), []);
  const onDone = useCallback(() => setDone(true), []);

  useLenis();

  return (
    <>
      {!done && <Preloader onStart={onStart} onDone={onDone} />}
      <CustomCursor />
      <div className="grain" aria-hidden />
      <Header />
      <main>
        <Hero started={started} />
        <MarqueeBanner />
        <About />
        <Projects />
        <Research />
        <MarqueeBanner variant="cta" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
