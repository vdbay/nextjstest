import { prisma } from "@/lib/prisma";

import { product } from "@prisma/client";

export async function getDocumentsFromProduct(myproduct: product) {
  if (myproduct == null) {
    return null;
  }
  const documents = await prisma.document_product.findMany({
    where: {
      product_id: myproduct.product_id,
    },
  });
  const documentIds = documents
    .map((doc) => doc.document_id)
    .filter((id: number | null): id is number => id !== null);
  const documentDetails = await prisma.document.findMany({
    where: {
      doc_id: {
        in: documentIds,
      },
    },
  });
  return documentDetails;
}
