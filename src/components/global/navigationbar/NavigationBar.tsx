import NavigationBarMenu from "@/components/global/navigationbar/NavigationBarMenu";
import NavigationBarRightMenu from "@/components/global/navigationbar/NavigationBarRightMenu";
import NavigationBarLogo from "@/components/global/navigationbar/NavigationBarLogo";

export default function NavigationBar() {
  return (
    <div className="relative h-18  px-16 flex items-center justify-between">
      <NavigationBarMenu />
      <NavigationBarLogo />
      <NavigationBarRightMenu />
    </div>
  );
}
