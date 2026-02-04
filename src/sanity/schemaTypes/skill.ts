import { defineType, defineField } from "sanity";

export const skill = defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Skill Name", type: "string" }),
      defineField({
        name: "techStack",
        title: "Tech Stack",
        type: "reference",
        to: [{ type: "techStack" }],
      }),
      defineField({
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      }),
      defineField({
        name: "description",
        type: "text",
      }),
    ],
  });
  