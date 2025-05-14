// app/product/[slug]/ProductDetail.tsx
import NavigationBar from "@/components/layout/navigationbar";
import Footer from "@/components/layout/footer";
import { product } from "@prisma/client";
import { formatPrice } from "@/utils/common";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductDetail({ product }: { product: product }) {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <div className="flex flex-row">
        <div className="flex w-1/2  py-18 px-30 flex-col">
          {/* buat div aspect ratio 1:1 no max width, 100% width*/}
          <div className="w-full flex aspect-square">
            <Image
              src={"/images/products/lumiere.png"}
              height={0}
              width={0}
              alt="product image"
              className="object-cover w-full h-full"
              sizes="100vw"
            />
          </div>
          <div className="flex flex-row">
            {/* 4 div */}
            <div className="w-1/4 aspect-square border-b-gold-khasfee border-b-3">
              <Image
                src={"/images/products/lumiere.png"}
                height={0}
                width={0}
                alt="product image"
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>
            <div className="w-1/4 aspect-square hover:cursor-pointer">
              <Image
                src={"/images/products/lumiere.png"}
                height={0}
                width={0}
                alt="product image"
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>
            <div className="w-1/4 aspect-square hover:cursor-pointer">
              <Image
                src={"/images/products/lumiere.png"}
                height={0}
                width={0}
                alt="product image"
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>
            <div className="w-1/4 aspect-square hover:cursor-pointer">
              <Image
                src={"/images/products/lumiere.png"}
                height={0}
                width={0}
                alt="product image"
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="flex w-1/2  py-18 px-30 flex-col">
          <div className="uppercase text-sm text-black-opacity-50 mb-3">
            Facial Wash
          </div>
          <div className="text-2xl mb-3">{product.product_name}</div>
          <div className="mb-6">
            {formatPrice(product.product_price?.toNumber() ?? 0)}
          </div>
          {/* horizontal line */}
          <div className="border-black-opacity-50 border-b  mb-6" />
          <p className="mb-6">{product.product_desc}</p>
          <div className="mb-3">Quantity:</div>
          <div className="w-37 h-13 border-black-opacity-50 border flex flex-row items-center justify-center text-center mb-6">
            <div className="w-1/3 hover:cursor-pointer">-</div>
            <div className="w-1/3">1</div>
            <div className="w-1/3 hover:cursor-pointer">+</div>
          </div>
          <Button className="mb-3">add to cart</Button>
          <Button className="mb-6" variant={"khasfee-outline"}>
            buy now
          </Button>
          <div className="flex flex-row border-b-black-opacity-50 text-center border-b mb-4">
            <div className="py-5 px-3 border-b-gold-khasfee border-b-3">
              How to Apply
            </div>
            <div className="py-5 px-3 hover:cursor-pointer">Ingredients</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            aspernatur quaerat veritatis, doloribus placeat aut fugit reiciendis
            minus iure quibusdam voluptatem dolor rerum. Voluptatem at maiores
            officiis autem commodi corrupti!
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
