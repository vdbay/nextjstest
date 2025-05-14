import { prisma } from "@/lib/prisma";

export async function GetProductBySlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);

  return await prisma.product.findFirst({
    where: {
      product_name: decodedSlug,
    },
  });
}
