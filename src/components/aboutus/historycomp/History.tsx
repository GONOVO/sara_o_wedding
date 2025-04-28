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
                src="/images/his4.jpg"
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
            SARA O EVENTS WAS FOUNDED IN EARLY 2010 BY YEWANDE RWANG-DUNG.
          </h1>
          <p className="leading-[30px]">
            Starting first as a passionate vision for creating extraordinary
            celebrations, Yewande worked tirelessly to establish a name for
            herself in the wedding industry. Her ability to quickly create
            innovative systems that work exceptionally well for Sara O Events
            clients catapulted her into quickly becoming a thought leader and
            trendsetter in the industry in just a few short years.
          </p>
          <p className="leading-[30px]">
            Yewande has grown Sara O Events into a premier luxury wedding
            planning company and now proudly oversees the design and planning
            for every celebration, offering clients the highest level of
            attention and prioritization - and the promise that nothing will be
            cookie-cutter. Architecting spaces from square one, she seamlessly
            blends time-tested processes with boundary-pushing design flair to
            create multi-day luxury event experiences. Beyond being a visionary
            entrepreneur, she is also a devoted wife, mother, and friend, living
            a journey where family and work intertwine harmoniously.
          </p>
        </div>
      </div>
    </section>
  );
}

export default History;
