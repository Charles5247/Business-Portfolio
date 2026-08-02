# Supremework Synergy Nig. Ltd — Corporate Website

Static B2B corporate website for Supremework Synergy Nig. Ltd (Electro-Thermodynamics
Engineering Division), RC 894327. Built as a single-page site with a Supabase-backed
quote-request form, ready for Cloudflare Pages.

## Structure
```
index.html            Main page (all sections)
css/style.css          Styles (design tokens, layout, components)
js/main.js             Nav, smooth scroll, form handling, Supabase submission
js/supabase-config.js  Supabase project URL + anon key (fill in before go-live)
supabase/schema.sql     SQL to create the quote_requests table + RLS policy
docs/                   Planning docs (concept brief, PRD, data model, design tokens)
```

## Set up Supabase (required for the quote form to work)
1. Create a free project at https://supabase.com
2. In the Supabase SQL Editor, run the contents of `supabase/schema.sql`
3. In Project Settings → API, copy your **Project URL** and **anon public key**
4. Open `js/supabase-config.js` and paste them in:
   ```js
   export const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
   export const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";
   ```
5. Save, redeploy. Submissions will appear in Supabase → Table Editor → `quote_requests`.

Until real credentials are set, the form will show a friendly error instead of crashing, and it
will detect the placeholder values automatically.

## Local preview
Any static server works, e.g.:
```
python3 -m http.server 8080
```
Then open http://localhost:8080

## Deployment
Static site — deploy the project root to Cloudflare Pages (build command: none, output
directory: `/`).
