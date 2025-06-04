import MarkdownContent from "@/components/content/markdowncontent";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function PrivacyPolicy() {
  return (
    <>
      <NavigationBar />
      <MarkdownContent
        slug="privacy-policy_page"
        className="min-h-[calc(100svh_-_72px)]"
      />
      <Footer />
    </>
  );
}
