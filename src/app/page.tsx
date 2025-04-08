"use client";
import { Image } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Hero from "./login/component/Hero";
import Carousel from "./login/component/Carousel";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-white flex-col items-center">
      <Navbar />
      <Hero />
      <div className="flex text-2xl p-18">Your Glow Starts Here</div>
      <Carousel />
      <div className="font-medium text-base pb-3">Product Name</div>
      <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
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
      <div className="flex w-full h-svh">
        <div className="bg-gray-300 w-1/2 h-full"></div>
        <div className="bg-gray-400 w-1/2 h-full"></div>
      </div>
      <div className="flex text-2xl p-18">Special Offer</div>
      <div className="flex gap-18 items-center pb-18">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-300 aspect-square h-80 mb-4"></div>
          <div className="font-medium text-base ">Product Name</div>
          <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-300 aspect-square h-80 mb-4"></div>
          <div className="font-medium text-base ">Product Name</div>
          <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-300 aspect-square h-80 mb-4"></div>
          <div className="font-medium text-base ">Product Name</div>
          <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
        </div>
      </div>
      <div className="flex gap-18 items-center pb-20">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-300 aspect-square h-80 mb-4"></div>
          <div className="font-medium text-base ">Product Name</div>
          <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-300 aspect-square h-80 mb-4"></div>
          <div className="font-medium text-base ">Product Name</div>
          <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-300 aspect-square h-80 mb-4"></div>
          <div className="font-medium text-base ">Product Name</div>
          <div className="text-base font-normal w-90 text-center pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base font-semibold pb-6">Rp XXX.XXX</div>
        </div>
      </div>
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
          VIEW MORE
        </Button>
      </div>
      <div className="bg-gray-300 aspect-239/100 w-full mb-18"></div>
    </div>
  );
}
