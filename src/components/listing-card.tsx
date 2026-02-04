import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/lib/idx/types";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listing/${listing.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-card">
      <div className="aspect-[4/3] w-full bg-fog relative overflow-hidden">
        <Image
          src={listing.image}
          alt={`${listing.address}, ${listing.city}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/50">{listing.city}, {listing.state}</p>
        <p className="font-serif text-2xl">${listing.price.toLocaleString()}</p>
        <p className="text-sm text-ink/70">
          {listing.beds} Beds · {listing.baths} Baths · {listing.sqft.toLocaleString()} Sq Ft
        </p>
        <p className="text-sm text-ink/70">{listing.address}</p>
      </div>
    </Link>
  );
}
