"use client";
import couples from "@/data/couples";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Couple() {
  const [couple, setCouple] = useState(0);
  const handleChangeCouple = () => {
    if (couple === couples.length - 1) {
      setCouple(0);
    } else {
      setCouple((prev) => prev + 1);
    }
  };
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="max-w-[450px] w-full lg:ml-auto mx-auto">
          <div className="relative w-full h-[60vh] lg:h-full -mt-40">
            <Link href={`/couple/${couples[couple].id}`}>
              <Image
                src={couples[couple].coupleImages[0]}
                alt="couple image"
                fill
                className="object-cover"
                loading="lazy"
              />
            </Link>
          </div>
          <button
            className="tracking-[4px] gap-2 items-center ml-auto py-2 mt-2 cursor-pointer lg:flex hidden"
            onClick={handleChangeCouple}
          >
            READ NEXT
            <Image src="/svgs/arrow.svg" alt="arrow" width={30} height={30} />
          </button>
        </div>
        <div>
          <p className="tracking-[6px] lg:font-light font-extrabold">
            WARMEST WORDS FROM
          </p>
          <h1 className="text-[36px] sm:text-[54px] sm:leading-26 leading-10 sm:mt-0 my-8">
            {couples[couple].maleName} & {couples[couple].femaleName}
          </h1>
          <h2 className="text-[22px] mt-4 mb-10" style={{ wordSpacing: "4px" }}>
            &quot;{couples[couple].subTitle}&quot;
          </h2>
          <p className="lg:max-w-[415px] text-justify leading-8 lg:text-base text-lg">
            {couples[couple].story}
          </p>
          <button
            className="tracking-[4px] gap-2 items-center mx-auto py-2 px-8 mt-8 cursor-pointer lg:hidden flex font-medium border-2"
            onClick={handleChangeCouple}
          >
            READ NEXT
          </button>
        </div>
      </div>
      <div className="lg:block w-fit hidden mx-auto my-28 border-b-2">
        <ul className="flex">
          {couples.map((coupleItem, index) => (
            <button
              key={index}
              onClick={() => setCouple(index)}
              className={`text-lg py-2 px-6 cursor-pointer ${
                couple === index && "border-1"
              }`}
            >
              {coupleItem.maleName} & {coupleItem.femaleName}
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Couple;
