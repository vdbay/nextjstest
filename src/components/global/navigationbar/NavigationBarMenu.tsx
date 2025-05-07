export default function NavigationBarMenu() {
  return (
    <div className="gap-10 hidden md:flex flex-row ">
      <div className="text-gold-khasfee border-b-1 border-gold-khasfee h-full flex-1 text-nowrap hover:cursor-pointer">
        Home
      </div>
      <div className="hover:cursor-pointer hover:border-black hover:border-b-1">
        Product
      </div>
      <div className="hover:cursor-pointer  hover:border-black hover:border-b-1">
        About Us
      </div>
    </div>
  );
}
