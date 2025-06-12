import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GiftIcon, PhoneIcon } from "lucide-react";

export default function FloatingWidget() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end">
        <Popover>
          <PopoverTrigger className="aspect-square rounded-full bg-red-400 p-4 shadow-lg">
            <GiftIcon className="text-white" />
          </PopoverTrigger>
          <PopoverContent className="mx-6 my-3">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <Popover>
          <PopoverTrigger className="aspect-square rounded-full bg-green-400 p-4 shadow-lg">
            <PhoneIcon className="text-white" />
          </PopoverTrigger>
          <PopoverContent className="mx-6 my-3">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
