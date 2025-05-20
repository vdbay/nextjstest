import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[calc(100svh_-_72px)] flex">
      <Image
        src="/images/hero/1.jpg"
        alt="hero"
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
