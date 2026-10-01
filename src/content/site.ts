// Single source of truth for everything the site says.
// Mirrors the resume at public/resume/EYMEN_KEYVAN_RESUME.pdf — update both together.

export const profile = {
  name: "Eymen Faruk Keyvan",
  shortName: "Eymen Keyvan",
  email: "eymenfaruk479@gmail.com",
  location: "Atlanta, GA",
  relocation: "Open to relocation anywhere in the US",
  seeking: "Summer 2027 SWE / ML internship",
  resume: "/resume/EYMEN_KEYVAN_RESUME.pdf",
  resumePreview: "/resume/resume-preview.jpg",
  github: "https://github.com/eymen160",
  linkedin: "https://linkedin.com/in/eymenkeyvan",
  summary:
    "CS student at Kennesaw State. I've shipped features to a live order platform handling 12,000+ orders a month, built two Next.js apps, and written PyTorch pipelines for an NIH-funded clinical study — and twice caught data bugs that passing tests and clean-looking metrics had missed.",
};


export type Role = {
  org: string;
  orgNote: string;
  title: string;
  where: string;
  period: string;
  current: boolean;
  bullets: string[];
  links?: { label: string; href: string }[];
};

export const experience: Role[] = [
  {
    org: "FOMA",
    orgNote: "Custom-print e-commerce",
    title: "AI Automation Intern (Part-time)",
    where: "Remote",
    period: "Apr 2026 – Sep 2026",
    current: false,
    bullets: [
      "Shipped features to the live order-management platform (Laravel 12, Filament, MySQL) that processes 12,000+ orders a month.",
      "Built the company's two Next.js apps: fomaprint.com, the public storefront (Tailwind CSS, Cloudinary, 800+ products), and FomaHub, an internal portal used by 50+ store operators (Prisma, PostgreSQL).",
      "Self-hosted the storefront on a Linux server (Docker, Caddy, Cloudflare R2/D1) behind a GitHub Actions pipeline that builds over SSH, health-checks each release, and rolls back automatically on failure.",
      "Wrote the ShipStation integration that syncs orders automatically (REST APIs, queued jobs, webhooks) and validated it against real order traffic instead of fixtures.",
      "Built the SKU-mapping engine for marketplace orders; testing it on real orders exposed a null-variant case in 78% of order lines that seeded test data never produced.",
    ],
    links: [{ label: "fomaprint.com", href: "https://fomaprint.com" }],
  },
  {
    org: "Kennesaw State University",
    orgNote: "NIH-funded research",
    title: "Undergraduate Research Assistant, AI/ML Engineering",
    where: "Kennesaw, GA",
    period: "Sep 2025 – Present",
    current: true,
    bullets: [
      "Built a retinal image analysis pipeline in Python and PyTorch across 3 clinical datasets (6,000+ images) for an ongoing NIH-funded study on automated eye-disease diagnosis.",
      "Raised fovea segmentation to an 84.97% Dice score, beating a published benchmark, by reworking training and data preprocessing.",
      "Wrote an audit script catching train/test leakage from duplicate images; removing them lowered scores but kept results honest.",
    ],
    links: [{ label: "fovea-segmentation", href: "https://github.com/eymen160/fovea-segmentation" }],
  },
  {
    org: "Global Development & Networking Club",
    orgNote: "KSU",
    title: "Vice President",
    where: "Kennesaw, GA",
    period: "2025 – Present",
    current: true,
    bullets: ["Organized Youth Convention 2025 for 60+ students, with speakers from Meta, Avanade, and Emory."],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  award?: string;
  result: string;
  problem: string;
  built: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "hey-buddy",
    title: "Hey Buddy",
    tagline: "Real-time phone interpreter",
    date: "Sep 2026",
    award: "1st Place · ElevenLabs Track · HackGT 13",
    result: "0.9 s median per translated turn, on real phone calls",
    problem:
      "Families who don't share a language with a doctor, a bank, or a landlord end up relying on a relative to translate every call — and are exposed to phone scams they can't parse.",
    built: [
      "With a two-person team in 36 hours: a live interpreter that joins real calls over Twilio Media Streams and translates between English and 5 languages (ElevenLabs speech-to-text and text-to-speech, Grok translation).",
      "Grok flags scam cues (payment, identity, remote access) mid-call and alerts a trusted contact over WhatsApp; Meta Muse Spark writes a post-call summary.",
      "React web app in 6 UI languages including right-to-left Arabic — a family portal with recordings and summaries, plus a CRM dashboard for businesses. Node.js/Socket.IO backend on Railway with 250+ automated tests.",
    ],
    stack: ["TypeScript", "React", "Node.js", "Socket.IO", "Twilio", "ElevenLabs", "Grok", "Railway"],
    link: { label: "hey-buddy.tech", href: "https://hey-buddy.tech" },
  },
  {
    slug: "tariffcheck",
    title: "TariffCheck",
    tagline: "AI-powered customs duty auditor",
    date: "Mar 2026",
    award: "2nd Place · Finance Track · Hacklanta 2026",
    result: "Hours of manual customs review down to under 30 seconds",
    problem:
      "Importers overpay duties when invoices carry the wrong HTS tariff code, and checking them means reading a 10,000-page tariff schedule by hand.",
    built: [
      "Audits commercial invoices against the full US tariff corpus using Claude, flags HTS classification errors, and drafts CBP protest documents.",
      "Led backend and deployment — the Flask + React + Docker app was live 12 hours into the hackathon.",
    ],
    stack: ["Python", "Flask", "React", "Docker", "Claude API"],
    link: { label: "tariffcheck-zeta.vercel.app", href: "https://tariffcheck-zeta.vercel.app" },
  },
  {
    slug: "unet",
    title: "U-Net Optic Disc",
    tagline: "Medical image segmentation",
    date: "Feb 2026",
    result: "84.61% Dice on a clean, leakage-free test split",
    problem:
      "Optic-disc segmentation is a building block for glaucoma screening, and published scores are easy to inflate when the same eye leaks into train and test.",
    built: [
      "Designed a ResNet34-encoder U-Net for the REFUGE2 eye dataset with Albumentations augmentation.",
      "Found and removed contaminated training data before reporting — the honest score is the one on the page.",
    ],
    stack: ["PyTorch", "ResNet34", "U-Net", "Albumentations"],
    link: { label: "GitHub", href: "https://github.com/eymen160/unet-optic-disc-segmentation" },
  },
  {
    slug: "green-flight",
    title: "Green-Flight",
    tagline: "Live flight-emissions pipeline",
    date: "Jan 2026",
    result: "15+ concurrent operations tracked at ATL, the world's busiest airport",
    problem: "Airport emissions are usually estimated after the fact; live flight data makes it possible to see them as they happen.",
    built: [
      "Python pipeline ingesting live flight state vectors from the OpenSky API around Hartsfield-Jackson Atlanta.",
      "Structured SQL storage feeding Power BI dashboards for carbon-emissions analysis.",
    ],
    stack: ["Python", "SQL", "Power BI", "OpenSky API"],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "Python", "JavaScript / TypeScript", "SQL", "PHP"] },
  {
    label: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "CNNs", "Transfer learning", "Claude & OpenAI APIs", "Tool calling", "RAG", "Evals"],
  },
  {
    label: "Web & Backend",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Laravel", "Flask", "FastAPI", "REST APIs", "Webhooks", "Queues"],
  },
  {
    label: "Data & Cloud",
    items: ["MySQL", "PostgreSQL", "AWS", "Cloudflare R2 / D1", "Docker", "Linux", "GitHub Actions", "Vercel", "Railway", "Git"],
  },
  {
    label: "Agentic tooling",
    items: ["Claude Code", "Codex CLI", "Hermes Agent", "MCP servers", "Three-agent workflow with git-hook guardrails"],
  },
];

