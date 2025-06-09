import { Prisma } from "@prisma/client";

export const pageSelect = {
  id: true,
  slug: true,
  title: true,
} as const;

export type PageDTO = Prisma.pageGetPayload<{
  select: typeof pageSelect;
}>;
