import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function TermsConditions() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-[calc(100svh_-_72px)]">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to our application! By using our services, you agree to comply
          with our terms and conditions. Please read them carefully to ensure a
          smooth experience.
        </p>
      </div>
      <Footer />
    </>
  );
}
