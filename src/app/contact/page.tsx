import ContentRenderer from "@/components/content/contentrenderer";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <ContentRenderer slug="contact_page" />
      <Footer />
    </>
  );
}
