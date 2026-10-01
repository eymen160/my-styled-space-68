import { useEffect } from "react";
import Lenis from "lenis";
import { profile } from "./content/site";
import Bio from "./components/world/Bio";
import Desk from "./components/world/Desk";
import HeroWorld from "./components/world/HeroWorld";
import Lines from "./components/world/Lines";
import ShipScene from "./components/world/ShipScene";

export default function App() {
  // Smooth, inertial scrolling so the scrubbed scenes feel continuous; paused while a panel is open.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.14, wheelMultiplier: 1.15 });
    const stop = () => lenis.stop();
    const start = () => lenis.start();
    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);
    return () => {
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a href="#desk" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:text-ink">
        Skip to the desk
      </a>
      {/* tiny fixed corners; difference blending keeps them legible on midnight and on cream */}
      <a href="#top" className="round fixed left-5 top-4 z-50 text-xl font-[900] text-white mix-blend-difference">
        ek.
      </a>
      <a href={profile.resume} target="_blank" rel="noopener" className="fixed right-4 top-3.5 z-50 rounded-full border border-white px-4 py-1.5 text-sm font-medium text-white mix-blend-difference transition hover:bg-white hover:text-black">
        Resume ↗
      </a>
      <main>
        <HeroWorld />
        <Bio />
        <ShipScene />
        <Lines />
        <Desk />
      </main>
    </>
  );
}
