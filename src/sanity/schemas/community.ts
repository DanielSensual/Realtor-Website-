export const community = {
  name: "community",
  title: "Community",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "name" } },
    { name: "region", type: "string", title: "Region" },
    { name: "heroMedia", type: "image", title: "Hero Image" },
    { name: "intro", type: "text", title: "Intro" },
    { name: "featuredNeighborhoods", type: "array", of: [{ type: "string" }] }
  ]
};
