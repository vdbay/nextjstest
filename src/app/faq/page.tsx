import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function FAQ() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-[calc(100svh_-_72px)]">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-center max-w-2xl">
          Here you can find answers to the most common questions about our
          application. If you have any other questions, feel free to contact us!
        </p>
      </div>
      <Footer />
    </>
  );
}
