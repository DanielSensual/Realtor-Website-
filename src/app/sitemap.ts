import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { mockAgents } from "@/content/mock-agents";
import { mockCommunities } from "@/content/mock-communities";
import { mockPosts } from "@/content/mock-posts";
import { mockListings } from "@/content/mock-listings";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/agents",
    "/blog",
    "/communities",
    "/contact",
    "/commercial",
    "/dashboard",
    "/home-valuation",
    "/idx-login",
    "/offices",
    "/property-management",
    "/search/buy",
    "/search/rent",
    "/search/sell",
    "/search/commercial",
    "/sell"
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.6
  }));

  const agentEntries = mockAgents.map((agent) => ({
    url: `${siteUrl}/agents/${agent.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));

  const communityEntries = mockCommunities.map((community) => ({
    url: `${siteUrl}/communities/${community.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  const blogEntries = mockPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));

  const listingEntries = mockListings.map((listing) => ({
    url: `${siteUrl}/listing/${listing.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...agentEntries, ...communityEntries, ...blogEntries, ...listingEntries];
}
