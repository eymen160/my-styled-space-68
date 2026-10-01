import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { photos, profile } from "../../content/site";
import { CASES, CaseWindow } from "./cases";
import { AppleLogo, Brand, DockGlyph, FolderIcon, PdfIcon, STACK, Tile } from "./icons";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

/**
 * Eymen's laptop, full screen: a little macOS. Folders open case-study windows, the left grid is the
 * stack, and the dock reaches the outside world.
 */
export default function MacDesktop({ onExit, openPhotos }: { onExit: () => void; openPhotos: () => void }) {
  const reduced = useReducedMotion();
  const now = useClock();
  const [win, setWin] = useState<string | null>(null);
  const active = CASES.find((c) => c.id === win) ?? null;

  const date = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  const dock = [
    { label: "Finder — open FOMA", glyph: DockGlyph.finder, onClick: () => setWin("foma") },
    { label: "Mail Eymen", glyph: DockGlyph.mail, href: `mailto:${profile.email}` },
    { label: "LinkedIn", glyph: DockGlyph.linkedin, href: profile.linkedin },
    { label: "GitHub", glyph: DockGlyph.github, href: profile.github },
    { label: "Photos", glyph: DockGlyph.photos, onClick: openPhotos },
    { label: "Resume (PDF)", glyph: DockGlyph.preview, href: profile.resume },
    { label: "Terminal — Hey Buddy", glyph: DockGlyph.terminal, onClick: () => setWin("hey-buddy") },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden text-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, Geist, sans-serif" }}>
      {/* wallpaper: Eymen's own lake photo */}
      <img src={photos[2].src} alt="" className="absolute inset-0 h-full w-full scale-105 object-cover" style={{ filter: "saturate(1.1) brightness(.92)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
      <p className="hand pointer-events-none absolute bottom-[22%] left-[6%] rotate-[-8deg] text-[clamp(1.6rem,3.4vw,3rem)] text-white/75">ship it, then make it better.</p>

      {/* menu bar */}
      <div className="relative z-20 flex h-7 items-center gap-4 bg-black/25 px-3 text-[13px] backdrop-blur-xl">
        <AppleLogo />
        <span className="font-semibold">{active ? active.folder : "Finder"}</span>
        <span className="hidden gap-4 opacity-90 sm:flex">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </span>
        <span className="ml-auto flex items-center gap-3 opacity-95">
          <svg width="38" height="12" viewBox="0 0 38 12" aria-hidden><path d="M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 3h2v8h-2z" fill="currentColor"/><rect x="19.5" y="1.5" width="16" height="9" rx="2.5" fill="none" stroke="currentColor" opacity=".5"/><rect x="21" y="3" width="11" height="6" rx="1.4" fill="currentColor"/></svg>
          <span className="hidden sm:inline">{date}</span>
          <span>{time}</span>
        </span>
      </div>

      <button
        onClick={onExit}
        aria-label="Leave the desktop"
        className="absolute left-3 top-10 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-lg backdrop-blur-md transition hover:bg-black/55"
      >
        ←
      </button>

      {/* the stack */}
      <div className="absolute left-[3%] top-[12%] z-10 hidden grid-cols-3 gap-x-5 gap-y-4 sm:grid lg:grid-cols-4">
        {STACK.map((s, i) => (
          <motion.div
            key={s.name}
            className="flex w-[66px] flex-col items-center gap-1"
            initial={reduced ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.025, type: "spring", stiffness: 300, damping: 20 }}
          >
            <Tile>
              <Brand icon={s.icon} />
            </Tile>
            <span className="text-center text-[11px] leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,.7)]">{s.name}</span>
          </motion.div>
        ))}
      </div>

      {/* folders */}
      <div className="absolute right-[3%] top-[12%] z-10 grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-5">
        {CASES.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => setWin(c.id)}
            className="group flex w-[86px] flex-col items-center gap-1 rounded-lg p-1.5 focus-visible:bg-white/15"
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.05 }}
          >
            <span className="transition-transform group-hover:-translate-y-0.5">
              <FolderIcon />
            </span>
            <span className="rounded px-1 text-center text-[12px] leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,.8)] group-hover:bg-[#0a64d8]">{c.folder}</span>
          </motion.button>
        ))}
        <a href={profile.resume} target="_blank" rel="noopener" className="group flex w-[86px] flex-col items-center gap-1 rounded-lg p-1.5">
          <span className="transition-transform group-hover:-translate-y-0.5">
            <PdfIcon />
          </span>
          <span className="rounded px-1 text-center text-[12px] leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,.8)] group-hover:bg-[#0a64d8]">Resume.pdf</span>
        </a>
      </div>

      {/* dock */}
      <div className="absolute bottom-3 left-1/2 z-20 flex origin-bottom -translate-x-1/2 scale-[0.74] items-end gap-2 rounded-[22px] sm:scale-100 border border-white/25 bg-white/20 px-2.5 py-2 backdrop-blur-2xl">
        {dock.map((d) =>
          d.href ? (
            <a key={d.label} href={d.href} target={d.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener" aria-label={d.label} title={d.label} className="transition-transform hover:-translate-y-2">
              {d.glyph}
            </a>
          ) : (
            <button key={d.label} onClick={d.onClick} aria-label={d.label} title={d.label} className="transition-transform hover:-translate-y-2">
              {d.glyph}
            </button>
          ),
        )}
        <span className="mx-1 h-11 w-px bg-white/30" />
        <span title="Trash">{DockGlyph.trash}</span>
      </div>

      {/* the open window */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            className="absolute inset-0 z-30 flex items-center justify-center p-3 pt-10"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            <CaseWindow c={active} onClose={() => setWin(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
