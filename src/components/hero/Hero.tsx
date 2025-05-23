"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
function Hero() {
  const [isMobile, setIsMobile] = useState(window?.innerWidth <= 1024);
  const [detectvideo, setDetectVideo] = useState(1);
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

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setIsMobile(isMobile);
      console.log("Inner width:", window.innerWidth, "Is mobile:", isMobile);
    };

    const handleHeight = () => {
      const videoNum =
        window.pageYOffset >= 600 && window.pageYOffset <= 1200
          ? 2
          : window.pageYOffset <= 600
          ? 1
          : 0;
      setDetectVideo(videoNum);
      console.log(detectvideo, window.pageYOffset);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleHeight);
    // Set initial width
    handleResize();
    handleHeight();
    // Cleanup
    if (detectvideo === 1 && isMobile) {
      handleMouseEnter(videoRefEvents, videoRefWedding);
    } else if (detectvideo === 2 && isMobile) {
      handleMouseEnter(videoRefWedding, videoRefEvents);
    } else {
      videoRefEvents.current?.pause();
      videoRefWedding.current?.pause();
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, detectvideo]);

  return (
    <section className="relative lg:mb-56">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2">
        {/* Video 1 */}
        <Link href="/events">
          <div className="relative group">
            <h1
              className="lg:text-[124px] text-[74px] leading-16 tracking-[4px] uppercase  py-2 px-2 absolute z-10 text-white md:leading-28 "
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              EVENTS
            </h1>
            <video
              aria-hidden="true"
              className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
              src="/videos/ev_33.mp4"
              ref={videoRefEvents}
              loop
              muted
              playsInline
              poster="/images/events_poster.webp"
              onMouseEnter={() =>
                handleMouseEnter(videoRefEvents, videoRefWedding)
              }
              onMouseLeave={() => handleMouseLeave(videoRefEvents)}
            />
            <div
              className={`absolute inset-0 bg-[var(--gold-color)] opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none
                ${detectvideo === 1 && styles.hiddensecond}`}
            />
          </div>
        </Link>
        {/* Video 2 */}

        <Link href="/wedding">
          <div className="relative group">
            <h1
              className="lg:text-[124px] text-[74px] leading-16 tracking-[4px] uppercase  py-2 px-2 absolute z-10 text-white md:leading-28 right-0 bottom-0"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              WEDDINGS
            </h1>
            <video
              aria-hidden="true"
              className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
              src="/videos/mmm.mp4"
              ref={videoRefWedding}
              loop
              muted
              playsInline
              poster="/images/hero_poster.webp"
              onMouseEnter={() =>
                handleMouseEnter(videoRefWedding, videoRefEvents)
              }
              onMouseLeave={() => handleMouseLeave(videoRefWedding)}
            />
            <div
              className={`absolute inset-0 bg-black opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none  ${
                detectvideo === 2 && styles.hiddensecond
              }`}
            />
          </div>
        </Link>
      </div>
      <div
        className="bg-white w-full lg:w-[650px] lg:h-[240px] lg:p-2 lg:absolute lg:-bottom-[170px] lg:left-1/2 lg:translate-x-[-50%]"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        data-aos="zoom-in-out"
      >
        <div className="lg:border-1 border-[var(--mutedBlack-color)] w-full h-full py-12 px-6 lg:p-10 flex flex-col justify-center items-center  gap-3 lg:gap-2 text-[var(--mutedBlack-color)]">
          <h2 className="text-[7vw] lg:text-2xl font-medium text-center text-uppercase">
            DESTINATION WEDDING PLANNERS & EVENT DESIGNERS CREATING
            UNFORGETTABLE EXPERIENCES WORLDWIDE
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
