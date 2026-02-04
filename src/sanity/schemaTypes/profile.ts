import { defineType, defineField } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",

  fields: [
    defineField({
      name: "displayName",
      title: "Display Name",
      type: "string",
      description: "Name shown on hero / landing page",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Full / legal name",
    }),

    defineField({
      name: "roles",
      title: "Roles / Jobs",
      type: "array",
      of: [{ type: "string" }],
      description: "Multiple roles (e.g. Backend Engineer, AI Researcher)",
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "descriptions",
      title: "About Me",
      type: "array",
      of: [{ type: "text" }],
    }),

    defineField({
        name: "education",
        title: "Education",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "institution",
                title: "Institution",
                type: "string",
                validation: (Rule) => Rule.required(),
              },
              {
                name: "degree",
                title: "Degree",
                type: "string",
                description: "e.g. Bachelor of Information Engineering",
              },
              {
                name: "field",
                title: "Field of Study",
                type: "string",
              },
              {
                name: "startYear",
                title: "Start Year",
                type: "string",
              },
              {
                name: "endYear",
                title: "End Year",
                type: "string",
              },
            ],
          },
        ],
      }),

    defineField({
      name: "cvLink",
      title: "CV Link",
      type: "url",
    }),

    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Platform Name",
              type: "string",
            },
            {
              name: "link",
              title: "URL",
              type: "url",
              description: "Supports https, mailto, tel",
              validation: (Rule) =>
              Rule.uri({
                scheme: ["http", "https", "mailto", "tel"],
                allowRelative: true,
              }),
            },
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
  ],
});
