import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  imageUrl: string
  discount: string
  isBundle: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[#5c4c1e] rounded-xl overflow-hidden relative">
      <Badge className="absolute top-4 right-4 bg-red-600 text-white">{product.discount}</Badge>
      <div className="p-6">
        <div className="h-[200px] flex items-center justify-center mb-4">
          {product.isBundle ? (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  width={80}
                  height={200}
                  className="h-[180px] object-contain"
                />
              ))}
            </div>
          ) : (
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              width={100}
              height={200}
              className="h-[200px] object-contain"
            />
          )}
        </div>
        <h3 className="text-white font-bold mb-2">{product.name}</h3>
        <div className="flex flex-col">
          <span className="text-[#e9c978] font-bold text-xl">Rp. {product.price}</span>
          <span className="text-gray-400 line-through text-sm">Rp. {product.originalPrice}</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button className="bg-[#e9c978] hover:bg-[#d4b76a] text-black rounded-full flex-1">BUY NOW!</Button>
          <Button variant="outline" className="border-[#e9c978] text-[#e9c978] rounded-full p-2">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
