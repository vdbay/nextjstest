import NavigationBar from "@/components/layout/navigationbar";
import Footer from "@/components/layout/footer";
import UniversalLoading from "@/components/shared/universalloading";
export default function LoadingHome() {
  return (
    <>
      <NavigationBar />
      <UniversalLoading
        variant="spinner"
        size="lg"
        text="Loading..."
        className="min-h-svh flex"
      />
      <Footer />
    </>
  );
}
