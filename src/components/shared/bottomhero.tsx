import Image from "next/image";

export default function BottomHero() {
  return (
    <div className="h-svh flex">
      <Image
        src="/images/hero/4.jpg"
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
