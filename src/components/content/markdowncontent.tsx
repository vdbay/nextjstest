import { markdownToHtml } from "@/lib/markdown";
import { cn } from "@/lib/utils";
import { ContentMarkdownType } from "@/lib/validators/content";
import { getContentBlockBySlug } from "@/services/content-block-service";

export default async function MarkdownContent({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const contentBlock = await getContentBlockBySlug(slug);
  const content = contentBlock?.content as ContentMarkdownType;
  const parsed = await markdownToHtml(content);
  return (
    <div className={cn("flex items-center justify-center p-16", className)}>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </div>
  );
}
