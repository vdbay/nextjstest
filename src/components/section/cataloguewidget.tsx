import { getProductAndDocumentsFromCatalogueBySlug } from "@/services/catalogue-product-service";
import Image from "next/image";
import Link from "next/link";
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
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-8 mx-8">
        {response?.catalogue_product.map((catprod) => {
          const product = catprod.product;
          const images = product?.document_product.at(0)?.document;
          return (
            <Link
              href={`/products/${product?.product_slug}`}
              className="flex flex-col items-center"
              passHref
              key={catprod.cat_prod_id}
            >
              <div
                key={catprod.cat_prod_id}
                className="flex flex-col items-center justify-start gap-4 w-32 sm:w-60 overflow-clip"
              >
                <div className="aspect-square flex relative overflow-clip w-60 sm:w-80">
                  <Image
                    src={images?.doc_path ?? ""}
                    alt={images?.doc_id.toString() ?? ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="pt-4 text-center line-clamp-3 sm:line-clamp-2">
                  {product?.product_name}
                </div>
                <div className="text-center text-black/50 line-clamp-5 sm:line-clamp-3">
                  {product?.product_desc}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
