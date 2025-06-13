import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import CatalogueWidget from "@/components/section/cataloguewidget";
import FeatureWidget from "@/components/section/featurewidget";
import PageSections from "@/components/section/pagesections";
import TestimonialWidget from "@/components/section/testimonialwidget";
import BottomHero from "@/components/shared/bottomhero";
import DoubleHero from "@/components/shared/doublehero";
import Hero from "@/components/shared/Hero";
import ProductHighlight from "@/components/shared/producthighlight";
import SpecialOffer from "@/components/shared/specialoffer";

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <PageSections slug="home" />
      <CatalogueWidget slug="ygsh" className="" />
      <DoubleHero />
      <FeatureWidget />
      <BottomHero />
      <TestimonialWidget />
      <Footer />
    </div>
  );
}
