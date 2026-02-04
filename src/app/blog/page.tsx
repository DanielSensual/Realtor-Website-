import Link from "next/link";
import { mockPosts } from "@/content/mock-posts";

export default function BlogIndex() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Journal</p>
        <h1 className="mt-4 font-serif text-4xl">Market intelligence and lifestyle stories.</h1>
        <div className="mt-10 grid gap-6">
          {mockPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-ink/50">{post.category}</p>
              <h2 className="mt-3 font-serif text-2xl">{post.title}</h2>
              <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/50">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
