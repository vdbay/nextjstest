import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="container mx-auto py-4 px-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="font-serif text-2xl font-bold">
          Khasfee<sup className="text-xs">®</sup>
          <div className="text-xs font-normal">SKINCARE</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="font-medium hover:underline">
            THE IDEALisMe
          </Link>
          <Link href="#" className="font-medium hover:underline">
            HOME
          </Link>
          <Link href="#" className="font-medium hover:underline">
            ABOUT US
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="SEARCH"
            className="bg-[#e9c978] rounded-full py-1 px-4 pr-10 text-sm focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-[#e9c978] text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
