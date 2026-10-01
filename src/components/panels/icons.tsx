import type { ReactNode } from "react";
import {
  siApple,
  siClaude,
  siCloudflare,
  siDocker,
  siFlask,
  siGithub,
  siGithubactions,
  siLaravel,
  siLinux,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export const Brand = ({ icon, size = 26, color }: { icon: SimpleIcon; size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
    <path d={icon.path} fill={color ?? `#${icon.hex}`} />
  </svg>
);

export const AppleLogo = () => <Brand icon={siApple} size={13} color="currentColor" />;

/** The tools on Eymen's desktop, shown as app icons. */
export const STACK: { name: string; icon: SimpleIcon }[] = [
  { name: "Python", icon: siPython },
  { name: "TypeScript", icon: siTypescript },
  { name: "PHP", icon: siPhp },
  { name: "PyTorch", icon: siPytorch },
  { name: "TensorFlow", icon: siTensorflow },
  { name: "Laravel", icon: siLaravel },
  { name: "Next.js", icon: siNextdotjs },
  { name: "React", icon: siReact },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Flask", icon: siFlask },
  { name: "Tailwind", icon: siTailwindcss },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MySQL", icon: siMysql },
  { name: "Docker", icon: siDocker },
  { name: "Cloudflare", icon: siCloudflare },
  { name: "Actions", icon: siGithubactions },
  { name: "Linux", icon: siLinux },
  { name: "Claude", icon: siClaude },
];

export const githubIcon = siGithub;

/** A rounded-square app tile, macOS style. */
export function Tile({ children, bg = "#fff", size = 48 }: { children: ReactNode; bg?: string; size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-[22%] shadow-[0_6px_14px_-4px_rgba(0,0,0,.45),inset_0_1px_0_rgba(255,255,255,.6)]"
      style={{ width: size, height: size, background: bg }}
    >
      {children}
    </span>
  );
}

export const FolderIcon = ({ size = 56 }: { size?: number }) => (
  <svg viewBox="0 0 64 52" width={size} height={size * 0.81} aria-hidden>
    <defs>
      <linearGradient id="fold-back" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#7cc4ff" />
        <stop offset="1" stopColor="#3d9cf0" />
      </linearGradient>
      <linearGradient id="fold-front" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#a6d8ff" />
        <stop offset="1" stopColor="#5fb2fa" />
      </linearGradient>
    </defs>
    <path d="M4 6a4 4 0 0 1 4-4h14l6 6h28a4 4 0 0 1 4 4v34a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill="url(#fold-back)" />
    <path d="M2 18a4 4 0 0 1 4-4h52a4 4 0 0 1 4 4l-2 28a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill="url(#fold-front)" />
  </svg>
);

export const PdfIcon = ({ size = 50 }: { size?: number }) => (
  <svg viewBox="0 0 40 50" width={size * 0.8} height={size} aria-hidden>
    <path d="M3 2h24l10 10v34a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#fff" stroke="#d0d0d0" />
    <path d="M27 2v10h10" fill="#eee" stroke="#d0d0d0" />
    <rect x="6" y="30" width="22" height="9" rx="2" fill="#E5382B" />
    <text x="17" y="37" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fff" fontFamily="Geist, sans-serif">
      PDF
    </text>
  </svg>
);

export const DockGlyph = {
  finder: (
    <Tile bg="linear-gradient(90deg,#1e90ff 50%,#e9f2ff 50%)">
      <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden>
        <circle cx="13" cy="16" r="2.2" fill="#0b2a55" />
        <circle cx="27" cy="16" r="2.2" fill="#0b2a55" />
        <path d="M11 27c5 4 13 4 18 0" stroke="#0b2a55" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M20 6v22" stroke="#0b2a55" strokeWidth="2" />
      </svg>
    </Tile>
  ),
  mail: (
    <Tile bg="linear-gradient(#5bc0ff,#1a7cf0)">
      <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden>
        <rect x="6" y="10" width="28" height="20" rx="3" fill="#fff" />
        <path d="M6 12l14 10 14-10" stroke="#1a7cf0" strokeWidth="2" fill="none" />
      </svg>
    </Tile>
  ),
  linkedin: (
    <Tile bg="#0A66C2">
      <span className="round text-[22px] font-[900] leading-none text-white">in</span>
    </Tile>
  ),
  github: (
    <Tile bg="#181717">
      <Brand icon={siGithub} size={28} color="#fff" />
    </Tile>
  ),
  terminal: (
    <Tile bg="#1b1b1b">
      <span className="mono text-[15px] font-bold text-[#28C840]">&gt;_</span>
    </Tile>
  ),
  photos: (
    <Tile bg="#fff">
      <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden>
        {["#FF9500", "#FFCC00", "#34C759", "#5AC8FA", "#007AFF", "#AF52DE", "#FF2D55", "#FF3B30"].map((c, i) => (
          <ellipse key={c} cx="20" cy="11" rx="5" ry="9" fill={c} opacity=".85" transform={`rotate(${i * 45} 20 20)`} />
        ))}
      </svg>
    </Tile>
  ),
  preview: (
    <Tile bg="linear-gradient(#fff,#e8e8e8)">
      <PdfIcon size={30} />
    </Tile>
  ),
  trash: (
    <Tile bg="rgba(255,255,255,.25)">
      <svg viewBox="0 0 40 40" width="26" height="26" aria-hidden>
        <path d="M11 12h18l-2 22H13z" fill="#e6e6e6" stroke="#999" />
        <path d="M9 11h22" stroke="#999" strokeWidth="2" />
      </svg>
    </Tile>
  ),
};
