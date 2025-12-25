import { defineCollection, z } from 'astro:content';
import { createMicroCMSLoader } from './microcms';

const microCMSDateFields = {
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
  publishedAt: z.string().transform((str) => new Date(str)),
  revisedAt: z.string().transform((str) => new Date(str)),
};

const blogs = defineCollection({
  loader: createMicroCMSLoader('blogs'),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    content: z.string(),
    ...microCMSDateFields,
  }),
});

export const collections = {
  blogs,
};
