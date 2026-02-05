import Link from "next/link";
import Image from "next/image";
import { mockPosts } from "@/content/mock-posts";

export default function BlogIndex() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Journal</p>
        <h1 className="mt-4 font-serif text-4xl">Market intelligence and lifestyle stories.</h1>
        <div className="mt-10 grid gap-6">
          {mockPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="grid gap-6 rounded-3xl border border-ink/10 bg-white p-6 md:grid-cols-[200px,1fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-fog">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink/50">{post.category}</p>
                <h2 className="mt-3 font-serif text-2xl">{post.title}</h2>
                <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/50">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
