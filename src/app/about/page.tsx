import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import MarkdownContent from "@/components/content/markdowncontent";

export default async function About() {
  return (
    <>
      <NavigationBar />
      <MarkdownContent
        slug="about_page"
        className="min-h-[calc(100svh_-_72px)]"
      />
      <Footer />
    </>
  );
}
