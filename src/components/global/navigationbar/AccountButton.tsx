import { auth, signIn, signOut } from "@/app/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function AccountButton() {
  const session = await auth();
  const user = session?.user;
  return !session ? (
    <a href="/login">Login</a>
  ) : (
    <div
      className="flex flex-row gap-2 items-center hover:cursor-pointer"
      onClick={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <Avatar>
        <AvatarImage src={user?.image?.toString()} alt="User Avatar" />
        <AvatarFallback>{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      {/* {user?.name || "User"} */}
      Logout
    </div>
  );
}
