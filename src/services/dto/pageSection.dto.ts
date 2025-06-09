import { Prisma } from "@prisma/client";

export const pageSectionSelect = {
  id: true,
  page_id: true,
  section_id: true,
  order: true,
} as const;

export type PageSectionDTO = Prisma.page_sectionGetPayload<{
  select: typeof pageSectionSelect;
}>;
