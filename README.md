# Hobby Projects

The backbone/landing page for Glen's open-source hobby side projects.

Each side project (Newspaper Archive, Art Search, Games, ...) lives in its
own GitHub repo and deploys as its own Vercel project, linked to a subdomain
of this site's domain (e.g. `news.<domain>`, `art.<domain>`). This repo is
just the root landing page listing them.

## Problem

Keeping each side project in its own repo and its own deployment is the right
call — they share no code, and one breaking does not touch the others — but it
leaves the set of them with no address. What exists otherwise is a scattering
of repository and deployment URLs, none of which says what the others are, or
which are still running. This page is the missing front door: one card per
project, pointing at the running thing rather than the source, and carrying
the status (live, in progress, planned) so a half-finished experiment is
labelled as one instead of looking broken.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Deployed on Vercel

## Layout

Two folders, both of them small — the site is a single page.

| Path | What it is |
| --- | --- |
| `app/` | The entire site. `page.tsx` holds the `projects` array that renders the cards, and is the only file to touch when adding, removing or re-statusing a project; `layout.tsx` is the shell and page metadata; `globals.css` is the Tailwind entry and light/dark tokens. |
| `public/` | Static files served from the site root — currently just the default Next.js starter SVGs. |

## Development

```bash
npm install
npm run dev
```
