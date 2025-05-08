import NavigationBarMenu from "@/components/layout/navigationbar/NavigationBarMenu";
import NavigationBarRightMenu from "@/components/layout/navigationbar/NavigationBarRightMenu";
import NavigationBarLogo from "@/components/layout/navigationbar/NavigationBarLogo";

export default function NavigationBar() {
  return (
    <div className="relative h-18  px-16 flex items-center justify-between">
      <NavigationBarMenu />
      <NavigationBarLogo />
      <NavigationBarRightMenu />
    </div>
  );
}
