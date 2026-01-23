import React from "react";

function Textwithborder() {
  return (
    <section className="max-w-7xl mx-auto px-4 overflow-x-hidden">
      <div className="flex justify-center items-center ">
        <div
          className="w-fit  justify-center items-center border-r-2  relative lg:flex hidden z-2"
          data-aos="fade-right"
        >
          <p
            className="text-sm tracking-[4px] uppercase text-center py-2 px-36 absolute border-l-1 -ml-10"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              whiteSpace: "nowrap",
            }}
          >
            Our Dream Team Event Producers
          </p>
        </div>

        <div className="w-full sm:w-[90%] lg:ps-6 py-4 sm:py-16">
          <p
            className="text-xl sm:text-4xl italic leading-relaxed text-[#c1ada3] lg:text-start text-center"
            data-aos="fade-left"
            style={{
              textAlign: "justify",
              wordSpacing: "6px",
            }}
          >
            Sara O Events offers luxurious, elegant and modern personalized
            full-service event designs for clients around the world. As event
            producers, we help client manage every step of the
            conceptualization, design to the execution process, supported by a
            distinguished team of professional planners, technicians, artisans,
            vendors and suppliers in our network of trusted partners, with
            unwavering commitment to delivering our clients every vision.
            It&apos;s the unique tastes, priorities, and styles of our clients
            and families that inspire us to exceed just about every aspect of
            their celebrations as their event producers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Textwithborder;
