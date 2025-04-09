import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <section className="max-w-[1280px] mx-auto">
      <h1 className="text-[#EEEDEB] text-[208px] text-center z-3 relative">
        FEATURED
      </h1>
      <div className="grid grid-cols-2">
        <div className="w-full h-[390px] relative">
          <Image
            src="/images/featured2.jpg"
            alt="featured image 2"
            fill
            className="object-bottom"
          />
        </div>
        <div className="flex relative justify-end">
          <div className="flex-shrink-0 absolute -left-36">
            <div
              className="bg-white p-[10px] relative w-[347px] -top-34"
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <Image
                src="/images/featured1.jpg"
                alt="featured image 1"
                width={327}
                height={490}
              />
            </div>
          </div>
          <div className="max-w-[61%] mx-4">
            <h2 className="text-2xl font-medium italic -mt-6 mb-6">
              The essential guide to high-end wedding planning for a luxurious
              experience
            </h2>
            <p
              className="nunito_font"
              style={{ wordSpacing: "6px", lineHeight: "28px" }}
            >
              Your wedding day will be one of the most important days of your
              life, together as a couple. Whether you are planning an intimate
              affair or a large-scale celebration fit for the pages of Vogue,
              the same considerations apply when planning a wedding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
