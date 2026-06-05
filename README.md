# VisualsBlaze

Marketing site for VisualsBlaze, a creative design & branding agency. Built with
**Next.js 15 (App Router)** and server-rendered for SEO.

## Tech stack

- Next.js 15 (App Router) + React 18
- Sass / Bootstrap (CDN) for styling
- react-slick, reactstrap, react-icons, react-toastify
- Nodemailer (contact/appointment API route)

## Getting started

```bash
npm install            # uses legacy-peer-deps (see .npmrc) for MUI v4
npm run dev            # http://localhost:3000
npm run build          # production build (static + SSG)
npm start              # serve the production build
```

## Environment variables

Create `.env.local` (already gitignored):

```
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-gmail-app-password   # Gmail App Password, not your login password
OWNER_EMAIL=where-enquiries-are-sent
NEXT_PUBLIC_SITE_URL=https://visualsblaze.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Project structure

- `app/` — App Router routes. Each `page.js` is a Server Component that exports SEO
  `metadata` (and `generateMetadata`/`generateStaticParams` for dynamic routes) and
  renders the page body.
  - `app/sitemap.js`, `app/robots.js` — generated `/sitemap.xml` and `/robots.txt`.
  - `app/api/sendAppointment/route.js` — contact/appointment email handler (Nodemailer).
- `src/main-component/*` — page bodies (client components).
- `src/components/*` — shared UI (header, footer, hero, sliders, forms, …).
- `src/api/*.js` — local content data (portfolio, services, blog) consumed by pages
  and by SEO metadata/sitemap.
- `src/lib/seo.js`, `src/lib/jsonld.js` — metadata builder + JSON-LD structured data.
- `public/images/*` — all image assets (referenced by absolute `/images/...` paths).

## SEO

- Per-page unique `<title>`, meta description, canonical URL, Open Graph & Twitter cards.
- JSON-LD: Organization + WebSite (home), Service (service detail), BlogPosting (blog
  detail), BreadcrumbList (interior pages).
- `/sitemap.xml` and `/robots.txt` generated from route + content data.
- Single Google Analytics tag wired via `next/script`.

## Scope

This repo contains only the live public marketing site. The original CRA template's
unused pages (Firebase admin panel, auth pages, and the alternate homepage/portfolio/blog
layout variants) and their orphaned assets have been removed.
