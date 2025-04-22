import NavigationBar from "@/component/global/navigationbar/NavigationBar";
import DoubleHero from "@/component/page/home/DoubleHero";
import Hero from "@/component/page/home/Hero";
import ProductHighlight from "@/component/page/home/ProductHighlight";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <Hero />
      <ProductHighlight />
      <DoubleHero />
    </div>
  );
}
