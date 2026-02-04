import Image from "next/image";
import Link from "next/link";
import { mockCommunities } from "@/content/mock-communities";
import { ListingCard } from "@/components/listing-card";
import { mockListings } from "@/content/mock-listings";

// Community city mappings for filtering listings
const communityToCities: Record<string, string[]> = {
  "celebration": ["Celebration", "Kissimmee"],
  "winter-park": ["Winter Park", "Orlando", "Winter Garden"],
  "naples": ["Naples", "Marco Island"]
};

export default function CommunityDetail({ params }: { params: { slug: string } }) {
  const community = mockCommunities.find((item) => item.slug === params.slug);

  if (!community) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-serif text-3xl">Community not found</h1>
        <p className="mt-4 text-sm text-ink/70">Please return to our communities page to explore.</p>
        <Link href="/communities" className="mt-6 inline-block text-sm text-brass underline">
          View all communities
        </Link>
      </div>
    );
  }

  // Filter listings by community cities
  const cities = communityToCities[community.slug] || [];
  const communityListings = mockListings.filter((listing) =>
    cities.some((city) => listing.city.toLowerCase().includes(city.toLowerCase()))
  );

  // If no matching listings, show all listings as fallback
  const displayListings = communityListings.length > 0 ? communityListings : mockListings.slice(0, 3);

  return (
    <div className="bg-ivory">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={community.heroImage}
          alt={community.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/communities"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
            >
              ← All Communities
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/70">{community.region} Coast</p>
            <h1 className="mt-2 font-serif text-5xl text-white lg:text-6xl">{community.name}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl">About {community.name}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{community.description}</p>
        </div>

        {/* Listings in this community */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Properties</p>
              <h2 className="mt-2 font-serif text-3xl">Estates in {community.name}</h2>
            </div>
            <Link
              href="/search/buy"
              className="text-xs uppercase tracking-[0.25em] text-ink/70 transition hover:text-ink"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
