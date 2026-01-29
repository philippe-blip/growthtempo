import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cas' }),
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

export const collections = { cas };
