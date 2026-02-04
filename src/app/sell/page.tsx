import { Button } from "@/components/button";

export default function SellPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Sell</p>
        <h1 className="mt-4 font-serif text-4xl">A tailored marketing plan for every estate.</h1>
        <p className="mt-6 text-sm text-ink/70">
          We position every listing with cinematic storytelling, data-backed pricing, and a curated network
          of qualified buyers.
        </p>
        <div className="mt-8">
          <Button href="/home-valuation">Request a home valuation</Button>
        </div>
      </div>
    </div>
  );
}
