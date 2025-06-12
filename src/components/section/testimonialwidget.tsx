import { getProductAndDocumentsFromCatalogueBySlug } from "@/services/catalogue-product-service";
import { StarHalfIcon, StarIcon } from "lucide-react";
import Image from "next/image";
export default async function TestimonialWidget({
  slug,
  className,
}: {
  slug?: string;
  className?: string;
}) {
  return (
    <div className="py-18 flex flex-col items-center justify-center gap-18">
      <div className="text-2xl">Testimonial</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-8 mx-8">
        {[1, 2, 3, 4].map((i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-start gap-4 w-36 sm:w-60 overflow-clip"
            >
              <div className="aspect-square flex relative rounded-full overflow-clip w-28">
                <Image
                  src="https://pbmusjkkxqeayxdojbrb.supabase.co/storage/v1/object/public/khasfee/content/3.jpg"
                  alt="avatar"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-4 text-center line-clamp-1">Customer Name</div>
              <div className="flex flex-row">
                {[1, 2, 3, 4, 5].map((i) => {
                  return i !== 5 ? (
                    <StarIcon key={i} className="text-gold-khasfee" />
                  ) : (
                    <StarHalfIcon key={i} className="text-gold-khasfee" />
                  );
                })}
              </div>
              <div className="text-center text-black/50 line-clamp-7 sm:line-clamp-5">
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
