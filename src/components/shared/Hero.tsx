import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative flex h-[calc(100svh_-_72px)] items-end bg-cover bg-center text-white mb-18"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent z-10" />
    </div>
  );
}
