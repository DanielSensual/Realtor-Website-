import { idxProvider } from "@/lib/idx/provider";
import type { ListingSegment } from "@/lib/idx/types";
import { ListingCard } from "@/components/listing-card";
import { notFound } from "next/navigation";

const segments: ListingSegment[] = ["buy", "rent", "sell", "commercial"];

export function generateStaticParams() {
  return segments.map((segment) => ({ segment }));
}

export default async function SearchPage({ params }: { params: { segment: ListingSegment } }) {
  if (!segments.includes(params.segment)) {
    notFound();
  }
  const segment = params.segment;
  const listings = await idxProvider.search({ segment });

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">{segment.toUpperCase()}</p>
        <h1 className="mt-4 font-serif text-4xl">Search results</h1>
        <p className="mt-4 text-sm text-ink/70">
          Refined listings curated by your IDX provider. Map view and filters will activate once
          IDX integration is connected.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
