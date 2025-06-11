import { prisma } from "@/lib/prisma";
import { ContentType } from "@/lib/validators/content";

export async function getContentBlockBySlug(slug: string) {
  if (!slug) return null;

  try {
    const normalizedSlug = slug.toLowerCase().trim();
    const contentBlock = await prisma.content_block.findUnique({
      where: { slug: normalizedSlug },
    });

    if (!contentBlock || !contentBlock.content) return null;

    let parsedContent;
    switch (contentBlock.type) {
      case ContentType.Image:
        parsedContent = JSON.parse(contentBlock.content);
        break;
      default:
        parsedContent = contentBlock.content;
        break;
    }

    return {
      ...contentBlock,
      content: parsedContent,
    };
  } catch (error) {
    console.error("Failed to fetch content block:", error);
    return null;
  }
}
