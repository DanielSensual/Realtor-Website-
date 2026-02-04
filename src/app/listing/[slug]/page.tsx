import Image from "next/image";
import Link from "next/link";
import { idxProvider } from "@/lib/idx/provider";
import { requestShowing } from "./actions";

export default async function ListingDetail({ params }: { params: { slug: string } }) {
  const listing = await idxProvider.getListing(params.slug);

  if (!listing) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-serif text-3xl">Listing not found</h1>
        <p className="mt-4 text-sm text-ink/70">Please return to search to explore active listings.</p>
        <Link href="/search/buy" className="mt-6 inline-block text-sm text-brass underline">
          Browse all listings
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/search/buy"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink/60 transition hover:text-ink"
        >
          ← All Listings
        </Link>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.4em] text-ink/60">{listing.city}, {listing.state}</p>
          <h1 className="mt-4 font-serif text-4xl">{listing.address}</h1>
          <p className="mt-4 font-serif text-3xl text-brass">${listing.price.toLocaleString()}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div>
            {/* Property Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-fog">
              <Image
                src={listing.image}
                alt={`${listing.address}, ${listing.city}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Stats Bar */}
            <div className="mt-6 flex flex-wrap gap-6 rounded-2xl bg-white p-4 shadow-soft">
              <div className="text-center">
                <p className="font-serif text-2xl">{listing.beds}</p>
                <p className="text-xs uppercase tracking-wider text-ink/50">Beds</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl">{listing.baths}</p>
                <p className="text-xs uppercase tracking-wider text-ink/50">Baths</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl">{listing.sqft.toLocaleString()}</p>
                <p className="text-xs uppercase tracking-wider text-ink/50">Sq Ft</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-serif text-2xl">About this property</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{listing.description}</p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="font-serif text-2xl">Features</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {listing.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-fit rounded-3xl border border-ink/10 bg-white p-6 shadow-soft lg:sticky lg:top-24">
            <h3 className="font-serif text-2xl">Request a showing</h3>
            <form action={requestShowing} className="mt-6 grid gap-4">
              <input type="hidden" name="listingId" value={listing.id} />
              <input
                className="rounded-2xl border border-ink/10 px-4 py-3 text-sm transition focus:border-brass focus:outline-none"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="rounded-2xl border border-ink/10 px-4 py-3 text-sm transition focus:border-brass focus:outline-none"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="rounded-2xl border border-ink/10 px-4 py-3 text-sm transition focus:border-brass focus:outline-none"
                name="phone"
                placeholder="Phone"
              />
              <textarea
                className="rounded-2xl border border-ink/10 px-4 py-3 text-sm transition focus:border-brass focus:outline-none"
                name="message"
                placeholder="Tell us what you're looking for"
                rows={4}
              />
              <input
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                name="company"
                aria-hidden="true"
              />
              <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory transition hover:bg-ink/90">
                Schedule Showing
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
