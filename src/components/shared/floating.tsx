import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GiftIcon } from "lucide-react";

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <Popover>
        <PopoverTrigger className="aspect-square rounded-full bg-white p-4 shadow-lg">
          <GiftIcon className="text-gold-khasfee" />
        </PopoverTrigger>
        <PopoverContent className="mx-6 my-3">
          Place content for the popover here.
        </PopoverContent>
      </Popover>
    </div>
  );
}
