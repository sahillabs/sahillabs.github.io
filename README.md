# Sahil Khatkar — Portfolio

A premium, animated developer portfolio built with **Next.js 16 + TypeScript + Framer Motion + Lenis**.
Modeled on the immersive "scrolly-telling" style (boot sequence, glassmorphism, ambient lighting,
3D-tilt bento grid, custom cursor, smooth scroll).

## Run locally

```bash
cd portfolio
npm install      # already done
npm run dev      # http://localhost:3000
```

- Append `?nointro` to skip the boot loader: `http://localhost:3000/?nointro`
- Respects `prefers-reduced-motion` (disables intro, blob motion, smooth scroll).

## Build / deploy

```bash
npm run build && npm start      # production build
```

Deploy free on **Vercel**: push this folder to GitHub → import on vercel.com → deploy.
(`npx vercel` also works from this directory.)

## Structure

```
app/
  layout.tsx        # fonts (Google Fonts via <link>), Loader, Background, Cursor, Nav, SmoothScroll
  page.tsx          # composes the sections
  globals.css       # full design system (CSS variables + all component styles)
components/
  Loader.tsx        # boot / "initializing sequence" preloader
  Background.tsx    # ambient glow blobs + grid + cursor spotlight + noise
  Cursor.tsx        # custom dot + lagging ring cursor
  SmoothScroll.tsx  # Lenis smooth scroll + anchor handling
  Nav.tsx           # sticky glass nav
  Hero.tsx          # parallax hero, typing role, magnetic buttons, stats
  Experience.tsx    # scroll-linked timeline
  Projects.tsx      # bento grid
  TiltCard.tsx      # 3D mouse-tilt glass card
  Skills.tsx        # "Arsenal" chip groups
  About.tsx         # certifications + education
  Footer.tsx        # CTA + socials
  Reveal.tsx        # scroll-reveal wrapper
  MagneticButton.tsx
lib/
  data.ts           # ALL content lives here — edit this to update the site
public/
  resume.pdf        # copied from ../resume.pdf (the "resume.pdf" links point here)
```

## Edit content

Everything (bio, experience bullets, 9 projects, skills, certs, education, links) is in **`lib/data.ts`** —
no need to touch components.

## TODO
- [ ] Confirm real **GitHub URL** (`profile.github` in `lib/data.ts`, currently a placeholder).
- [ ] Optional: add real metrics to project blurbs.
- [ ] Re-copy `public/resume.pdf` whenever `../resume.pdf` is recompiled.
