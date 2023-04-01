import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const [isToggled, setIsToggled] = useState(false);
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 bg-primary-100 drop-shadow p-7 w-full z-30`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`flex justify-between w-full gap-16`}>
            {/* Left */}
            <h1 className="font-bold">ECOMMERCE</h1>
            {/* Right */}
            {isAboveMedium ? (
              <div className={`flex items-center justify-end w-full`}>
                <div className={` ${flexBetween} gap-8 text-sm`}>
                  <button>
                    <MagnifyingGlassIcon className="hidden xs:block h-6 w-6 text-black" />
                  </button>
                  <button>
                    <UserIcon className="hidden xs:block h-6 w-6 text-black" />
                  </button>
                  <button>
                    <ShoppingBagIcon className="hidden xs:block h-6 w-6 text-black" />
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={() => setIsToggled(!isToggled)}>
                <Bars3Icon className="h-6 w-6 text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMedium && isToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsToggled(!isToggled)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* Menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <p>Search</p>
            <p>Profile</p>
            <p>Yout Cart</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
