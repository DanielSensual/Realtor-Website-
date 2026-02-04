export const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
    { name: "publishedAt", type: "datetime", title: "Published At" },
    { name: "category", type: "string", title: "Category" },
    { name: "excerpt", type: "text", title: "Excerpt" },
    { name: "coverImage", type: "image", title: "Cover Image" },
    { name: "body", type: "array", of: [{ type: "block" }] }
  ]
};
