import { auth } from "@/app/auth";
import { ShoppingCart } from "lucide-react";
import AccountButton from "./AccountButton";

export default async function NavigationBarRightMenu() {
  const session = await auth();

  return (
    <div className="gap-10 hidden md:flex flex-row items-center">
      <AccountButton />
      <ShoppingCart />
    </div>
  );
}
