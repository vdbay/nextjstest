import Image from "next/image";

export default function NavigationBarLogo() {
  return (
    <a
      href="/"
      className="h-full flex p-3 absolute left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
    >
      <Image
        src="/images/logo.png"
        alt="Khasfee Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </a>
  );
}
