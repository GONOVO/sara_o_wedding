import React from "react";

function Planners() {
  return (
    <section className="bg-[var(--lightGray-color)] py-20 lg:py-28 text-center text-[var(--mutedBlack-color)]">
      <div className="max-w-[480px] lg:max-w-[580px] mx-auto lg:mt-24">
        <p className="text-xl" data-aos="fade-up">
          Named Top Planner BY :
        </p>
      </div>
      <div className="flex gap-6 justify-center mt-8 lg:flex-row flex-col">
        <h1
          className="text-[52px] font-semibold leading-16"
          data-aos="zoom-in-out"
        >
          BAZAR
        </h1>
        <h1
          className="text-[52px] font-semibold leading-16"
          data-aos="zoom-in-out"
          data-aos-delay={200}
        >
          VOUGUE
        </h1>
        <h1
          className="text-[52px] font-semibold leading-16"
          data-aos="zoom-in-out"
          data-aos-delay={400}
        >
          BRIDES
        </h1>
        <h1
          className="text-[52px] font-semibold leading-16"
          data-aos="zoom-in-out"
          data-aos-delay={600}
        >
          MARTHA
        </h1>
      </div>
    </section>
  );
}

export default Planners;
