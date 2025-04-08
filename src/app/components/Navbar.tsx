
import { Button } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between text-black h-18 px-16">
      <div className="flex flex-row items-center gap-10">
        <Button color="inherit">HOME</Button>
        <Button color="inherit">PRODUCT</Button>
        <Button color="inherit">ABOUT US</Button>
      </div>
      <div className="flex left-1/2 -translate-x-1/2 h-18"><Image src={"/logo.png"} alt="logo" fill className="absolute "/></div>
      

      <Button color="inherit">REGISTER</Button>
    </div>
  );
}
