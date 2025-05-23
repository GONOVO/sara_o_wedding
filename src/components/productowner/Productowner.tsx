import React from "react";
import Image from "next/image";

function Productowner() {
  return (
    <section className="mt-8 sm:mt-48 lg:mt-44 bg-[rgba(244,240,235,1)] overflow-x-hidden">
      <div className="max-w-[1280px] mt-32 sm:mt-48 pb-12 md:pt-0 md:pb-0 md:px-4 grid grid-cols-1 md:grid-cols-2 mx-auto top-0 md:-top-20 relative">
        <div className="w-[80%] ms-auto sm:ms-0 sm:w-full h-[620px] sm:h-[820px] md:h-[620px]  lg:h-[820px] relative">
          <h1
            className="text-[15vw] absolute z-1 -top-[11%] w-full block md:hidden  font-extralight leading-[18vw] -left-[25%] sm:left-0"
            data-aos="fade-left"
          >
            WORLD CLASS EVENTS
          </h1>
          <Image
            src="/images/Picture1.webp"
            alt="Yewande Rwang-Dung"
            fill
            quality={100}
            unoptimized={true}
            loading="lazy"
            data-aos="fade-right"
          />
        </div>
        <div className="px-4 md:px-0">
          <h1
            className="md:text-[6.5vw] xl:text-[72px] mt-5 md:leading-20 lg:leading-24 font-extralight italic md:-left-16 relative left-16 md:block hidden"
            data-aos="fade-left"
          >
            WORLD <br />
            <span className="-left-2 relative">CLASS EVENTS</span>
          </h1>
          <div className="lg:ms-16 md:ms-8 mt-8 lg:mt-[45px] flex flex-col gap-6 lg:gap-12 ">
            <h3
              className="nunito_font tracking-[4px] text-xs lg:text-lg font-thin"
              data-aos="fade-left"
            >
              PLANNING EXCEPTIONAL NIGERIAN AND DESTINATION WEDDINGS AND EVENTS
            </h3>
            <p
              className="text-[15px] text-justify sm:text-start sm:text-base"
              data-aos="fade-left"
            >
              Yewande Rwang-Dung is a celebrated event design and interior décor
              expert with over 15 years of industry leadership. Known for her
              visionary creativity and flawless execution, she specializes in
              crafting extraordinary experiences that redefine elegance and
              sophistication. As the Founder and Creative Director of SARA O
              Events, Yewande has earned a stellar reputation for transforming
              spaces into immersive masterpieces, catering to luxury weddings,
              high-profile corporate events, and bespoke interior décor
              projects.
            </p>
            <p
              className="text-[15px] text-justify sm:text-start sm:text-base"
              data-aos="fade-left"
            >
              Beyond her design expertise, Yewande is a dedicated mentor and
              advocate for professional growth in the event industry. Through
              mentorship programs and industry initiatives, she empowers
              emerging talents with the skills and knowledge needed to excel in
              luxury event styling. Her passion for innovation and commitment to
              excellence continue to inspire both clients and aspiring designers
              alike.
            </p>
            <div>
              <h2 className="text-xl font-medium" data-aos="fade-left">
                Yewande Rwang-Dung
              </h2>
              <p
                className="kristy_font font-light text-3xl mt-5"
                data-aos="fade-left"
              >
                Founder & Ceo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productowner;
