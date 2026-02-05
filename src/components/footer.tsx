import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-fog">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-3">
        <div>
          <p className="font-serif text-lg tracking-[0.2em] uppercase">The Real Estate Collection</p>
          <p className="mt-4 text-sm text-ink/70">
            A boutique brokerage delivering concierge service across Florida&apos;s most coveted communities.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-ink/70">
          <Link href="/about">Company</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/communities">Communities</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/offices">Office Locations</Link>
        </div>
        <div className="text-sm text-ink/70">
          <p>Listing information last updated within 24 hours.</p>
          <p className="mt-4">MLS data provided for personal, non-commercial use only.</p>
        </div>
      </div>
    </footer>
  );
}
