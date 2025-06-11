import { Prisma } from "@prisma/client";

export const productSelect = {
  product_id: true,
  product_name: true,
  product_desc: true,
  product_price: true,
  product_slug: true,
  product_instructions: true,
  product_ingredients: true,
  product_link_shopee: true,
  product_link_tokped: true,
} as const;

export type ProductDTO = Prisma.productGetPayload<{
  select: typeof productSelect;
}>;
