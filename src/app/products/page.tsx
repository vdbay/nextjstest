import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import { getDocumentFromProduct } from "@/services/document-service";
import { getProducts } from "@/services/product-service";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/utils/common";

export default async function ProductsCatalogue() {
  const products = await getProducts();
  const documents = await Promise.all(
    products.map(async (product) => {
      const document = await getDocumentFromProduct(product);
      return document;
    })
  );
  return (
    <>
      <NavigationBar />
      <div className="grid-cols-1 lg:grid-cols-3 lg:mx-30 my-18 gap-8 grid ">
        {Array.from(products).map((product, index) => (
          <div key={product.product_id} className="p-8">
            <Link
              href={`/products/${product.product_slug}`}
              key={index}
              className="flex flex-col items-center"
              passHref
            >
              <div className="flex justify-center items-center relative aspect-square w-60 lg:w-80">
                <Image
                  src={documents[index]?.doc_path || ""}
                  alt="Product Image"
                  fill
                  className="object-cover object-center rounded-md"
                />
              </div>
              <div className="mt-8 text-center">{product.product_name}</div>
              <div className="mt-4 text-center">
                {formatPrice(product.product_price?.toNumber() ?? 0)}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
