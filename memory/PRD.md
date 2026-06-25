# Ancor Digital — Agency Website PRD

## Original problem statement
Multi-page agency website for Ancor Digital (Romanian web design freelance agency, Constanța, RO). React + React Router v6. Site entirely in Romanian by default with RO/EN language toggle in navbar that switches all text instantly via React Context. No images at all — only emoji + CSS/SVG graphics. Brand palette: navy #1B2A4A, turquoise #0ABFBC, tint #E6FAF9, body #4A5568, bg #F7F9FC. Fonts: Plus Jakarta Sans (display) + Inter (body). 4 pages: Home (/), Portfolio (/portofoliu), About (/despre-noi), Contact (/contact). Emergent badge must be removed.

## User choices (Dec 2025)
- Logo: styled text "Ancor.Digital" (no [LOGO] placeholder)
- Phone: placeholder "+40 7XX XXX XXX" (tel: +407XXXXXXXX)
- No contact form — phone display only
- Default language: Romanian (RO)

## Architecture
- React 19 + React Router v7 (BrowserRouter, used as v6 API)
- LanguageContext (`/src/contexts/LanguageContext.js`) — single source of truth for language; `t` exposes `translations[lang]`
- Translations dictionary: `/src/i18n/translations.js` — full RO + EN copy
- Pages: `/src/pages/{Home,Portfolio,About,Contact}.jsx`
- Shared components: `Navbar`, `Footer`, `PageHeader`, `WaveDivider`, `Reveal` (Intersection Observer)
- No backend used (static marketing site)
- All visuals are CSS blobs (blurred animated divs), SVG waves, CSS gradients, emoji-on-gradient tiles — zero `<img>` tags
- Tailwind for layout; index.css holds blob/animation/lang-pill CSS

## Implemented (Dec 2025 — initial release)
- Romanian-default home page with hero, stats strip, about preview, 3-step process timeline (with dashed connector arrows on desktop), why-us 4-tile grid, navy final CTA banner
- Portfolio page with 4 gradient-tile cards (placeholder href="#" buttons)
- About page with brand story, 2 CSS-drawn-avatar team cards (ATB & DLF), 3 values cards
- Contact page with centered phone card (tel: link), hours, location
- Fixed navbar (logo + nav + RO/EN pill toggle) + hamburger mobile overlay
- Footer with branded navy bg + decorative blob, links, phone, location
- Fade-in-up on scroll via Intersection Observer
- "Made with Emergent" badge removed from index.html
- Google Fonts: Plus Jakarta Sans + Inter

## Verified
- All testing agent checks pass (100% frontend success)
- Default RO + instant EN toggle confirmed, language persists across routes
- Mobile menu works at 375px
- No `<img>` tags, no Emergent badge in DOM
- All `data-testid` attributes present

## Backlog (P1/P2)
- P1: Replace placeholder phone +40 7XX XXX XXX with real client number
- P1: Hook up portfolio "Vezi proiectul" buttons to real project case studies
- P2: Replace text-only logo with custom SVG mark
- P2: Add SEO meta tags per page + sitemap.xml + robots.txt
- P2: Optional contact form with email backend (Resend/SendGrid)
- P2: Persist language preference to localStorage and read on first load
- P2: Add blog/case-study section for SEO

## Next tasks (when user requests)
1. Real phone number + WhatsApp deep link
2. Per-project case study pages
3. Optional contact form integration
