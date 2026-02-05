import Image from "next/image";
import Link from "next/link";
import { mockAgents } from "@/content/mock-agents";
import { Button } from "@/components/button";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return mockAgents.map((agent) => ({ slug: agent.slug }));
}

export default function AgentProfile({ params }: { params: { slug: string } }) {
  const agent = mockAgents.find((item) => item.slug === params.slug);

  if (!agent) {
    notFound();
  }

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink/60 transition hover:text-ink"
        >
          ← All Agents
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[320px,1fr]">
          {/* Agent Photo */}
          <div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-fog shadow-soft">
              <Image
                src={agent.headshot}
                alt={agent.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
              />
            </div>
          </div>

          {/* Agent Info */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Agent</p>
            <h1 className="mt-3 font-serif text-4xl lg:text-5xl">{agent.name}</h1>
            <p className="mt-2 text-lg text-ink/70">{agent.title}</p>

            {/* Specialties */}
            <div className="mt-6 flex flex-wrap gap-2">
              {agent.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-brass/30 bg-brass/10 px-4 py-1.5 text-sm text-ink/80"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Bio */}
            <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-8">
              <h2 className="font-serif text-xl">About</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{agent.bio}</p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 grid gap-4 rounded-3xl border border-ink/10 bg-white p-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink/50">Phone</p>
                <a
                  href={`tel:${agent.phone.replace(/\D/g, '')}`}
                  className="mt-1 block text-lg transition hover:text-brass"
                >
                  {agent.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink/50">Email</p>
                <a
                  href={`mailto:${agent.email}`}
                  className="mt-1 block text-lg transition hover:text-brass"
                >
                  {agent.email}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Schedule Consultation</Button>
              <Button href="/search/buy" variant="outline">
                View My Listings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
