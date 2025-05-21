import { notFound } from "next/navigation";
import ProductDetail from "./productdetails";
import { getProductBySlug } from "@/services/product-service";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <div className="overflow-x-hidden">
      <ProductDetail product={product} />
    </div>
  );
}
