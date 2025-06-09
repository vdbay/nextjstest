import Image from "next/image";
import Link from "next/link";
import ImageContent from "../content/imagecontent";
import FloatingWidget from "../shared/floating";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-6 px-16 py-8 gap-x-8 gap-y-8 md:gap-y-0 bg-gold-khasfee">
          <div className="span md:col-span-2 flex flex-col">
            <div className="relative w-32 h-16 mb-6">
              <Link href="/" passHref>
                <ImageContent
                  slug="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>

            <div className="text-justify opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6">Quick Links</div>
            <div className="flex flex-col gap-3">
              <Link href="/" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/about" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  About Us
                </div>
              </Link>
              <Link href="/products" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Products
                </div>
              </Link>
              <Link href="/contact" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Contact
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6">Customer Care</div>
            <div className="flex flex-col gap-3 ">
              <Link href="/faq" passHref>
                <div className=" text-black opacity-50 cursor-pointer">FAQ</div>
              </Link>
              <Link href="/privacy-policy" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/terms-conditions" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Terms & Conditions
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6">Business with Us</div>
            <div className="flex flex-col gap-3">
              <Link href="/register" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Register NOW
                </div>
              </Link>
              <Link href="/khasfeeliates" passHref>
                <div className=" text-black opacity-50 cursor-pointer">
                  Join KHASFEELIATE
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6">Contact Info</div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:halo@khasfeeimperiale.com"
                className=" text-black opacity-50 cursor-pointer text-clip"
              >
                Email: halo@khasfeeimperiale.com
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-black opacity-50 cursor-pointer"
              >
                Whatsapp: +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gold-khasfee border-black border-t items-center justify-center flex py-8 text-center">
          <div className="text-black opacity-50">
            © 2025 Khasfee Imperiale. All rights reserved
          </div>
        </div>
      </div>

      <FloatingWidget />
    </>
  );
}
