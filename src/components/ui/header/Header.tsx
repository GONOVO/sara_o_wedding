"use client";
import Image from "next/image";
import React, { useState } from "react";
import Borderbottom from "../borderbottomshape/Borderbottom";
import Link from "next/link";
import links from "@/data/links";
import Aside from "../aside/Aside";
import { INavItem } from "@/utils/interfaces";

function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    if (!open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  const handleDropdownEnter = (linkName: string) => {
    setActiveDropdown(linkName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const renderLink = (link: INavItem, index: number) => {
    if (link.dropdown) {
      return (
        <li
          key={index}
          className="relative group"
          onMouseEnter={() => handleDropdownEnter(link.name)}
          onMouseLeave={handleDropdownLeave}
        >
          <button className="text-xs xl:text-base font-medium hover:text-[var(--gold-color)] flex items-center gap-1 py-2">
            {link.name}
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${
                activeDropdown === link.name ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === link.name && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-56 bg-white shadow-xl rounded-lg py-3 z-50 border border-gray-100 backdrop-blur-sm"
              onMouseEnter={() => handleDropdownEnter(link.name)}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
              {link.items?.map((item: INavItem, itemIndex: number) => (
                <Link
                  key={itemIndex}
                  href={item.path || "/"}
                  className="block px-6 py-3 text-sm text-[var(--semiGray-color)] hover:text-[var(--gold-color)] hover:bg-gray-50 transition-all duration-200 mx-2 rounded-md hover:shadow-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      );
    }

    return (
      <li key={index}>
        <Link
          href={link.path || "/"}
          className="text-xs xl:text-base font-medium hover:text-[var(--gold-color)] py-2 block transition-colors duration-200"
        >
          {link.name}
        </Link>
      </li>
    );
  };

  return (
    <header>
      <style jsx>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
      `}</style>
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
          <span className="flex gap-2 items-center">
            <Link
              href="https://www.google.com/maps/place/103+Ibadan+St,+Ebute+Metta,+Lagos+101245,+Lagos,+Nigeria/@6.4880883,3.3855408,865m/data=!3m2!1e3!4b1!4m6!3m5!1s0x103b8c84bef8b8d7:0x78e7c137fc1a2d9a!8m2!3d6.4880883!4d3.3881157!16s%2Fg%2F11ggw1tcg6?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity underline"
            >
              Lagos
            </Link>
            <span>|</span>
            <Link
              href="https://www.google.com/maps/place/13+The+Crossways,+Wembley+HA9+9NG,+UK/@51.5675553,-0.2837141,1083m/data=!3m1!1e3!4m6!3m5!1s0x4876116333cfb7c3:0x685030d6a0359a57!8m2!3d51.5675553!4d-0.2789505!16s%2Fg%2F11bw3hblwc?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity underline"
            >
              London
            </Link>
            <span>| Destination Weddings Available</span>
          </span>
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
        <ul className="hidden lg:flex gap-6 w-max text-[var(--semiGray-color)] ">
          {links.slice(0, 4).map((link, index) => renderLink(link, index))}
        </ul>
        <Link href="/" className="lg:mx-[2.5%] xl:mx-[2.5%]">
          <div className="flex items-center flex-col gap-2 text-[var(--semiGray-color)] w-fit">
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
        </Link>
        <ul className="hidden lg:flex gap-6 w-max text-[var(--semiGray-color)] items-center">
          {links.slice(4, 8).map((link, index) => renderLink(link, index + 4))}
        </ul>
      </div>
      {open && <Aside toggleOpen={toggleOpen} />}
    </header>
  );
}

export default Header;
