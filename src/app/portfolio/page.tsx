import React from "react";
import InfinityScroll from "../components/infinityscroll/InfinityScroll";
import portfolio from "@/data/portfolio";
import HugeTitle from "../components/ui/hugetitle/HugeTitle";

function page() {
  return (
    <>
      <section className="scroll-container relative bg-[var(--gold-color)]   block py-4">
        <HugeTitle text="PORTFOLIO" color="#FFF" fontPercentage={0.9} />
        {/* <div className="mt-8 mb-10 md:mt-22 md:mb-24 lg:mb-16 flex flex-col gap-6 relative">
        <div className="h-[90vh] lg:h-[80vh] mx-auto bg-gray-100 absolute left-0 right-0 xl:left-[15%] xl:right-[15%] top-0 bottom-[10%] shadow-md xl:rounded-3xl rounded-0">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mt-12 lg:mt-7 text-center z-2 relative"
            data-aos="zoom-in-out"
          >
            Ce que disent nos clients!
          </h1>
        </div> */}

        <InfinityScroll elements={portfolio} />
        {/* </div> */}
      </section>
    </>
  );
}

export default page;
