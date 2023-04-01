import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full bg-gray-100 flex flex-col text-center items-center justify-items-center py-10 px-5 md:px-0">
      <EnvelopeIcon className="w-[40px]" />
      <h3 className="font-bold">SUBCRIBE TO OUR NEWSLETTER</h3>
      <p>and receive $20 coupon for your first order when you check out</p>
      <div className="px-[4px] pt-[20px] flex w-3/4 ">
        <input
          className="w-3/4 flex-1 px-4 py-2  bg-input-bgc"
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className="bg-input-bgc px-5 border-l-4 text-black">
          Subcribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
