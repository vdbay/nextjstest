import { cn } from "@/lib/utils";
import { ContentType } from "@/lib/validators/content";
import MarkdownRender from "./markdownrender";
import { getContentBlockWithValidatedContentBySlug } from "@/services/content-block-service";

type Props = {
  slug: string;
  className?: string;
};
export default async function ContentRenderer({ slug, className }: Props) {
  const content = await getContentBlockWithValidatedContentBySlug(slug);
  try {
    switch (content?.type as ContentType) {
      case ContentType.Markdown:
        if (!content || !content.content) {
          return (
            <div
              className={cn(
                "text-red-500 text-center justify-center items-center flex p-16 min-h-[calc(100svh_-_72px)]",
                className
              )}
            >
              Content not found
            </div>
          );
        }
        return (
          <MarkdownRender
            content={content?.content}
            className={cn(className)}
          />
        );
      case ContentType.Text:
        if (!content || !content.content) {
          return (
            <div
              className={cn(
                "text-red-500 text-center justify-center items-center flex p-16 min-h-[calc(100svh_-_72px)]",
                className
              )}
            >
              Content not found
            </div>
          );
        }
        return <div className={cn("p-4", className)}>{content.content}</div>;
      default:
        return (
          <div
            className={cn(
              "text-red-500 text-center justify-center items-center flex p-16 min-h-[calc(100svh_-_72px)]",
              className
            )}
          >
            Unsupported content type
          </div>
        );
    }
  } catch (error) {
    console.error("Error rendering content:", error);
    return (
      <div
        className={cn(
          "text-red-500 text-center justify-center items-center flex p-16 min-h-[calc(100svh_-_72px)]",
          className
        )}
      >
        An error occurred while rendering the content.
      </div>
    );
  }
}
