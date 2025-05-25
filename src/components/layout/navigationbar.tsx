import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon, Sheet } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from "../ui/drawer";
import Link from "next/link";
import { checkLoggedIn, logout } from "@/lib/actions/auth";
import NavLink from "@/components/shared/navlink";

export default async function NavigationBar() {
  const isLoggedIn = await checkLoggedIn();
  return (
    <div className="h-18 w-full flex items-center px-8 md:px-16 justify-center">
      <div className="flex-1 hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink href="/">Home</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/products">Products</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/about">About Us</NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex-1 md:hidden">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon className="" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle />
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col justify-start items-start">
                <NavigationMenuItem>
                  <NavLink href="/">Home</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/products">Products</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="flex text-center h-full p-4 justify-center items-center">
        <Link href="/" passHref className="flex h-full w-full">
          <Image
            src="/images/logo.png"
            alt="Khasfee Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <div className="flex-1 text-right justify-end flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="hidden">
              <NavLink href="/cart">Cart</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {isLoggedIn ? (
                <NavLink onClick={logout}>Logout</NavLink>
              ) : (
                <NavLink href="/login">Login</NavLink>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
