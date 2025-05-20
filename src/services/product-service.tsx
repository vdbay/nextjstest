import { prisma } from "@/lib/prisma";

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: {
      product_slug: slug,
    },
  });
  return product;
}
