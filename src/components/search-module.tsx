"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Sell", value: "sell" }
];

export function SearchModule() {
  const [active, setActive] = useState("buy");

  return (
    <div className="grid gap-5">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={cn(
              "rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] transition",
              active === tab.value
                ? "bg-ink text-ivory"
                : "border border-ink/20 text-ink/70 hover:text-ink"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_repeat(3,1fr)_auto]">
        <input
          className="w-full rounded-2xl border border-ink/10 px-4 py-3 text-sm"
          placeholder="City, community, MLS #"
        />
        <input className="rounded-2xl border border-ink/10 px-4 py-3 text-sm" placeholder="Min price" />
        <input className="rounded-2xl border border-ink/10 px-4 py-3 text-sm" placeholder="Beds" />
        <input className="rounded-2xl border border-ink/10 px-4 py-3 text-sm" placeholder="Baths" />
        <button className="rounded-2xl bg-ink px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory">
          Search
        </button>
      </div>
      <p className="text-xs text-ink/60">
        Advanced filters, map view, and saved search alerts are available once IDX provider is connected.
      </p>
    </div>
  );
}
