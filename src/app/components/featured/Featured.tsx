import Image from "next/image";
import React from "react";
import styles from "./feature.module.css";
import HugeTitle from "../ui/hugetitle/HugeTitle";

function Featured() {
  return (
    <section className="max-w-[1280px] mx-auto overflow-hidden">
      <HugeTitle text="FEATURED" />

      <div className={`grid grid-cols-2 ${styles.res_grid}`}>
        <div className="grid lg:grid-cols-1 grid-cols-2 items-end">
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[390px]">
            <div className="absolute z-2 rotate-45  md:-right-[100px] -right-[40px] lg:bottom-0 sm:-bottom-10 -bottom-5">
              <div className="relative lg:w-[350px] lg:h-[350px] h-[200px] w-[200px] sm:h-[250px] sm:w-[250px]">
                <Image src="/svgs/shape.svg" alt="shape" fill />
              </div>
            </div>
            <Image
              src="/images/featured2.jpg"
              alt="featured image 2"
              fill
              className="object-bottom"
            />
          </div>

          <div
            className={`bg-white p-[20px] relative  -left-[50%] w-[150%]  md:-top-[13%] -top-[17%] z-3 lg:hidden `}
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          >
            <Image
              src="/images/featured1.JPG"
              alt="featured image 1"
              width={400}
              height={490}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className=" relative justify-end lg:flex hidden">
          <div className="flex-shrink-0 absolute -left-36">
            <div
              className={`bg-white p-[10px] relative w-[347px] -top-34 z-3 ${styles.top_image}`}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            >
              <Image
                src="/images/featured1.JPG"
                alt="featured image 1"
                width={327}
                height={490}
              />
            </div>
          </div>
          <div className="max-w-[61%] mx-4 text-[#262A2D]">
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
      <div className="w-[92%] mx-4 block lg:hidden text-[#262A2D]">
        <h2 className="text-4xl font-medium italic my-[2rem] text-center">
          The essential guide to high-end wedding planning for a luxurious
          experience
        </h2>
        <p
          className="nunito_font"
          style={{ wordSpacing: "6px", lineHeight: "28px" }}
        >
          Your wedding day will be one of the most important days of your life,
          together as a couple. Whether you are planning an intimate affair or a
          large-scale celebration fit for the pages of Vogue, the same
          considerations apply when planning a wedding.
        </p>
      </div>
    </section>
  );
}

export default Featured;
