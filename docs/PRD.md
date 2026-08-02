# PRD (Lite) — Supremework Synergy Website

## 1. Goal
Generate qualified quote requests from Nigerian industrial/manufacturing decision-makers by
establishing technical credibility fast (client roster, service depth, track record).

## 2. Features

| # | Feature | Priority |
|---|---------|----------|
| 1 | Hero section w/ CTA | MVP |
| 2 | Client trust bar (17 companies) | MVP |
| 3 | About (history/mission/vision) | MVP |
| 4 | 7 service cards w/ icons | MVP |
| 5 | Why Choose Us | MVP |
| 6 | Industries Served | MVP |
| 7 | CTA banner | MVP |
| 8 | Contact form → Supabase `quote_requests` | MVP |
| 9 | Phone/address/embedded map | MVP |
| 10 | Footer (logo, nav, RC, copyright) | MVP |
| 11 | Click-to-call links | MVP |
| 12 | Smooth-scroll nav + mobile menu | MVP |
| 13 | SEO meta (title/description/OG) | MVP |
| 14 | Leadership/board section | Explicitly excluded (no data) |

## 3. Data Model
Single Supabase table: `quote_requests` — see `docs/architecture/data-models.md`.

## 4. Tech Stack Decision
- **Static HTML/CSS/JS over a framework** — a 9-section single page has no client-side routing
  or complex state; a framework/build pipeline would add deploy complexity with no functional
  benefit for Cloudflare Pages static hosting.
- **Supabase JS (frontend-only) over a custom API** — the only write operation is a single
  public insert into one table; Supabase's client library + Row Level Security policy handles
  this safely without a backend server, per the brief's explicit constraint.

## 5. Non-Functional
- Mobile-first responsive (plant managers/procurement often browse on mobile)
- Fast load (no heavy JS framework, compressed images)
- Accessible forms (labels, focus states, error/success messaging)
- Nigerian phone numbers formatted for `tel:` click-to-call
