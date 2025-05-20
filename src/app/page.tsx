import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import BottomHero from "@/components/shared/bottomhero";
import DoubleHero from "@/components/shared/doublehero";
import Hero from "@/components/shared/hero";
import ProductCarousel from "@/components/shared/productcarousel";
import SpecialOffer from "@/components/shared/specialoffer";

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <Hero />
      <ProductCarousel />
      <DoubleHero />
      <SpecialOffer />
      <BottomHero />
      <Footer />
    </div>
  );
}
