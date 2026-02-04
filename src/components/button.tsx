import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
}

export function Button({ href, variant = "primary", className, children, type = "button" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition";
  const styles: Record<typeof variant, string> = {
    primary: "bg-ink text-ivory hover:bg-midnight",
    ghost: "bg-transparent text-ivory border border-white/40 hover:border-white",
    outline: "bg-transparent text-ink border border-ink/20 hover:border-ink"
  };

  const classes = cn(base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
