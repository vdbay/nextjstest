"use client";
import { Image } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-white flex-col items-center">
      <div className="w-full flex items-center justify-between text-black h-18 px-16">
        <Button color="inherit">HOME</Button>
        <Image className="absolute left-1/2 -translate-x-1/2 w-full h-full object-cover rounded-2xl" />
        <Button color="inherit">REGISTER</Button>
      </div>
      <div
        className="bg-gray-300 w-full"
        style={{ height: "calc(100svh - 72px)" }}
      ></div>
      <div className="flex text-2xl p-18">Your Glow Starts Here</div>
      <div className="flex gap-18 items-center pb-6">
        <div className="bg-gray-300 aspect-4/5 h-76 "></div>
        <div className="bg-gray-300 aspect-4/5 h-90"></div>
        <div className="bg-gray-300 aspect-4/5 h-76"></div>
      </div>
      <div className="font-medium text-base pb-3">Product Name</div>
      <div className="text-sm font-normal w-70 text-center  pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="text-lg font-semibold pb-4">Rp XXX.XXX</div>
      <div className="pb-18">
        {" "}
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#333",
            },
            px: 8,
            py: 2,
          }}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
}
