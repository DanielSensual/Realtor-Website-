export const agent = {
  name: "agent",
  title: "Agent",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "name" } },
    { name: "title", type: "string", title: "Title" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "email", type: "string", title: "Email" },
    { name: "headshot", type: "image", title: "Headshot" },
    { name: "specialties", type: "array", of: [{ type: "string" }] },
    { name: "bio", type: "text", title: "Bio" }
  ]
};
