import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function SpecialOffer() {
  const products = await prisma.product.findMany();

  const images = await prisma.document.findMany({
    where: {
      doc_id: {
        in: products
          .map((product) => product.doc_id)
          .filter((id): id is number => id !== null),
      },
    },
  });
  const imagesMap = new Map(
    images.map((doc) => [doc.doc_id, doc.doc_path]) // asumsi 'url' adalah nama field path gambar
  );

  return (
    <div className="flex flex-col items-center justify-center mb-18">
      <div className="text-2xl mb-18">Special Offer</div>
      {products.length === 0 ? (
        <div className="text-gray-500">Belum ada produk spesial saat ini.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-30 gap-y-18 mb-18">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="flex flex-col items-center justify-center hover:cursor-pointer"
            >
              <Image
                src={
                  product.doc_id !== null
                    ? imagesMap.get(product.doc_id) || "/images/default.jpg"
                    : "/images/default.jpg"
                }
                alt={product.product_name?.toString() || ""}
                width={240}
                height={240}
                className="mb-8 object-cover rounded-2xl"
              />

              {/* <img
                src={product.doc_id?.toString() || "./default.png"}
                alt={product.product_name?.toString()}
                className="size-60 mb-8 object-cover"
              /> */}
              <div className="mb-4 font-medium">{product.product_name}</div>
              <div className="mb-4 w-40 md:w-60 text-center text-gray-400 text-sm">
                {product.product_desc || "No description available."}
              </div>
              <div className="text-lg font-semibold text-gold">
                Rp {Number(product.product_price).toLocaleString("id-ID")}
              </div>
            </div>
          ))}
        </div>
      )}
      <Button asChild>
        <Link href={"/"}>shop now</Link>
      </Button>
    </div>
  );
}
