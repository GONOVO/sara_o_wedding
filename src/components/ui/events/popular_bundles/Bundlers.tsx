import React from "react";
import BundlerCard from "./bundler_card/BundlerCard";
import Bundles from "@/data/bundles";

function Bundlers() {
  return (
    <section className="mt-36">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-[1px] bg-[var(--gold-color)]"></div>
        <h1 className="italic text-4xl text-[var(--gold-color)] max-w-[250px] text-center -mt-14">
          <span className="not-italic me-2 font-medium text-[45px]">most</span>
          Popular <span className="bg-white my-2 px-8">bundles</span>
        </h1>
        <p className="text-xl max-w-[820px] text-center mx-auto px-2 my-10 text-[var(--gold-color)]">
          Interested in an assortment of services to get you going & a
          <span className="ms-2 font-medium text-3xl">Special Offer?</span>
          <br />
          We have bundled up some of our most popular services into little
          suites of success. Each bundle is entitled to an exclusive bundle
          discount because we appreciate you!
        </p>
      </div>
      <div className="lg:w-5xl xl:w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
        {Bundles.map((bundle, index) => (
          <BundlerCard bundle={bundle} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Bundlers;
