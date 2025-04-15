import HomeGrid from "@/components/khasfee/home-grid";
import { NavbarKhasfee } from "@/components/khasfee/navbar-khasfee";
import HomePromotionBar from "@/components/khasfee/home-promotion-bar";
import HomeProductHighlight from "@/components/khasfee/home-product-highlight";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePromotionBar />
      <NavbarKhasfee />
      <HomeGrid />
      <HomeProductHighlight />
      <div className="mx-6 text-6xl font-bold">ENJOY SHOPPING!</div>
      <div className="mx-6">
        <div className="flex flex-row gap-6 mb-6">
          <div className=" p-2  bg-gray-100 rounded-2xl font-semibold text-lg">
            SPECIAL PRICE
          </div>
          <div className=" p-2  bg-gray-100 rounded-2xl font-semibold text-lg">
            ALL PRODUCTS
          </div>
        </div>
      </div>
      <div className="mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl flex items-center justify-center aspect-1/1 flex-col gap-2 p-6"
          >
            <div className="bg-gray-300 flex w-full h-full rounded-2xl p-6">
              gambar
            </div>
            <div className="font-semibold">Cera Probiotic Moisturizer</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="font-bold text-xl">Rp. XXX.XXX</div>
              <div className="text-gray-500 line-through">Rp. XXX.XXX</div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-between">
              <div className="grid grid-cols-2 gap-2 items-center">
                <div className="bg-gray-300 rounded-2xl h-16 grid place-items-center p-2">
                  BUY NOW
                </div>
                <div className="bg-gray-300 rounded-2xl h-16 grid place-items-center p-2">
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-6">
        <div className="inline-block font-bold text-3xl bg-gray-100 px-6 py-2 rounded-2xl">
          SEE MORE SPECIAL OFFER
        </div>
      </div>
    </div>
  );
}
