import { z } from "zod";

export enum ContentType {
  Markdown = "markdown",
  Text = "text",
  Image = "image",
}

export const ContentMarkdownSchema = z.string();

export type ContentMarkdownType = z.infer<typeof ContentMarkdownSchema>;

export const ContentImageSchema = z.object({
  src: z.string().url(),
  alt: z.string().optional(),
});

export type ContentImageType = z.infer<typeof ContentImageSchema>;
