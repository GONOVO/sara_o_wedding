"use client";
import links from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { INavItem } from "@/utils/interfaces";

function Aside({ toggleOpen }: { toggleOpen: () => void }) {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  // Create mobile links including dropdown items
  const mobileLinks: (INavItem & {
    isDropdownItem?: boolean;
    parentName?: string;
  })[] = [];

  links.forEach((link: INavItem) => {
    if (link.dropdown && link.items) {
      // Add parent dropdown name
      mobileLinks.push({ ...link, isDropdownItem: false });
      // Add dropdown items with smaller font
      link.items.forEach((item) => {
        mobileLinks.push({
          ...item,
          isDropdownItem: true,
          parentName: link.name,
        });
      });
    } else if (!link.dropdown) {
      // Add regular links to mobile menu
      mobileLinks.push(link);
    }
  });

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(dropdownName)) {
        newSet.delete(dropdownName);
      } else {
        newSet.add(dropdownName);
      }
      return newSet;
    });
  };

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
          const isDropdownItem = link.isDropdownItem;
          const isParentDropdown = link.dropdown && !isDropdownItem;
          const isDropdownOpen =
            isParentDropdown && openDropdowns.has(link.name);

          // Skip dropdown items if their parent is not open
          if (
            isDropdownItem &&
            link.parentName &&
            !openDropdowns.has(link.parentName)
          ) {
            return null;
          }

          return (
            <li key={index}>
              {isParentDropdown ? (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className={`flex items-center py-1 my-2 text-[12vw] sm:text-5xl hover:text-[var(--gold-color)] transition-colors duration-200`}
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
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
              ) : (
                <Link
                  href={link.path ?? "/"}
                  onClick={toggleOpen}
                  className={`flex items-center py-1 my-2 ${
                    isDropdownItem
                      ? "text-[8vw] sm:text-3xl ml-4"
                      : "text-[12vw] sm:text-5xl"
                  } ${
                    isActive
                      ? "text-[var(--gold-color)] border-b-1"
                      : "hover:text-[var(--gold-color)]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
