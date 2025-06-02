import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";

export default function Khasfeeliates() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-[calc(100svh_-_72px)]">
        <h1 className="text-4xl font-bold mb-4">Khasfeeliates</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to the Khasfeeliates page! Here you can find information about
          our affiliate program and how you can get involved.
        </p>
      </div>
      <Footer />
    </>
  );
}
