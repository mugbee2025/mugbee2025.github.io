import { defineCollection, z } from 'astro:content';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

// microCMS ローダー
const microCMSLoader = (endpoint: string) => {
  return async () => {
    try {
      const response = await client.getAllContents({ endpoint });
      return response;
    } catch (error) {
      console.error(`microCMS から ${endpoint} の取得に失敗:`, error);
      return [];
    }
  };
};

const microCMSDateFields = {
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
};

const thumbnailField = z.object({
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const pickupField = z.array(z.object({ id: z.string() })).optional();

export const tagField = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});

export type Tag = z.infer<typeof tagField>;

const blogs = defineCollection({
  loader: microCMSLoader('blogs'),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    content: z.string(),
    thumbnail: thumbnailField.optional(),
    description: z.string().optional(),
    category: z.array(z.string()).optional(),
    tags: z.array(tagField).optional(),
    pickup: pickupField,
    ...microCMSDateFields,
  }),
});

export const collections = {
  blogs,
};
