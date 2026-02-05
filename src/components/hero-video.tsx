import { Button } from "@/components/button";
import { SearchModule } from "@/components/search-module";

export function HeroVideo() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight text-ivory -mt-16 lg:-mt-20">
      <iframe
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden pointer-events-none"
        src="https://streamable.com/e/zz41lc?autoplay=1&loop=1&muted=1&nocontrols=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        aria-hidden="true"
        style={{ transform: 'scale(1.5)', transformOrigin: 'center center' }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center motion-safe:hidden"
        style={{ backgroundImage: "url('/hero-poster.svg')" }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-40">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-ivory/70">Luxury Brokerage</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-shadow sm:text-5xl lg:text-6xl">
            Curated estates. Cinematic living. A boutique experience.
          </h1>
          <p className="mt-6 text-lg text-ivory/80">
            The Real Estate Collection pairs elevated taste with data-driven expertise across Florida&apos;s most
            prestigious communities.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/search/buy">Search Homes</Button>
            <Button href="/agents" variant="ghost">
              Meet Our Agents
            </Button>
            <Button href="/home-valuation" variant="ghost">
              Get Home Value
            </Button>
          </div>
        </div>
        <div className="rounded-3xl bg-ivory/95 p-6 text-ink shadow-soft">
          <SearchModule />
        </div>
      </div>
    </section>
  );
}
