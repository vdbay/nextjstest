import { documentPick } from "@/lib/dto/document.dto";
import { ProductDTO, productPick } from "@/lib/dto/product.dto";
import { prisma } from "@/lib/prisma";

export async function getProductBySlugWithDocuments(
  slug: string
): Promise<ProductDTO | null> {
  const product = await prisma.product.findUnique({
    where: {
      product_slug: slug,
    },
    select: {
      ...productPick,
      document_product: {
        select: {
          document: {
            select: documentPick,
          },
        },
      },
    },
  });
  return product;
}

export async function getProductsWithDocuments() {
  const productsWithDocuments = await prisma.product.findMany({
    select: {
      ...productPick,
      document_product: {
        select: {
          document: {
            select: documentPick,
          },
        },
      },
    },
  });
  return productsWithDocuments;
}
