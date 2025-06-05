import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  Drawer,
} from "@/components/ui/drawer";
import Link from "next/link";
import { getUserInfoFromUserEmail, logout } from "@/lib/actions/auth";
import NavLink from "@/components/shared/navlink";
import ImageContent from "../content/imagecontent";

export default async function NavigationBar() {
  const userInfo = await getUserInfoFromUserEmail();
  return (
    <div>
      <div className="bg-black text-white text-center py-2">
        USE CODE <span className="text-gold-khasfee">KHASFEE10</span> FOR 10%
        OFF ON YOUR FIRST ORDER
      </div>
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
            <ImageContent
              slug="logo"
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
                {userInfo ? (
                  <NavLink onClick={logout} className="hover:cursor-pointer">
                    {userInfo.user_name} | Logout
                  </NavLink>
                ) : (
                  <NavLink href="/login">Login</NavLink>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
