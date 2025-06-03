import ContentRenderer from "@/components/content/contentrenderer";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function FAQ() {
  return (
    <>
      <NavigationBar />
      <ContentRenderer
        slug="faq_page"
        className="min-h-[calc(100svh_-_72px)]"
      />
      <Footer />
    </>
  );
}
