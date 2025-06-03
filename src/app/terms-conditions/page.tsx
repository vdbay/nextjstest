import ContentRenderer from "@/components/content/contentrenderer";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function TermsConditions() {
  return (
    <>
      <NavigationBar />
      <ContentRenderer slug="terms-conditions_page" />
      <Footer />
    </>
  );
}
