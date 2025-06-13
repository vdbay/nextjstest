import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import MarkdownContent from "@/components/content/markdowncontent";
import ImageContent from "@/components/content/imagecontent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageSections from "@/components/section/pagesections";

export default async function About() {
  return (
    <>
      <NavigationBar />
      <PageSections slug="about" />
      <Footer />
    </>
  );
}
