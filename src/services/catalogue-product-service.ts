import { prisma } from "@/lib/prisma";
import { catalogueSelect } from "@/services//dto/catalogue.dto";
import { catalogueProductSelect } from "@/services/dto/catalogueProduct.dto";
import { productSelect } from "@/services/dto/product.dto";
import { documentSelect } from "./dto/document.dto";
import { documentProductSelect } from "./dto/documentProduct.dto";

export async function getProductAndDocumentsFromCatalogueBySlug(slug: string) {
  const response = await prisma.catalogue.findUnique({
    where: {
      catalogue_slug: slug,
    },
    select: {
      ...catalogueSelect,
      catalogue_product: {
        select: {
          ...catalogueProductSelect,
          product: {
            select: {
              ...productSelect,
              document_product: {
                select: {
                  ...documentProductSelect,
                  document: { select: { ...documentSelect } },
                },
              },
            },
          },
        },
      },
    },
  });
  return response;
}
