import Footer from "@/components/global/footer/Footer";
import NavigationBar from "@/components/global/navigationbar/NavigationBar";
import DoubleHero from "@/components/page/home/DoubleHero";
import Hero from "@/components/page/home/Hero";
import ProductHighlight from "@/components/page/home/ProductHighlight";
import SecondHero from "@/components/page/home/SecondHero";
import SpecialOffer from "@/components/page/home/SpecialOffer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <Hero />
      <ProductHighlight />
      <DoubleHero />
      <SpecialOffer />
      <SecondHero />
      <Footer />
    </div>
  );
}
