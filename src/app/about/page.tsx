import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-[calc(100svh_-_72px)]">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to our application! We are dedicated to providing the best
          user experience. Our team is committed to continuous improvement and
          innovation.
        </p>
      </div>
      <Footer />
    </>
  );
}
