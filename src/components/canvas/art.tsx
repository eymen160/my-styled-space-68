// Hand-built sticker art for the hero canvas. Each piece is a small story from the resume.
// Pure SVG/CSS so it stays crisp at any size and weighs almost nothing.

import { profile } from "../../content/site";

const sticker = "drop-shadow(0 1px 1px rgba(0,0,0,.12)) drop-shadow(0 14px 22px rgba(20,18,10,.22))";

/** HackGT 13 — 1st place, ElevenLabs track. */
export function Medal() {
  return (
    <svg width="132" height="196" viewBox="0 0 132 196" style={{ filter: sticker }} aria-hidden>
      <defs>
        <radialGradient id="gold" cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#FFF2B8" />
          <stop offset=".45" stopColor="#F5C542" />
          <stop offset="1" stopColor="#B7811B" />
        </radialGradient>
      </defs>
      {/* ribbon */}
      <path d="M30 0h30l18 92H48z" fill="#0D99FF" />
      <path d="M72 0h30L84 92H54z" fill="#A259FF" />
      <path d="M44 0h8l17 88h-8zM86 0h8L77 88h-8z" fill="#fff" opacity=".55" />
      {/* medal */}
      <circle cx="66" cy="134" r="58" fill="#fff" />
      <circle cx="66" cy="134" r="52" fill="url(#gold)" />
      <circle cx="66" cy="134" r="41" fill="none" stroke="#9A6A12" strokeOpacity=".45" strokeWidth="2" strokeDasharray="3 4" />
      <text x="66" y="142" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="700" fontSize="34" fill="#5B3B05">
        1st
      </text>
      <text x="66" y="162" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="8.5" letterSpacing="1.5" fill="#5B3B05">
        HACKGT 13
      </text>
    </svg>
  );
}

const BARS = [3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3];

