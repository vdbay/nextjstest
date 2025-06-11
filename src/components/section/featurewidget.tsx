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
      <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-5 gap-20 mx-18">
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="aspect-square w-20 flex relative rounded-full overflow-clip">
                <Image
                  src="https://pbmusjkkxqeayxdojbrb.supabase.co/storage/v1/object/public/khasfee/content/3.jpg"
                  alt="avatar"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-4 text-center line-clamp-1">Title</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
