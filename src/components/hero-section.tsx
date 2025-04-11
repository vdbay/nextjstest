import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
      <div className="bg-black rounded-3xl overflow-hidden relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="DNA strand"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 left-6">
          <Button className="bg-[#e9c978] hover:bg-[#d4b76a] text-black rounded-full px-6 group">
            IMPROVE YOUR SKIN IDEAL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <FeatureCard
          title="KHASPECIATE SPACE"
          subtitle="We Rich Together"
          imageUrl="/placeholder.svg?height=190&width=400"
          imageAlt="Person with headphones"
        />
        <FeatureCard
          title="KHASFIDENCE TEAM"
          subtitle="We Rich Together"
          imageUrl="/placeholder.svg?height=190&width=400"
          imageAlt="Person on phone"
        />
      </div>
    </section>
  )
}
