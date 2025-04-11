import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

export function ProductListing() {
  const products = [
    {
      id: 1,
      name: "CERA PROBIOTIC MOISTURIZER",
      price: "XXX.XXX",
      originalPrice: "XXX.XXX",
      imageUrl: "/placeholder.svg?height=200&width=100",
      discount: "10%",
      isBundle: false,
    },
    {
      id: 2,
      name: "LUMIERE SHIELD SUNSCREEN",
      price: "XXX.XXX",
      originalPrice: "XXX.XXX",
      imageUrl: "/placeholder.svg?height=200&width=100",
      discount: "10%",
      isBundle: false,
    },
    {
      id: 3,
      name: "AMINO SURF GENTLE FACIAL WASH",
      price: "XXX.XXX",
      originalPrice: "XXX.XXX",
      imageUrl: "/placeholder.svg?height=200&width=100",
      discount: "10%",
      isBundle: false,
    },
    {
      id: 4,
      name: "3 CERA PROBIOTIC MOISTURIZER",
      price: "XXX.XXX",
      originalPrice: "XXX.XXX",
      imageUrl: "/placeholder.svg?height=200&width=80",
      discount: "10%",
      isBundle: true,
    },
    {
      id: 5,
      name: "3 LUMIERE SHIELD SUNSCREEN",
      price: "XXX.XXX",
      originalPrice: "XXX.XXX",
      imageUrl: "/placeholder.svg?height=200&width=80",
      discount: "10%",
      isBundle: true,
    },
    {
      id: 6,
      name: "3 AMINO SURF GENTLE FACIAL WASH",
      price: "XXX.XXX",
      originalPrice: "XXX.XXX",
      imageUrl: "/placeholder.svg?height=200&width=80",
      discount: "10%",
      isBundle: true,
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex gap-4 mb-6">
        <Button className="bg-[#e9c978] hover:bg-[#d4b76a] text-black rounded-full">SPECIAL PRICE</Button>
        <Button variant="outline" className="bg-white text-black border-[#e9c978] rounded-full hover:bg-[#f8f8f8]">
          ALL PRODUCTS
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
