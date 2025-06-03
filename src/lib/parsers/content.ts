import {
  ContentMarkdownSchema,
  ContentTextSchema,
  ContentType,
} from "@/lib/validators/content";
import { content_block } from "@prisma/client";

export function getSchemaForContentType(type: ContentType) {
  switch (type) {
    case ContentType.Markdown:
      return ContentMarkdownSchema;
    case ContentType.Text:
      return ContentTextSchema;
    default:
      return null;
  }
}

export function parseAndValidateContentBlock(contentBlock: content_block) {
  const schema = getSchemaForContentType(contentBlock.type as ContentType);
  if (!schema) return null;

  try {
    return schema.parse(contentBlock.content);
  } catch {
    return null;
  }
}
