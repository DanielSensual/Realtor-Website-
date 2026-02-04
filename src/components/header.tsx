import Link from "next/link";
import { Button } from "@/components/button";

const navItems = [
  { label: "Buy", href: "/search/buy" },
  { label: "Rent", href: "/search/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Commercial", href: "/commercial" },
  { label: "Communities", href: "/communities" },
  { label: "Agents", href: "/agents" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg uppercase tracking-[0.35em] text-ink">
          The Real Estate Collection
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-ink/70 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/dashboard" className="text-xs uppercase tracking-[0.25em] text-ink/70">
            Dashboard
          </Link>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
