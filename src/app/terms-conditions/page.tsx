import MarkdownContent from "@/components/content/markdowncontent";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function TermsConditions() {
  return (
    <>
      <NavigationBar />
      <MarkdownContent slug="terms-conditions_page" />
      <Footer />
    </>
  );
}
