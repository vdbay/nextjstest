import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import MarkdownContent from "@/components/content/markdowncontent";
import ImageContent from "@/components/content/imagecontent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function About() {
  return (
    <>
      <NavigationBar />
      <div className="w-full aspect-[3/1] relative">
        <ImageContent
          slug="main_hero"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 grid grid-rows-3 items-center justify-center bg-black/50">
          <div />
          <div className="flex flex-col items-center justify-center">
            <div className="text-white text-5xl font-bold text-center drop-shadow-md uppercase">
              Our Company
            </div>
            <p className="text-white text-lg md:text-xl text-center mt-6">
              Learn more about our mission, values, and the team behind Khasfee.
            </p>
          </div>

          <div className="flex justify-center">
            <Link href={"#"} passHref>
              <Button className="justify-center flex">Buy on Tokopedia</Button>
            </Link>
          </div>
        </div>
      </div>

      <MarkdownContent
        slug="about_page"
        className="min-h-[calc(100svh_-_72px)]"
      />
      <Footer />
    </>
  );
}
