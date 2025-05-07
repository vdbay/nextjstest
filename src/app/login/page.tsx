import GoogleButton from "@/components/ui/googlebutton";
import { ArrowLeft } from "lucide-react";

export default function Auth() {
  return (
    <div className="overflow-x-hidden">
      {/* kiri kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-svh">
        {/* kiri */}
        <div
          className="bg-cover bg-center hidden lg:flex"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />

        {/* kanan */}
        <div className="p-16 bg-[#F9EDD4]">
          <a href="/">
            <div className="flex flex-row gap-2 mb-16">
              <ArrowLeft /> <div className="">Back to Website</div>
            </div>
          </a>
          <div className="text-4xl mb-2 ">Welcome Back!</div>
          <div className="mb-8 text-black-opacity-50">Login to continue</div>
          <form className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label htmlFor="username" className="mb-2 font-medium">
                Username or Email*
              </label>
              <input
                type="text"
                id="username"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your username or email"
              />
            </div>

            <div className="flex flex-col col-span-1 md:col-span-2">
              <label htmlFor="password" className="mb-2 font-medium">
                Password*
              </label>
              <input
                type="password"
                id="password"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1 hover:cursor-pointer" required />
              <label htmlFor="terms" className="text-sm hover:cursor-pointer">
                Remember me
              </label>
            </div>
            <div className="flex items-end gap-2 text-end justify-end">
              <a href="/register" className=" underline">
                Forgot Password?
              </a>
            </div>
            <div className="md:col-span-2">
              <a
                href="#register"
                className="bg-gold bg-[#3c3c3c] text-white  uppercase w-full flex text-center justify-center items-center h-14"
              >
                REGISTER
              </a>
            </div>
            <div className="flex items-center justify-center md:col-span-2">
              <div className="border-t border-black-opacity-50 flex-grow"></div>
              <span className="px-4 text-black-opacity-50">or</span>
              <div className="border-t border-black-opacity-50 flex-grow"></div>
            </div>
            <div className="md:col-span-2">
              <GoogleButton />
            </div>
            <div className="flex items-center gap-2 md:col-span-2 text-center justify-center">
              <label htmlFor="terms" className="text-sm">
                Don't have an account?{" "}
                <a href="/register" className=" underline">
                  Register
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
