import { documentPick } from "@/lib/dto/document.dto";
import { ProductDTO } from "@/lib/dto/product.dto";
import { prisma } from "@/lib/prisma";

export async function getDocumentsFromProductById(productId: number) {
  const documents = await prisma.document_product.findMany({
    where: {
      product_id: productId,
    },
    select: {
      document: {
        select: documentPick,
      },
    },
  });
  return documents;
}
