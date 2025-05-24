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
import { getDocumentFromProduct } from "@/services/document-service";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/utils/common";

export default async function ProductDetail({ product }: { product: product }) {
  const document = await getDocumentFromProduct(product);
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 py-6 lg:py-18 lg:pl-30 px-6 lg:px-16 flex-col items-center justify-center ">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-3/5 lg:w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={document?.doc_path || ""}
                  alt="hero"
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
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
          <Link href="https://www.tokopedia.com/khasfee/" passHref>
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
          <Link href="https://shopee.co.id/khasfee" passHref>
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
          <Tabs defaultValue="how">
            <TabsList>
              <TabsTrigger value="how">How to Apply</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            </TabsList>
            <TabsContent value="how">
              <div>Make changes to your How to Apply here.</div>
            </TabsContent>
            <TabsContent value="ingredients">
              Change your Ingredients here.
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
}
