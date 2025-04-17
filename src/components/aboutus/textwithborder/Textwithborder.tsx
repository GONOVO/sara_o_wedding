import React from "react";

function Textwithborder() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center items-center ">
        <div className="w-fit  justify-center items-center border-r-2  relative lg:flex hidden">
          <p
            className="text-sm tracking-[4px] uppercase text-center py-2 px-36 absolute border-l-1 -ml-10"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              whiteSpace: "nowrap",
            }}
          >
            YOUR WEDDING PLANNING DREAM TEAM
          </p>
        </div>

        <div className="w-full sm:w-[90%] lg:ps-6 py-16">
          <p className="text-xl sm:text-4xl italic leading-relaxed text-[#c1ada3] lg:text-start text-center">
            Estera Events offers modern and personalized full-service event
            planning and design for private clients around the world. As a duo,
            they manage every step of the planning process, supported by a
            proven system of organized planning, a network of trusted
            relationships, and unwavering advocacy for their clients at every
            turn. It’s the preferences, priorities, and unique style of their
            clients and families that inspire just about every aspect of the
            celebration they architect.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Textwithborder;
