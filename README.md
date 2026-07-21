# Omar Abo-Elmaaty — Portfolio

Personal portfolio site for **Omar Abo-Elmaaty**, a Full-Stack Developer (front-end focused) specializing in React, Next.js, and TypeScript.

Live: _add your Vercel URL here_

## Features

- ⚡️ **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**
- 🎬 Motion-first design with **Framer Motion** (scroll reveals, staggered entrances) — fully `prefers-reduced-motion` safe
- 🌌 Cinematic dark UI: ambient glow, glassmorphism, dot-grid background
- 🤖 **AI portfolio assistant** — answers questions about my work, powered by the Anthropic Claude API with a graceful CV-based fallback when no API key is set
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
