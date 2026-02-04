export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage: string;
}

export const mockPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "designing-a-luxury-lifestyle",
    title: "Designing a Luxury Lifestyle in Central Florida",
    category: "Lifestyle",
    date: "2025-11-12",
    excerpt: "How to curate a home experience that feels like a five-star retreat every day.",
    author: "The Real Estate Collection",
    coverImage: "/images/placeholder.svg"
  },
  {
    id: "post-2",
    slug: "waterfront-market-report",
    title: "Waterfront Market Report: Winter 2025",
    category: "Market Insights",
    date: "2025-12-05",
    excerpt: "Pricing signals and demand trends for Florida's most exclusive waterfront homes.",
    author: "TREC Research",
    coverImage: "/images/placeholder.svg"
  }
];
