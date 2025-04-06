import Image from "next/image";
import React from "react";

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
          <p className="h-fit">ESTD</p>
          <div className="relative w-14 h-14 mx-3">
            <Image src="/images/s_logo.png" alt="S logo" fill />
          </div>
          <p className="h-fit">2025</p>
        </div>
        <div className="relative w-40 h-20">
          <Image src="/images/sara_o.png" alt="sara_o" fill />
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
