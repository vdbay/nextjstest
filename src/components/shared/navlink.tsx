"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";

export default function NavLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink>) {
  const pathName = usePathname();
  const isActive = props.href
    ? props.href === "/"
      ? pathName === "/"
      : pathName.startsWith(props.href)
    : false;

  const style = cva(
    isActive
      ? " bg-transparent hover:bg-transparent underline decoration-gold-khasfee decoration-2 text-base text-gold-khasfee hover:text-gold-khasfee"
      : " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
  );
  return (
    <NavigationMenuLink
      className={cn(navigationMenuTriggerStyle(), style(), className)}
      {...props}
    />
  );
}
