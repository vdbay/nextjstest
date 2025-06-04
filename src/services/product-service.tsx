import { ProductDTO, productPick } from "@/lib/dto/product.dto";
import { prisma } from "@/lib/prisma";

export async function getProducts(): Promise<ProductDTO[]> {
  const products = await prisma.product.findMany({
    select: productPick,
  });
  return products;
}

export async function getProductBySlug(
  slug: string
): Promise<ProductDTO | null> {
  const product = await prisma.product.findUnique({
    where: {
      product_slug: slug,
    },
    select: productPick,
  });
  return product;
}
