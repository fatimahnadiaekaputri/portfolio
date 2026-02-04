import { defineType, defineField } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Project Name", type: "string" }),
      defineField({
        name: "description",
        type: "text",
      }),
      defineField({
        name: "role",
        title: "Role",
        type: "string",
      }),
      defineField({
        name: "relatedTo",
        title: "Related To",
        type: "array",
        of: [
            {
              type: 'reference',
              to: [
                { type: 'experience' },
                { type: 'achievement' },
              ],
            },
          ],
      }),
      defineField({
        name: "links",
        title: "Links",
        type: "array",
        of: [{ type: "url" }],
      }),
      defineField({
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      }),
      defineField({
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      }),
    ],
  });
  