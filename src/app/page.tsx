import { HeroVideo } from "@/components/hero-video";
import { Section } from "@/components/section";
import { ListingCard } from "@/components/listing-card";
import { mockListings } from "@/content/mock-listings";
import { mockCommunities } from "@/content/mock-communities";
import { mockAgents } from "@/content/mock-agents";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";

export default function HomePage() {
  // Show only first 3 listings and first 4 agents on homepage
  const featuredListings = mockListings.slice(0, 3);
  const featuredAgents = mockAgents.slice(0, 4);

  return (
    <div className="bg-ivory">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "The Real Estate Collection",
          url: "https://www.therealestatecollection.com",
          areaServed: "Florida",
          sameAs: []
        }}
      />
      <HeroVideo />

      {/* Communities Section */}
      <Section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Communities</p>
              <h2 className="mt-4 font-serif text-3xl">Signature destinations across Florida.</h2>
            </div>
            <Link href="/communities" className="text-xs uppercase tracking-[0.25em] text-ink/70 transition hover:text-ink">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {mockCommunities.map((community) => (
              <Link
                key={community.id}
                href={`/communities/${community.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={community.heroImage}
                    alt={community.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">{community.region} Coast</p>
                    <h3 className="mt-1 font-serif text-xl">{community.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Listings Section */}
      <Section className="bg-fog">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Featured Listings</p>
              <h2 className="mt-4 font-serif text-3xl">A curated selection of estates.</h2>
            </div>
            <Link href="/search/buy" className="text-xs uppercase tracking-[0.25em] text-ink/70 transition hover:text-ink">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </Section>

      {/* Agents Section */}
      <Section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Top Producers</p>
              <h2 className="mt-4 font-serif text-3xl">Advisors known for discretion and results.</h2>
            </div>
            <Link href="/agents" className="text-xs uppercase tracking-[0.25em] text-ink/70 transition hover:text-ink">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAgents.map((agent) => (
              <Link
                key={agent.id}
                href={`/agents/${agent.slug}`}
                className="group rounded-3xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-fog">
                  <Image
                    src={agent.headshot}
                    alt={agent.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg">{agent.name}</h3>
                  <p className="mt-1 text-xs text-ink/60 line-clamp-1">{agent.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
