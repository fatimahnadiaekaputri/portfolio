import { defineType, defineField } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Project Name", type: "string" }),
      defineField({
        name: "description",
        title: "Description",
        type: "array",
        of: [
          {
            type: "block",
            styles: [
              { title: "Normal", value: "normal" },
              { title: "H3", value: "h3" },
            ],
            lists: [
              { title: "Bullet", value: "bullet" },
              { title: "Numbered", value: "number" },
            ],
            marks: {
              decorators: [
                { title: "Bold", value: "strong" },
                { title: "Italic", value: "em" },
              ],
              annotations: [
                {
                  title: "Link",
                  name: "link",
                  type: "object",
                  fields: [{ name: "href", type: "url", title: "URL" }],
                },
              ],
            },
          },
        ],
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
  