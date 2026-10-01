import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { photos, profile } from "../../content/site";
import Modal from "../panels/Modal";
import MacDesktop from "../panels/MacDesktop";
import { CASES, CaseWindow } from "../panels/cases";
import { Messages, Notebook, PhotoBooth, Pinboard, Receipt, Tracking, Trophies } from "../panels/DeskPanels";
import { FolderIcon } from "../panels/icons";
import { FundusO } from "./Logo";

type PanelId = "desktop" | "phone" | "camera" | "cup" | "package" | "shelf" | "pinboard" | "notebook" | "microscope";

/** A clickable thing on the desk. Positions are % of the 16:9 scene. */
type Spot = { id: PanelId; label: string; x: number; y: number; w: number; img?: string; node?: ReactNode; tilt?: number; labelAt?: "top" | "bottom" };

const SPOTS: Spot[] = [
  { id: "camera", label: "say cheese", x: 5, y: 70, w: 13, img: "/objects/camera.webp", tilt: -6 },
  { id: "cup", label: "what's in my cup", x: 22, y: 63, w: 7.5, img: "/objects/tea.webp", tilt: 0 },
  {
    id: "microscope",
    label: "my research",
    x: 22.5,
    y: 40,
    w: 9,
    tilt: -5,
    node: (
      <span className="block bg-white p-[7%] pb-[22%] shadow-[0_1vw_1.4vw_-0.6vw_rgba(0,0,0,.5)]">
        <span className="flex aspect-square items-center justify-center bg-[#1b0d08]">
          <FundusO size="86%" />
        </span>
        <span className="hand absolute inset-x-0 bottom-[4%] text-center text-[1vw] leading-none text-ink">fovea · 84.97%</span>
      </span>
    ),
  },
  {
    id: "phone",
    label: "say hi",
    x: 45,
    y: 70,
    w: 6.2,
    tilt: -14,
    labelAt: "bottom",
    node: (
      <span className="block rounded-[1.1vw] bg-[#1c1c1e] p-[5%] shadow-[0_1.2vw_1.4vw_-0.4vw_rgba(0,0,0,.6)] ring-1 ring-white/10">
        <span className="flex aspect-[9/19] flex-col gap-[6%] rounded-[0.8vw] bg-white px-[9%] pt-[24%]">
          <span className="mx-auto mb-[4%] h-[4%] w-[30%] rounded-full bg-black/80" />
          <span className="w-[78%] rounded-[0.5vw] bg-[#e9e9eb] py-[9%]" />
          <span className="w-[62%] rounded-[0.5vw] bg-[#e9e9eb] py-[9%]" />
          <span className="ml-auto w-[70%] rounded-[0.5vw] bg-[#0a84ff] py-[9%]" />
          <span className="w-[50%] rounded-[0.5vw] bg-[#e9e9eb] py-[9%]" />
        </span>
      </span>
    ),
  },
  { id: "notebook", label: "what's on the table", x: 68, y: 63, w: 7.5, img: "/objects/notebook.webp", tilt: -12 },
  { id: "package", label: "track my shipments", x: 80, y: 55, w: 13, img: "/objects/box.webp", tilt: 4 },
];

function Label({ text, show, at = "top" }: { text: string; show: boolean; at?: "top" | "bottom" }) {
  return (
    <motion.span
      aria-hidden
      className={`note pointer-events-none absolute left-1/2 z-30 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[clamp(0.85rem,1.4vw,1.25rem)] text-ink shadow-lg ${at === "top" ? "bottom-full mb-2" : "top-full mt-2"}`}
      style={{ translateX: "-50%" }}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : at === "top" ? 8 : -8, scale: show ? 1 : 0.9 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
    >
      {text}
    </motion.span>
  );
}

