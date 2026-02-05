"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Error</p>
      <h1 className="mt-4 font-serif text-4xl">Something went wrong.</h1>
      <p className="mt-4 text-sm text-ink/70">
        Please try again or return to the homepage.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory"
        >
          Try again
        </button>
        <Link href="/" className="rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.25em] text-ink">
          Go home
        </Link>
      </div>
    </div>
  );
}
