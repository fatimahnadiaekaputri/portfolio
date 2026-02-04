import { defineField, defineType } from "sanity";

export const experience = defineType({
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Position", type: "string" }),
      defineField({ name: "company", title: "Company", type: "string" }),
      defineField({ name: "duration", title: "Duration", type: "string" }),
      defineField({
        name: "type",
        title: "Type",
        type: "string",
        options: {
          list: [
            { title: "Full Time", value: "fulltime" },
            { title: "Part Time", value: "parttime" },
            { title: "Contract", value: "contract" },
            { title: "Internship", value: "intern" },
            { title: "Organization", value: "organization" },
          ],
        },
      }),
      defineField({
        name: "description",
        title: "Description",
        type: "text",
      }),
      defineField({
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      }),
      defineField({
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      }),
    ],
  });
  