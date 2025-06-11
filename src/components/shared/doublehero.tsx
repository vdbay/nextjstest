import ImageContent from "../content/imagecontent";

export default function DoubleHero() {
  return (
    <div className="sm:aspect-[5/2] w-full flex flex-col sm:flex-row overflow-hidden">
      <div className="w-full h-1/2 sm:h-full sm:w-1/2 aspect-[4/5] sm:aspect-auto">
        <ImageContent
          slug="left_hero"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="w-full h-1/2 sm:h-full sm:w-1/2 aspect-[4/5] sm:aspect-auto">
        <ImageContent
          slug="right_hero"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
