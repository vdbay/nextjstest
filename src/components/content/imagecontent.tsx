import { ContentImageType } from "@/lib/validators/content";
import { getContentBlockBySlug } from "@/services/content-block-service";
import Image, { ImageProps } from "next/image";

interface ImageContentProps extends Omit<ImageProps, "src" | "alt"> {
  slug: string;
}

export default async function ImageContent({
  slug,
  ...props
}: ImageContentProps) {
  const contentBlock = await getContentBlockBySlug(slug);
  const content = JSON.parse(contentBlock?.content) as ContentImageType;
  try {
    return <Image src={content.src} alt={content.alt || slug} {...props} />;
  } catch (error) {
    return <></>;
  }
}
