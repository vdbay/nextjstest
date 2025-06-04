import Image from "next/image";
import ImageContent from "../content/imagecontent";

export default function BottomHero() {
  return (
    <div className="h-svh flex">
      <ImageContent
        slug="bottom_hero"
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
