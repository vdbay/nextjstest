import { getProductAndDocumentsFromCatalogueBySlug } from "@/services/catalogue-product-service";
import { getProductsWithDocuments } from "@/services/product-service";
import Image from "next/image";
import Link from "next/link";
export default async function SimilarWidget({
  slug,
  className,
}: {
  slug?: string;
  className?: string;
}) {
  const response = await getProductsWithDocuments();
  return (
    <div className="py-18 flex flex-col items-center justify-center gap-18">
      <div className="text-2xl">You May Also Like</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-8 mx-8">
        {response
          ?.filter((product) => product.product_slug !== slug)
          .sort((a, b) => Number(a.product_id) - Number(b.product_id))
          .slice(0, 4)
          .map((product) => {
            const images = product?.document_product.at(0)?.document;
            return (
              <Link
                href={`/products/${product?.product_slug}`}
                className="flex flex-col items-center"
                passHref
              >
                <div
                  key={product.product_id}
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
