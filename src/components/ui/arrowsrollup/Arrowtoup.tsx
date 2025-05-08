"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Arrowtoup() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  function scrollTop() {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      onClick={scrollTop}
      className={`fixed md:bottom-8 bottom-4 z-50 right-4 md:right-8 rounded-full p-2 border-2 cursor-pointer border-[var(--gold-color)] bg-transparent shadow-sm ${
        showButton ? "flex" : "hidden"
      }`}
    >
      <Image
        src="/svgs/angleUp.svg"
        alt="angle up"
        width={24}
        height={24}
        className="object-contain h-4 w-4 md:h-6 md:w-6"
      />
    </button>
  );
}

export default Arrowtoup;
