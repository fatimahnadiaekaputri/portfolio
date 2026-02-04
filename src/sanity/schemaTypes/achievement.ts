import { defineType, defineField } from "sanity";

export const achievement = defineType({
    name: "achievement",
    title: "Achievement",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Title", type: "string" }),
      defineField({ name: "organizer", title: "Organizer", type: "string" }),
      defineField({ name: "time", title: "Time", type: "string" }),
      defineField({ name: "description", type: "text" }),
      defineField({
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      }),
    ],
  });
  