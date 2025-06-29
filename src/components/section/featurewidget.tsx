import { getProductAndDocumentsFromCatalogueBySlug } from "@/services/catalogue-product-service";
import Image from "next/image";
export default async function FeatureWidget({
  slug,
  className,
}: {
  slug?: string;
  className?: string;
}) {
  return (
    <div className="py-18 flex flex-col items-center justify-center gap-18">
      <div className="text-2xl">Key Benefits</div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mx-8">
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-start gap-4 w-22 sm:w-40 overflow-clip"
            >
              <div className="aspect-square flex relative rounded-full overflow-clip w-22 sm:w-40">
                <Image
                  src="https://pbmusjkkxqeayxdojbrb.supabase.co/storage/v1/object/public/khasfee/content/3.jpg"
                  alt="avatar"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-4 text-center line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                provident ad odio sint, facilis, laboriosam fugit labore
                inventore debitis aspernatur delectus voluptatibus temporibus
                optio maxime cupiditate! Debitis ad at architecto!
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
