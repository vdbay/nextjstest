import NavigationBarMenu from "@/component/global/navigationbar/NavigationBarMenu";
import NavigationBarRightMenu from "@/component/global/navigationbar/NavigationBarRightMenu";
import NavigationBarLogo from "@/component/global/navigationbar/NavigationBarLogo";

export default function NavigationBar() {
  return (
    <div className="relative h-18 bg-[#e5b44a] px-16 flex items-center justify-between">
      <NavigationBarMenu />
      <NavigationBarLogo />
      <NavigationBarRightMenu />
    </div>
  );
}
