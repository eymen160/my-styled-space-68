# Production Files — Drop into eymen160/my-styled-space-68

## How to deploy

1. **Copy files** from `src_production/` into your repo:

```
src_production/index.css           → src/index.css
src_production/App.tsx             → src/App.tsx
src_production/pages/Index.tsx     → src/pages/Index.tsx
src_production/components/layout/Header.tsx  → src/components/layout/Header.tsx
src_production/components/layout/Footer.tsx  → src/components/layout/Footer.tsx
src_production/components/sections/Hero.tsx  → src/components/sections/Hero.tsx
src_production/components/sections/Marquee.tsx → src/components/sections/Marquee.tsx
src_production/components/sections/About.tsx  → src/components/sections/About.tsx
src_production/components/sections/Projects.tsx → src/components/sections/Projects.tsx
src_production/components/sections/Contact.tsx  → src/components/sections/Contact.tsx
src_production/hooks/useCounter.ts  → src/hooks/useCounter.ts
src_production/tailwind.config.ts   → tailwind.config.ts (merge or replace)
```

2. **Delete these old section files** (no longer needed):
```
src/components/sections/Work.tsx
src/components/sections/Philosophy.tsx
src/components/sections/Timeline.tsx
src/components/CustomCursor.tsx
src/components/Marquee.tsx (replace with new one)
src/components/SplitText.tsx
src/components/TypewriterText.tsx
```

3. **Verify framer-motion is installed** (it already is in your repo):
```bash
npm ls framer-motion
# if missing: npm install framer-motion
```

4. **Push to GitHub** — Vercel auto-deploys on push to `main`:
```bash
git add -A
git commit -m "redesign: dark editorial — Cormorant Garamond, DM Mono, gold accents"
git push
```

## Design System
- **Background**: `#0a0a0a`
- **Text**: `#f0ece4`
- **Gold**: `#c9a84c`
- **Fonts**: Cormorant Garamond (headings) + DM Mono (labels/body/mono)
- **Animations**: Framer Motion throughout, `prefers-reduced-motion` respected everywhere
