# eymenkeyvan.com

Personal site of Eymen Faruk Keyvan — CS @ Kennesaw State, seeking a Summer 2027 SWE/ML internship.

**Stack:** React 18 · Vite · TypeScript · Tailwind CSS 3 · framer-motion · Lenis · three.js (@react-three/fiber 8 + drei 9) · simple-icons. Single page, no router.
Every animation is driven by scroll (none by the mouse).

## Develop

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # → dist/
npm run lint
```

## Where things live

| What | Where |
|---|---|
| All site copy (profile, metrics, experience, projects, skills) | `src/content/site.ts` |
| Resume PDF + preview image | `public/resume/` |
| Colour tokens (cream, ink, cobalt, sun, tomato) | `src/index.css` (`:root`) |
| Photos (graded, cropped, EXIF-stripped WebP) | `public/photos/` |
| Real object cut-outs (CC0, see CREDITS.txt) | `public/objects/` |
| 3D desk: Poly Haven CC0 models (meshopt + WebP) and studio HDRI | `public/models/` |
| 3D scene, MacBook/iPhone models, canvas textures | `src/components/desk3d/` |
| Scenes: hero burst, bio, ship, lines, desk | `src/components/world/` |
| Desk panels: macOS desktop, phone, receipt, tracking… | `src/components/panels/` |
| Case-study illustrations (SVG/CSS) | `src/components/art.tsx` |
| SEO / Open Graph / JSON-LD | `index.html` |

When the resume changes, update `src/content/site.ts` **and** replace `public/resume/EYMEN_KEYVAN_RESUME.pdf`
(and regenerate `resume-preview.jpg` from page 1).

## Deploy

Push to `main` → Vercel builds and deploys to production automatically.
