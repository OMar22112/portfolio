# Omar Abo-Elmaaty — Portfolio

Personal portfolio site for **Omar Abo-Elmaaty**, a Full-Stack Engineer building production AI applications with React, Next.js, TypeScript, and Node/FastAPI backends.

Live: **https://portfolio-azure-eight-54.vercel.app**

## Features

- ⚡️ **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**
- 🎬 Motion-first design with **Framer Motion** (scroll reveals, staggered entrances) — fully `prefers-reduced-motion` safe
- 🖤 Editorial dark UI: warm near-black, sage accent, real product screenshots in light "browser" frames
- 🗂 Content lives in one place: `lib/data.ts` (mirrors the résumé); screenshots in `public/images`
- 🤖 **Portfolio assistant** — answers questions about my work from a local CV knowledge base (no API key required)
- ♿️ Accessible: skip links, ARIA labels, keyboard nav, SEO/OpenGraph metadata
- 📱 Responsive from 375px up

## Tech Stack

| Area | Tools |
|------|-------|
| Framework | Next.js 14, React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| AI | Anthropic Claude (`@anthropic-ai/sdk`) |
| Icons | Lucide |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The AI chat assistant works **without any key** (it answers from a local CV knowledge base). To enable richer Claude-powered answers, add:

```bash
# .env.local
ANTHROPIC_API_KEY=sk-ant-...
```

See `.env.example`.

## Deployment

Deployed on **Vercel**. Push to `main` → automatic production deploy. Set `ANTHROPIC_API_KEY` in the Vercel project's Environment Variables (optional).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint |
