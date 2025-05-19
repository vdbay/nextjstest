import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import DoubleHero from "@/components/shared/DoubleHero";
import Hero from "@/components/shared/Hero";
import ProductHighlight from "@/components/shared/ProductHighlight";
import SecondHero from "@/components/shared/SecondHero";
import SpecialOffer from "@/components/shared/SpecialOffer";

export default function Home() {
  return (
    <div className="">
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
