import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeftHero() {
  return (
    <div
      className="relative flex h-svh items-end bg-cover bg-center text-white w-full md:w-1/2"
      style={{ backgroundImage: "url('/images/hero_2.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent z-10" />
    </div>
  );
}
