import type { ReactNode } from "react";
import { experience, projects } from "../../content/site";
import { Invoice, NameBadge, OpticDisc, Phone, Radar, Retina, ShippingLabel, Terminal } from "../art";

export type Case = {
  id: string;
  folder: string;
  label: string;
  title: string;
  meta: string;
  intro: string;
  stats: { v: string; k: string }[];
  points: string[];
  stack?: string[];
  links?: { label: string; href: string }[];
  badge?: string;
  art: ReactNode;
  tint: string;
};

const [foma, nih, gdn] = experience;
const P = Object.fromEntries(projects.map((p) => [p.slug, p]));

/** Every folder on the desktop, built from the same content the resume uses. */
export const CASES: Case[] = [
  {
    id: "foma",
    folder: "FOMA",
    label: `${foma.org} · ${foma.orgNote}`,
    title: foma.title,
    meta: `${foma.period} · ${foma.where}`,
    intro: "A live custom-print business: thousands of marketplace orders, a production floor, and a platform that has to get every one of them right.",
    stats: [
      { v: "12,000+", k: "orders a month" },
      { v: "50+", k: "store operators on FomaHub" },
      { v: "78%", k: "of real order lines had a case seed data never made" },
    ],
    points: foma.bullets,
    stack: ["Laravel 12", "Filament", "MySQL", "Next.js", "Prisma", "PostgreSQL", "Docker", "Caddy", "GitHub Actions"],
    links: foma.links,
    art: (
      <div className="relative h-[300px] w-[290px]">
        <div className="absolute left-0 top-0 rotate-[-6deg]">
          <ShippingLabel />
        </div>
        <div className="absolute bottom-0 right-[-10px] rotate-[4deg]">
          <Terminal />
        </div>
      </div>
    ),
    tint: "#FFF4D6",
  },
  {
    id: "nih",
    folder: "NIH Research",
    label: `${nih.org} · ${nih.orgNote}`,
    title: nih.title,
    meta: `${nih.period} · ${nih.where}`,
    intro: "Automated eye-disease diagnosis from retinal images, for an ongoing NIH-funded study — where an honest number matters more than a pretty one.",
    stats: [
      { v: "84.97%", k: "Dice, fovea segmentation" },
      { v: "6,000+", k: "clinical images" },
      { v: "3", k: "datasets" },
    ],
    points: nih.bullets,
    stack: ["Python", "PyTorch", "ResNet34", "U-Net", "Google Colab"],
    links: nih.links,
    art: (
      <div className="scale-[1.4]">
        <Retina />
      </div>
    ),
    tint: "#FFE7DC",
  },
  {
    id: "gdn",
    folder: "GDN Club",
    label: `${gdn.org} · ${gdn.orgNote}`,
    title: gdn.title,
    meta: `${gdn.period} · ${gdn.where}`,
    intro: "Bringing students and industry into one room.",
    stats: [
      { v: "60+", k: "students at Youth Convention 2025" },
      { v: "3", k: "speaker orgs: Meta, Avanade, Emory" },
    ],
    points: gdn.bullets,
    art: <NameBadge />,
    tint: "#FFF0C2",
  },
  ...(["hey-buddy", "tariffcheck", "unet", "green-flight"] as const).map((slug): Case => {
    const p = P[slug];
    const art = { "hey-buddy": <Phone />, tariffcheck: <Invoice />, unet: <OpticDisc />, "green-flight": <Radar /> }[slug];
    const tint = { "hey-buddy": "#EEE8FF", tariffcheck: "#FFF6CC", unet: "#FFE4DC", "green-flight": "#DDF5E8" }[slug];
    return {
      id: slug,
      folder: p.title,
      label: `${p.tagline} · ${p.date}`,
      title: p.title,
      meta: p.award ?? p.date,
      intro: p.problem,
      stats: [{ v: p.result, k: "result" }],
      points: p.built,
      stack: p.stack,
      links: p.link ? [p.link] : undefined,
      badge: p.award,
      art,
      tint,
    };
  }),
];

/** A Finder-style window holding one case study. */
export function CaseWindow({ c, onClose }: { c: Case; onClose: () => void }) {
  return (
    <div className="flex max-h-[84svh] w-[min(980px,94vw)] flex-col overflow-hidden rounded-xl bg-white text-ink shadow-[0_50px_120px_-20px_rgba(0,0,0,.6)]">
      <div className="flex shrink-0 items-center gap-2 border-b border-black/5 bg-[#f6f5f3] px-4 py-2.5">
        <button aria-label="Close window" onClick={onClose} className="h-3 w-3 rounded-full bg-[#FF5F57] ring-1 ring-black/10 hover:brightness-90" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E] ring-1 ring-black/10" />
        <span className="h-3 w-3 rounded-full bg-[#28C840] ring-1 ring-black/10" />
        <span className="ml-3 truncate text-[13px] font-medium text-ink/70">{c.folder}</span>
      </div>
      <div className="overflow-y-auto" data-lenis-prevent>
        <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto]" style={{ background: `linear-gradient(180deg, ${c.tint}, #fff 85%)` }}>
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-ink/50">{c.label}</p>
            <h3 className="round mt-3 text-[clamp(2rem,4.4vw,3.4rem)] font-[900] leading-[0.95] tracking-[-0.02em]">{c.title}</h3>
            <p className="mt-2 text-sm text-ink/55">{c.meta}</p>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink/75">{c.intro}</p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {c.stats.map((s) => (
                <div key={s.k}>
                  <p className="round text-[clamp(1.5rem,3vw,2.2rem)] font-[900] leading-none text-cobalt">{s.v}</p>
                  <p className="mt-1 text-xs text-ink/55">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden className="hidden items-center justify-center md:flex md:w-[320px]">
            {c.art}
          </div>
        </div>
        <div className="px-7 pb-9 sm:px-10">
          <p className="note text-xl text-ink/50">what I did —</p>
          <ul className="mt-3 space-y-3">
            {c.points.map((b) => (
              <li key={b} className="relative pl-6 leading-relaxed text-ink/80">
                <span className="absolute left-0 top-[0.55em] h-2 w-2 rounded-full bg-sun ring-2 ring-sun/30" />
                {b}
              </li>
            ))}
          </ul>
          {c.stack && (
            <div className="mt-7 flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <span key={s} className="mono rounded-full bg-black/[.05] px-3 py-1 text-xs text-ink/70">
                  {s}
                </span>
              ))}
            </div>
          )}
          {c.links && (
            <div className="mt-7 flex flex-wrap gap-3">
              {c.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition hover:bg-cobalt">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