function Hotspot({ s, onOpen }: { s: Spot; onOpen: (id: PanelId) => void }) {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      aria-label={s.label}
      className="absolute"
      style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%` }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={() => onOpen(s.id)}
    >
      <Label text={s.label} show={hover} at={s.labelAt} />
      <motion.span
        className="relative block"
        style={{ rotate: s.tilt }}
        animate={reduced ? undefined : { y: hover ? -10 : 0, scale: hover ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 18 }}
      >
        {s.node ?? <img src={s.img} alt="" className="sticker block h-auto w-full" />}
      </motion.span>
    </button>
  );
}

/** The laptop: a real little macOS inside the screen, live clock and all. */
function Laptop({ onOpen }: { onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <button
      type="button"
      aria-label="open my desktop"
      className="group absolute"
      style={{ left: "35%", top: "31%", width: "30%" }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={onOpen}
    >
      <Label text="open my desktop" show={hover} />
      {/* screen */}
      <div className="relative mx-auto aspect-[16/10] w-[92%] rounded-t-[0.9vw] border-[0.55vw] border-b-[0.9vw] border-[#1c1c1e] bg-black shadow-[0_2vw_3vw_-1vw_rgba(0,0,0,.45)]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={photos[2].src} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 top-0 flex h-[7%] items-center gap-[2%] bg-black/30 px-[2%] text-[0.55vw] text-white backdrop-blur">
            <span className="font-semibold">Finder</span>
            <span className="opacity-80">File</span>
            <span className="opacity-80">Edit</span>
            <span className="ml-auto opacity-90">{time}</span>
          </div>
          <div className="absolute right-[3%] top-[12%] grid grid-cols-2 gap-x-[1.2vw] gap-y-[0.5vw]">
            {CASES.slice(0, 6).map((c) => (
              <span key={c.id} className="flex w-[2.6vw] flex-col items-center">
                <FolderIcon size={22} />
                <span className="mt-[0.1vw] w-full truncate text-center text-[0.45vw] text-white [text-shadow:0_1px_1px_rgba(0,0,0,.8)]">{c.folder}</span>
              </span>
            ))}
          </div>
          <div className="absolute bottom-[4%] left-1/2 h-[9%] w-[46%] -translate-x-1/2 rounded-[0.5vw] border border-white/30 bg-white/25 backdrop-blur" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/25">
            <span className="note rounded-full bg-white/90 px-[1.2vw] py-[0.4vw] text-[1vw] text-ink opacity-0 transition-opacity group-hover:opacity-100">click to enter</span>
          </div>
        </div>
      </div>
      {/* base */}
      <div className="relative mx-auto h-[0.9vw] w-full rounded-b-[1vw] bg-gradient-to-b from-[#d9dadf] to-[#9fa1a8] shadow-[0_1.4vw_1.6vw_-0.6vw_rgba(0,0,0,.5)]">
        <span className="absolute left-1/2 top-0 h-[35%] w-[14%] -translate-x-1/2 rounded-b-md bg-[#b9bbc1]" />
      </div>
    </button>
  );
}

/** Shelf with the trophies, pinboard with the skills — both clickable. */
function Wall({ onOpen }: { onOpen: (id: PanelId) => void }) {
  const [shelfHover, setShelfHover] = useState(false);
  const [pinHover, setPinHover] = useState(false);
  return (
    <>
      {/* window */}
      <div aria-hidden className="absolute left-[2%] top-[6%] h-[50%] w-[19%] overflow-hidden rounded-[0.4vw] border-[0.7vw] border-white shadow-[inset_0_0_2vw_rgba(0,0,0,.15)]" style={{ background: "linear-gradient(#7fb8ee, #cfe6fa 70%, #f3eee3)" }}>
        <div className="absolute left-[10%] top-[18%] h-[12%] w-[38%] rounded-full bg-white/80 blur-[2px]" />
        <div className="absolute right-[8%] top-[34%] h-[9%] w-[30%] rounded-full bg-white/70 blur-[2px]" />
        <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[#6d8fa8]" style={{ clipPath: "polygon(0 60%,8% 40%,14% 55%,22% 20%,30% 45%,38% 30%,46% 50%,55% 10%,62% 40%,70% 35%,78% 55%,86% 25%,94% 45%,100% 30%,100% 100%,0 100%)" }} />
        <div className="absolute left-1/2 top-0 h-full w-[0.5vw] -translate-x-1/2 bg-white" />
        <div className="absolute left-0 top-1/2 h-[0.5vw] w-full -translate-y-1/2 bg-white" />
      </div>
      <img aria-hidden src="/objects/plant.webp" alt="" className="sticker absolute left-[11%] top-[40%] w-[12%]" />

      {/* shelf */}
      <button
        type="button"
        aria-label="the trophy shelf"
        className="absolute left-[28%] top-[3%] h-[24%] w-[38%]"
        onPointerEnter={() => setShelfHover(true)}
        onPointerLeave={() => setShelfHover(false)}
        onFocus={() => setShelfHover(true)}
        onBlur={() => setShelfHover(false)}
        onClick={() => onOpen("shelf")}
      >
        <Label text="the trophy shelf" show={shelfHover} />
        <div className="absolute inset-x-[3%] bottom-[13%] flex items-end justify-around">
          {[
            ["trophy", "15%"],
            ["medal", "12%"],
            ["headphones", "21%"],
            ["bulb", "19%"],
            ["cap", "25%"],
          ].map(([k, w], i) => (
            <motion.img
              key={k}
              src={`/objects/${k}.webp`}
              alt=""
              className="sticker h-auto"
              style={{ width: w }}
              animate={{ y: shelfHover ? -6 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 16, delay: i * 0.03 }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[16%] rounded-[0.2vw] bg-gradient-to-b from-[#9c6a3a] to-[#6b4321] shadow-[0_1.2vw_1.2vw_-0.6vw_rgba(0,0,0,.45)]" />
      </button>

      {/* pinboard */}
      <button
        type="button"
        aria-label="the pinboard"
        className="absolute left-[70%] top-[6%] h-[38%] w-[24%] rounded-[0.3vw] border-[0.6vw] border-[#8a5a32] shadow-[0_1vw_2vw_-1vw_rgba(0,0,0,.5)]"
        style={{ background: "radial-gradient(circle at 30% 30%, #d6ac7c 0 1px, transparent 2px) 0 0/8px 8px, #c99a69" }}
        onPointerEnter={() => setPinHover(true)}
        onPointerLeave={() => setPinHover(false)}
        onFocus={() => setPinHover(true)}
        onBlur={() => setPinHover(false)}
        onClick={() => onOpen("pinboard")}
      >
        <Label text="the pinboard" show={pinHover} />
        {[
          ["Python", "#ff5b35", 8, 10, -6],
          ["PyTorch", "#2340d9", 52, 8, 5],
          ["Laravel", "#2bd98b", 10, 48, 4],
          ["Next.js", "#ffd84d", 54, 44, -4],
          ["Docker", "#a259ff", 30, 72, -2],
        ].map(([t, pin, x, y, r]) => (
          <span
            key={t as string}
            className="note absolute w-[38%] bg-[#fffdf6] px-[4%] py-[5%] text-center text-[0.9vw] leading-none text-ink shadow-md transition-transform duration-300"
            style={{ left: `${x}%`, top: `${y}%`, rotate: `${r}deg`, transform: pinHover ? "translateY(-3px)" : undefined }}
          >
            <span className="absolute left-1/2 top-[-0.25vw] h-[0.6vw] w-[0.6vw] -translate-x-1/2 rounded-full" style={{ background: pin as string }} />
            {t}
          </span>
        ))}
      </button>
    </>
  );
}

const MOBILE_LIST: { id: PanelId; label: string; icon?: string }[] = [
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

/**
 * The last scene: Eymen's desk. Every object opens something — the laptop is a whole desktop with a
 * folder per job and project, the phone is a contact form, the notebook is the resume.
 */
export default function Desk() {
  const [open, setOpen] = useState<PanelId | null>(null);
  const close = () => setOpen(null);
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
    <section id="desk" aria-label="Eymen's desk" className="relative" style={{ background: "linear-gradient(var(--wall), var(--wall-2))" }}>
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 pb-1 pt-16 text-center md:pt-14">
        <p className="note text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink/60">my desk — click around ✦</p>
        {/* the quick version, for anyone short on time */}
        <nav aria-label="Quick links" className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-[13px]">
          {QUICK.map((q) =>
            q.href ? (
              <a key={q.label} href={q.href} target="_blank" rel="noopener" className="rounded-full px-3 py-1 text-ink/70 transition hover:bg-ink hover:text-cream">
                {q.label}
              </a>
            ) : (
              <button key={q.label} onClick={() => setOpen(q.id!)} className="rounded-full px-3 py-1 text-ink/70 transition hover:bg-ink hover:text-cream">
                {q.label}
              </button>
            ),
          )}
        </nav>
      </div>
      <div className="relative mx-auto aspect-[16/9] w-full max-w-[calc((100svh-6.5rem)*16/9)]">
        <Wall onOpen={setOpen} />
        {/* desk top */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-[38%]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(178deg, rgba(0,0,0,.06) 0 2px, transparent 2px 9px), repeating-linear-gradient(181deg, rgba(255,255,255,.05) 0 1px, transparent 1px 13px), linear-gradient(#8a5630, #6a3f20 60%, #4f2e16)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[6%] bg-gradient-to-b from-[#b07a4a] to-[#8a5630]" />
          <div className="absolute inset-x-0 bottom-0 h-[10%] bg-[#3e2410]" />
        </div>
        <Laptop onOpen={() => setOpen("desktop")} />
        {SPOTS.map((s) => (
          <Hotspot key={s.id} s={s} onOpen={setOpen} />
        ))}
      </div>

      {/* phones: the scene is small, so list everything too */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-8 pt-4 md:hidden">
        {MOBILE_LIST.map((m) => (
          <button key={m.id} onClick={() => setOpen(m.id)} className="flex flex-col items-center gap-1 rounded-2xl bg-white/70 p-3 text-center shadow-sm active:scale-95">
            {m.icon ? <img src={m.icon} alt="" className="h-10 w-10 object-contain" /> : m.id === "phone" ? <span className="text-3xl">💬</span> : <FundusO size="2.5rem" />}
            <span className="note text-[0.95rem] leading-tight text-ink">{m.label}</span>
          </button>
        ))}
      </div>

      {(Object.keys(panels) as PanelId[]).map((id) => (
        <Modal key={id} open={open === id} onClose={close} label={LABELS[id]} full={id === "desktop"}>
          {panels[id]}
        </Modal>
      ))}

      <footer className="flex flex-col items-center gap-1 px-5 pb-6 pt-4 text-center text-[12px] text-ink/45 md:pt-2">
        <p>© {new Date().getFullYear()} Eymen Faruk Keyvan · built with React, a lot of commits, and Lenis</p>
        <p>object photos: public-domain (CC0) via Openverse, cut out by hand · icons: Simple Icons (CC0)</p>
      </footer>
    </section>
  );
}
