import { defineType, defineField } from "sanity";

export const achievement = defineType({
    name: "achievement",
    title: "Achievement",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Title", type: "string" }),
      defineField({ name: "organizer", title: "Organizer", type: "string" }),
      defineField({ name: "time", title: "Time", type: "string" }),
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
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      }),
    ],
  });
  