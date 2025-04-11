import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";

export function NavbarKhasfee() {
  return (
    <header className="container mx-auto py-4 px-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <img src="/logo.png" alt="khasfee" className="w-32" />
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6 flex-grow justify-end">
        {/* Dropdown Nav */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 font-medium hover:underline">
              THE IDEALisME
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuItem>Artikel</DropdownMenuItem>
            <DropdownMenuItem>Lookbook</DropdownMenuItem>
            <DropdownMenuItem>Campaign</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Static Nav Links */}
        <Link href="#" className="font-medium hover:underline">
          HOME
        </Link>
        <Link href="#" className="font-medium hover:underline">
          ABOUT US
        </Link>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#e9c978] rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none placeholder:text-black/60"
          />
        </div>

        {/* Cart */}
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="relative size-12">
            <ShoppingCart className="size-6" />
            <span className="absolute -top-1 -right-1 bg-[#e9c978] text-xs text-black rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
          <span className="text-sm font-medium">WAITING YOU</span>
        </div>

        {/* User */}
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="size-12">
            <User className="size-6" />
          </Button>
          <span className="text-sm font-medium">LOGIN</span>
        </div>
      </div>
    </header>
  );
}
