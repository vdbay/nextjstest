import { getDocumentFromProduct } from "@/services/document-service";
import { getProducts } from "@/services/product-service";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { formatPrice } from "@/utils/common";

export default async function SpecialOffer() {
  const products = await getProducts();
  const documents = await Promise.all(
    products.map(async (product) => {
      const document = await getDocumentFromProduct(product);
      return document;
    })
  );
  return (
    <>
      <div className="my-18 text-center text-2xl">Special Offer</div>
      <div className="grid-cols-1 md:grid-cols-3 md:mx-30 mb-18 gap-8 lg:grid hidden">
        {Array.from(products)
          .slice(0, 6)
          .map((product, index) => (
            <div key={product.product_id} className="p-8">
              <Link
                href={`/products/${product.product_slug}`}
                key={index}
                className="flex flex-col items-center"
                passHref
              >
                <div className="flex justify-center items-center relative aspect-square w-60 lg:w-80">
                  <Image
                    src={documents[index]?.doc_path || ""}
                    alt="Product Image"
                    fill
                    className="object-cover object-center rounded-md"
                  />
                </div>
                <div className="mt-8 text-center">{product.product_name}</div>

                <div className="mt-4 text-center">
                  {formatPrice(product.product_price?.toNumber() ?? 0)}
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center lg:hidden mb-18 lg:mb-0">
        <div className="w-4/5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full items-center justify-center"
          >
            <CarouselContent>
              {Array.from(products).map((product, index) => (
                <CarouselItem key={index} className="basis-1/1 lg:basis-1/3">
                  <div className="px-8">
                    <Link
                      href={`/products/${product.product_slug}`}
                      key={index}
                      className="flex flex-col items-center"
                      passHref
                    >
                      <div className="flex justify-center items-center relative aspect-square w-60 lg:w-80">
                        <Image
                          src={documents[index]?.doc_path || ""}
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
            <CarouselPrevious className="lg:hidden" />
            <CarouselNext className="lg:hidden" />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center items-center mb-18">
        <Button asChild>
          <Link href="/products">View More</Link>
        </Button>
      </div>
    </>
  );
}
