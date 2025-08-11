"use client";
import links from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { INavItem } from "@/utils/interfaces";

function Aside({ toggleOpen }: { toggleOpen: () => void }) {
  const pathname = usePathname();

  // Create mobile links including dropdown items
  const mobileLinks: INavItem[] = [];

  links.forEach((link: INavItem) => {
    if (link.dropdown && link.items) {
      // Add dropdown items to mobile menu
      mobileLinks.push(...link.items);
    } else if (!link.dropdown) {
      // Add regular links to mobile menu
      mobileLinks.push(link);
    }
  });

  useEffect(() => {}, [pathname]);

  return (
    <aside className="p-4 bg-[var(--lightGray-color)] w-full min-h-[100dvh]  overflow-auto fixed inset-0 z-50 aside_move">
      <Image
        src="/svgs/exitIcon.svg"
        alt="close icon"
        width={24}
        height={24}
        className="absolute right-4 cursor-pointer"
        onClick={toggleOpen}
      />
      <div className="relative w-[80%] h-[90px] sm:h-[150px] mx-auto mt-8 sm:mt-4">
        <Image
          src="/svgs/sara_o.svg"
          alt="logo Image"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 30vw, 50vw"
        />
      </div>
      <ul>
        {mobileLinks.map((link, index) => {
          const isActive = pathname === link.path && link.name !== "HOME";
          return (
            <li key={index}>
              <Link
                href={link.path ?? "/"}
                onClick={toggleOpen}
                className={`block text-[12vw] sm:text-5xl py-1 my-2 ${
                  isActive
                    ? "text-[var(--gold-color)] border-b-1"
                    : "hover:text-[var(--gold-color)]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
