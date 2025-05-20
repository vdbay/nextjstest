import NavigationBar from "@/components/layout/navigationbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen overflow-x-hidden">
      <NavigationBar />
      <div className="h-[calc(100svh_-_72px)] flex items-center justify-center text-center mx-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/" className="text-blue-500 hover:underline" passHref>
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
