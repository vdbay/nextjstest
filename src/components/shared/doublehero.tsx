import Image from "next/image";
import ImageContent from "../content/imagecontent";

export default function DoubleHero() {
  return (
    <div className="flex aspect-[3/1] flex-col md:flex-row ">
      <div className="relative h-full w-full md:w-1/2">
        <ImageContent
          slug="
          left_hero"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="relative h-full  w-full md:w-1/2">
        <ImageContent
          slug="
          right_hero"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
