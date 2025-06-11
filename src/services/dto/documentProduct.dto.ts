import { Prisma } from "@prisma/client";

export const documentProductSelect = {
  doc_prod_id: true,
  document_id: true,
  product_id: true,
  order: true,
} as const;

export type documentProductDTO = Prisma.document_productGetPayload<{
  select: typeof documentProductSelect;
}>;
