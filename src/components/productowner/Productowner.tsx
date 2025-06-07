import React from "react";
import Image from "next/image";

function Productowner() {
  return (
    <section className="mt-8 sm:mt-48 lg:mt-44 bg-[rgba(244,240,235,1)] overflow-x-hidden">
      <div className="max-w-[1280px] mt-32 sm:mt-48 pb-12 md:pt-0 md:pb-0 md:px-4 grid grid-cols-1 md:grid-cols-2 mx-auto top-0 md:-top-20 relative">
        <div className="w-[80%] ms-auto sm:ms-0 sm:w-full h-[620px] sm:h-[820px] md:h-[620px]  lg:h-[820px] relative">
          <h1
            className="text-[13vw] absolute z-1 -top-[11%] w-full block md:hidden  font-extralight leading-[18vw] -left-[25%] sm:left-0"
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
              className="nunito_font tracking-[4px] text-xs lg:text-lg font- sm:font-normal font-bold"
              data-aos="fade-left"
            >
              PRODUCING EXCEPTIONAL AFRICAN INSPIRED AND GLOBAL DESTINATION
              EVENTS
            </h3>
            <p
              className="text-[15px] sm:text-start sm:text-base"
              data-aos="fade-left"
              style={{
                textAlign: "justify",
                wordSpacing: "6px",
                lineHeight: "28px",
              }}
            >
              Yewande Rwang-Dung is an award winning celebrated event designer
              and producer with over 15 years of leadership in the African event
              industry. Known for her visionary creativity and flawless design
              execution, she leads the team in specializing in crafting
              extraordinary event experiences that redefine African elegance and
              sophistication. As the Founder, CEO and Creative Director of SARA
              O Events, Yewande has earned a stellar global reputation for
              transforming spaces into immersive memorable masterpieces,
              catering to global high value clientele for luxury weddings,
              high-profile corporate events, and bespoke event production
              projects.
            </p>
            <p
              className="text-[15px] sm:text-start sm:text-base"
              data-aos="fade-left"
              style={{
                textAlign: "justify",
                wordSpacing: "6px",
                lineHeight: "28px",
              }}
            >
              Beyond her event expertise, Yewande is a dedicated advocate for
              professional growth in the African event landscape, through
              empowering emerging talents with the skills and knowledge needed
              to excel in luxury event producing. Her passion for innovation and
              commitment to excellence continue to inspire the next generations
              and delight both clients and aspiring event producers. Beyond
              being a visionary entrepreneur, she is a devoted wife, mother, and
              friend, living life to its fullest balance where family and work
              intertwine harmoniously with her passion and purpose to delight
              others.
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
