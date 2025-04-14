import { SearchIcon, ShoppingCart, User } from "lucide-react";
import NavigationMenuKhasfee from "./navigation-navbar-khasfee";
import SearchFeldKhasfee from "./search-feld-khasfee";
import CartNavbarKhasfee from "./cart-navbar-khasfee";
import AccountNavbarKhasfee from "./account-navbar-khasfee";

export function NavbarKhasfee() {
  return (
    <div className="flex items-center h-10 m-6 justify-between">
      <img src="./logo.png" className="h-10 flex" />
      <div className=" flex flex-row gap-3">
        <NavigationMenuKhasfee />
        <SearchFeldKhasfee />
        <CartNavbarKhasfee />
        <AccountNavbarKhasfee />
      </div>
    </div>
  );
}
