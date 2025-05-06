import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RightHero() {
  return (
    <div
      className="relative flex h-svh items-end bg-cover bg-center text-white w-full md:w-1/2"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent z-10" />
      <div className="relative z-20 w-full text-justify px-4 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Khasfeedence
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Discover the power of natural skincare, tailored for your beauty
          needs.
        </p>
        <Button asChild>
          <Link href={"/"}>shop now</Link>
        </Button>
      </div>
    </div>
  );
}
