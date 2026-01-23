import Image from "next/image";
import Link from "next/link";
import React from "react";

function Norules() {
  return (
    <section className="pt-36 pb-20 sm:py-38 overflow-x-hidden">
      <div className="max-w-7xl grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mx-auto mx-4 lg:px-4  relative">
        <div
          className="relative w-full lg:h-auto h-[65vh]"
          data-aos="fade-right"
        >
          <Image
            src="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/hp2.jpg"
            alt="no rules"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:text-start text-center">
          <div className="absolute lg:static top-0 lg:text-start text-center -mt-18 lg:mt-0 w-full">
            <p
              className="text-[3.5vw] lg:text-sm tracking-[4px] font-medium mb-6 lg:mb-0"
              data-aos="fade-left"
            >
              SARA O EVENTS HAS ONE RULE:
            </p>
            <h1
              className="text-[11.5vw] sm:text-7xl lg:w-[130%] lg:-ml-[30%] lg:leading-[100px] leading-[12vw] sm:leading-[70px] lg:mb-6 z-10 relative"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              ALWAYS DELIGHT OUR CLIENTS NO MATTER IMPACT
            </h1>
          </div>
          <p
            className="lg:max-w-[464px] leading-8 lg:text-base text-lg text-justify"
            data-aos="fade-left"
            data-aos-delay={350}
          >
            Of course, there are proper formalities followed and which we are
            well established in following. However, Sara O Events operates under one
            principle rule: for any event big or small, our clients special and
            most memorable moments/dates can never be relived, therefore
            ultimately delighting our clients by exceeding their décor
            expectations is our highest priority.
            <br />
            The Sara O Events team firmly believes, to put it simply, once in a
            lifetime experiences aren&apos;t created following static style
            methods. Our mindset and fresh outlook on evolving event producing
            allows Sara O Events to distinguish themselves from the competition as our
            clients testify to always trust us to give them much more value for
            their celebrations unlike any other.
          </p>
          <Link
            href="/#contactus"
            className="mt-6 sm:mt-16 text-sm inline-block py-1 px-4 border-b-1 tracking-[4px] lg:mx-0 lg:my-16 text-center"
            style={{ wordSpacing: "4px" }}
            data-aos="fade-left"
          >
            LET&apos;S BREAK THE RULES
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Norules;
