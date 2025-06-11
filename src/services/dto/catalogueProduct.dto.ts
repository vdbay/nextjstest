import { Prisma } from "@prisma/client";

export const catalogueProductSelect = {
  cat_prod_id: true,
  catalogue_id: true,
  product_id: true,
  order: true,
} as const;

export type catalogueProductDTO = Prisma.catalogue_productGetPayload<{
  select: typeof catalogueProductSelect;
}>;
