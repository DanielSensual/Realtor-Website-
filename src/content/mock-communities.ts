export interface Community {
  id: string;
  slug: string;
  name: string;
  region: "Atlantic" | "Central" | "Gulf";
  description: string;
  heroImage: string;
}

export const mockCommunities: Community[] = [
  {
    id: "community-1",
    slug: "celebration",
    name: "Celebration",
    region: "Central",
    description: "Tree-lined boulevards, lakeside promenades, and luxury estates minutes from Orlando.",
    heroImage: "/images/communities/celebration.jpg"
  },
  {
    id: "community-2",
    slug: "winter-park",
    name: "Winter Park",
    region: "Central",
    description: "Elegant brick streets, boutique shopping, and historic estates with modern refinement.",
    heroImage: "/images/communities/winter-park.jpg"
  },
  {
    id: "community-3",
    slug: "naples",
    name: "Naples",
    region: "Gulf",
    description: "Gulf-front residences with effortless indoor-outdoor living and sunset panoramas.",
    heroImage: "/images/communities/naples.jpg"
  }
];
