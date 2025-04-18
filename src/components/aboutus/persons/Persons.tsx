import Image from "next/image";
import React from "react";

function Persons() {
  return (
    <section className="max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="relative w-full lg:h-auto h-[60vh]">
          <Image
            src="/images/about1.jpg"
            alt="image"
            fill
            className="object-cover -z-10"
          />
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="lg:mt-24 lg:text-9xl text-5xl lg:max-w-[500px] max-w-[300px] lg:leading-[150px] font-extralight lg:-ms-[40px] lg:relative absolute -top-2">
            BIANCA HALL
          </h1>
          <p className="text-2xl text-extralight px-1 pt-8">
            A texture loving maximalist with a penchant for travel and beautiful
            hotels.
          </p>
          <p className="text-2xl text-extralight px-1">
            Can always find the silver lining.
          </p>
          <p className="text-2xl text-extralight px-1 pb-8">
            Never met an excel spreadsheet she didn&apos;t love.
          </p>
          <div className="w-[125%] -ms-[25%] mb-8 lg:block hidden">
            <h2
              className="text-xl sm:text-4xl italic  text-[#c1ada3] lg:text-start text-center "
              style={{ wordSpacing: "0.6rem" }}
            >
              &quot;Out of the hundreds of decisions we made while planning our
              wedding, hiring Bianca from Estera Events was the best decision
              &quot;
            </h2>
            <p className="mt-4 tracking-[5px] text-sm">
              REBECCA, ESTERA EVENTS BRIDE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Persons;
