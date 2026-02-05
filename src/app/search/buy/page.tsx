import { ListingCard } from "@/components/listing-card";
import { SearchModule } from "@/components/search-module";
import { mockListings } from "@/content/mock-listings";

export default function BuySearchPage() {
    return (
        <div className="bg-ivory">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Search Homes</p>
                <h1 className="mt-4 font-serif text-4xl">Find your next estate.</h1>
                <p className="mt-4 max-w-2xl text-ink/70">
                    Browse our curated selection of luxury properties across Florida&apos;s most prestigious communities.
                </p>

                <div className="mt-10 rounded-3xl bg-white p-6 shadow-soft">
                    <SearchModule />
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-ink/60">
                        {mockListings.length} properties available
                    </p>
                    <div className="flex gap-2">
                        <button className="rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.25em] text-ivory">
                            Buy
                        </button>
                        <button className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-ink/70 transition hover:bg-ink hover:text-ivory">
                            Rent
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mockListings.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            </div>
        </div>
    );
}
