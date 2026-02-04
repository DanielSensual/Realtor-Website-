export default function OfficesPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Office Locations</p>
        <h1 className="mt-4 font-serif text-4xl">Boutique presence across Florida.</h1>
        <div className="mt-10 grid gap-6 text-sm text-ink/70">
          <div className="rounded-3xl border border-ink/10 bg-white p-6">
            <p className="font-serif text-xl">Celebration</p>
            <p>123 Luxury Way, Celebration, FL</p>
            <p>(407) 555-0100</p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-6">
            <p className="font-serif text-xl">Naples</p>
            <p>88 Gulf Coast Blvd, Naples, FL</p>
            <p>(239) 555-0123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
