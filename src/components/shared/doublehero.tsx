import Image from "next/image";

export default function DoubleHero() {
  return (
    <div className="flex h-svh flex-col md:flex-row ">
      <div className="relative h-full w-full md:w-1/2">
        <Image
          src="/images/hero/3.jpg"
          alt="hero"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="relative h-full  w-full md:w-1/2">
        <Image
          src="/images/hero/2.jpg"
          alt="hero"
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
