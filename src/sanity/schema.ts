import { page } from "./schemas/page";
import { blogPost } from "./schemas/blog-post";
import { agent } from "./schemas/agent";
import { community } from "./schemas/community";
import { officeLocation } from "./schemas/office-location";
import { featuredListing } from "./schemas/featured-listing";
import { homepageSection } from "./schemas/homepage-section";

export const schemaTypes = [
  page,
  blogPost,
  agent,
  community,
  officeLocation,
  featuredListing,
  homepageSection
];
