# Concept Brief — Supremework Synergy Corporate Website

## Scope Note
This is a static B2B marketing/lead-gen site (single scrolling landing page + Supabase-backed
quote form), not a multi-user application. The full idea-to-build pipeline (PRD → 6+ architecture
docs → mockups → 200-500 build prompts) is designed for complex multi-phase apps. For a project of
this size, that process is disproportionate to the deliverable, so it has been right-sized to:
concept brief → lite PRD → data model + design tokens → direct implementation. This keeps every
decision explicit and traceable without generating hundreds of prompts for a 9-section static page.

## Product
Corporate website for **Supremework Synergy Nig. Ltd (Electro-Thermodynamics Engineering
Division)**, RC 894327, an indigenous Nigerian industrial engineering firm operating since 2006.

## Primary User
Plant managers, procurement officers, and facility engineers at manufacturing, construction,
agro-processing, and industrial companies in Nigeria who need steam/thermal, electrical, or
fabrication engineering services and are evaluating vendors.

## Core Loop
Visitor lands → scans services/trust bar for credibility → reads relevant service detail →
submits a Quote Request (name, company, service needed, message, phone) → company follows up
by phone/email.

## Must-Have (MVP)
- Hero with mission-driven headline + "Request a Quote" CTA
- Client trust bar (17 named companies)
- About (history, mission, vision)
- 7 services, one card each, with icon
- Why Choose Us
- Industries Served
- CTA banner
- Contact section: Supabase-backed quote form + phone/email/address + embedded map
- Footer with RC number
- Click-to-call phone links, smooth-scroll nav, on-page SEO meta tags

## Explicitly Excluded
- No board/leadership section (content not supplied — must not be fabricated)
- No blog, careers, or e-commerce
- No custom backend server — Supabase JS client called directly from the frontend

## Domain Notes
- Nigerian B2B industrial engineering — no regulatory/compliance blockers identified (not
  fintech/health/edtech). RC number is a Corporate Affairs Commission (CAC) registration number
  and is displayed for trust, not a compliance requirement.

## Platform & Stack
- Static HTML/CSS/vanilla JS (no framework/build step needed for a 1-page brochure site)
- Supabase JS client (v2, ESM via CDN) for `quote_requests` table inserts
- Deployment: Cloudflare Pages
