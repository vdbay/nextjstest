import { getSectionsByPageSlug } from "@/services/page-section-service";
import {
  HeroWidgetSchema,
  MarkdownWidgetSchema,
} from "@/lib/validators/widget";
import MarkdownWidget from "./markdownwidget";
import { cn } from "@/lib/utils";
import HeroWidget from "./herowidget";

export default async function PageSections({
  slug,
  className,
}: {
  slug: string;
  className?: string;
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
                <MarkdownWidget
                  key={section.id}
                  data={markdownData}
                  className={cn(className)}
                />
              );
            case "hero":
              const heroData = HeroWidgetSchema.parse(
                JSON.parse(section.data ?? "")
              );
              return (
                <HeroWidget
                  key={section.id}
                  data={heroData}
                  className={cn(className)}
                  showTitle={heroData.showTitle}
                  showSubtitle={heroData.showSubtitle}
                  showButton={heroData.showButton}
                />
              );
            default:
              return <div key={section.id}>An Error Occured</div>;
          }
        } catch (error) {
          return <div key={section.id}>An Error Occured</div>;
        }
      })}
    </>
  );
}
