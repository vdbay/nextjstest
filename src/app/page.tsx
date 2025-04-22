import NavigationBar from "@/component/global/navigationbar/NavigationBar";
import DoubleHero from "@/component/page/home/DoubleHero";
import Hero from "@/component/page/home/Hero";
import ProductHighlight from "@/component/page/home/ProductHighlight";
import SecondHero from "@/component/page/home/SecondHero";
import SpecialOffer from "@/component/page/home/SpecialOffer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProductHighlight />
      <DoubleHero />
      <SpecialOffer />
      <SecondHero />
    </div>
  );
}
