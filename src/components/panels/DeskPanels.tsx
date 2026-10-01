import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cutout, education, experience, photos, profile, recognition, skills } from "../../content/site";

const spring = { type: "spring", stiffness: 320, damping: 26 } as const;

/* ───────────────────────────── phone: "say hi" ───────────────────────────── */

/** iMessage-style contact. Sending composes an email in the visitor's mail app — no server, no tracking. */
export function Messages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const time = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Hi from eymenkeyvan.com${name ? ` — ${name}` : ""}`;
    const body = `${note}\n\n— ${name || "someone"}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = "w-full rounded-[18px] rounded-br-md bg-[#0a84ff] px-3.5 py-2 text-[14px] text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-sun";

  return (
    <div className="rounded-[46px] bg-[#1a1a1a] p-[10px] shadow-[0_40px_100px_-20px_rgba(0,0,0,.7)]">
      <div className="relative flex h-[min(640px,84svh)] w-[min(320px,86vw)] flex-col overflow-hidden rounded-[38px] bg-white text-ink">
        <div className="flex items-center justify-between px-7 pt-3 text-[12px] font-semibold">
          <span>{time}</span>
          <span className="h-[26px] w-[90px] rounded-full bg-black" />
          <svg width="38" height="12" viewBox="0 0 38 12" aria-hidden><path d="M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 3h2v8h-2z" fill="currentColor"/><rect x="19.5" y="1.5" width="16" height="9" rx="2.5" fill="none" stroke="currentColor" opacity=".5"/><rect x="21" y="3" width="11" height="6" rx="1.4" fill="currentColor"/></svg>
        </div>
        <div className="flex flex-col items-center border-b border-black/5 pb-2 pt-2">
          <img src={cutout.src} alt="" className="h-11 w-11 rounded-full bg-[#2340D9] object-cover object-top" />
          <p className="mt-1 text-[12px] font-medium">Eymen ›</p>
        </div>
        <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-[14px]" data-lenis-prevent>
          <p className="text-center text-[11px] text-black/40">Today {time}</p>
          <p className="max-w-[78%] rounded-[18px] rounded-bl-md bg-[#e9e9eb] px-3.5 py-2">hey! you found my phone 👋</p>
          <p className="max-w-[78%] rounded-[18px] rounded-bl-md bg-[#e9e9eb] px-3.5 py-2">leave your name, email and a note — it opens straight in your email app, addressed to me.</p>
          <form onSubmit={send} className="ml-auto flex max-w-[82%] flex-col items-end gap-1.5 pt-2">
            <input className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name" />
            <input className={field} placeholder="Your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Your email" />
            <textarea className={`${field} min-h-[72px] resize-none`} placeholder="Your note" value={note} onChange={(e) => setNote(e.target.value)} aria-label="Your note" required />
            <button type="submit" className="mt-1 rounded-full bg-[#0a84ff] px-4 py-1.5 text-[13px] font-semibold text-white transition hover:brightness-110">
              Send ↑
            </button>
          </form>
          <AnimatePresence>
            {sent && (
              <motion.p className="max-w-[78%] rounded-[18px] rounded-bl-md bg-[#e9e9eb] px-3.5 py-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                opened your mail app — just hit send there. talk soon!
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="mx-auto mb-2 h-1 w-28 rounded-full bg-black/80" />
      </div>
    </div>
  );
}

/* ───────────────────────────── camera: "say cheese" ───────────────────────────── */

const ROLL = [
  { src: photos[0].src, caption: photos[0].caption, alt: photos[0].alt },
  { src: "/photos/supreme-court.webp", caption: photos[1].caption, alt: photos[1].alt },
  { src: photos[2].src, caption: photos[2].caption, alt: photos[2].alt },
  { src: cutout.src, caption: "hi, that's me", alt: "Portrait of Eymen", bg: "#2340D9" },
];

/** A little Photo Booth: Eymen's camera roll, with a shutter flash when you switch. */
export function PhotoBooth() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [flash, setFlash] = useState(0);
  const pick = (n: number) => {
    setI((n + ROLL.length) % ROLL.length);
    setFlash((f) => f + 1);
  };
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") pick(i + 1);
      if (e.key === "ArrowLeft") pick(i - 1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });
  const shot = ROLL[i];

  return (
    <div className="w-[min(760px,94vw)] overflow-hidden rounded-2xl bg-[#1d1d1f] text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,.7)]">
      <div className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-white/60">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2">Photo Booth — say cheese</span>
      </div>
      <div className="relative mx-4 aspect-[4/3] overflow-hidden rounded-lg bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="absolute inset-0 h-full w-full object-contain"
            style={{ background: shot.bg }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          />
        </AnimatePresence>
        {!reduced && (
          <motion.div key={flash} className="pointer-events-none absolute inset-0 bg-white" initial={{ opacity: flash ? 0.85 : 0 }} animate={{ opacity: 0 }} transition={{ duration: 0.5 }} />
        )}
        <p className="hand absolute bottom-3 left-4 text-3xl [text-shadow:0_2px_8px_rgba(0,0,0,.6)]">{shot.caption}</p>
      </div>
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => pick(i + 1)} aria-label="Next photo" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff3b30] ring-4 ring-white/15 transition hover:scale-105">
          <span className="h-5 w-5 rounded-full border-2 border-white" />
        </button>
        <div className="flex gap-2 overflow-x-auto">
          {ROLL.map((r, n) => (
            <button key={r.src} onClick={() => pick(n)} aria-label={`Show ${r.caption}`} className={`h-14 w-14 shrink-0 overflow-hidden rounded-md ring-2 transition ${n === i ? "ring-sun" : "ring-transparent opacity-60 hover:opacity-100"}`}>
              <img src={r.src} alt="" className="h-full w-full object-cover" style={{ background: r.bg, objectPosition: r.bg ? "50% 15%" : undefined }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── cup: "what's in my cup" ───────────────────────────── */

/** A café receipt for what Eymen is working on right now. */
export function Receipt() {
  const today = new Date().toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
  const Row = ({ k, v }: { k: string; v: string }) => (
    <div className="mt-3">
      <p className="text-[10px] tracking-[0.18em] text-black/45">{k}</p>
      <p className="mt-0.5 leading-snug">{v}</p>
    </div>
  );
  return (
    <motion.div
      className="mono relative w-[min(340px,88vw)] bg-[#fdfcf8] px-6 pb-10 pt-7 text-[12.5px] text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,.55)]"
      style={{ clipPath: "polygon(0 0,100% 0,100% calc(100% - 10px),95% 100%,90% calc(100% - 10px),85% 100%,80% calc(100% - 10px),75% 100%,70% calc(100% - 10px),65% 100%,60% calc(100% - 10px),55% 100%,50% calc(100% - 10px),45% 100%,40% calc(100% - 10px),35% 100%,30% calc(100% - 10px),25% 100%,20% calc(100% - 10px),15% 100%,10% calc(100% - 10px),5% 100%,0 calc(100% - 10px))" }}
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={spring}
    >
      <p className="text-center text-[15px] font-bold tracking-[0.2em]">EYMEN'S DESK</p>
      <p className="text-center text-[10px] tracking-[0.2em] text-black/50">ATLANTA, GA</p>
      <p className="mt-3 text-center text-black/30">********************************</p>
      <p className="mt-1 text-center">what's in my cup today</p>
      <p className="text-center text-[11px] text-black/50">
        {today} · ORDER #2027
      </p>
      <p className="mt-2 text-black/30">================================</p>
      <Row k="WORKING ON" v="landing a Summer 2027 SWE / ML internship, Hey Buddy, and this very site" />
      <Row k="STUDYING" v="Operating Systems, Big Data Analytics (Spark), Algorithm Analysis, AI" />
      <Row k="LAST SHIPPED" v="Hey Buddy — 1st place, ElevenLabs track at HackGT 13" />
      <Row k="RESEARCHING" v="retinal imaging for an NIH-funded study at KSU" />
      <Row k="DRINKING" v="whatever keeps the build green" />
      <p className="mt-3 text-black/30">================================</p>
      <p className="mt-2 text-center font-bold tracking-[0.2em]">THANK YOU</p>
      <p className="text-center text-[10px] tracking-[0.2em] text-black/50">COME AGAIN SOON</p>
      <div className="mx-auto mt-3 flex h-10 w-48 items-stretch gap-[2px]" aria-hidden>
        {"3121131213221312".split("").map((w, n) => (
          <span key={n} className="bg-ink" style={{ width: +w * 2 }} />
        ))}
        {"2131221312".split("").map((w, n) => (
          <span key={`b${n}`} className="bg-ink" style={{ width: +w * 2 }} />
        ))}
      </div>
    </motion.div>
  );
}

/* ───────────────────────────── package: "track my shipments" ───────────────────────────── */

/** FOMA as a parcel-tracking page: picked up in April, delivered in September. */
export function Tracking() {
  const reduced = useReducedMotion();
  const foma = experience[0];
  const steps = [
    { when: "Apr 2026", what: "Picked up — joined FOMA as AI Automation Intern", where: "Remote" },
    { when: "In transit", what: foma.bullets[0], where: "Laravel 12 · Filament · MySQL" },
    { when: "In transit", what: foma.bullets[1], where: "Next.js · Prisma · PostgreSQL" },
    { when: "In transit", what: foma.bullets[2], where: "Docker · Caddy · GitHub Actions" },
    { when: "Out for delivery", what: foma.bullets[3], where: "REST · queues · webhooks" },
    { when: "Sep 2026", what: "Delivered ✓ — internship complete", where: "" },
  ];
  return (
    <div className="w-[min(640px,94vw)] rounded-2xl bg-white p-6 text-ink shadow-[0_40px_100px_-20px_rgba(0,0,0,.6)] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono text-[11px] tracking-[0.16em] text-ink/50">TRACKING · 1Z 2026 APR SEP</p>
          <h3 className="round mt-1 text-3xl font-[900]">Delivered</h3>
          <p className="text-sm text-ink/60">FOMA order platform · 12,000+ orders a month</p>
        </div>
        <img src="/objects/box.webp" alt="" className="h-20 w-20 object-contain" />
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10">
        <motion.div className="h-full rounded-full bg-[#28C840]" initial={{ width: reduced ? "100%" : "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} />
      </div>
      <ol className="mt-6 space-y-0">
        {steps.map((s, n) => (
          <motion.li
            key={n}
            className="relative border-l-2 border-[#28C840]/40 pb-5 pl-6 last:border-transparent last:pb-0"
            initial={reduced ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + n * 0.12 }}
          >
            <span className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full ${n === steps.length - 1 ? "bg-[#28C840] ring-4 ring-[#28C840]/25" : "bg-[#28C840]"}`} />
            <p className="mono text-[11px] uppercase tracking-wider text-ink/50">{s.when}</p>
            <p className="mt-0.5 leading-snug">{s.what}</p>
            {s.where && <p className="mt-0.5 text-xs text-ink/50">{s.where}</p>}
          </motion.li>
        ))}
      </ol>
      <a href="https://fomaprint.com" target="_blank" rel="noopener" className="mt-6 inline-block rounded-full bg-ink px-4 py-2 text-sm text-cream hover:bg-cobalt">
        fomaprint.com ↗
      </a>
    </div>
  );
}

/* ───────────────────────────── shelf: "the trophy shelf" ───────────────────────────── */

export function Trophies() {
  const reduced = useReducedMotion();
  const icons = ["medal", "trophy", "plane", "cap"];
  return (
    <div className="w-[min(720px,94vw)] rounded-2xl bg-[#f7f2e8] p-6 text-ink shadow-[0_40px_100px_-20px_rgba(0,0,0,.6)] sm:p-8">
      <p className="note text-2xl text-ink/60">the trophy shelf —</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {recognition.map((r, n) => (
          <motion.div
            key={r}
            className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
            initial={reduced ? false : { opacity: 0, y: 20, rotate: n % 2 ? 2 : -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ ...spring, delay: n * 0.08 }}
          >
            <img src={`/objects/${icons[n % icons.length]}.webp`} alt="" className="h-14 w-14 shrink-0 object-contain" />
            <p className="round text-lg font-[800] leading-tight">{r}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 h-3 rounded-sm bg-gradient-to-b from-[#a0703f] to-[#6e4522] shadow-[0_8px_14px_-6px_rgba(0,0,0,.5)]" />
    </div>
  );
}

/* ───────────────────────────── pinboard: "the pinboard" ───────────────────────────── */

const PIN = ["#ff5b35", "#2340d9", "#2bd98b", "#ffd84d", "#a259ff"];

export function Pinboard() {
  const reduced = useReducedMotion();
  return (
    <div
      className="w-[min(900px,94vw)] rounded-2xl border-[10px] border-[#8a5a32] p-5 shadow-[0_40px_100px_-20px_rgba(0,0,0,.6)] sm:p-7"
      style={{ background: "radial-gradient(circle at 20% 30%, #d6ac7c 0 1px, transparent 2px) 0 0/9px 9px, radial-gradient(circle at 70% 60%, #b98a5c 0 1px, transparent 2px) 0 0/13px 13px, #c99a69" }}
    >
      <p className="note mb-4 text-2xl text-[#3b2410]">the pinboard — what I work with</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, n) => (
          <motion.div
            key={s.label}
            className="relative bg-[#fffdf6] p-4 pt-5 text-ink shadow-[0_10px_20px_-8px_rgba(0,0,0,.45)]"
            initial={reduced ? false : { opacity: 0, y: -30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: [-2.5, 1.5, -1, 2, -1.5][n % 5] }}
            transition={{ ...spring, delay: n * 0.07 }}
          >
            <span className="absolute left-1/2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full shadow-[0_2px_3px_rgba(0,0,0,.4)]" style={{ background: PIN[n % PIN.length] }} />
            <p className="note text-xl">{s.label}</p>
            <p className="mt-1 text-[13.5px] leading-relaxed text-ink/75">{s.items.join(" · ")}</p>
          </motion.div>
        ))}
        <motion.div
          className="relative bg-[#fff3b0] p-4 pt-5 text-ink shadow-[0_10px_20px_-8px_rgba(0,0,0,.45)]"
          initial={reduced ? false : { opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ ...spring, delay: skills.length * 0.07 }}
        >
          <span className="absolute left-1/2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#2340d9] shadow-[0_2px_3px_rgba(0,0,0,.4)]" />
          <p className="note text-xl">coursework</p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-ink/75">{education.coursework.join(" · ")}</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────────── notebook: "what's on the table" ───────────────────────────── */

export function Notebook() {
  return (
    <div className="flex w-[min(940px,94vw)] flex-col overflow-hidden rounded-xl bg-[#6b1f2a] p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,.65)] md:flex-row">
      <div className="flex flex-1 items-center justify-center bg-[#fbf8f1] p-5 md:rounded-l-md">
        <a href={profile.resume} target="_blank" rel="noopener" className="block w-full max-w-[300px] rotate-[-2deg] bg-white p-2 shadow-lg transition hover:rotate-0">
          <img src={profile.resumePreview} alt="First page of Eymen's resume" className="block w-full" />
        </a>
      </div>
      <div
        className="flex-1 bg-[#fbf8f1] p-7 text-ink md:rounded-r-md md:border-l md:border-black/10"
        style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, rgba(35,64,217,.12) 31px 32px)" }}
      >
        <p className="note text-[1.7rem] leading-[32px] text-ink/80">what's on the table —</p>
        <p className="note text-[1.3rem] leading-[32px]">
          {education.degree}, {education.school} ({education.grad}), GPA {education.gpa}. Shipped production code at FOMA, research at an NIH-funded lab, 1st at HackGT 13.
        </p>
        <p className="note text-[1.3rem] leading-[32px]">Looking for: {profile.seeking}. {profile.relocation}.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={profile.resume} target="_blank" rel="noopener" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream hover:bg-cobalt">
            Open resume (PDF) ↗
          </a>
          <a href={profile.resume} download="Eymen_Keyvan_Resume.pdf" className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium hover:border-ink">
            Download ↓
          </a>
        </div>
      </div>
    </div>
  );
}
