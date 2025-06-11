import { getProductAndDocumentsFromCatalogueBySlug } from "@/services/catalogue-product-service";
import Image from "next/image";
export default async function CatalogueWidget({
  slug,
  className,
}: {
  slug: string;
  className: string;
}) {
  const response = await getProductAndDocumentsFromCatalogueBySlug(slug);
  return (
    <div className="py-18 flex flex-col items-center justify-center gap-18">
      <div className="text-2xl">{response?.catalogue_name}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-16 justify-between w-full gap-8">
        {response?.catalogue_product.map((catprod) => {
          const product = catprod.product;
          const images = product?.document_product.at(0)?.document;
          return (
            <div
              key={catprod.cat_prod_id}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="aspect-square w-80 flex relative">
                <Image
                  src={images?.doc_path ?? ""}
                  alt={images?.doc_id.toString() ?? ""}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-4 text-center line-clamp-1">
                {product?.product_name}
              </div>
              <div className="text-center text-black/50 line-clamp-3">
                {product?.product_desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
