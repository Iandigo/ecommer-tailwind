import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex ">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold mb-[30px]">EMCOMMER</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold mb-[30px]">About Us</h4>
          <p className="mb-[30px]">Careers</p>
          <p className="mb-[30px]">Our Stores</p>
          <p className="mb-[30px]">Terms & Conditions</p>
          <p className="mb-[30px]">Pricacy Policy</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold mb-[30px] ">Customer Care</h4>
          <p className="mb-[30px]">Help Center</p>
          <p className="mb-[30px]">Track Your Order</p>
          <p className="mb-[30px]">Coporate & Bulk Purchasing</p>
          <p className="mb-[30px]">Returns & Refunds</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold mb-[30px]">Contact Us</h4>
          <p className="mb-[30px]">
            {" "}
            50 north Whatever Blvd, Washington, DC 10501
          </p>
          <p className="mb-[30px]">Email: joemama@gmail.com</p>
          <p className="mb-[30px]">(222)333-4444</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