export const education = {
  school: "Kennesaw State University",
  degree: "B.S. Computer Science",
  grad: "Expected Dec 2027",
  gpa: "3.56",
  honors: "Presidential Scholarship",
  coursework: [
    "Algorithm Analysis",
    "Data Structures",
    "Operating Systems",
    "Artificial Intelligence",
    "Big Data Analytics (Spark / Hadoop)",
    "Object-Oriented Programming",
  ],
};

export const recognition = [
  "1st Place, ElevenLabs Track — HackGT 13",
  "2nd Place, Finance Track — Hacklanta 2026",
  "McKinsey Forward 2026 selectee",
  "Presidential Scholarship — KSU",
];



export type Photo = { src: string; alt: string; caption: string; w: number; h: number };

/** Graded, cropped, EXIF-stripped copies live in public/photos. */
export const photos: Photo[] = [
  { src: "/photos/dc-night.webp", alt: "Eymen leaning on a wall outside Café du Parc in Washington, D.C. at night", caption: "D.C., after dark", w: 1100, h: 1375 },
  { src: "/photos/supreme-court.webp", alt: "Eymen holding an umbrella on the steps of the U.S. Supreme Court", caption: "Supreme Court, in the rain", w: 1100, h: 1375 },
  { src: "/photos/lake.webp", alt: "Eymen in a blue hoodie by a calm lake under a clear sky", caption: "somewhere quiet, recharging", w: 1000, h: 995 },
];

export const cutout = { src: "/photos/eymen-cutout.webp", w: 827, h: 1364 };
