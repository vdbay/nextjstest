import { z } from "zod";

export enum ContentType {
  Markdown = "markdown",
  Image = "image",
  Hero = "hero",
}

export const ContentMarkdownSchema = z.string();

export type ContentMarkdownType = z.infer<typeof ContentMarkdownSchema>;

export const ContentImageSchema = z.object({
  src: z.string().url(),
  alt: z.string().optional(),
});

export type ContentImageType = z.infer<typeof ContentImageSchema>;

export const ContentHeroSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  image_src: z.string().url(),
  image_alt: z.string().optional(),
  button_text: z.string().optional(),
  button_href: z.string().url().optional(),
});

export type ContentHeroType = z.infer<typeof ContentHeroSchema>;
