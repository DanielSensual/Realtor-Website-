# TREC Luxury Rebuild

This is the Next.js App Router scaffold for the new luxury brokerage experience.

## Quickstart

```bash
npm install
npm run dev
```

## Environment

- `NEXT_PUBLIC_SITE_URL` (optional): public base URL for metadata, sitemap, and robots (e.g. `https://www.therealestatecollection.com`). If unset, Vercel will use `VERCEL_URL` in production and `http://localhost:3000` locally.

## Structure

- `src/app/` - App Router pages
- `src/components/` - Shared UI components
- `src/lib/` - CMS + IDX provider stubs, analytics, utilities
- `src/content/` - Mock data for local development
- `src/sanity/` - Sanity schema definitions
- `docs/` - Spec and migration notes

## Notes

- Replace `public/hero-reel.mp4` and `public/hero-poster.svg` with final production assets.
- Hook `src/lib/idx/provider.ts` to your IDX provider adapter.
- Hook `src/lib/cms.ts` to Sanity using `@sanity/client`.
