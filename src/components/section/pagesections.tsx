import { getSectionsByPageSlug } from "@/services/page-section-service";
import {
  HeroWidgetSchema,
  MarkdownWidgetSchema,
} from "@/lib/validators/section";
import MarkdownWidget from "./markdownwidget";
import { cn } from "@/lib/utils";
import HeroWidget from "./herowidget";

export default async function PageSections({
  slug,
  className,
}: {
  slug: string;
  className: string;
}) {
  const response = await getSectionsByPageSlug(slug);

  const sortedSections = response?.page_section
    ?.sort((a, b) => Number(a.order) - Number(b.order))
    .map((pageSection) => pageSection.section);

  return (
    <>
      {sortedSections?.map((section) => {
        try {
          switch (section.type) {
            case "markdown":
              const markdownData = MarkdownWidgetSchema.parse(
                JSON.parse(section.data ?? "")
              );
              return (
                <MarkdownWidget data={markdownData} className={cn(className)} />
              );
            case "hero":
              const heroData = HeroWidgetSchema.parse(
                JSON.parse(section.data ?? "")
              );
              return <HeroWidget data={heroData} className={cn(className)} />;
            default:
              return <div>An Error Occured</div>;
          }
        } catch (error) {
          return <div>An Error Occured</div>;
        }
      })}
    </>
  );
}
