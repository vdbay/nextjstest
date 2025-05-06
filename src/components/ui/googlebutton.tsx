import { Button } from "./button";
import { auth, signIn } from "@/app/auth";

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
        <img src="/images/google.png" alt="Google Logo" className="h-6 w-6" />
        Google
      </div>
    </Button>
  );
}
