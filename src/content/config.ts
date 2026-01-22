import { defineCollection, z } from 'astro:content';

export const cas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })),
    challenge: z.string(),
    solution: z.string(),
    results: z.string(),
    testimonial: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});
