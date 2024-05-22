import { defineArrayMember, defineField } from "sanity";

export const post = {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of hte post",

      validation: (Rule) => Rule.required(),
    }),

    // slug fields
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug", // optional
      description: "Slug of the post", // optional
      options: {
        source: "title", // from the title field it will catch
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      type: "image",
      title: "image",
    }),

    defineField({
      name: "content",
      type: "array",
      title: "Content",

      of: [
        defineArrayMember({
            type: 'block'
        })
      ]
    }),

    defineField({
      name:'author',
      type:'reference',
      title:'Author',
      to:{
        type:'author'
      }
    })



  ],
};
