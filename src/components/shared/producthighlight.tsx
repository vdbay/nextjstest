import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { getDocumentsFromProduct } from "@/services/document-service";
import { getProducts } from "@/services/product-service";
import Link from "next/link";
import { formatPrice } from "@/utils/common";

export default async function ProductHighlight() {
  const products = await getProducts();
  const documents = await Promise.all(
    products.map(async (product) => {
      const document = await getDocumentsFromProduct(product);
      return document;
    })
  );
  return (
    <>
      <div className="flex justify-center items-center flex-col mb-18">
        <div className="text-2xl mt-18 ">Your Glow Starts Here</div>
        <div className="mx-30 md:mx-40 w-4/5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full items-center justify-center mt-18"
          >
            <CarouselContent>
              {Array.from(products).map((product, index) => (
                <CarouselItem key={index} className="basis-1/1 lg:basis-1/3">
                  <div className="p-8">
                    <Link
                      href={`/products/${product.product_slug}`}
                      key={index}
                      className="flex flex-col items-center"
                      passHref
                    >
                      <div className="flex justify-center items-center relative aspect-square w-60 lg:w-80">
                        <Image
                          src={documents[index]?.[0]?.doc_path || ""}
                          alt="Product Image"
                          fill
                          className="object-cover object-center rounded-md"
                        />
                      </div>
                      <div className="mt-8 text-center">
                        {product.product_name}
                      </div>
                      <div className="mt-4 text-center">
                        {formatPrice(product.product_price?.toNumber() ?? 0)}
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Render prev/next if images > 1, but on large screens only if images > 3 */}
            {products.length > 1 && (
              <>
                <div className="block lg:hidden">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
                {products.length > 3 && (
                  <div className="hidden lg:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                )}
              </>
            )}
          </Carousel>
        </div>
      </div>
    </>
  );
}
