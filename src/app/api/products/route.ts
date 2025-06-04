import { error, success } from "@/lib/response";
import { getProductBySlug, getProducts } from "@/services/product-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const slug = request.nextUrl.searchParams.get("slug");
  try {
    if (slug) {
      const product = await getProductBySlug(slug);
      if (!product) {
        return error("Product not found", 404);
      }
      return success("Product retrieved successfully", product);
    }
    const products = await getProducts();
    return success("Products retrieved successfully", products);
  } catch (e) {
    return error("Failed to fetch products: " + e);
  }
}
