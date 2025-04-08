import React from "react";

function Hero() {
  return (
    <div className="w-full relative">
      <video
        className="w-full object-cover h-[494px] lg:h-[694px]"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted={true}
        playsInline
      />
      <div className="bg-white w-full lg:w-[650px] lg:h-[240px] lg:p-2 lg:absolute lg:-bottom-[70px] lg:left-1/2 lg:translate-x-[-50%]">
        <div className="lg:border-1 border-[var(--mutedBlack-color)] w-full h-full py-12 px-6 lg:p-10 flex flex-col justify-center items-center  gap-3 lg:gap-2 text-[var(--mutedBlack-color)]">
          <h2 className="text-[7vw] lg:text-2xl font-medium text-center">
            WEDDING PLANNER BASED IN NEW ORLEANS
          </h2>
          <p className="text-[5vw] lg:text-xl text-center">
            NAMED TOP PLANNER IN THE WORLD BY
          </p>
          <h1 className="text-[12vw] lg:text-[64px] text-center font-medium lg:leading-16">
            BAZZAR
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
