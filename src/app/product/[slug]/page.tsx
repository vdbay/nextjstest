import { GetProductBySlug } from "@/app/controller/product";
import { notFound } from "next/navigation";
import ProductDetail from "./productdetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await GetProductBySlug(slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
