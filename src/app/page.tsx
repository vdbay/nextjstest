import HomeGrid from "@/components/khasfee/home-grid";
import { NavbarKhasfee } from "@/components/khasfee/navbar-khasfee";
import HomePromotionBar from "@/components/khasfee/home-promotion-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePromotionBar />
      <NavbarKhasfee />
      <HomeGrid />
      <div className="grid grid-cols-1 md:grid-cols-2 m-6 gap-6">
        <div className="flex flex-col gap-6">
          <div className=" font-bold italic text-6xl">
            OUR PRODUCT BACKED BY SCIENCE
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            quaerat perspiciatis nisi quam nemo rem nobis delectus odio tempora
            rerum excepturi veritatis accusamus aliquid iste? Distinctio magnam
            deserunt quos veniam!
          </div>
          <Button>Read More</Button>
        </div>
        <div className="flex flex-col bg-gray-100 p-6 rounded-4xl items-center">
          <div className="flex flex-row justify-between w-full gap-4">
            <Button className="flex-grow">MOISTURIZER</Button>
            <Button className="flex-grow">SUNSCREEN</Button>
            <Button className="flex-grow">FACIAL WASH</Button>
          </div>
          <div className="flex flex-row justify-between w-full  my-4 gap-6">
            <div className="flex-grow flex flex-col gap-6 ">
              <div className="text-2xl font-bold ">
                CERA PROBIOTIC MOISTURIZER
              </div>
              <Button>30mL</Button>
            </div>
            <div className="flex-grow ">
              <ul role="list" className="list-disc ">
                <li>Good Regeneration</li>
                <li>Stronger Skin Barrier</li>
                <li>Stress Defense</li>
                <li>Deep Penetration</li>
              </ul>
            </div>
          </div>
          <div className="flex bg-gray-300 w-full h-80 rounded-xl p-2 items-end justify-end">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
