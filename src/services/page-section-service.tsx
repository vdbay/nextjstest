import { prisma } from "@/lib/prisma";
import { pageSelect } from "./dto/page.dto";
import { pageSectionSelect } from "./dto/pageSection.dto";
import { sectionSelect } from "./dto/section.dto";

export async function getSectionsByPageSlug(slug: string) {
  const response = await prisma.page.findUnique({
    where: {
      slug: slug,
    },
    select: {
      ...pageSelect,
      page_section: {
        select: {
          ...pageSectionSelect,
          section: {
            select: sectionSelect,
          },
        },
      },
    },
  });
  return response;
}
