import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondHero() {
  return (
    <div
      className="relative flex h-svh items-end bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero_4.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent z-10" />
    </div>
  );
}
