import Link from "next/link";
import Image from "next/image";
import { mockAgents } from "@/content/mock-agents";

export default function AgentsPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Agents</p>
        <h1 className="mt-4 font-serif text-4xl">Advisors with discretion and insight.</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Our team of luxury real estate specialists brings unparalleled expertise and
          white-glove service to every transaction.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockAgents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.slug}`}
              className="group rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-fog">
                <Image
                  src={agent.headshot}
                  alt={agent.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-5">
                <h2 className="font-serif text-2xl">{agent.name}</h2>
                <p className="mt-1 text-sm text-ink/60">{agent.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {agent.specialties.slice(0, 2).map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-fog px-3 py-1 text-xs text-ink/70"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
