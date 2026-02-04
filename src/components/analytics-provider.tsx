"use client";

import { useEffect } from "react";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Placeholder to initialize analytics scripts (GA4 + Meta Pixel) via tag manager.
  }, []);

  return <>{children}</>;
}
