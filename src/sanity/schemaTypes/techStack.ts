import { defineType, defineField } from "sanity";

export const techStack = defineType({
    name: "techStack",
    title: "Tech Stack",
    type: "document",
    fields: [
      defineField({
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      }),
      defineField({
        name: "description",
        title: "Description",
        type: "text",
      }),
    ],
  });
  