export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-6 px-16 py-8 gap-x-8 gap-y-8 md:gap-y-0 bg-[#e5b44a]">
        <div className="span md:col-span-2 flex flex-col">
          <img
            src="./logo.png"
            alt="Khasfee Imperiale Logo"
            className="h-16 w-fit mb-6"
          />
          <div className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            eligendi cupiditate soluta rem, inventore repudiandae architecto!
            Illo voluptas numquam enim non, esse temporibus nulla voluptatem
            quaerat mollitia accusantium necessitatibus minus?
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Quick Links</div>{" "}
          <div className="flex flex-col gap-3 text-gray-700">
            <div>Home</div>
            <div>About Us</div>
            <div>Products</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Customer Care</div>
          <div className="flex flex-col gap-3 text-gray-700">
            <div>Shipping & Returns</div>
            <div>How to Order</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Business with Us</div>
          <div className="flex flex-col gap-3 text-gray-700">
            <div>Login/Register Reseller</div>
            <div>Join KHASFEELIATE</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">Contact Info</div>
          <div className="flex flex-col gap-3 text-gray-700">
            <div>Email: halo@khasfeeimperiale.com</div>
            <div>Whatsapp: +62 812 3456 7890</div>
          </div>
        </div>
      </div>
      <div className="bg-[#e5b44a] border-black border-t items-center justify-center flex py-8 text-center">
        Copyright © 2025 Khasfee Imperiale. All Rights Reserved.
      </div>
    </div>
  );
}
