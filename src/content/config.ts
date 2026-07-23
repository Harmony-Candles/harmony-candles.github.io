import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    price: z.number(),
    oldPrice: z.number().optional(),
    featured: z.boolean().default(false),
    bestSeller: z.boolean().default(false),
    isNew: z.boolean().default(false),
    image: z.string(),
    gallery: z.array(z.string()).optional().default([]),
    shortDescription: z.string(),
    description: z.string(),
    features: z.array(z.string()).optional().default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    whatsappMessage: z.string().optional(),
  }),
});

const coursesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    price: z.number().optional(),
    duration: z.string(),
    lessons: z.number(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    whatsapp: z.string().optional(),
  }),
});

const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().optional().default(0),
  }),
});

export const collections = {
  products: productsCollection,
  courses: coursesCollection,
  faq: faqCollection,
};