import React from "react";
import BundlerCard from "./bundler_card/BundlerCard";
import { IBundle } from "@/utils/interfaces";

function Bundlers({ bundles }: { bundles: IBundle[] }) {
  return (
    <section className="mt-36">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-[1px] bg-black" data-aos="fade-up"></div>
        <h1
          className="italic text-4xl max-w-[250px] text-center -mt-14"
          data-aos="fade-up"
        >
          <span className="not-italic me-2 font-medium text-[45px]">most</span>
          Popular <span className="bg-white my-2 px-8">services</span>
        </h1>
        <p
          className="text-xl max-w-[820px] text-center mx-auto px-2 my-10"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          Dreaming of an extraordinary event? & a
          <span className="ms-2 font-medium text-3xl">Special Event?</span>
          <br />
          Explore our collection of bespoke services, meticulously designed to bring your vision to life with effortless sophistication. From intimate gatherings to grand celebrations, every detail is crafted with intention, because your event should be as unique as you are!
        </p>
      </div>
      <div className="lg:w-5xl xl:w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
        {bundles.map((bundle, index) => (
          <BundlerCard bundle={bundle} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Bundlers;
