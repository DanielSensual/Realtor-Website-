# TREC Luxury Rebuild — Spec + Sitemap + Component Map

## Executive Summary
- Build a modern, luxury-forward brokerage site that preserves IDX structure but elevates brand perception.
- Deliver a cinematic video hero with integrated search and premium motion language.
- Provide an IDX provider abstraction with mock data and adapter placeholders for REW or alternate IDX API.
- Use Sanity for editable content: agents, communities, blog, homepage sections, and office locations.
- Prioritize performance, SEO, and lead capture with analytics hooks and form protection.

## Sitemap
| Section | Route | Notes |
| --- | --- | --- |
| Home | `/` | Cinematic hero, search module, featured listings, communities, top producers |
| Search | `/search/[segment]` | Buy/Rent/Sell/Commercial results + filters placeholder |
| Listing Detail | `/listing/[slug]` | Gallery, details, map placeholder, request showing form |
| Communities | `/communities` | Regions + community cards + search module |
| Community Detail | `/communities/[slug]` | Community hero + curated listings |
| Agents | `/agents` | Agent directory |
| Agent Profile | `/agents/[slug]` | Bio, specialties, contact |
| About | `/about` | Company story |
| Blog Index | `/blog` | Category + editorial cards |
| Blog Post | `/blog/[slug]` | Editorial template |
| Sell | `/sell` | Seller services |
| Home Valuation | `/home-valuation` | Lead capture landing |
| Contact | `/contact` | Contact form |
| Offices | `/offices` | Office locations |
| Commercial | `/commercial` | Commercial CTA |
| Property Mgmt | `/property-management` | External CTA |
| Dashboard | `/dashboard` | IDX auth placeholder |
| IDX Login | `/idx-login` | Provider login placeholder |

## Component Map
- Layout: Header, Footer, Section, Button
- Hero: HeroVideo, SearchModule
- IDX: ListingCard, ListingDetail sections, SearchResults grid
- CMS: Agent cards, Community cards, Blog cards
- SEO: JsonLd component, metadata templates

## CMS Data Models (Sanity)
- `page`: title, slug, hero title/subtitle, body
- `blogPost`: title, slug, publishedAt, category, excerpt, coverImage, body
- `agent`: name, slug, title, phone, email, headshot, specialties, bio
- `community`: name, slug, region, heroMedia, intro, featuredNeighborhoods
- `officeLocation`: name, address, phone, email
- `featuredListing`: listingId, title, image, price
- `homepageSection`: title, subtitle, ctaLabel, ctaUrl

## UX Wire Outline (Homepage + Key Templates)
- Home: full-bleed video hero, overlay copy + CTAs, search module, community grid, featured listings, top producers
- Search: header, filter row, results grid, map toggle placeholder
- Listing: hero gallery, summary stats, features, map placeholder, request showing form
- Community: hero media, intro, featured neighborhoods, curated listings
- Agent: profile overview, specialties, contact CTA
- Blog: editorial grid, featured story, category filters

## Design Tokens
- Colors: Ivory `#F8F6F1`, Ink `#121212`, Brass `#C3A35C`, Sand `#E7E0D5`, Fog `#EEECE9`, Midnight `#0A0C10`
- Type: Serif `Cormorant Garamond`, Sans `Manrope`
- Scale: 12, 14, 16, 18, 20, 24, 32, 40, 56
- Radius: 24px (cards), 999px (buttons)
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96

## SEO + Schema
- Metadata via Next.js `metadata` with defaults + per-page overrides
- JSON-LD templates: Organization, RealEstateAgent, BlogPosting, BreadcrumbList

## Migration Plan
- Preserve slugs and redirect legacy `.php` pages to new routes
- Map IDX listing URL shape `/listing/{slug}` to new handler
- Export agents, communities, and blog content into Sanity
- Validate MLS disclaimers in footer and listing pages

## Launch Checklist
- Replace hero reel asset and poster with production video
- Connect IDX adapter and verify filters, saved searches, favorites
- Connect Sanity, run content migration scripts
- Configure GA4 + Meta Pixel IDs and event tracking
- Run performance test (LCP/CLS) and set cache headers
