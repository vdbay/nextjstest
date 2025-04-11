import Image from "next/image"

interface FeatureCardProps {
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
}

export function FeatureCard({ title, subtitle, imageUrl, imageAlt }: FeatureCardProps) {
  return (
    <div className="bg-[#333] rounded-3xl overflow-hidden relative h-[190px]">
      <div className="absolute inset-0 p-6 text-white">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={imageAlt}
        width={400}
        height={190}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
