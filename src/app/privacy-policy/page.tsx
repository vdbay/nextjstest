import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function PrivacyPolicy() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-[calc(100svh_-_72px)]">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-center max-w-2xl">
          Your privacy is important to us. This policy outlines how we collect,
          use, and protect your information. We are committed to ensuring that
          your privacy is protected.
        </p>
      </div>
      <Footer />
    </>
  );
}
