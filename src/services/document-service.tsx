import { prisma } from "@/lib/prisma";

import { product } from "@prisma/client";

export async function getDocumentFromProduct(myproduct: product) {
  if (myproduct.doc_id == null) {
    return null;
  }
  const document = await prisma.document.findFirst({
    where: {
      doc_id: myproduct.doc_id,
    },
  });
  return document;
}
