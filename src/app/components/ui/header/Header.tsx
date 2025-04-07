import Image from "next/image";
import React from "react";
import Borderbottom from "../borderbottomshape/Borderbottom";

function Header() {
  return (
    <header>
      <div className="h-6 w-full bg-[var(--gray-color)]">
        <div className="relative w-14 h-7 -top-2 ml-auto block lg:hidden">
          <Image src="/svgs/bars.svg" alt="bars icon" fill />
        </div>
      </div>
      <div className="pt-8 pb-4 px-4 flex items-center flex-col gap-2 text-[var(--semiGray-color)]">
        <div className="flex items-end">
          <p className="h-fit text-xs">ESTD</p>
          <div className="relative w-14 h-14 mx-2">
            <Image src="/svgs/s_logo.svg" alt="S logo" fill />
          </div>
          <p className="h-fit text-xs">2025</p>
        </div>
        <div>
          <div className="relative w-40 h-20 m-auto">
            <Image src="/svgs/sara_o.svg" alt="sara_o" fill />
          </div>
          <Borderbottom />
        </div>
        <div className="absolute right-4 hidden lg:block">
          <p>MENU</p>
          <div className="relative w-14 h-7 rotate-180">
            <Image src="/svgs/bars.svg" alt="bars icon" fill />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
