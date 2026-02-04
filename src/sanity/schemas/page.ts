export const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
    { name: "heroTitle", type: "string", title: "Hero Title" },
    { name: "heroSubtitle", type: "text", title: "Hero Subtitle" },
    { name: "body", type: "array", of: [{ type: "block" }] }
  ]
};
