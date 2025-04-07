import React from "react";

function Planners() {
  return (
    <section className="bg-[var(--lightGray-color)] py-20 lg:py-28 text-center text-[var(--mutedBlack-color)]">
      <div className="max-w-[400px] mx-auto">
        <h2 className="text-2xl mb-8">
          Destination Wedding Planners & Event Designers based in New Orleans
          Operating Globally
        </h2>
        <p className="text-lg">Named Top Planner BY:</p>
      </div>
      <div className="flex gap-6 justify-center mt-8 lg:flex-row flex-col">
        <h1 className="text-4xl">BAZAR</h1>
        <h1 className="text-4xl">VOUGUE</h1>
        <h1 className="text-4xl">BRIDES</h1>
        <h1 className="text-4xl">MARTHA</h1>
      </div>
    </section>
  );
}

export default Planners;
