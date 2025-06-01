import LinkKeep from "@/components/shared/linkkeep";
import RegisterForm from "@/components/shared/registerform";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Register() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-svh">
        <div className="p-16 flex flex-col">
          <div className="flex flex-1">
            <Link href={"/"} className="flex gap-2 h-min">
              <ArrowLeft /> <div className="">Back to Khasfee</div>
            </Link>
          </div>

          <div>
            <div className="text-4xl mb-8 ">Create an Account</div>
            <Suspense fallback={null}>
              <RegisterForm />
            </Suspense>
            <div className="flex items-center gap-2 md:col-span-2 text-center justify-center">
              Already have an account?{" "}
              <LinkKeep href={"/login"} className="underline">
                Login
              </LinkKeep>
            </div>
          </div>
          <div className="flex-1" />
        </div>
        <div className="bg-cover bg-center hidden lg:flex relative">
          <Image
            src="/images/hero/1.jpg"
            alt="hero"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </>
  );
}
