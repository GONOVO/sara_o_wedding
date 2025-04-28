import { IPerson } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

function Persons({ data, rev }: { data: IPerson; rev?: boolean }) {
  return (
    <section className="max-w-7xl mx-auto relative">
      <div
        className={`grid lg:grid-cols-2 grid-cols-1 ${rev && "lg:mt-0 mt-8"}`}
      >
        <div
          className={`relative w-full lg:h-auto h-[60vh] ${
            rev && "lg:order-1 order-0"
          }`}
        >
          <Image
            src={data.image}
            alt="image"
            fill
            className="object-cover -z-10"
          />
        </div>
        <div
          className={`flex flex-col gap-1 ${
            rev && "lg:order-0 order-1 lg:items-end"
          }`}
        >
          <h1
            className={`lg:mt-24 lg:text-9xl text-5xl lg:max-w-[570px] xl:max-w-[660px] max-w-[300px] lg:leading-[150px] font-extralight lg:-ms-[40px] lg:relative absolute -top-2 ${
              rev && "lg:text-end lg:-me-10 -mt-10 lg:mt-0"
            }`}
          >
            {data.name}
          </h1>
          <div className="lg:my-0 my-8">
            {data.desc.map((paragraph, index) => (
              <p
                className={`text-2xl text-extralight px-1 pb-4 ${
                  rev && "text-end lg:pe-4"
                }`}
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            className={`  ${
              rev ? "-me-[25%] w-[115%]" : "-ms-[25%] w-[125%]"
            } mb-8 lg:block hidden`}
          >
            <h2
              className={`text-xl sm:text-4xl italic  text-[#c1ada3]  text-center ${
                rev ? "lg:text-end " : "lg:text-start"
              }`}
              style={{ wordSpacing: "0.6rem" }}
            >
              &quot;{data.bio}
              &quot;
            </h2>
            <p
              className={`mt-4 tracking-[5px] text-sm ${
                rev && "text-end me-[21%]"
              }`}
            >
              {data.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Persons;
