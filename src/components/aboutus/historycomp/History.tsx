import HugeTitle from "@/components/ui/hugetitle/HugeTitle";
import Image from "next/image";
import React from "react";

function History() {
  return (
    <section className="py-28 sm:py-36 px-2 bg-[rgba(244,240,235,1)] relative -mt-8 lg:-mt-26 -z-20">
      <HugeTitle text="HISTORY" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 xl:gap-36">
        <div className="grid grid-cols-2 lg:gap-0 gap-2 ">
          <div className="flex flex-col gap-y-8 items-center lg:-mt-20">
            <div className="w-[90%] lg:w-full h-[288px] md:h-[388px] relative">
              <Image
                src="/images/his1.jpg"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-[90%] h-[268px] md:h-[368px] relative">
              <Image
                src="/images/his2.JPG"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8  items-center lg:mt-20 mt-10">
            <div className="w-full lg:w-[86%] h-[209px] md:h-[309px] relative">
              <Image
                src="/images/his3.JPG"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[85%] lg:w-full h-[268px] md:h-[368px] relative">
              <Image
                src="/images/aboutushero.jpg"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-end lg:max-w-[500px] px-3 sm:px-0">
          <h1 className="text-2xl">
            ESTERA EVENTS WAS FOUNDED IN EARLY 2010. BIANCA AND ERICA JOINED THE
            TEAM SHORTLY AFTER IT&apos;S CONCEPTION.
          </h1>
          <p className="leading-[30px]">
            Starting first as the interns for Estera Events back in 2010, Bianca
            and Erica worked tirelessly to establish a name for themselves in
            the wedding industry. Their ability to quickly learn the ropes and
            create systems that work well for the Estera Events clients
            catapulted them into quickly becoming thought leaders and
            trendsetters in the industry in just a few short years.
          </p>
          <p className="leading-[30px]">
            The two acquired Estera Events in 2019 and now proudly share the
            roles of design and planning for every celebration, offering clients
            the highest level of attention and prioritization - and the promise
            that nothing will be cookie-cutter. Architecting spaces from square
            one, they seamlessly blend time-tested processes with
            boundary-pushing design flair to create multi-day luxury event
            experiences. Beyond business partners, they are also devoted wives,
            mothers, and friends, sharing a journey where family and work
            intertwine harmoniously.
          </p>
        </div>
      </div>
    </section>
  );
}

export default History;
