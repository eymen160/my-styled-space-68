# eymenkeyvan.com

Personal site of Eymen Faruk Keyvan — CS @ Kennesaw State, seeking a Summer 2027 SWE/ML internship.

**Stack:** React 18 · Vite · TypeScript · Tailwind CSS 3 · framer-motion. Single page, no router.

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
| Colour tokens (light + dark) | `src/index.css` (`:root`) |
| Motion primitives (mask reveal, odometer, cursor, magnetic) | `src/components/motion/` |
| SEO / Open Graph / JSON-LD | `index.html` |

When the resume changes, update `src/content/site.ts` **and** replace `public/resume/EYMEN_KEYVAN_RESUME.pdf`
(and regenerate `resume-preview.jpg` from page 1).

## Deploy

Push to `main` → Vercel builds and deploys to production automatically.
