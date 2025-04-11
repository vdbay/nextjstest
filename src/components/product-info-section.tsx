import { Button } from "@/components/ui/button"
import { ProductTabs } from "@/components/product-tabs"

export function ProductInfoSection() {
  return (
    <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold mb-2">OUR PRODUCT</h2>
        <h3 className="text-3xl font-bold mb-6">BACKED BY SCIENCE</h3>
        <p className="mb-6">
          Apalah belum kebayangnya banget puyeng woy lah, mata juga pedih, panas, nguantuk tapi seru. si hamdan suruh
          liat ini pasti bilang woy woy liat!
        </p>
        <Button className="bg-[#e9c978] hover:bg-[#d4b76a] text-black rounded-full px-6 group">
          Read More
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

      <ProductTabs />
    </section>
  )
}
