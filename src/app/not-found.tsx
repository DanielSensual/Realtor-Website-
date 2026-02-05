import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-ink/60">404</p>
      <h1 className="mt-4 font-serif text-4xl">We could not find that page.</h1>
      <p className="mt-4 text-sm text-ink/70">
        The page may have moved or the link is no longer available.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm text-brass underline">
        Return home
      </Link>
    </div>
  );
}
