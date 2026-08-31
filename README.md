# Vijayanagar Travels — Tour & Travel Website (Foundation Build)

A Next.js 14 (App Router) + Tailwind + Prisma/Supabase foundation for a premium
tour & travel website based in Hospet, Karnataka, serving Hampi, Goa, Kerala,
and the rest of South India.

> **This is Phase 1 of the full build described in the master brief.** It
> gives you a working architecture — database schema, home page, one
> destination page template, one route page template, and a booking API —
> that the remaining ~40 destination pages, ~17 route pages, blog, FAQs, and
> admin dashboard reuse the same patterns to build out.

## What's included

- **Home page** — hero, booking enquiry widget, destinations, vehicles,
  why-choose-us, packages, reviews, gallery, contact/map, footer, floating
  WhatsApp button.
- **Destination page template** (`/destinations/[slug]`) — driven by
  `data/destinations.ts` for now; swap for a Prisma query once the DB is
  live. Currently seeded with Hampi, Badami, Gokarna as examples.
- **Route page template** (`/routes/[slug]`) — distance, travel time,
  suggested vehicle, places to visit, FAQs with FAQPage schema. Seeded with
  Hospet→Hampi and Hospet→Goa.
- **Booking API** (`/api/bookings`) — validates with Zod, rate-limits by IP,
  writes to Postgres via Prisma. No pricing is calculated or shown, per the
  brief ("Price will be shared after confirmation.").
- **Prisma schema** (`prisma/schema.prisma`) — covers vehicles, destinations,
  routes + route FAQs, gallery, blog, reviews, site FAQs, bookings, admin
  users with roles, audit logs, and a reusable `SeoMeta` model attachable to
  any content type.
- **SEO** — per-page metadata, canonical URLs, Open Graph, Organization /
  TravelAgency schema in the root layout, TouristDestination schema on
  destination pages, FAQPage schema on route pages, `sitemap.ts` and
  `robots.ts`.
- **Security baseline** — security headers in `next.config.js`, Zod input
  validation, basic rate limiting on the booking endpoint (swap the in-memory
  map for Upstash Redis in production), `.env` never committed.
- **Design system** — see "Design notes" below.

## Design notes

The palette and type system are drawn from Hampi itself rather than a generic
travel-site template: weathered basalt boulder tones, brass temple-bell gold,
kumkum vermilion, and banana-plantation green. Display type is Fraunces
(carries some of the carved-stone character of temple inscriptions), body
type is Manrope, and route/data labels use IBM Plex Mono. The recurring
signature element is the **route ribbon** — a dashed waypoint line (see
`.route-ribbon` in `app/globals.css`) — used as a section divider on the home
page and to visualize distance on route pages, echoing the literal product
(point-to-point road trips) instead of a decorative default.

Colors, fonts, and the ribbon motif are all centralized in
`tailwind.config.ts` and `app/globals.css` — change them there to re-theme
the whole site.

## Getting started

```bash
npm install
cp .env.example .env   # fill in your Supabase DATABASE_URL, DIRECT_URL, keys
npx prisma migrate dev --name init
npx prisma db seed     # loads sample vehicles/destinations/routes
npm run dev
```

Add real photography to `public/images/` using the filenames referenced in
`data/destinations.ts`, `data/routes-vehicles.ts`, and the home page
components (currently placeholders — the paths are already wired up).

## Roadmap to the full brief

The remaining scope from the master brief, built on top of this foundation:

1. **Content expansion** — move `data/destinations.ts` and
   `data/routes-vehicles.ts` into the database (schema already supports it)
   and add the remaining ~37 destinations and ~15 route pages; the dynamic
   `[slug]` templates already handle any number of entries.
2. **Vehicles page** — a `/vehicles/[slug]` detail page (same pattern as
   destinations) for each of the 10 vehicle types.
3. **About, FAQ, Gallery, Blog pages** — static/CMS-driven pages using the
   same `SeoMeta` pattern.
4. **Admin dashboard** (`/admin`) — Supabase Auth-gated, role-based
   (`AdminUser.role`), CRUD screens over every Prisma model, audit logging
   via `AuditLog`.
5. **Image pipeline** — Supabase Storage + `next/image` for optimized,
   lazy-loaded delivery (config already allows Supabase Storage domains in
   `next.config.js`).
6. **Testing** — Playwright for booking-flow e2e, Vitest for API route unit
   tests.
7. **CI/CD** — GitHub Actions → Vercel, with `prisma migrate deploy` as a
   release step.

## Tech stack

Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui-compatible primitives ·
Prisma · PostgreSQL (Supabase) · Supabase Auth & Storage · Zod · deployed to
Vercel, Dockerized for portability.
