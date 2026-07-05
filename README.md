# Hobby Projects

The backbone/landing page for Glen's open-source hobby side projects.

Each side project (Newspaper Archive, Art Search, Games, ...) lives in its
own GitHub repo and deploys as its own Vercel project, linked to a subdomain
of this site's domain (e.g. `news.<domain>`, `art.<domain>`). This repo is
just the root landing page listing them.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```
