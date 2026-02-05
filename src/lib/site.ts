export const siteConfig = {
  name: "The Real Estate Collection",
  description: "A boutique luxury real estate brokerage in Florida offering curated listings, concierge service, and expert agents."
};

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? "http://localhost:3000";
  const withProtocol = configured.startsWith("http") ? configured : `https://${configured}`;
  return withProtocol.replace(/\/$/, "");
}
