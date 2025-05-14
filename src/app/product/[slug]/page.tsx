// app/product/[slug]/page.tsx
import { GetProductBySlug } from "@/app/controller/product";
import { notFound } from "next/navigation";
import ProductDetail from "./productdetails";

type Props = {
  params: { slug: string };
};

export default async function ProductPage(props: Props) {
  const { slug } = await props.params;
  const product = await GetProductBySlug(slug);
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
