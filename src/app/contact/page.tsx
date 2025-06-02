import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-[calc(100svh_-_72px)]">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-center max-w-2xl">
          If you have any questions or feedback, feel free to reach out to us!
          We are here to help and would love to hear from you.
        </p>
      </div>
      <Footer />
    </>
  );
}
