import React from "react";

function Caption({ text, brand }: { text: string; brand: string }) {
  return (
    <section className="py-28">
      <h1
        className="italic lg:text-2xl lg:leading-[50px] max-w-[820px] mx-auto text-center"
        data-aos="fade-up"
      >
        &quot;{text}&quot;
      </h1>
      <p className="text-4xl w-fit mx-auto mt-8" data-aos="fade-up">
        {brand}
      </p>
    </section>
  );
}

export default Caption;
