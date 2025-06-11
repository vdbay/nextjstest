import { documentSelect } from "@/services/dto/document.dto";
import { ProductDTO, productSelect } from "@/services/dto/product.dto";
import { prisma } from "@/lib/prisma";

export async function getProductBySlugWithDocuments(
  slug: string
): Promise<ProductDTO | null> {
  const product = await prisma.product.findUnique({
    where: {
      product_slug: slug,
    },
    select: {
      ...productSelect,
      document_product: {
        select: {
          document: {
            select: documentSelect,
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
      ...productSelect,
      document_product: {
        select: {
          document: {
            select: documentSelect,
          },
        },
      },
    },
  });
  return productsWithDocuments;
}
