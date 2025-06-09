import { getSectionsByPageSlug } from "@/services/page-section-service";
import MarkdownContent from "../content/markdowncontent";
import {
  HeroWidgetSchema,
  MarkdownWidgetSchema,
} from "@/lib/validators/section";

export default async function Section({ slug }: { slug: string }) {
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
              return <div>Markdown</div>;
            case "hero":
              const heroData = HeroWidgetSchema.parse(
                JSON.parse(section.data ?? "")
              );
              return <div>Hero</div>;
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
