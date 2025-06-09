import { Prisma } from "@prisma/client";

export const sectionSelect = {
  id: true,
  type: true,
  data: true,
  title: true,
  slug: true,
} as const;

export type SectionDTO = Prisma.sectionGetPayload<{
  select: typeof sectionSelect;
}>;
