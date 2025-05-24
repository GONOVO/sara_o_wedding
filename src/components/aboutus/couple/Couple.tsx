"use client";
import couples from "@/data/couples";
import Image from "next/image";
import React, { useState, useRef } from "react";

function Couple() {
  const [couple, setCouple] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);

  // Approximate width of each button including padding/margin (adjust as needed)
  const buttonWidth = 262; // min-w-[250px] + padding

  const maxTranslateX = () => {
    if (!ulRef.current || !containerRef.current) return 0;
    const ulWidth = ulRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    // max translate allowed so that we don't scroll too far
    return Math.max(0, ulWidth - containerWidth);
  };

  const handleChangeCouple = () => {
    const isLast = couple === couples.length - 1;
    const nextIndex = isLast ? 0 : couple + 1;

    // Calculate how much to translate
    if (isLast) {
      setTranslateX(0);
    } else {
      // Determine direction (next > prev => left translate, else right translate)
      const direction = nextIndex > prevIndexRef.current ? -1 : 1;
      let nextTranslate = translateX + direction * buttonWidth;

      // Clamp translation so it never goes beyond limits
      const maxTranslate = maxTranslateX();
      if (Math.abs(nextTranslate) > maxTranslate) {
        nextTranslate = -maxTranslate;
      }
      if (nextTranslate > 0) {
        nextTranslate = 0;
      }

      setTranslateX(nextTranslate);
    }

    setCouple(nextIndex);
    prevIndexRef.current = nextIndex;
  };

  const handleSetCouple = (index: number) => {
    // Calculate difference and new translateX accordingly
    const diff = index - prevIndexRef.current;
    let nextTranslate = translateX - diff * buttonWidth;

    const maxTranslate = maxTranslateX();
    if (Math.abs(nextTranslate) > maxTranslate) {
      nextTranslate = -maxTranslate;
    }
    if (nextTranslate > 0) {
      nextTranslate = 0;
    }

    setTranslateX(nextTranslate);
    setCouple(index);
    prevIndexRef.current = index;
  };

  return (
    <section className="pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-20">
        <div className="max-w-[450px] w-full lg:ml-auto mx-auto">
          <div
            className="relative w-[90%] h-[60vh] lg:h-[550px] -mt-40"
            data-aos="fade-up"
          >
            <Image
              src={couples[couple].image}
              alt="couple image"
              fill
              className="object-cover z-50"
              loading="lazy"
            />
          </div>
          <button
            className="tracking-[4px] gap-2 items-center ml-auto py-2 mt-2 cursor-pointer lg:flex hidden"
            onClick={handleChangeCouple}
            data-aos="fade-up"
          >
            READ NEXT
            <Image src="/svgs/arrow.svg" alt="arrow" width={30} height={30} />
          </button>
        </div>
        <div>
          <p className="tracking-[6px] lg:font-light " data-aos="fade-up">
            WARMEST WORDS FROM
          </p>
          <h1
            className="text-[36px] sm:text-[54px] sm:leading-26 leading-10 sm:mt-0 my-8"
            data-aos="fade-up"
          >
            {couples[couple].eventName
              ? couples[couple].eventName
              : `${couples[couple].maleName} & ${couples[couple].femaleName}`}
          </h1>
          <h2
            className="text-[22px] mt-4 mb-10"
            style={{ wordSpacing: "4px" }}
            data-aos="fade-up"
          >
            &quot;{couples[couple].subTitle}&quot;
          </h2>
          <p
            className="lg:max-w-[415px] text-justify leading-8 lg:text-base text-lg"
            data-aos="fade-up"
          >
            {couples[couple].story}
          </p>
          <button
            className="tracking-[4px] gap-2 items-center mx-auto py-2 px-8 mt-8 cursor-pointer lg:hidden flex font-medium border-2"
            onClick={handleChangeCouple}
            data-aos="fade-up"
          >
            READ NEXT
          </button>
        </div>
      </div>
      <div
        className="lg:block hidden mx-auto my-28 border-b-2 max-w-[1080px] overflow-hidden"
        data-aos="fade-up"
        ref={containerRef}
      >
        <ul
          ref={ulRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {couples.map((coupleItem, index) => (
            <button
              key={index}
              onClick={() => handleSetCouple(index)}
              className={`min-w-[250px] text-lg py-2 px-6 cursor-pointer whitespace-nowrap ${
                couple === index ? "border-b-2 border-black" : ""
              }`}
            >
              {coupleItem.eventName
                ? coupleItem.eventName
                : `${coupleItem.maleName} & ${coupleItem.femaleName}`}
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Couple;
