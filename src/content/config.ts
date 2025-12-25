import { defineCollection, z } from 'astro:content';
import { createMicroCMSLoader } from './microcms';

const microCMSDateFields = {
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
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
