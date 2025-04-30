import Image from "next/image";
import Link from "next/link";
import React from "react";

function Norules() {
  return (
    <section className="py-38">
      <div className="max-w-7xl grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mx-auto mx-4 lg:px-4  relative">
        <div className="relative w-full lg:h-auto h-[65vh]">
          <Image
            src="/images/norules.webp"
            alt="no rules"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:text-start text-center">
          <div className="absolute lg:static top-0 lg:text-start text-center -mt-18 lg:mt-0 w-full">
            <p className="text-[3.5vw] lg:text-sm tracking-[4px] font-medium mb-6 lg:mb-0">
              SARA O EVENTS HAS ONE RULE:
            </p>
            <h1 className="text-[11.5vw] sm:text-7xl lg:w-[130%] lg:-ml-[30%] lg:leading-[100px] leading-[12vw] sm:leading-[70px] lg:mb-6 z-10 relative">
              THERE ARE NO RULES
            </h1>
          </div>
          <p className="lg:max-w-[464px] leading-8 lg:text-base text-lg text-justify">
            Of course, there are proper etiquette formalities to follow and we
            are well versed in those. However, Sara O Events operates under one
            principle rule: for weddings, there are no rules. Yewande firmly
            believes that nothing in a wedding must happen because a couple
            feels as though others expect it to happen. Gone are the days of
            bouquet tosses, receiving lines, and serving cake when you prefer
            pie. As with everything in life, if it feels right, that&apos;s how
            you know it&apos;s right. To put it simply, once in a lifetime
            experiences aren&apos;t created following age old methods. This
            mindset and fresh outlook on planning allows Sara O Events to guide
            their clients towards wedding celebrations unlike any other.
          </p>
          <Link
            href="/#contactus"
            className="mt-16 text-sm inline-block py-1 px-4 border-b-1 tracking-[4px] lg:mx-0 lg:my-16 text-center"
            style={{ wordSpacing: "4px" }}
          >
            LET&apos;S BREAK THE RULES
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Norules;
