import NavigationBar from "@/components/layout/navigationbar";
import Footer from "@/components/layout/footer";
import { product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getDocumentsFromProduct } from "@/services/document-service";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/utils/common";

export default async function ProductDetail({ product }: { product: product }) {
  const documents = await getDocumentsFromProduct(product);
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 py-6 lg:py-18 lg:pl-30 px-6 lg:px-16 flex-col items-center justify-center ">
          {documents && documents.length > 1 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-3/5 lg:w-full"
            >
              <CarouselContent>
                {documents.map((doc, idx) => (
                  <CarouselItem key={doc.doc_id || idx}>
                    <Image
                      src={doc.doc_path || ""}
                      alt={`product-image-${idx + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : documents && documents.length === 1 ? (
            <Image
              src={documents[0].doc_path || ""}
              alt="product-image-1"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400">
              No images available
            </div>
          )}
        </div>
        <div className="flex w-full lg:w-1/2 py-6 lg:py-18 lg:pl-30 px-6 lg:px-16 flex-col">
          <div className="uppercase text-sm text-black-opacity-50 mb-3">
            Facial Wash
          </div>
          <div className="text-2xl mb-3">{product.product_name}</div>
          <div className="mb-6">
            {formatPrice(product.product_price?.toNumber() ?? 0)}
          </div>
          <Separator className="mb-6" />
          <p className="mb-6">{product.product_desc}</p>
          <Link href={product.product_link_tokped ?? "#"} passHref>
            <Button className="mb-3 w-full justify-center flex">
              <Image
                src="/images/tokopedia.png"
                width={16}
                height={16}
                alt="tokopedia-logo"
              />{" "}
              Buy on Tokopedia
            </Button>
          </Link>
          <Link href={product.product_link_shopee ?? "#"} passHref>
            <Button
              className="mb-6 w-full justify-center flex"
              variant={"khasfee-outline"}
            >
              <Image
                src="/images/shopee.png"
                width={16}
                height={16}
                alt="shopee-logo"
              />{" "}
              Buy on Shopee
            </Button>
          </Link>
          <Tabs defaultValue="ingredients">
            <TabsList>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="how">How to Apply</TabsTrigger>
            </TabsList>
            <TabsContent value="how">
              <div>{product.product_instructions}</div>
            </TabsContent>
            <TabsContent value="ingredients">
              {product.product_ingredients}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
}
