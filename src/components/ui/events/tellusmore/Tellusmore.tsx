"use client";
import React from "react";
import LazyAutoPlayVideo from "../../videoplayer/VideoPlayer";
import Link from "next/link";

function Tellusmore({
  video,
  posterVideo,
}: {
  video: string;
  posterVideo: string;
}) {
  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1  lg:mt-0 mt-6">
        <div>
          <LazyAutoPlayVideo videoPath={video} placeholderImage={posterVideo} />
        </div>
        <div className="flex flex-col justify-center items-center bg-[var(--gold-color)] lg:pt-0 pt-8 ">
          <p className="text-xl sm:text-2xl" data-aos="zoom-in-out">
            Need something a little more unique?
          </p>
          <h1
            className="text-6xl sm:text-7xl font-medium"
            data-aos="zoom-in-out"
          >
            Tell us more
          </h1>
          <Link
            href="/#contactus"
            className="inline-block my-6  border-2 border-black  py-2 px-8 tracking-[3px]text-xs nunito_font hover:bg-black hover:text-white"
            data-aos="zoom-in-out"
          >
            CONTACT US
          </Link>
        </div>
      </section>
      <div className="py-8 text-center flex sm:flex-row flex-col justify-center items-center gap-2 bg-[var(--gold-color)]">
        <h1 className="text-4xl font-extralight">ready to grow?</h1>
        <Link href="/#contactus" className="hover:opacity-40">
          LET&apos;S CONNECT!
        </Link>
      </div>
    </>
  );
}

export default Tellusmore;
