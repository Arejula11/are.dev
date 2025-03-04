// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define the "posts" collection schema
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishedDate: z.string().transform((str) => new Date(str)),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(), 
    author: z.string(),
    authorImage: z.string().optional(),
    authorUrl: z.string().optional(),
    URL: z.string().optional(),
    draft: z.boolean(),
    language: z.string()
  }),
});

export const collections = {
  posts: postsCollection,
};
