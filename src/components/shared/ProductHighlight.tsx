"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function ProductHighlight() {
  return (
    <div className="mb-18 flex flex-col items-center justify-center">
      <div className="text-2xl mb-18">Your Glow Starts Here</div>
      <div className="flex flex-row h-min text-black items-center justify-center mb-8">
        <ArrowLeft className="hover:cursor-pointer" />
        <Image
          src="/images/products/cera.png"
          alt="Cera Probiotic Khasfee Imperiale"
          width={240}
          height={240}
          className="hidden md:flex hover:cursor-pointer"
        />

        <Image
          src="/images/products/amino.png"
          alt="Cera Probiotic Khasfee Imperiale"
          width={320}
          height={320}
          className="flex max-w-svh hover:cursor-pointer"
        />
        <Image
          src="/images/products/lumiere.png"
          alt="Cera Probiotic Khasfee Imperiale"
          width={240}
          height={240}
          className="hidden md:flex hover:cursor-pointer"
        />
        <ArrowRight className="hover:cursor-pointer" />
      </div>
      <div className="flex flex-col h-min text-black items-center justify-center">
        <div className="mb-4">Product Name</div>
        <div className="mb-4 w-40 md:w-60 text-center text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="mb-6 ">Rp XXX.XXX</div>
        <Button asChild>
          <Link href={""}>buy now</Link>
        </Button>
      </div>
    </div>
  );
}
