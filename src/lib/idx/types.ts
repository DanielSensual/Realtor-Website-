export type ListingSegment = "buy" | "rent" | "sell" | "commercial";

export interface Listing {
  id: string;
  slug: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  image: string;
  status: "active" | "pending" | "sold";
  description: string;
  features: string[];
  latitude: number;
  longitude: number;
}

export interface ListingSearchParams {
  segment: ListingSegment;
  query?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  city?: string;
  mapBounds?: string;
}

export interface AgentProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  headshot: string;
  specialties: string[];
  bio: string;
}

export interface SavedSearch {
  id: string;
  name: string;
  segment: ListingSegment;
  query: string;
}

export interface FavoriteListing {
  id: string;
  listingId: string;
}

export interface LeadCapturePayload {
  listingId?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
}
