import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Auth() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-svh">
        <div className="p-16 bg-[#F9EDD4]">
          <a href="/">
            {" "}
            <div className="flex flex-row gap-2 mb-16">
              <ArrowLeft /> <div className="">Back to Website</div>
            </div>
          </a>
          <div className="text-4xl mb-8">Create an Account</div>
          <form className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 font-medium">
                Username*
              </label>
              <input
                type="text"
                id="username"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="birth" className="mb-2 font-medium">
                Birth*
              </label>
              <input
                type="date"
                id="birth"
                className="border border-black-opacity-50 p-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-medium">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="mb-2 font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
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
            <div className="flex flex-col">
              <label htmlFor="confirm-password" className="mb-2 font-medium">
                Confirm Password*
              </label>
              <input
                type="password"
                id="confirm-password"
                className="border border-black-opacity-50 p-4"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="flex flex-col md:col-span-2 row-span-2">
              <label htmlFor="address" className="mb-2 font-medium">
                Full Address*
              </label>
              <input
                id="address"
                className="border border-black-opacity-50 p-4"
                placeholder="Enter your full address"
              />
            </div>
            <div className="flex items-start gap-2 md:col-span-2">
              <input type="checkbox" id="terms" className="mt-1" required />
              <label htmlFor="terms" className="text-sm">
                By signing up you agree to our{" "}
                <a href="/terms" className="text-blue-500 underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </label>
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
              <Button
                className="bg-white border-white text-black uppercase w-full"
                asChild
              >
                <div>
                  <Image
                    src="/images/google.png"
                    alt="Google Logo"
                    width={24}
                    height={24}
                  />
                  Google
                </div>
              </Button>
            </div>
            <div className="flex items-center gap-2 md:col-span-2 text-center justify-center">
              <label htmlFor="terms" className="text-sm">
                Already have an account?{" "}
                <a href="/login" className=" underline">
                  Login
                </a>
              </label>
            </div>
          </form>
        </div>
        <div
          className="bg-cover bg-center hidden lg:flex"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
      </div>
    </div>
  );
}
