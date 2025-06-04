import MarkdownContent from "@/components/content/markdowncontent";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <MarkdownContent slug="contact_page" />
      <Footer />
    </>
  );
}
