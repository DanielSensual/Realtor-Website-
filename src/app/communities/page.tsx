import Link from "next/link";
import { mockCommunities } from "@/content/mock-communities";
import { SearchModule } from "@/components/search-module";
import { CommunityMedia } from "@/components/community-media";

export default function CommunitiesPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Communities</p>
        <h1 className="mt-4 font-serif text-4xl">Distinct regions, singular taste.</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Discover Florida&apos;s most prestigious communities where luxury living meets natural beauty.
        </p>
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-soft">
          <SearchModule />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockCommunities.map((community) => (
            <Link
              key={community.id}
              href={`/communities/${community.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <CommunityMedia
                  slug={community.slug}
                  heroImage={community.heroImage}
                  name={community.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">{community.region} Coast</p>
                  <h2 className="mt-1 font-serif text-2xl">{community.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-ink/70">{community.description}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-brass">
                  Explore community →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
