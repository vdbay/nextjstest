import { notFound } from "next/navigation";
import ProductDetail from "@/app/products/[slug]/productdetails";
import { getProductBySlugWithDocuments } from "@/services/product-service";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlugWithDocuments(slug);

  if (!product) return notFound();

  return (
    <div className="overflow-x-hidden">
      <ProductDetail product={product} />
    </div>
  );
}
