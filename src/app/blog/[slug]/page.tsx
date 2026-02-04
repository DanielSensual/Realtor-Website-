import { mockPosts } from "@/content/mock-posts";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = mockPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-serif text-3xl">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">{post.category}</p>
        <h1 className="mt-4 font-serif text-4xl">{post.title}</h1>
        <p className="mt-4 text-sm text-ink/70">{post.date} · {post.author}</p>
        <div className="mt-10 space-y-6 text-base text-ink/80">
          <p>{post.excerpt}</p>
          <p>
            Placeholder copy for editorial layout. Replace with Sanity body content and rich text
            serialization once CMS is connected.
          </p>
        </div>
      </div>
    </article>
  );
}
