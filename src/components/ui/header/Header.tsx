"use client";
import Image from "next/image";
import React, { useState } from "react";
import Borderbottom from "../borderbottomshape/Borderbottom";
import Link from "next/link";
import links from "@/data/links";
import Aside from "../aside/Aside";
function Header() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
    if (!open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  return (
    <header>
      <div className="h-6 w-full bg-[var(--gray-color)] flex items-center px-4">
        <p className="flex gap-2 sm:text-xs text-[8px] ml-auto items-center lg:me-24">
          <span>
            <Image
              src="/svgs/location.svg"
              alt="location"
              width={10}
              height={10}
              loading="eager"
            />
          </span>
          Servicing social magic across the world | Destination Weddings
          Available
        </p>
        <div className="relative w-14 h-7 -top-2 ml-auto block lg:hidden">
          <Image
            src="/svgs/bars.svg"
            alt="bars icon"
            fill
            className="cursor-pointer"
            onClick={toggleOpen}
          />
        </div>
      </div>
      <div className="flex items-center max-w-[1280px] mx-auto lg:justify-center px-4 justify-center py-8">
        <ul className="hidden lg:flex gap-6 nunito_font w-max text-[var(--semiGray-color)] ">
          {links.slice(0, 3).map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-base font-medium hover:text-[var(--gold-color)]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-[10%] flex items-center flex-col gap-2 text-[var(--semiGray-color)] w-fit">
          <div className="flex items-end">
            <p className="h-fit text-xs">EST.D</p>
            <div className="relative w-14 h-14 mx-2">
              <Image src="/svgs/s_logo.svg" alt="S logo" fill />
            </div>
            <p className="h-fit text-xs">2010</p>
          </div>
          <div>
            <div className="relative w-40 h-20 m-auto">
              <Image src="/svgs/sara_o.svg" alt="sara_o" fill />
            </div>
            <Borderbottom />
          </div>
        </div>
        <ul className="hidden lg:flex gap-6 nunito_font w-max text-[var(--semiGray-color)]">
          {links.slice(3, 6).map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`text-base font-medium hover:text-[var(--gold-color)] `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && <Aside toggleOpen={toggleOpen} />}
    </header>
  );
}

export default Header;
