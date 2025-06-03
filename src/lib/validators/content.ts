import { z } from "zod";

export enum ContentType {
  Markdown = "markdown",
  Text = "text",
}

export const ContentMarkdownSchema = z.string().optional();

export type ContentMarkdownType = z.infer<typeof ContentMarkdownSchema>;

export const ContentTextSchema = z.string().optional();

export type ContentTextType = z.infer<typeof ContentTextSchema>;
