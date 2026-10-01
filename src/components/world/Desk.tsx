import { lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion, useScroll } from "framer-motion";
import { profile } from "../../content/site";
import Modal from "../panels/Modal";
import MacDesktop from "../panels/MacDesktop";
import { CASES, CaseWindow } from "../panels/cases";
import { Messages, Notebook, PhotoBooth, Pinboard, Receipt, Tracking, Trophies } from "../panels/DeskPanels";
import type { DeskTarget } from "../desk3d/DeskScene";
import { FundusO } from "./Logo";

// three.js only loads when the desk is about to be seen
const DeskScene = lazy(() => import("../desk3d/DeskScene"));

type PanelId = DeskTarget;

const LABELS: Record<PanelId, string> = {
  desktop: "Eymen's desktop",
  phone: "Say hi — message Eymen",
  camera: "Photo Booth",
  cup: "What's in my cup",
  package: "FOMA internship tracking",
  shelf: "Trophy shelf",
  pinboard: "Skills pinboard",
  notebook: "Resume",
  microscope: "NIH research",
};

const QUICK: { label: string; id?: PanelId; href?: string }[] = [
  { label: "resume ↗", href: profile.resume },
  { label: "experience", id: "desktop" },
  { label: "research", id: "microscope" },
  { label: "skills", id: "pinboard" },
  { label: "say hi", id: "phone" },
];

const LIST: { id: PanelId; label: string; icon?: string }[] = [
  { id: "desktop", label: "open my desktop", icon: "/objects/laptop.webp" },
  { id: "phone", label: "say hi" },
  { id: "notebook", label: "what's on the table", icon: "/objects/notebook.webp" },
  { id: "package", label: "track my shipments", icon: "/objects/box.webp" },
  { id: "microscope", label: "my research" },
  { id: "camera", label: "say cheese", icon: "/objects/camera.webp" },
  { id: "cup", label: "what's in my cup", icon: "/objects/tea.webp" },
  { id: "shelf", label: "the trophy shelf", icon: "/objects/trophy.webp" },
  { id: "pinboard", label: "the pinboard", icon: "/objects/bulb.webp" },
];

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * The last scene: Eymen's desk, in real 3D. Scrolling in dollies the camera onto the desk; every
 * object opens something, and the laptop flies you into its screen before the desktop opens.
 */
export default function Desk() {
  const reduced = !!useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "start start"] });
  const [open, setOpen] = useState<PanelId | null>(null);
  const [zoom, setZoom] = useState(false);
  const [gl] = useState(hasWebGL);
  const [near, setNear] = useState(false);

  // start loading the 3D chunk a little before the desk scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "120% 0px" });
    if (section.current) io.observe(section.current);
    return () => io.disconnect();
  }, []);

  const openPanel = useCallback(
    (id: PanelId) => {
      if (id === "desktop" && !reduced) {
        setZoom(true);
        window.setTimeout(() => setOpen("desktop"), 750);
      } else setOpen(id);
    },
    [reduced],
  );
  const close = () => {
    setOpen(null);
    setZoom(false);
  };
  const nih = CASES.find((c) => c.id === "nih")!;

  const panels: Record<PanelId, ReactNode> = {
    desktop: <MacDesktop onExit={close} openPhotos={() => setOpen("camera")} />,
    phone: <Messages />,
    camera: <PhotoBooth />,
    cup: <Receipt />,
    package: <Tracking />,
    shelf: <Trophies />,
    pinboard: <Pinboard />,
    notebook: <Notebook />,
    microscope: <CaseWindow c={nih} onClose={close} />,
  };

  return (
    <section id="desk" ref={section} aria-label="Eymen's desk" style={{ background: "#e7e1d6" }}>
      <div className="relative h-[100svh] min-h-[560px] overflow-hidden">
        {gl && near && (
          <Suspense fallback={<p className="note absolute inset-0 flex items-center justify-center text-xl text-ink/50">setting up the desk…</p>}>
            <DeskScene progress={scrollYProgress} onOpen={openPanel} zoom={zoom} reduced={reduced} />
          </Suspense>
        )}
        {!gl && <p className="note absolute inset-0 flex items-center justify-center px-6 text-center text-xl text-ink/60">your browser can't show the 3D desk — everything is in the list below ↓</p>}

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col items-center gap-2 px-4 pt-16 text-center md:pt-14">
          <p className="note text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink/60">my desk — click around ✦</p>
          <nav aria-label="Quick links" className="pointer-events-auto flex flex-wrap justify-center gap-1 text-[13px]">
            {QUICK.map((q) =>
              q.href ? (
                <a key={q.label} href={q.href} target="_blank" rel="noopener" className="rounded-full bg-white/60 px-3 py-1 text-ink/75 backdrop-blur transition hover:bg-ink hover:text-cream">
                  {q.label}
                </a>
              ) : (
                <button key={q.label} onClick={() => openPanel(q.id!)} className="rounded-full bg-white/60 px-3 py-1 text-ink/75 backdrop-blur transition hover:bg-ink hover:text-cream">
                  {q.label}
                </button>
              ),
            )}
          </nav>
        </div>
      </div>

      {/* every desk object as a plain button: the phone layout, and the keyboard / screen-reader path */}
      <div className={gl ? "md:sr-only md:focus-within:not-sr-only" : ""}>
        <div className="grid grid-cols-3 gap-2 px-4 pb-8 pt-4 md:mx-auto md:max-w-3xl md:grid-cols-5">
          {LIST.map((m) => (
            <button key={m.id} onClick={() => openPanel(m.id)} className="flex flex-col items-center gap-1 rounded-2xl bg-white/70 p-3 text-center shadow-sm active:scale-95">
              {m.icon ? <img src={m.icon} alt="" className="h-10 w-10 object-contain" /> : m.id === "phone" ? <span className="text-3xl">💬</span> : <FundusO size="2.5rem" />}
              <span className="note text-[0.95rem] leading-tight text-ink">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {(Object.keys(panels) as PanelId[]).map((id) => (
        <Modal key={id} open={open === id} onClose={close} label={LABELS[id]} full={id === "desktop"}>
          {panels[id]}
        </Modal>
      ))}

      <footer className="flex flex-col items-center gap-1 px-5 pb-6 pt-4 text-center text-[12px] text-ink/45">
        <p>© {new Date().getFullYear()} Eymen Faruk Keyvan · built with React, three.js and a lot of commits</p>
        <p>3D models &amp; lighting: Poly Haven (CC0) · object photos: CC0 via Openverse · icons: Simple Icons (CC0)</p>
      </footer>
    </section>
  );
}
