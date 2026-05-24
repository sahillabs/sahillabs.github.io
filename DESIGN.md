# Design System — Sahil Khatkar Portfolio ("Amber Terminal")

## Product Context
- **What this is:** Personal portfolio for a full-stack / AI developer.
- **Who it's for:** Recruiters, engineering leaders, potential clients of a future "sahillabs" dev studio.
- **Space/industry:** Developer portfolios / AI engineering.
- **Project type:** Animated marketing-style single-page site (Next.js + Framer Motion).

## Aesthetic Direction
- **Direction:** Industrial / Utilitarian with warm editorial warmth — "Amber Terminal."
- **Decoration level:** intentional (crisp 1px borders, subtle scanline/grain, warm ambient glows — **no glassmorphism blur**).
- **Mood:** A craftsman's terminal. Warm, technical, confident, memorable. The deliberate opposite of the cold blue-black + violet-gradient "AI template" look.
- **Why it's distinct:** warm espresso-black instead of cold blue-black; phosphor amber (terminal heritage) instead of the ubiquitous violet/cyan; bordered structure instead of frosted glass; mono-forward type.

## Typography
- **Display/Hero:** **Cabinet Grotesk** (Fontshare) 700/800 — distinctive, confident, not overused. Rationale: gives a strong, characterful headline voice that Inter/Space Grotesk can't.
- **Body/UI:** **Instrument Sans** (Google Fonts) — clean, slightly technical, highly readable.
- **Data/Labels/Code:** **JetBrains Mono** (Google Fonts) — reinforces the terminal identity; used for eyebrows, tags, stats, code.
- **Loading:** Cabinet Grotesk via `api.fontshare.com`; Instrument Sans + JetBrains Mono via Google Fonts `<link>`.
- **Scale:** hero clamp(46–86px) / h2 clamp(28–44px) / body 16–18px / mono labels 11–14px. Letter-spacing tightened on display (−2 to −3px).

## Color
- **Approach:** restrained / color-drenched — one warm accent family (amber → ember → gold) over warm neutrals.
- **Background:** `#100C0A` (warm espresso-black) · soft `#181310`.
- **Panels:** `#181310` with `#2C2118` borders (solid, not translucent).
- **Primary accent — Amber:** `#FFB000` (phosphor). Dim `#B8800E`.
- **Secondary — Ember:** `#FF7A1A` · **Gold:** `#FFD27A` (used only for the display gradient + glints).
- **Text:** parchment `#F2E8DE` · muted `#B5A99B` · faint `#6E6358`.
- **Semantic:** success `#7FB069`, error `#E5533D`, warning = amber.
- **Light mode (optional):** warm paper `#F5EFE6` + ink `#1A140E` + amber `#C77800`.

## Spacing
- **Base unit:** 8px. **Density:** comfortable.
- **Scale:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64).

## Layout
- **Approach:** grid-disciplined with visible structure (bento sums to 6 cols).
- **Max content width:** 1120px.
- **Border radius:** tight/crisp — panels & tiles ~10px, buttons/inputs ~9px, chips/tags ~6–7px (no bubbly 18–20px).
- **Borders:** 1px warm borders define structure instead of blur.

## Motion
- **Approach:** intentional (entrance reveals, scroll-linked timeline, marquee, magnetic buttons, cursor) — kept, but easing is crisp/mechanical, not bouncy.
- **Easing:** enter cubic-bezier(0.21,0.5,0.25,1); marquee linear.
- **Duration:** micro 100ms / short 200ms / medium 400ms / reveal 700ms. Respects `prefers-reduced-motion`.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-24 | Adopted "Amber Terminal" system; replaced violet/teal/pink + glassmorphism | Old palette read as a generic AI-tool template; warm espresso + phosphor amber + bordered structure is distinctive, premium, and developer-credible (research-backed). |
