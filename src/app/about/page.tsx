import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import ContentRenderer from "@/components/content/contentrenderer";

export default async function About() {
  return (
    <>
      <NavigationBar />
      <ContentRenderer
        slug="about_page"
        className="min-h-[calc(100svh_-_72px)]"
      />
      <Footer />
    </>
  );
}
