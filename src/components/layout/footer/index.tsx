export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-6 px-16 py-8 gap-x-8 gap-y-8 md:gap-y-0 bg-gold-khasfee">
        <div className="span md:col-span-2 flex flex-col">
          <img
            src="./images/logo.png"
            alt="Khasfee Imperiale Logo"
            className="h-16 w-fit mb-6 hover:cursor-pointer"
          />
          <div className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            eligendi cupiditate soluta rem, inventore repudiandae architecto!
            Illo voluptas numquam enim non, esse temporibus nulla voluptatem
            quaerat mollitia accusantium necessitatibus minus?
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Quick Links</div>
          <div className="flex flex-col gap-3">
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Home
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              About Us
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Products
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Contact
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Customer Care</div>
          <div className="flex flex-col gap-3 ">
            <div className=" text-black opacity-50 hover:cursor-pointer">
              FAQ
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Shipping & Returns
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              How to Order
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Privacy Policy
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Terms & Conditions
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Business with Us</div>
          <div className="flex flex-col gap-3">
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Login/Register Reseller
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Join KHASFEELIATE
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Contact Info</div>
          <div className="flex flex-col gap-3">
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Email: halo@khasfeeimperiale.com
            </div>
            <div className=" text-black opacity-50 hover:cursor-pointer">
              Whatsapp: +62 812 3456 7890
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gold-khasfee border-black border-t items-center justify-center flex py-8 text-center">
        <div className="text-black opacity-50">
          Copyright © 2025 Khasfee Imperiale. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
