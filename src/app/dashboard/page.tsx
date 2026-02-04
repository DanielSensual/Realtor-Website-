import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Dashboard</p>
        <h1 className="mt-4 font-serif text-4xl">Favorites and saved searches.</h1>
        <p className="mt-6 text-sm text-ink/70">
          Authentication and saved search management will be handled by the IDX provider integration.
        </p>
        <div className="mt-8">
          <Link href="/idx-login" className="text-xs uppercase tracking-[0.25em] text-ink/70">
            Connect IDX Account
          </Link>
        </div>
      </div>
    </div>
  );
}
