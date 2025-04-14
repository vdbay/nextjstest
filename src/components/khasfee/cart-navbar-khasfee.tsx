import { ShoppingCart } from "lucide-react";

export default function CartNavbarKhasfee() {
    return (
        <div className="flex flex-col items-center">
        <div className="relative">
          <ShoppingCart className="size-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>
        <span className="font-semibold text-sm">WAITING YOU!</span>
      </div>
    );
    }