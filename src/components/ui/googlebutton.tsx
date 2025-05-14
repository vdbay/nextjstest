import Image from "next/image";
import { Button } from "./button";
import { auth, signIn } from "@/lib/auth";

export default async function GoogleButton() {
  const session = await auth();
  console.log(session);
  return (
    <Button
      onClick={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
      className="bg-white border-white text-black uppercase w-full 
      "
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
  );
}
