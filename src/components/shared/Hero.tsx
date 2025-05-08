import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative flex h-[calc(100svh_-_72px)] items-end bg-cover bg-center text-white mb-18"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent z-10" />

      {/* Text content near the bottom */}
      {/* <div className="relative z-20 w-full text-center px-4 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Khasfee Imperiale
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Discover the power of natural skincare, tailored for your beauty
          needs.
        </p>
        <Button asChild>
          <Link href={"/"}>shop now</Link>
        </Button>
      </div> */}
    </div>
  );
}
