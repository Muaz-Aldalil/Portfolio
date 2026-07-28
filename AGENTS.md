# AGENTS.md — Muaz Aldalil Portfolio

## Project Overview
Personal portfolio website for Muaz Aldalil, a junior frontend developer.
Built to attract freelance work and showcase projects.

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- Netlify (deployment)

## Design System
- **Primary:** #2563EB (blue)
- **Accent:** #10B981 (emerald)
- **Display Font:** Space Grotesk
- **Body Font:** Inter
- **Mono Font:** JetBrains Mono

## Components
- Header (sticky, backdrop-blur)
- Hero (split layout)
- About (editorial)
- Skills (bento grid)
- Projects (masonry)
- Experience (timeline)
- Contact (form + socials)
- Footer (Lighthouse scores)

## Data Files
- `src/data/skills.js` — Skill list with icons and levels
- `src/data/projects.js` — Project details and demo links
- `src/data/experience.js` — Work experience timeline

## Deployment
- Platform: Netlify
- Build: `npm run build`
- CI/CD: GitHub Actions (lint → build → deploy)

## Notes
- User will write custom project descriptions
- Project screenshots to be captured from live demo links
- Contact form needs Netlify Forms integration
