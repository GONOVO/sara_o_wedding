import HugeTitle from "@/components/ui/hugetitle/HugeTitle";
import Image from "next/image";
import React from "react";

function History() {
  return (
    <section className="pb-28 pt-4 sm:py-36 px-2 bg-[rgba(244,240,235,1)] relative -mt-8 lg:-mt-26 -z-20">
      <HugeTitle text="HISTORY" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 xl:gap-36">
        <div className="grid grid-cols-2 lg:gap-0 gap-2 ">
          <div className="flex flex-col gap-y-8 items-center lg:-mt-20">
            <div className="w-[90%] lg:w-full h-[288px] md:h-[388px] relative">
              <Image
                src="/images/schweppes_event.webp"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
                data-aos="zoom-in-out"
              />
            </div>
            <div className="w-full lg:w-[90%] h-[268px] md:h-[368px] relative">
              <Image
                src="/images/his2.webp"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
                data-aos="zoom-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8  items-center lg:mt-20 mt-10">
            <div className="w-full lg:w-[86%] h-[209px] md:h-[309px] relative">
              <Image
                src="/images/his3.webp"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
                data-aos="zoom-in-out"
              />
            </div>
            <div className="w-[85%] lg:w-full h-[268px] md:h-[368px] relative">
              <Image
                src="/images/his4.webp"
                alt="history Image 1"
                fill
                className="object-cover"
                loading="lazy"
                data-aos="zoom-in-out"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-end lg:max-w-[500px] px-3 sm:px-0">
          <h1 className="text-2xl" data-aos="fade-up">
            SARA O EVENTS WAS FOUNDED IN EARLY 2008 BUT FULLY ESTABLISHED IN
            2010 BY YEWANDE RWANG-DUNG.
          </h1>
          <p className="leading-[30px] text-justify" data-aos="fade-up">
            Starting first as a passionate vision for creating extraordinary
            celebrations, Yewande worked tirelessly to establish a name for
            herself in the event industry. The Nigerian Yoruba tribe which she
            hails from, have a very rich cultural heritage for grand and
            extravagant celebrations from weddings, milestone birthdays to even
            for burials. Her ability to quickly identify this industry
            opportunity by realizing the unique needs of very high value
            clients, to create innovative designs with exquisite attention to
            details. This worked exceptionally well for Sara O and catapulted us
            into quickly becoming the trendsetter in the Nigerian and African
            event industry, specializing on the designs and aesthetic guest
            experiences which reflect our client’s societal status, luxurious
            tastes, successful profiles, distinguished styles and unique tastes.
          </p>
          <p className="leading-[30px] text-justify" data-aos="fade-up">
            Sara O Events has grown to be the No. 1 premier luxury event design
            producers across Africa, now offering clients the highest level of
            decor sophistication and transformation of event spaces from private
            homes to very large event venues. We seamlessly blend time-tested
            processes with boundary-pushing design flair to create
            multi-dimensional luxury event experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default History;
