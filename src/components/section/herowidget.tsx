import { Button } from "@/components/ui/button";
import { HeroWidgetType } from "@/lib/validators/section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroWidget({
  data,
  className,
  showTitle = false,
  showSubtitle = false,
  showButton = false,
}: {
  data: HeroWidgetType;
  className: string;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showButton?: boolean;
}) {
  const shouldShowTitle = showTitle;
  const shouldShowSubtitle = showTitle && showSubtitle;

  return (
    <div
      className={cn("w-full aspect-[3/1] relative", className, data.className)}
    >
      <Link href={data.imageHref ?? "#"} passHref>
        <Image
          src={data.imageSrc}
          alt={data.imageAlt ?? data.title}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </Link>
      <div className="absolute inset-0 grid grid-rows-3 items-center justify-center bg-black/50">
        <div />
        <div className="flex flex-col items-center justify-center">
          {shouldShowTitle && (
            <div className="text-white text-5xl font-bold text-center drop-shadow-md uppercase">
              {data.title}
            </div>
          )}
          {shouldShowSubtitle && data.subtitle && data.subtitle !== "" && (
            <p className="text-white text-lg md:text-xl text-center mt-6">
              {data.subtitle}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          {showButton && (
            <Link href={data.buttonHref ?? "#"} passHref>
              <Button className="justify-center flex">{data.buttonText}</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
