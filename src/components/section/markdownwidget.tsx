import { markdownToHtml } from "@/lib/markdown";
import { cn } from "@/lib/utils";
import { MarkdownWidgetType } from "@/lib/validators/section";

export default async function MarkdownWidget({
  data,
  className,
}: {
  data: MarkdownWidgetType;
  className: string;
}) {
  const html = await markdownToHtml(data.content);
  return (
    <div
      className={cn("prose max-w-none p-16", className, data.className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
