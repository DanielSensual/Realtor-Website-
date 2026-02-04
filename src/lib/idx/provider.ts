import type {
  Listing,
  ListingSearchParams,
  SavedSearch,
  FavoriteListing,
  LeadCapturePayload
} from "./types";
import { mockListings } from "@/content/mock-listings";

export interface IDXProvider {
  search(params: ListingSearchParams): Promise<Listing[]>;
  getListing(slug: string): Promise<Listing | null>;
  getSavedSearches(): Promise<SavedSearch[]>;
  getFavorites(): Promise<FavoriteListing[]>;
  saveFavorite(listingId: string): Promise<void>;
  saveSearch(params: ListingSearchParams): Promise<void>;
  leadCapture(payload: LeadCapturePayload): Promise<void>;
}

export class MockIDXProvider implements IDXProvider {
  async search(params: ListingSearchParams): Promise<Listing[]> {
    const list = mockListings.filter((listing) => listing.status === "active");
    if (!params.query) return list;
    const term = params.query.toLowerCase();
    return list.filter((listing) =>
      `${listing.address} ${listing.city} ${listing.state}`.toLowerCase().includes(term)
    );
  }

  async getListing(slug: string): Promise<Listing | null> {
    return mockListings.find((listing) => listing.slug === slug) ?? null;
  }

  async getSavedSearches(): Promise<SavedSearch[]> {
    return [
      {
        id: "saved-1",
        name: "Waterfront Estates",
        segment: "buy",
        query: "Waterfront"
      }
    ];
  }

  async getFavorites(): Promise<FavoriteListing[]> {
    return [{ id: "fav-1", listingId: "listing-1" }];
  }

  async saveFavorite(): Promise<void> {
    return;
  }

  async saveSearch(): Promise<void> {
    return;
  }

  async leadCapture(payload: LeadCapturePayload): Promise<void> {
    if (!payload.email || !payload.name) {
      throw new Error("Missing required lead fields");
    }
  }
}

export const idxProvider: IDXProvider = new MockIDXProvider();
