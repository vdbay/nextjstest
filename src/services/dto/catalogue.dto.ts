import { Prisma } from "@prisma/client";

export const catalogueSelect = {
  catalogue_id: true,
  catalogue_name: true,
  catalogue_desc: true,
  catalogue_slug: true,
} as const;

export type catalogueDTO = Prisma.catalogueGetPayload<{
  select: typeof catalogueSelect;
}>;
