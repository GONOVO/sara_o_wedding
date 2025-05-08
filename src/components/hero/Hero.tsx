"use client";
import React, { useRef } from "react";

function Hero() {
  const videoRefEvents = useRef<HTMLVideoElement>(null);
  const videoRefWedding = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    otherRef: React.RefObject<HTMLVideoElement | null>
  ) => {
    videoRef.current?.play();
    otherRef.current?.pause();
  };

  const handleMouseLeave = (
    videoRef: React.RefObject<HTMLVideoElement | null>
  ) => {
    videoRef.current?.pause();
  };

  return (
    <div className="w-full relative mt-[260px] grid grid-cols-1 md:grid-cols-2">
      {/* Video 1 */}
      <div className="relative group">
        <h1
          className="md:text-[134px] text-[72px] leading-16 tracking-[4px] uppercase  py-2 px-2 absolute z-10 text-white md:leading-28 "
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            whiteSpace: "nowrap",
          }}
        >
          EVENTS
        </h1>
        <video
          className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
          src="/videos/events.mp4"
          ref={videoRefEvents}
          loop
          muted
          playsInline
          onMouseEnter={() => handleMouseEnter(videoRefEvents, videoRefWedding)}
          onMouseLeave={() => handleMouseLeave(videoRefEvents)}
        />
        <div className="absolute inset-0 bg-[var(--gold-color)] opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Video 2 */}
      <div className="relative group">
        <h1
          className="md:text-[134px] text-[72px] leading-16 tracking-[4px] uppercase  py-2 px-2 absolute z-10 text-white md:leading-28 right-0"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            whiteSpace: "nowrap",
          }}
        >
          WEDDINGS
        </h1>
        <video
          className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
          src="/videos/hero2.mp4"
          ref={videoRefWedding}
          loop
          muted
          playsInline
          onMouseEnter={() => handleMouseEnter(videoRefWedding, videoRefEvents)}
          onMouseLeave={() => handleMouseLeave(videoRefWedding)}
        />
        <div className="absolute inset-0 bg-black opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default Hero;
