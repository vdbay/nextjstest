import ContentRenderer from "@/components/content/contentrenderer";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function Khasfeeliates() {
  return (
    <>
      <NavigationBar />
      <ContentRenderer slug="khasfeeliate_page" />
      <Footer />
    </>
  );
}
