import { Button } from "@/components/button";

export default function CommercialPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Commercial</p>
        <h1 className="mt-4 font-serif text-4xl">Curated commercial opportunities.</h1>
        <p className="mt-6 text-sm text-ink/70">
          Boutique retail, hospitality, and investment properties with strategic advisory support.
        </p>
        <div className="mt-8">
          <Button href="/search/commercial">Browse Commercial Listings</Button>
        </div>
      </div>
    </div>
  );
}
