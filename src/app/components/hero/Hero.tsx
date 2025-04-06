import React from "react";

function Hero() {
  return (
    <div className="h-[494px] lg:h-[694px] w-full relative">
      {/* <video
        className="w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted={true}
        playsInline
      /> */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-white w-full lg:w-[650px] lg:h-[250px] lg:p-2 relative lg:-top-[180px] lg:left-1/2 lg:translate-x-[-50%]">
        <div className="lg:border-1 border-[var(--mutedBlack-color)] w-full h-full py-12 px-6 lg:p-10 flex flex-col justify-center items-center  gap-3 lg:gap-1 text-[var(--mutedBlack-color)]">
          <h2 className="text-2xl text-center">
            WEDDING PLANNER BASED IN NEW ORLEANS
          </h2>
          <p className="text-xl text-center">
            NAMED TOP PLANNER IN THE WORLD BY
          </p>
          <h1 className="text-5xl text-center">BAZZAR</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
