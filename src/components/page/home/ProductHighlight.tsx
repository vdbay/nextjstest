"use client";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function ProductHighlight() {
  return (
    <div className="mb-18 flex flex-col items-center justify-center">
      <div className="text-2xl mb-18">Your Glow Starts Here</div>
      <div className="flex flex-row h-min text-black items-center justify-center mb-8">
        <KeyboardArrowLeftIcon />
        <img
          src="./moist.png"
          alt="Cera Probiotic Khasfee Imperiale"
          className="hidden md:flex size-60"
        />
        <img
          src="./moist.png"
          alt="Cera Probiotic Khasfee Imperiale"
          className="flex h-60 max-w-svh md:size-80"
        />

        <img
          src="./moist.png"
          alt="Cera Probiotic Khasfee Imperiale"
          className="hidden md:flex size-60"
        />
        <KeyboardArrowRightIcon />
      </div>
      <div className="flex flex-col h-min text-black items-center justify-center">
        <div className="mb-4">Product Name</div>
        <div className="mb-4 w-40 md:w-60 text-center text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="mb-6 ">Rp XXX.XXX</div>
        <a
          href="#buy-now"
          className="bg-gold py-5 px-14 bg-[#3c3c3c] text-white  uppercase"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