/** FOMA — the order platform: 12,000+ orders a month. */
export function ShippingLabel() {
  let x = 0;
  return (
    <div className="relative w-[232px] rounded-[6px] bg-white p-3.5 text-[#16150F]" style={{ filter: sticker }}>
      <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-[#F7E9A8]/80" />
      <div className="flex items-start justify-between border-b-2 border-[#16150F] pb-2">
        <div>
          <p className="font-mono text-[8px] tracking-widest text-[#7a766c]">FROM</p>
          <p className="text-[15px] font-bold leading-none">FOMA</p>
          <p className="mt-0.5 font-mono text-[8px] text-[#7a766c]">order platform · Laravel</p>
        </div>
        <span className="bg-[#16150F] px-1.5 py-1 font-mono text-[9px] font-bold tracking-wider text-white">PRIORITY</span>
      </div>
      <p className="mt-2 font-mono text-[8px] tracking-widest text-[#7a766c]">SHIP TO</p>
      <p className="text-[19px] font-bold leading-tight">12,000+ orders</p>
      <p className="text-[11px] leading-tight text-[#4a473f]">every month · shipped by code I wrote</p>
      <svg className="mt-2.5" width="204" height="30" viewBox="0 0 204 30" aria-hidden>
        {BARS.map((w, i) => {
          const r = i % 2 === 0 ? <rect key={i} x={x} y="0" width={w * 1.9} height="30" fill="#16150F" /> : null;
          x += w * 1.9 + 1.6;
          return r;
        })}
      </svg>
      <p className="mt-1 font-mono text-[8px] tracking-[0.18em] text-[#4a473f]">1Z 2026 APR SEP 0012 000</p>
    </div>
  );
}

/** NIH research — fovea segmentation, 84.97% Dice. */
export function Retina() {
  return (
    <div className="relative">
      <svg width="156" height="156" viewBox="0 0 156 156" style={{ filter: sticker }} aria-hidden>
        <defs>
          <radialGradient id="fundus" cx="50%" cy="50%" r="55%">
            <stop offset="0" stopColor="#F6A04D" />
            <stop offset=".55" stopColor="#D8532A" />
            <stop offset="1" stopColor="#6E1A0E" />
          </radialGradient>
          <radialGradient id="disc" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#FFF6C9" />
            <stop offset="1" stopColor="#F5C66A" />
          </radialGradient>
          <clipPath id="eye">
            <circle cx="78" cy="78" r="66" />
          </clipPath>
        </defs>
        <circle cx="78" cy="78" r="74" fill="#fff" />
        <circle cx="78" cy="78" r="66" fill="url(#fundus)" />
        <g clipPath="url(#eye)" fill="none" stroke="#7A160C" strokeLinecap="round" opacity=".75">
          <path d="M44 72 C 60 48, 86 36, 124 30" strokeWidth="2.6" />
          <path d="M44 74 C 64 96, 92 112, 130 118" strokeWidth="2.6" />
          <path d="M44 70 C 40 46, 46 24, 60 8" strokeWidth="2" />
          <path d="M44 78 C 36 104, 44 126, 58 148" strokeWidth="2" />
          <path d="M80 46 C 94 58, 104 60, 118 56" strokeWidth="1.4" />
          <path d="M84 104 C 96 94, 110 94, 124 98" strokeWidth="1.4" />
          <path d="M62 40 C 70 30, 84 24, 96 22" strokeWidth="1.2" />
          <path d="M64 114 C 74 126, 86 132, 100 136" strokeWidth="1.2" />
        </g>
        <circle cx="44" cy="74" r="13" fill="url(#disc)" />
        <circle cx="92" cy="78" r="7" fill="#8A2410" opacity=".55" />
        <circle cx="92" cy="78" r="17" fill="none" stroke="#0D99FF" strokeWidth="2" strokeDasharray="4 3" />
      </svg>
      <span className="absolute -bottom-1 right-0 rounded-md bg-[#0D99FF] px-2 py-1 font-mono text-[10px] font-medium text-white shadow-md">
        fovea · Dice 84.97%
      </span>
    </div>
  );
}

/** Hey Buddy — live phone interpreter. */
export function Phone() {
  return (
    <div className="relative h-[282px] w-[148px] rounded-[30px] bg-[#16150F] p-[7px]" style={{ filter: sticker }}>
      <div className="flex h-full flex-col rounded-[24px] bg-[#FBFAF7] px-2.5 pb-3 pt-7 text-[#16150F]">
        <span aria-hidden className="absolute left-1/2 top-[13px] h-[14px] w-[46px] -translate-x-1/2 rounded-full bg-[#16150F]" />
        <p className="text-center font-mono text-[8px] tracking-widest text-[#7a766c]">LIVE CALL · 02:14</p>
        <p className="mt-0.5 text-center text-[11px] font-semibold">Hey Buddy</p>
        <div className="mt-3 space-y-2 text-[10.5px] leading-snug">
          <p className="max-w-[88%] rounded-2xl rounded-bl-md bg-[#ECEAE4] px-2.5 py-1.5">¿Me escuchas bien?</p>
          <p className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-[#0D99FF] px-2.5 py-1.5 text-white">Can you hear me okay?</p>
          <p className="max-w-[88%] rounded-2xl rounded-bl-md bg-[#ECEAE4] px-2.5 py-1.5">Sí, perfecto.</p>
        </div>
        <div className="mt-auto flex items-end justify-center gap-[3px]" aria-hidden>
          {[0.2, 0.5, 0.1, 0.7, 0.35, 0.6, 0.15, 0.45, 0.25].map((d, i) => (
            <span
              key={i}
              className="w-[4px] origin-bottom rounded-full bg-[#A259FF]"
              style={{ height: 18, animation: `wave 1.1s ${d}s ease-in-out infinite` }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-center font-mono text-[8.5px] text-[#7a766c]">translated in 0.9 s</p>
      </div>
    </div>
  );
}

/** Turkish tea — the actual fuel behind all of the above. */
export function Tea() {
  return (
    <svg width="118" height="150" viewBox="0 0 118 150" style={{ filter: sticker }} aria-hidden>
      <defs>
        <linearGradient id="tea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#D2521C" />
          <stop offset="1" stopColor="#8E2A0A" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" />
          <stop offset=".3" stopColor="#fff" stopOpacity=".15" />
          <stop offset="1" stopColor="#fff" stopOpacity=".45" />
        </linearGradient>
      </defs>
      {/* steam */}
      <g fill="none" stroke="#B9B4A8" strokeWidth="2.5" strokeLinecap="round">
        <path d="M48 26 c-6 -8 6 -12 0 -22" style={{ animation: "steam 2.6s ease-in-out infinite" }} />
        <path d="M64 28 c-6 -8 6 -12 0 -22" style={{ animation: "steam 2.6s .9s ease-in-out infinite" }} />
      </g>
      {/* saucer */}
      <ellipse cx="59" cy="132" rx="54" ry="14" fill="#fff" />
      <ellipse cx="59" cy="130" rx="48" ry="10" fill="#C8102E" />
      <ellipse cx="59" cy="129" rx="30" ry="5.5" fill="#fff" opacity=".85" />
      {/* tulip glass */}
      <path d="M32 34 h54 c0 18 -14 30 -14 46 c0 14 12 22 12 40 c0 8 -8 10 -25 10 s-25 -2 -25 -10 c0 -18 12 -26 12 -40 c0 -16 -14 -28 -14 -46z" fill="#fff" />
      <path d="M36 44 h46 c-2 14 -13 24 -13 38 c0 13 11 21 11 36 c0 5 -7 6 -21 6 s-21 -1 -21 -6 c0 -15 11 -23 11 -36 c0 -14 -11 -24 -13 -38z" fill="url(#tea)" />
      <path d="M32 34 h54 c0 18 -14 30 -14 46 c0 14 12 22 12 40 c0 8 -8 10 -25 10 s-25 -2 -25 -10 c0 -18 12 -26 12 -40 c0 -16 -14 -28 -14 -46z" fill="url(#glass)" />
      <ellipse cx="59" cy="34" rx="27" ry="3.5" fill="none" stroke="#D9D4C8" strokeWidth="2" />
      {/* spoon */}
      <path d="M88 118 L106 96" stroke="#B9B4A8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** The ask, in handwriting. */
export function StickyNote() {
  return (
    <div className="relative w-[196px] bg-[#FFE27A] px-4 pb-5 pt-6 text-[#2b2410]" style={{ filter: sticker, clipPath: "polygon(0 0,100% 0,100% 88%,88% 100%,0 100%)" }}>
      <span aria-hidden className="absolute bottom-0 right-0 h-[12%] w-[12%] bg-[#E8C650]" />
      <p className="hand text-[27px] font-bold leading-[0.95]">Summer 2027 intern</p>
      <p className="hand mt-1.5 text-[20px] leading-tight">SWE / ML · anywhere in the US ✈︎</p>
      <p className="hand mt-2 inline-block text-[24px] font-bold text-[#C8102E] underline decoration-wavy decoration-2 underline-offset-4">hire me :)</p>
    </div>
  );
}

/** Ships to production. */
export function Terminal() {
  return (
    <div className="w-[250px] overflow-hidden rounded-xl bg-[#1B1A17] ring-1 ring-white/10 font-mono text-[10.5px] leading-[1.7] text-[#EDEAE2]" style={{ filter: sticker }}>
      <div className="flex items-center gap-1.5 bg-[#26241F] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F24E1E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFC700]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0ACF83]" />
        <span className="ml-2 text-[9px] text-[#8a857b]">~/ship</span>
      </div>
      <div className="px-3 py-2.5">
        <p>
          <span className="text-[#A259FF]">$</span> git push origin main
        </p>
        <p className="text-[#0ACF83]">✓ 250 tests passed</p>
        <p className="text-[#0ACF83]">✓ health check ok</p>
        <p>
          <span className="text-[#0ACF83]">✓ deployed</span> to production
          <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-[#EDEAE2]" style={{ animation: "blink 1s steps(1) infinite" }} />
        </p>
      </div>
    </div>
  );
}

/** The resume, as a file on the canvas. */
export function ResumeFile() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[112px] rotate-0 bg-white p-1.5" style={{ filter: sticker }}>
        <img src={profile.resumePreview} alt="" width={773} height={1000} className="block h-auto w-full" draggable={false} />
      </div>
      <span className="rounded-md bg-[#16150F] px-2 py-1 font-mono text-[10px] text-white shadow ring-1 ring-white/15">resume.pdf ↗</span>
    </div>
  );
}

/** Atlanta, GA. */
export function Peach() {
  return (
    <svg width="96" height="100" viewBox="0 0 96 100" style={{ filter: sticker }} aria-hidden>
      <defs>
        <radialGradient id="peach" cx="35%" cy="35%" r="70%">
          <stop offset="0" stopColor="#FFD3A6" />
          <stop offset=".5" stopColor="#FF9A6B" />
          <stop offset="1" stopColor="#E0533D" />
        </radialGradient>
      </defs>
      <path d="M48 22 C 18 16, 4 44, 10 66 C 16 88, 38 96, 48 92 C 58 96, 80 88, 86 66 C 92 44, 78 16, 48 22z" fill="#fff" />
      <path d="M48 27 C 22 22, 10 46, 15 65 C 20 84, 39 90, 48 87 C 57 90, 76 84, 81 65 C 86 46, 74 22, 48 27z" fill="url(#peach)" />
      <path d="M48 30 C 44 50, 45 70, 48 86" stroke="#C74432" strokeWidth="2" fill="none" opacity=".45" />
      <path d="M48 26 C 50 16, 58 8, 72 6 C 70 18, 60 24, 48 26z" fill="#0ACF83" stroke="#fff" strokeWidth="3" paintOrder="stroke" />
      <text x="48" y="64" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="700" fontSize="17" fill="#fff" opacity=".95">
        ATL
      </text>
    </svg>
  );
}
