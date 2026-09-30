// Hand-built illustrations for the experience and project cards.
// Pure SVG/CSS so it stays crisp at any size and weighs almost nothing.

const sticker = "drop-shadow(0 1px 1px rgba(0,0,0,.12)) drop-shadow(0 14px 22px rgba(20,18,10,.22))";

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


/** TariffCheck — an invoice with the wrong HTS code caught. */
export function Invoice() {
  const rows = [
    ["Walnut cabinet, 2-door", "9403.40.9060", "$12,400.00", false],
    ["Brass hinge set ×40", "8302.10.6060", "$412.00", false],
    ["Oak veneer panel", "4408.90.0190", "$2,140.00", true],
  ] as const;
  return (
    <div className="w-[300px] rounded-lg bg-white p-5 font-mono text-[10px] text-[#16150F]" style={{ filter: sticker }}>
      <div className="flex items-baseline justify-between border-b border-dashed border-[#bbb] pb-2">
        <span className="text-[13px] font-bold tracking-wide">COMMERCIAL INVOICE</span>
        <span className="text-[#7a766c]">#INV-2026-031</span>
      </div>
      <div className="mt-2 space-y-2">
        {rows.map(([item, hts, amt, bad]) => (
          <div key={item} className={`rounded px-1.5 py-1 ${bad ? "bg-[#FFE7E0]" : ""}`}>
            <div className="flex justify-between">
              <span>{item}</span>
              <span>{amt}</span>
            </div>
            <div className={bad ? "text-[#D63A1A]" : "text-[#7a766c]"}>
              HTS {hts} {bad && <span className="font-bold">✕ misclassified → 4412.33.0620</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-dashed border-[#bbb] pt-2">
        <span className="text-[#7a766c]">audit time</span>
        <span className="rounded bg-[#0ACF83] px-1.5 py-0.5 font-bold text-white">28 s ✓</span>
      </div>
    </div>
  );
}

/** U-Net — optic disc with a predicted contour over ground truth. */
export function OpticDisc() {
  return (
    <svg width="230" height="230" viewBox="0 0 230 230" style={{ filter: sticker }} aria-hidden>
      <defs>
        <radialGradient id="od-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor="#E8843F" />
          <stop offset=".7" stopColor="#A8321A" />
          <stop offset="1" stopColor="#3B0C06" />
        </radialGradient>
        <radialGradient id="od-disc" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFF7D6" />
          <stop offset=".7" stopColor="#F7C66B" />
          <stop offset="1" stopColor="#E08A3C" />
        </radialGradient>
      </defs>
      <rect x="6" y="6" width="218" height="218" rx="18" fill="#fff" />
      <rect x="14" y="14" width="202" height="202" rx="12" fill="url(#od-bg)" />
      <g stroke="#6A1409" strokeLinecap="round" fill="none" opacity=".7">
        <path d="M115 115 C 90 80, 60 60, 20 50" strokeWidth="3" />
        <path d="M115 115 C 140 150, 170 170, 212 180" strokeWidth="3" />
        <path d="M115 115 C 150 90, 180 60, 212 48" strokeWidth="2.4" />
        <path d="M115 115 C 80 140, 50 170, 18 196" strokeWidth="2.4" />
      </g>
      <ellipse cx="115" cy="115" rx="40" ry="44" fill="url(#od-disc)" />
      <ellipse cx="115" cy="115" rx="44" ry="48" fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="5 4" />
      <path d="M72 113 C 72 84, 92 67, 117 67 C 144 68, 160 90, 159 116 C 158 145, 139 163, 114 163 C 88 162, 72 142, 72 113z" fill="none" stroke="#0ACF83" strokeWidth="3" />
      <rect x="24" y="186" width="104" height="22" rx="5" fill="#16150F" opacity=".85" />
      <text x="34" y="201" fontFamily="Geist Mono, monospace" fontSize="10.5" fill="#fff">
        Dice 84.61%
      </text>
    </svg>
  );
}

/** Green-Flight — radar over ATL with live traffic. */
export function Radar() {
  const planes = [
    [150, 70, 30],
    [80, 120, 200],
    [190, 150, 120],
    [120, 190, 300],
    [60, 60, 140],
  ];
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" style={{ filter: sticker }} aria-hidden>
      <circle cx="120" cy="120" r="116" fill="#0E1F17" />
      {[30, 60, 90].map((r) => (
        <circle key={r} cx="120" cy="120" r={r} fill="none" stroke="#2BD98B" strokeOpacity=".35" />
      ))}
      <path d="M120 4 V236 M4 120 H236" stroke="#2BD98B" strokeOpacity=".2" />
      <g style={{ transformOrigin: "120px 120px", animation: "spin 4s linear infinite" }}>
        <path d="M120 120 L120 4 A116 116 0 0 1 202 38 Z" fill="#2BD98B" opacity=".22" />
      </g>
      {planes.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d="M0 -6 L2 -1 L7 1 L2 2 L1 6 L0 5 L-1 6 L-2 2 L-7 1 L-2 -1 Z" fill="#E9FFF4" />
        </g>
      ))}
      <text x="120" y="125" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="11" fill="#2BD98B">
        ATL
      </text>
    </svg>
  );
}

/** GDN Club — convention name badge. */
export function NameBadge() {
  return (
    <div className="w-[240px] overflow-hidden rounded-xl bg-white text-center text-[#16150F]" style={{ filter: sticker }}>
      <div className="bg-[#FF5B35] px-4 py-3 text-white">
        <p className="text-[22px] font-black leading-none tracking-wide">HELLO</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em]">my name is</p>
      </div>
      <p className="hand py-4 text-[40px] font-bold leading-none">Eymen</p>
      <p className="border-t border-dashed border-[#ccc] py-2 font-mono text-[9.5px] tracking-wider text-[#4a473f]">
        VP · YOUTH CONVENTION 2025 · 60+ STUDENTS
      </p>
    </div>
  );
}
