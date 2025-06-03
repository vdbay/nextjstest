import { parseAndValidateContentBlock } from "@/lib/parsers/content";
import { prisma } from "@/lib/prisma";

export async function getContentBlockWithValidatedContentBySlug(slug: string) {
  if (!slug) return null;

  try {
    const normalizedSlug = slug.toLowerCase().trim();
    const contentBlock = await prisma.content_block.findUnique({
      where: { slug: normalizedSlug },
    });

    if (!contentBlock || !contentBlock.content) return null;

    const validatedContent = parseAndValidateContentBlock(contentBlock);
    if (!validatedContent) return null;

    return {
      ...contentBlock,
      content: validatedContent,
    };
  } catch (error) {
    console.error("Failed to fetch or validate content block:", error);
    return null;
  }
}
