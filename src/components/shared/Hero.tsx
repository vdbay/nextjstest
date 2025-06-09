import Image from "next/image";
import ImageContent from "../content/imagecontent";

export default function Hero() {
  return (
    <div className="aspect-[4/5] sm:aspect-[250/100] flex">
      <ImageContent
        slug="main_hero"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}
