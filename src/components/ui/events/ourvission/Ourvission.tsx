import { IVission } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ourvission({ image, caption, paragraph }: IVission) {
  return (
    <section className="mt-0 sm:mt-48 lg:mt-44 bg-[var(--gold-color)]">
      <div className="max-w-[1280px] mt-16 sm:mt-12 pb-12 md:pt-0 md:pb-0 md:px-4 grid grid-cols-1 md:grid-cols-2 mx-auto top-0 md:-top-20 relative">
        <div className="w-full h-[620px] sm:h-[820px] md:h-[620px]  lg:h-[820px] relative -mt-8">
          <h1
            className="text-[13vw] absolute z-1 -top-[11%] w-full block md:hidden  font-extralight leading-[18vw]"
            data-aos="fade-left"
          >
            FROM VISION
            <br />
            <span className="text-white">TO REALITY</span>
          </h1>
          <Image
            src={image}
            alt="Yewande Rwang-Dung"
            fill
            quality={100}
            unoptimized={true}
            loading="lazy"
            data-aos="fade-right"
            className="object-cover"
          />
        </div>
        <div className="px-4 md:px-0 md:mt-34">
          <h1
            className="md:text-[6.5vw] xl:text-[72px] mt-5 md:leading-20 lg:leading-24 font-extralight italic md:-left-16 relative left-16 md:block hidden text-white"
            data-aos="fade-left"
          >
            FROM VISION <br />
            <span className="-left-2 relative">TO REALITY</span>
          </h1>
          <div className="lg:ms-16 md:ms-8 mt-8 lg:mt-[45px] flex flex-col gap-6 lg:gap-12 ">
            <h3
              className="nunito_font tracking-[4px] text-xs lg:text-lg font-thin text-white"
              data-aos="fade-left"
            >
              {caption}
            </h3>
            <p className="text-sm lg:text-base text-white" data-aos="fade-left">
              {paragraph}
            </p>
            <Link
              href="/#contactus"
              className="mt-16 text-sm inline-block w-fit py-1 px-4 border-b-1 tracking-[4px] lg:mx-0 lg:my-16 text-center text-white border-white"
              style={{ wordSpacing: "4px" }}
              data-aos="fade-left"
            >
              READ MORE ABOUT US
            </Link>
            {/* <div></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourvission;
