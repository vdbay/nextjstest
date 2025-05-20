import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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

export default function NavigationBar() {
  return (
    <div className="h-18 w-full flex items-center px-8 md:px-16 justify-center">
      <div className="flex-1 hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={
                  navigationMenuTriggerStyle() +
                  " bg-transparent hover:bg-transparent underline decoration-gold-khasfee decoration-2 text-base text-gold-khasfee hover:text-gold-khasfee"
                }
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/products"
                className={
                  navigationMenuTriggerStyle() +
                  " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
                }
              >
                Products
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={
                  navigationMenuTriggerStyle() +
                  " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
                }
              >
                About Us
              </NavigationMenuLink>
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
                  <NavigationMenuLink
                    href="/"
                    className={
                      navigationMenuTriggerStyle() +
                      " bg-transparent hover:bg-transparent underline decoration-gold-khasfee decoration-2 text-base text-gold-khasfee hover:text-gold-khasfee m-0"
                    }
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/products"
                    className={
                      navigationMenuTriggerStyle() +
                      " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
                    }
                  >
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className={
                      navigationMenuTriggerStyle() +
                      " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
                    }
                  >
                    About Us
                  </NavigationMenuLink>
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
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                href="/cart"
                className={
                  navigationMenuTriggerStyle() +
                  " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
                }
              >
                Cart
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/login"
                className={
                  navigationMenuTriggerStyle() +
                  " bg-transparent hover:bg-transparent hover:underline decoration-2 text-base"
                }
              >
                Login
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
