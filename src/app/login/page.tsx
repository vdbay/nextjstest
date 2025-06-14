import ImageContent from "@/components/content/imagecontent";
import LinkKeep from "@/components/shared/linkkeep";
import LoginForm from "@/components/shared/loginform";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-svh">
        <div className="bg-cover bg-center hidden lg:flex relative">
          <ImageContent
            slug="login_hero"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="p-16 flex flex-col">
          <div className="flex flex-1">
            <Link href={"/"} className="flex gap-2 h-min">
              <ArrowLeft /> <div className="">Back to Khasfee</div>
            </Link>
          </div>

          <div>
            <div className="text-4xl mb-8 ">Welcome Back!</div>
            <Suspense fallback={null}>
              <LoginForm />
            </Suspense>
            <div className="flex items-center gap-2 md:col-span-2 text-center justify-center">
              Don't have an account?{" "}
              <LinkKeep href={"/register"} className="underline">
                Register
              </LinkKeep>
            </div>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </>
  );
}
